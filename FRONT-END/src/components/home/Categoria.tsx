import * as React from "react";
import { View, Text, Pressable, Image, ImageSourcePropType } from "react-native";
import { router } from "expo-router";

// 1. Tipagem das categorias
export interface CategoriaProps {
  id: string;
  nome: string;
  icone: ImageSourcePropType;
}

// 2. Lista com os ícones coloridos da hamburgueria (PNG com fundo transparente em assets/categorias)
const LISTA_CATEGORIAS: CategoriaProps[] = [
  { id: "1", nome: "Combos", icone: require("@/assets/categorias/combos.png") },
  { id: "2", nome: "Hambúrgueres Artesanais", icone: require("@/assets/categorias/hamburgueres.png") },
  { id: "3", nome: "Smash Burguers", icone: require("@/assets/categorias/smash.png") },
  { id: "4", nome: "Acompanhamentos", icone: require("@/assets/categorias/acompanhamentos.png") },
  { id: "5", nome: "Bebidas", icone: require("@/assets/categorias/bebidas.png") },
  { id: "6", nome: "Sobremesas", icone: require("@/assets/categorias/sobremesas.png") },
];

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

  return (
    <View className="w-full px-6 mt-4">

      {/* Grid utilizando .map() mantendo 3 colunas em todas as telas */}
      <View className="flex-row flex-wrap justify-around gap-y-4">
        {LISTA_CATEGORIAS.map((item) => (
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