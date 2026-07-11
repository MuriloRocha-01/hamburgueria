import { usePratos } from "./getPratos.hook";
import { useEffect, useState } from "react";

export const homeHook = () =>{
    const [AllPratos, setAllPratos] = useState([]);

    const { getAllPratos } = usePratos();
    
    useEffect(()=>{
        carregarPratos()
    }, [])

    const carregarPratos = async () =>{
        try {
            
            const dados = await getAllPratos();
            return console.log(dados.data)
        } catch (error) {
            return  console.log(error)
        }
    }
    return { carregarPratos };
}