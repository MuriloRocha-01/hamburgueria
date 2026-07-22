import * as React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

// 1. Tipagem das categorias
export interface CategoriaProps {
  id: string;
  nome: string;
  iconName: string;
  iconFamily: "FontAwesome5" | "MaterialCommunityIcons" | "Ionicons";
}

// 2. Lista com os ícones da hamburgueria
const LISTA_CATEGORIAS: CategoriaProps[] = [
  { id: "1", nome: "Lanches", iconName: "hamburger", iconFamily: "FontAwesome5" },
  { id: "2", nome: "Porções", iconName: "french-fries", iconFamily: "MaterialCommunityIcons" },
  { id: "3", nome: "Bebidas", iconName: "bottle-soda", iconFamily: "MaterialCommunityIcons" },
  { id: "4", nome: "Sobremesas", iconName: "ice-cream", iconFamily: "MaterialCommunityIcons" },
  { id: "5", nome: "Combos", iconName: "flame-outline", iconFamily: "Ionicons" },
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

  return (
    <View className="w-full my-2">
      <FlatList
        data={LISTA_CATEGORIAS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24 }} // Mesmo alinhamento do seu slider de pratos
        renderItem={({ item }) => (
          <Pressable
            className="flex-row items-center gap-2.5 px-5 py-3.5 rounded-[1.2rem] mr-3 border bg-white/20 border-white active:bg-white/30"
          >
            {/* Ícone */}
            {renderIcon(item)}

            {/* Nome da Categoria */}
            <Text className="text-white font-bold text-sm">
              {item.nome}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}