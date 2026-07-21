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
        contentContainerStyle={{ paddingHorizontal: 24 }} // Espaçamento nas pontas
        renderItem={({ item }) => (
          <View className="p-3 border bg-white/20 rounded-[1.2rem] border-white w-64 mr-4 gap-3 items-center justify-between">
            <Pressable
              className="w-full"
              onPress={() =>
                router.push({
                  pathname: "/(auth)/(tabs)/product/[cd_prato]",
                  params: {
                    id: item.cd_prato,
                  },
                })
              }
            >
              <View className="w-full h-40">
                <Image
                  className="w-full h-full rounded-lg"
                  source={{ uri: item.ds_imagem_url }}
                  resizeMode="cover"
                />
              </View>

              <Text 
                className="text-white text-[1.2rem] font-bold mt-2" 
              >
                {item.nm_prato}
              </Text>

              <Text className="text-white/80 font-medium">
                R$ {item.vl_preco}
              </Text>
            </Pressable>

            <Pressable
              className="py-2.5 w-full rounded-[1.2rem] bg-white active:bg-gray-200 items-center justify-center"
              onPress={() => addCard(item)}
            >
              <Text className="text-[#151417] font-bold text-center">
                Adicionar ao carrinho
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}