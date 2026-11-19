import * as React from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import { router, usePathname, useGlobalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import cores from "@/src/theme/cores";
import { CATEGORIAS } from "@/src/data/categorias";

/** Uma linha do menu: ícone, nome e destaque vermelho quando é a tela aberta. */
function ItemMenu({ rotulo, ativo, onPress, children }: {
  rotulo: string;
  ativo: boolean;
  onPress: () => void;
  children: React.ReactNode;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: ativo }}
      className={`flex-row items-center gap-3 rounded-xl px-3 py-2.5 ${ativo ? "bg-vermelho-claro" : "active:bg-fundo"}`}
    >
      <View className="w-9 h-9 items-center justify-center">{children}</View>
      <Text
        numberOfLines={2}
        className={`flex-1 text-base ${ativo ? "text-vermelho-escuro font-bold" : "text-tinta font-medium"}`}
      >
        {rotulo}
      </Text>
    </Pressable>
  );
}

/**
 * Menu lateral do cardápio: "Início" e as categorias.
 * Em telas largas fica fixo e sempre aberto; no celular é a aba que abre e fecha (ver (tabs)/_layout.tsx).
 * Clicar numa categoria abre a lista de pratos daquele grupo.
 */
export default function CategoriasMenu({ navigation }: DrawerContentComponentProps) {
  const pathname = usePathname();
  const { cd_categoria } = useGlobalSearchParams<{ cd_categoria?: string }>();
  const naHome = pathname === "/home";
  const naCategoria = pathname.startsWith("/categorias");

  // fecha a aba depois de escolher (no menu fixo, esta chamada não faz nada)
  const abrir = (ir: () => void) => {
    ir();
    navigation.closeDrawer();
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-cartao">
      <View className="px-5 pt-5 pb-3">
        <Text className="text-vermelho text-2xl font-spicy tracking-wider">Braza Burguer</Text>
        <Text className="text-suave text-sm mt-1">Escolha uma categoria</Text>
      </View>

      <ScrollView className="flex-1 px-3" showsVerticalScrollIndicator={false}>
        <ItemMenu rotulo="Início" ativo={naHome} onPress={() => abrir(() => router.push("/home"))}>
          <Ionicons name="home-outline" size={26} color={naHome ? cores.vermelho.escuro : cores.tinta} />
        </ItemMenu>

        <Text className="text-suave text-xs font-bold uppercase tracking-widest px-3 mt-5 mb-2">Categorias</Text>

        {CATEGORIAS.map((categoria) => (
          <ItemMenu
            key={categoria.id}
            rotulo={categoria.nome}
            ativo={naCategoria && String(cd_categoria) === categoria.id}
            onPress={() =>
              abrir(() =>
                router.push({
                  pathname: "/categorias/[cd_categoria]",
                  params: { cd_categoria: categoria.id, nome: categoria.nome },
                }),
              )
            }
          >
            <Image source={categoria.icone} style={{ width: 32, height: 32 }} resizeMode="contain" />
          </ItemMenu>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
