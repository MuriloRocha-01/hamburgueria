import { PedidoRepository } from "../repositories/pedido.repositorie.js";
import { getIO } from "../sockets/socket.js";
import { SOCKET_EVENTS } from "../sockets/event.js";
import type { CriarPedidoPayload } from "../models/pedido.model.js";
 
export class PedidoService {
  private repository = new PedidoRepository();
 
  async criarPedido(dados: CriarPedidoPayload) {
    const pedido = await this.repository.criarPedido(dados);
 
    // só emite DEPOIS de confirmar que salvou no banco
    getIO().emit(SOCKET_EVENTS.PEDIDO_NOVO, pedido);
 
    return pedido;
  }
 
  async buscarItensPorPedido(cd_pedido: number) {
    return this.repository.buscarItensPorPedido(cd_pedido);
  }
 
  async atualizarStatus(cd_pedido: number, ds_status: string) {
    const pedido = await this.repository.AtualizarStatus(cd_pedido, ds_status);
 
    // só emite DEPOIS de confirmar que salvou no banco
    getIO().emit(SOCKET_EVENTS.PEDIDO_STATUS_ATUALIZADO, pedido);
 
    return pedido;
  }
}