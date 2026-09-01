import type { Request, Response } from "express";
import { PedidoService } from "../services/pedido.service.js";

export class PedidoController {

  private readonly service = new PedidoService();
  async criarPedido(req: Request, res: Response): Promise<Response> {
    try {
      const { cd_mesa, itens } = req.body;

      const itensNormalizados = itens.map((item: any) => ({
        cd_prato: item.cd_prato,
        quantidade: Number(item.quantidade ?? item.amount ?? 1),
        ds_observacao: item.ds_observacao,
      }));

      const pedido = await this.service.criarPedido({ cd_mesa, itens: itensNormalizados });
      return res.status(201).json(pedido);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao criar pedido", details: error.message });
    }
  }

  listarItensPorPedido = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const cd_Id = Number(id);
      const itens = await this.service.buscarItensPorPedido(cd_Id);
      return res.status(200).json(itens);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao buscar itens do pedido", details: error.message });
    }
  };

  async AtualizarStatus(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;    
      const {  ds_status } = req.body;

      const cd_Id = Number(id);
      const pedido = await this.service.atualizarStatus(cd_Id, ds_status);
      return res.status(201).json(pedido);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao atualizar status do pedido", details: error.message });
    }
  }
}