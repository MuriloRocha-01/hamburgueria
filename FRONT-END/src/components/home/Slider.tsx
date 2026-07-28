import * as React from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import { PratosProps } from "@/src/interface/pratosInterface";
import { router } from "expo-router";
<<<<<<< HEAD
import { useContext } from "react";
import { PratosContext } from "@/src/context/pratosContext";

interface SliderProps {
  pratos: PratosProps[];
}

export default function Slider({ pratos }: SliderProps) {
  const { addCard } = useContext(PratosContext);

  function addItemCard(pratos:PratosProps){
    addCard(pratos);
  }
  return (
    <View className="w-full ">
      <Text className="text-white mb-3 px-9 text-2xl font-bold">Principais Produtos</Text>
=======

interface SliderProps {
  pratos: PratosProps[];
  addCard: (item: PratosProps) => void;
}

export default function Slider({ pratos, addCard }: SliderProps) {
  return (
    <View className="w-full my-4">
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
      <FlatList
        data={pratos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.cd_prato)}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => (
<<<<<<< HEAD
          <View className="border border-white/40 bg-white/20 rounded-[1.3rem] w-64 mr-4 flex-col justify-between">
=======
          <View className="border border-white/50 bg-white/20 rounded-[1.3rem] w-64 mr-4 flex-col justify-between">
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
            <Pressable
              className="w-full active:opacity-70"
              onPress={() =>
                router.push({
                  pathname: "/product/[cd_prato]",
                  params: { cd_prato: item.cd_prato, id: item.cd_prato },
                })
              }
            >

<<<<<<< HEAD
              <View className="w-full h-60">
=======
              <View className="w-full h-40">
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
                <Image
                  className="w-full rounded-t-[1.3rem] h-full"
                  source={{ uri: item.ds_imagem_url }}
                  resizeMode="cover"
                />
              </View>

              {/* Container com Padding apenas para os Textos */}
              <View className="px-3 pt-2">
                <Text className="text-white text-[1.2rem] font-bold">
                  {item.nm_prato}
                </Text>

                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  className="text-white/80 text-sm mt-1 mb-2"
                >
                  {item.ds_pratos}
                </Text>
              </View>
            </Pressable>

            {/* Bloco Inferior com Padding (Preço + Botão) */}
            <View className="w-full flex-row items-center justify-between mt-auto p-3 pt-2 border-t border-white/10">
              <Text className="flex-1 text-white text-[1.1rem] font-semibold">
                R$ {item.vl_preco}
              </Text>

              <Pressable
                className="py-2.5 px-3 rounded-[0.8rem] bg-white/80 active:bg-white items-center justify-center"
<<<<<<< HEAD
                onPress={() => addItemCard(item)}
=======
                onPress={() => addCard(item)}
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
              >
                <Text className="text-[#151417] font-bold text-center">
                  Adicionar
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}
