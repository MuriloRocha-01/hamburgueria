import { api } from "../config/api";

export const usePratos = () => {
    const getAllPratos = async () => {
        try {
            const response = await api.get("/pratos");
            return response;
        }
        catch (error) {
            return console.error("Erro ao buscar pratos:", error);
            throw error;
        }
    }
    return { getAllPratos }
}