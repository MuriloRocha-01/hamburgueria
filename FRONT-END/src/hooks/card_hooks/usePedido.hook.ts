import { api } from "@/src/config/api";

export const usePedido = () => {
    const postPedido = async (dados: { cd_mesa: number }) => {
        try {
            const response = await api.post("/pedido", dados);
            return response.data;
        }
        catch (error) {
            console.error("Erro ao buscar pratos:", error);
            throw error;
        }
    }
    return { postPedido }
}