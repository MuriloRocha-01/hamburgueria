import { poolPromise } from "../config/database.js";
import type { Pedido } from "../models/pedido.model.ts";

export class PedidoRepository {
  async criarPedido(cd_mesa: number): Promise<Pedido> {
    const pool = await poolPromise;

    if (!pool) throw new Error("❌ Conexão com o banco de dados não estabelecida");

    const result = await pool.query(
      `INSERT INTO pedido (cd_mesa, ds_status) VALUES ($1, $2) RETURNING *`,
      [cd_mesa, 'recebido']
    );
    return result.rows[0];
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