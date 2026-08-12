import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

// 1. Tipagem das categorias
export interface CategoriaProps {
  id: string;
  nome: string;
  iconName: string;
  iconFamily: "FontAwesome5" | "MaterialCommunityIcons" | "Ionicons";
}

// 2. Lista com os ícones da hamburgueria
const LISTA_CATEGORIAS: CategoriaProps[] = [
  { id: "1", nome: "Combos", iconName: "flame-outline", iconFamily: "Ionicons" },
  { id: "2", nome: "Hambúrgueres Artesanais", iconName: "french-fries", iconFamily: "MaterialCommunityIcons" },
  { id: "3", nome: "Smash Burguers", iconName: "hamburger", iconFamily: "FontAwesome5" },
  { id: "4", nome: "Acompanhamentos", iconName: "flame-outline", iconFamily: "Ionicons" },
  { id: "5", nome: "Bebidas", iconName: "bottle-soda", iconFamily: "MaterialCommunityIcons" },
  { id: "6", nome: "Sobremesas", iconName: "ice-cream", iconFamily: "MaterialCommunityIcons" },
];

export default function CategoriasGridMap() {

  // Função auxiliar para renderizar o pacote de ícone correto
  const renderIcon = (item: CategoriaProps) => {
    const size = 28;
    const color = "#000000"; // Ícone preto para destacar no fundo branco/70

    switch (item.iconFamily) {
      case "FontAwesome5":
        return <FontAwesome5 name={item.iconName as any} size={size} color={color} />;
      case "MaterialCommunityIcons":
        return <MaterialCommunityIcons name={item.iconName as any} size={size} color={color} />;
      case "Ionicons":
        return <Ionicons name={item.iconName as any} size={size} color={color} />;
      default:
        return null;
    }
  };

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
            <View className="w-full max-w-[90px] aspect-square bg-white/70 rounded-[1.5rem] items-center justify-center border border-white/50 active:bg-white/90 mb-2">
              {renderIcon(item)}
            </View>

            <Text className="text-white font-medium text-xs text-center" numberOfLines={1}>
              {item.nome}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}