import { poolPromise } from "../config/database.js";
import type { CriarPedidoPayload, ItemPedidoDetalhado, Pedido } from "../models/pedido.model.ts";

export class PedidoRepository {
  async criarPedido(dados: CriarPedidoPayload): Promise<Pedido> {
    const pool = await poolPromise;

    if (!pool) throw new Error("❌ Conexão com o banco de dados não estabelecida");
    
    const result = await pool.query(
      `INSERT INTO pedido (cd_mesa, ds_status) VALUES ($1, $2) RETURNING *`,
        [Number(dados.cd_mesa), "recebido"]
    );
    const novoPedido = result.rows[0];

    for (const item of dados.itens) {
        await pool.query(
          `INSERT INTO item_pedido (cd_pedido, cd_prato, qt_item_pedido, ds_observacao)
           VALUES ($1, $2, $3, $4)`,
          [novoPedido.cd_pedido, item.cd_prato,item.quantidade, item.ds_observacao ?? null]
        );
      }

      return novoPedido;
  }

  async buscarItensPorPedido(cd_pedido: number): Promise<ItemPedidoDetalhado[]> {
    const pool = await poolPromise;
    if (!pool) throw new Error("❌ Conexão com o banco de dados não estabelecida");
 
    const result = await pool.query<ItemPedidoDetalhado>(
      `SELECT
         ip.cd_item_pedido,
         ip.cd_pedido,
         ip.cd_prato,
         ip.qt_item_pedido,
         ip.ds_observacao,
         p.nm_prato,
         p.vl_preco
       FROM item_pedido ip
       JOIN pratos p ON p.cd_prato = ip.cd_prato
       WHERE ip.cd_pedido = $1
       ORDER BY ip.cd_item_pedido`,
      [Number(cd_pedido)]
    );
 
    return result.rows;
  }

  async AtualizarStatus(cd_pedido: number, ds_status: string): Promise<Pedido> {
    const pool = await poolPromise;

    if (!pool) throw new Error("❌ Conexão com o banco de dados não estabelecida");

    const result = await pool.query(
      `UPDATE pedido SET ds_status = $2 WHERE cd_pedido = $1 RETURNING *`,
      [cd_pedido, ds_status]
    );
    return result.rows[0];
  }
  
}