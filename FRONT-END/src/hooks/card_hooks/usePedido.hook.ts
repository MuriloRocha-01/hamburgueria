import { api } from "@/src/config/api";
 
interface ItemPedidoPayload {
  cd_prato: number;
  quantidade: number;
  ds_observacao?: string;
}
 
interface PostPedidoPayload {
  cd_mesa: number;
  itens: ItemPedidoPayload[];
}
 
export const usePedido = () => {
  const postPedido = async (dados: PostPedidoPayload) => {
    try {
      const response = await api.post("/pedido", dados);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      throw error;
    }
  };
 
  return { postPedido };
};
 