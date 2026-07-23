import * as React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
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
  { id: "2", nome: "Hamburgúrgues Artesanais", iconName: "french-fries", iconFamily: "MaterialCommunityIcons" },
  { id: "3", nome: "Smash Burguers", iconName: "hamburger", iconFamily: "FontAwesome5" },
  { id: "4", nome: "Acompanhamentos", iconName: "flame-outline", iconFamily: "Ionicons"},
  { id: "5", nome: "Bebidas", iconName: "bottle-soda", iconFamily: "MaterialCommunityIcons" },
  { id: "6", nome: "Sobremesas", iconName: "ice-cream", iconFamily: "MaterialCommunityIcons" },
];

export default function CategoriasSlider() {

  // Função auxiliar para renderizar o pacote de ícone correto
  const renderIcon = (item: CategoriaProps) => {
    const size = 22;
    const color = "#FFFFFF"; // Ícones sempre brancos

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
      pathname: "/categorias/[cd_categoria]", // Caminho da rota dinâmica
      params: { 
        id: item.id, 
        nome: item.nome 
      },
    });
  };

  return (
    <View className="w-full ">
      <FlatList
        data={LISTA_CATEGORIAS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24 }} 
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleSelectCategoria(item)}
            className="flex-row items-center gap-4 px-5 py-3.5 rounded-[1.1rem] mr-3 border bg-white/20 border-white/50 active:bg-white/30"
          >
            {renderIcon(item)}

            <Text className="text-white font-bold text-sm">
              {item.nome}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}