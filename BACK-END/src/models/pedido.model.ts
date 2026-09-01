export interface Pedido {
  cd_pedido: number;
  cd_mesa: number;
  ds_status: string;
  dt_criacao: string;
}
 
export interface ItemPedido {
  cd_item_pedido: number;
  cd_prato: number;
  cd_pedido: number;
  qt_item_pedido: number;
  ds_observacao?: string;
}
 
// Payload que vem do front-end
export interface CriarItemPayload {
  cd_prato: number;
  quantidade: number;
  ds_observacao?: string;
}
 
export interface CriarPedidoPayload {
  cd_mesa: number;
  itens: CriarItemPayload[];
}
 
export interface ItemPedidoDetalhado {
  cd_item_pedido: number;
  cd_pedido: number;
  cd_prato: number;
  qt_item_pedido: number;
  ds_observacao?: string;
  nm_prato: string;
  vl_preco: number;
}