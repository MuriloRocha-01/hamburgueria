import { api } from "@/src/config/api";

export const usePratos = () => {
    const getAllPratos = async () => {
        try {
            const response = await api.get("/pratos");
            return response.data;
        }
        catch (error) {
            console.error("Erro ao buscar pratos:", error);
            throw error;
        }
    }
    return { getAllPratos }
}