import * as React from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import { PratosProps } from "@/src/interface/pratosInterface";
import { router } from "expo-router";

interface SliderProps {
  pratos: PratosProps[];
  addCard: (item: PratosProps) => void;
}

export default function Slider({ pratos, addCard }: SliderProps) {
  return (
    <View className="w-full my-4">
      <FlatList
        data={pratos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.cd_prato)}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => (
          <View className="border border-white/50 bg-white/20 rounded-[1.3rem] w-64 mr-4 flex-col justify-between">
            <Pressable
              className="w-full active:opacity-70"
              onPress={() =>
                router.push({
                  pathname: "/product/[cd_prato]",
                  params: { cd_prato: item.cd_prato, id: item.cd_prato },
                })
              }
            >

              <View className="w-full h-40">
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
                onPress={() => addCard(item)}
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
