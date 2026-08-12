import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { PratosProps } from "@/src/interface/pratosInterface";
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "@/src/components/spinners";

export default function CategoriaPage() {
  const { cd_categoria, nome } = useLocalSearchParams<{ cd_categoria: string; nome: string }>();
  const [pratos, setPratos] = useState<PratosProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { getAllPratos } = usePratos();

  useEffect(() => {
    async function carregarPratosPorCategoria() {
      setLoading(true);
      try {
        const todosOsPratos = await getAllPratos();

        const pratosFiltrados = todosOsPratos.filter(
        (prato: PratosProps) => String(prato.cd_categoria) === String(cd_categoria)
        );

        setPratos(pratosFiltrados);
      } catch (error) {
        console.log("Erro ao carregar pratos da categoria:", error);
      } finally {
        setLoading(false);
      }
    }

    if (cd_categoria) {
      carregarPratosPorCategoria();
    }
  }, [cd_categoria]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <CarregamentoSimples />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#151417] p-4">
      <Text className="text-white text-2xl font-bold mb-4 mt-2">
        {nome}
      </Text>

      {pratos.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-400 text-base">
            Nenhum prato encontrado nesta categoria.
          </Text>
        </View>
      ) : (
        <FlatList
          data={pratos}
          keyExtractor={(item) => String(item.cd_prato)}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 12 }}
          renderItem={({ item }) => (
            <Pressable
              className="bg-white/10 border border-white/20 rounded-2xl p-2 items-center w-[31%] active:opacity-70"
              onPress={() =>
                router.push({
                  pathname: "/product/[cd_prato]",
                  params: { cd_prato: item.cd_prato, id: item.cd_prato },
                })
              }
            >
              <Image
                source={{ uri: item.ds_imagem_url }}
                className="w-full aspect-square rounded-xl"
                resizeMode="cover"
              />

              <View className="w-full mt-2 items-center">
                <Text
                  className="text-white font-bold text-xs text-center"
                  numberOfLines={1}
                >
                  {item.nm_prato}
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  className="text-gray-400 text-[10px] text-center mt-1"
                >
                  {item.ds_pratos}
                </Text>
                <Text className="text-red-500 font-semibold text-xs mt-2">
                  R$ {item.vl_preco}
                </Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}