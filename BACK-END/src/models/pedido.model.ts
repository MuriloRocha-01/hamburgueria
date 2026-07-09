export interface Pedido{
    cd_pedido:number;
    cd_mesa:number;
    ds_status:string;
    dt_criacao:string;
}

export interface ItemPedido{
    cd_item_pedido:number;
    cd_prato:number;
    cd_pedido:number;
    qt_item_pedido:number;
    ds_observacao?:string;
}

