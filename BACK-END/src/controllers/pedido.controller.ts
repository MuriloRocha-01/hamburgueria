import type { Request, Response } from "express";
import { PedidoService } from "../services/pedido.service.js";

export class PedidoController {
  async criarPedido(req: Request, res: Response): Promise<Response> {
    try {
      const { cd_mesa } = req.body;

      const cd_mesaN  = Number(cd_mesa)
      const service = new PedidoService();
      const pedido = await service.criarPedido(cd_mesaN);
      return res.status(201).json(pedido);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao criar pedido", details: error.message });
    }
  }
  async StatusAtualizar(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;    
      const {  ds_status } = req.body;

      const cd_pedidoN = Number(id);
      const service = new PedidoService();
      const pedido = await service.StatusAtualizar(cd_pedidoN, ds_status);
      return res.status(201).json(pedido);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao criar pedido", details: error.message });
    }
  }
}