import { ScrollView, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { PratosProps } from "@/src/interface/pratosInterface";
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "@/src/components/spinners";


function Product(){
    const [prato, setPrato] = useState<PratosProps | null>(null);
    const [loading, setLoading] = useState(true);
    const params = useLocalSearchParams();
    const id = params.id as string;
    const { getAllPratos } = usePratos();

    useEffect(()=>{
    async function getPrato(){
        setLoading(true)
        try {
        const todosOsPratos = await getAllPratos();

        // 2. Procura no array o prato com o id correspondente
        const pratoEncontrado = todosOsPratos.find(
          (item: PratosProps) => String(item.cd_prato) === String(id)
        );
        
        if (pratoEncontrado) {
          setPrato(pratoEncontrado);
        } else {
          console.log("Prato não encontrado");
        }
      } catch (error) {
        console.log("Erro ao buscar detalhes do prato:", error);
      } finally {
        setLoading(false);
      }
    }
    getPrato();
    },[])

    

    return(
        
    <ScrollView className="bg-[#151417] flex-1">
      <View className="w-full">
        {loading ? (
          <CarregamentoSimples />
        ) : (
          <Text>
            {prato?.nm_prato}
          </Text>
        )}
      </View>
    </ScrollView>
    )

}

export default Product;