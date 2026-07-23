import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { PratosProps } from "@/src/interface/pratosInterface";
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "@/src/components/spinners";

function Product() {
  const [prato, setPrato] = useState<PratosProps | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useLocalSearchParams();
  const id = params.id as string;
  const { getAllPratos } = usePratos();

  useEffect(() => {
    async function getPrato() {
      setLoading(true);
      try {
        const todosOsPratos = await getAllPratos();

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
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 bg-[#151417] items-center justify-center">
        <CarregamentoSimples />
      </View>
    );
  }

  if (!prato) {
    return (
      <View className="flex-1 bg-[#151417] items-center justify-center p-4">
        <Text className="text-white text-lg font-bold">
          Lanche não encontrado!
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className=" bg-[#151417] flex-1">
      <Image
        source={{
          uri: prato.ds_imagem_url || "https://via.placeholder.com/400x300",
        }}
        className="lg:w-90 w-full  h-72 object-cover rounded-xl"
      />

      <View className="p-3  gap-4">

          <Text className="text-white text-2xl font-bold">
          {prato.nm_prato}
        </Text>
          <View className="gap-1 mt-2">
            <Text className="text-gray-400 font-semibold text-sm">
              Descrição
            </Text>
            <Text className="text-gray-300 text-base leading-relaxed">
              {prato.ds_pratos}
            </Text>
          </View>
        
          <Text className="text-red-500 text-xl font-semibold">
            R$ {prato.vl_preco} 
          </Text>
       

        <TouchableOpacity 
          activeOpacity={0.8}
          className="bg-red-500 py-4 rounded-xl items-center mt-6 shadow-lg"
          onPress={() => console.log("Adicionar prato:", prato.cd_prato)}
        >
          <Text className="text-white font-bold text-base">
            Adicionar ao Carrinho
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Product;