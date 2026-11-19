import * as React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { router } from "expo-router";
import { CATEGORIAS, type CategoriaProps } from "@/src/data/categorias";

export default function CategoriasGridMap() {

  const renderIcon = (item: CategoriaProps) => (
    <Image source={item.icone} style={{ width: "72%", height: "72%" }} resizeMode="contain" />
  );

const handleSelectCategoria = (item: CategoriaProps) => {
  router.push({
    pathname: "/categorias/[cd_categoria]",
    params: { 
      cd_categoria: item.id, 
      nome: item.nome 
    },
  });
};

  // em telas largas o menu lateral fixo já lista as categorias, então esta grade só aparece no celular (md:hidden)
  return (
    <View className="w-full px-6 mt-4 md:hidden">

      {/* Grid utilizando .map() mantendo 3 colunas em todas as telas */}
      <View className="flex-row flex-wrap justify-around gap-y-4">
        {CATEGORIAS.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => handleSelectCategoria(item)}
            className="items-center w-[28%]"
          >
            <View className="w-full max-w-[90px] aspect-square bg-cartao rounded-[1.5rem] items-center justify-center border border-linha shadow-sm active:bg-vermelho-claro mb-2">
              {renderIcon(item)}
            </View>

            <Text className="text-tinta font-medium text-xs text-center" numberOfLines={1}>
              {item.nome}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}