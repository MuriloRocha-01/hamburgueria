import * as React from "react";
import { View, Dimensions, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useHome } from "@/src/home/usehome.hook";
import { useEffect, useState } from "react";

const { width: screenWidth } = Dimensions.get("window");

export default function ListaCubinhosRetos() {  
  const { carregarPratos } = useHome();
  const [pratos, setPratos] = useState([]);
  
  useEffect(()=>{
    async function buscarDados(){
    try {
      
      const dados = await carregarPratos();
      setPratos(dados)
    } catch (error) {
      console.log(error)      
    }finally{
     
    }
  }
    buscarDados();
  })

  
  const dados = [
    { id: "1", cor: "#FF5733" },
    { id: "2", cor: "#33FF57" },
    { id: "3", cor: "#3357FF" },
    { id: "4", cor: "#F0B27A" },
    { id: "5", cor: "#8E44AD" },
  ];

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      {pratos.map((item:any)=>{
        return(
          <>
          <Text>
            {item.ds_descricao}</Text></>
        )
      })}
      <Text>Categorias</Text>
      <Carousel
        // Loop ativado para o scroll infinito funcionar
        loop
        
        // Estica o container do carrossel na largura da tela para os lados não sumirem
        style={{ width: screenWidth, justifyContent: "center" }}
        
        // ✅ O tamanho exato de cada cubinho
        width={130} 
        height={120}
        
        data={dados}
        autoPlay={false}
        windowSize={3} 
        
        renderItem={({ item }) => (
          // ✅ 3. Usamos "px-2" (padding horizontal) para desgrudar um cubinho do outro.
          // O container interno (bg-transparent) ocupa o tamanho total de 130px, 
          // mas o cubinho colorido encolhe um pouco por causa do padding, criando o espaçamento.
          <View className="flex-1 bg-transparent px-2">
            <View 
              className="w-full h-full rounded-2xl elevation-sm shadow-md" 
              style={{ backgroundColor: item.cor }} 
            />
          </View>
        )}
      />

    </View>
  );
}