import * as React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useEffect, useState, useContext } from "react";
import { PratosProps } from "@/src/interface/pratosInterface";
import { PratosContext } from "@/src/context/pratosContext";
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "../../../components/spinners/index";
import { useLocalSearchParams, router } from "expo-router";

export default function ListaCubinhosRetos() {
  const { getAllPratos } = usePratos();
  const { savePratos } = useContext(PratosContext);
  const [pratos, setPratos] = useState<PratosProps[]>([]);
  const [loading, setLoading] = useState(false);

  function addCard() {}

  
  useEffect(() => {
    async function buscarDados() {
      setLoading(true);
      try {
        const dados = await getAllPratos();
        setPratos(dados);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    buscarDados();
  }, []);

  return (
    <ScrollView className="bg-[#151417]">
      <View className="w-full items-center">
        {loading ? (
          <CarregamentoSimples />
        ) : (
          <View className="px-8 lg:px-40 flex-row flex-wrap justify-between w-full">
            {pratos.map((item: PratosProps) => (
              <View
                key={item.cd_prato}
                className="p-[2%] border bg-white/20 rounded-[1.2rem] border-white w-[42%] h-120 mt-10 gap-3 items-center justify-center "
              >
                <Pressable
                className="w-full" 
                onPress={() => router.push({
                  pathname:'/(auth)/(tabs)/product/[cd_prato]',
                  params:{
                    id:item.cd_prato
                  },
                })} >
                  <View className="w-full h-40 lg:h-80">
                    <Image
                      className="w-full h-full rounded-lg"
                      source={{ uri: item.ds_imagem_url }}
                    ></Image>
                  </View>
                  <Text className="text-white text-[1.3rem] md:text-[1.4rem] font-bold text-start">
                    {item.nm_prato}
                  </Text>
                  <Text className="text-white text-start text-">
                    {item.vl_preco} R$
                  </Text>
                </Pressable>
                <Pressable
                  className="py-2 w-full font-bold flex items-center text-center justify-center rounded-[1.2rem] bg-white"
                  onPress={addCard}
                >
                  Adicionar ao carrinho
                </Pressable>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
