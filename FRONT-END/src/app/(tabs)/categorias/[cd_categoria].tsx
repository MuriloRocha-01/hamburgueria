import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { PratosProps } from "@/src/interface/pratosInterface";
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "@/src/components/spinners";

export default function CategoriaPage() {
  const { id, nome } = useLocalSearchParams<{ id: string; nome: string }>();
  const [pratos, setPratos] = useState<PratosProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { getAllPratos } = usePratos();

  useEffect(() => {
    async function carregarPratosPorCategoria() {
      setLoading(true);
      try {
        const todosOsPratos = await getAllPratos();
        
        const pratosFiltrados = todosOsPratos.filter(
        (prato: PratosProps) => String(prato.cd_categoria) === String(id)
        );

        setPratos(pratosFiltrados);
      } catch (error) {
        console.log("Erro ao carregar pratos da categoria:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      carregarPratosPorCategoria();
    }
  }, [id]);

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
          renderItem={({ item }) => (
            <Pressable
              className="bg-white/10 border border-white/20 rounded-2xl p-3 mb-3 flex-row items-center active:opacity-70"
              onPress={() =>
                router.push({
                  pathname: "/product/[cd_prato]",
                  params: { cd_prato: item.cd_prato, id: item.cd_prato },
                })
              }
            >
              {/* Imagem */}
              <Image
                source={{ uri: item.ds_imagem_url}}
                className="w-20 h-20 rounded-xl"
                resizeMode="cover"
              />

              {/* Informações */}
              <View className="flex-1 ml-3 justify-center">
                <Text className="text-white font-bold text-base">
                  {item.nm_prato}
                </Text>
                <Text 
                  numberOfLines={2} 
                  ellipsizeMode="tail" 
                  className="text-gray-400 text-xs mt-1"
                >
                  {item.ds_pratos }
                </Text>
                <Text className="text-emerald-400 font-semibold text-sm mt-2">
                  R$ {item.vl_preco }
                </Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}