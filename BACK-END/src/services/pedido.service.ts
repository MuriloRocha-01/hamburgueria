
import { PedidoRepository } from "../repositories/pedido.repositorie.js";
import { getIO } from "../sockets/socket.js";
import { SOCKET_EVENTS } from "../sockets/event.js";

export class PedidoService {
  private repository = new PedidoRepository();

  async criarPedido(cd_mesa: number) {
    const pedido = await this.repository.criarPedido(cd_mesa);

    // só emite DEPOIS de confirmar que salvou no banco
    getIO().emit(SOCKET_EVENTS.PEDIDO_NOVO, pedido);

    return pedido;
  }
  async StatusAtualizar(cd_pedido: number, ds_status: string) {
    const pedido = await this.repository.AtualizarStatus(cd_pedido, ds_status);

    // só emite DEPOIS de confirmar que salvou no banco
    getIO().emit(SOCKET_EVENTS.PEDIDO_STATUS_ATUALIZADO, pedido);
    
    return pedido;
  }
}

