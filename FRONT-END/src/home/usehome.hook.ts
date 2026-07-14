import { usePratos } from "./usePratos.hook";

export const useHome = () =>{

    const { getAllPratos } = usePratos();

    const carregarPratos = async () =>{
        try {
            
            const dados = await getAllPratos();
            return dados.data;
        } catch (error) {
            console.log(error)
        }
    }
    return { carregarPratos };
}