import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { PratosProps } from "@/src/interface/pratosInterface";
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "@/src/components/spinners";
import { PratosContext } from "@/src/context/pratosContext/pratosContext";
import { Ionicons } from "@expo/vector-icons";

function Product() {
  const [prato, setPrato] = useState<PratosProps | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useLocalSearchParams();
  const id = params.id as string;

  const { getAllPratos } = usePratos();
  const { cart, removeItemCart, addCart } = useContext(PratosContext);

  // Verifica se o prato atual já está no carrinho
  const itemNoCarrinho = cart.find((item) => item.cd_prato === prato?.cd_prato);

  
  useEffect(() => {
    async function getPrato() {
      setLoading(true);
      try {
        const todosOsPratos = await getAllPratos();

        const pratoEncontrado = todosOsPratos.find(
          (item: PratosProps) => String(item.cd_prato) === String(id)
        );

        if (pratoEncontrado) {
          setPrato(pratoEncontrado);
        } else {
          console.log("Prato não encontrado");
        }
      } catch (error) {
        console.log("Erro ao buscar detalhes do prato:", error);
      } finally {
        setLoading(false);
      }
    }
    getPrato();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 bg-[#151417] items-center justify-center">
        <CarregamentoSimples />
      </View>
    );
  }

  if (!prato) {
    return (
      <View className="flex-1 bg-[#151417] items-center justify-center p-4">
        <Text className="text-white text-lg font-bold">
          Lanche não encontrado!
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="bg-[#151417] flex-1">
      <Image
        source={{
          uri: prato.ds_imagem_url ,
        }}
        className="flex items-center justify-center w-full h-80 object-cover rounded-b-lg"
      />

      <View className="p-3 gap-4">
        <Text className="text-white text-2xl font-bold">{prato.nm_prato}</Text>
        
        <View className="gap-1 mt-2">
          <Text className="text-gray-400 font-semibold text-sm">Descrição</Text>
          <Text className="text-gray-300 text-base leading-relaxed">
            {prato.ds_pratos}
          </Text>
        </View>

        <Text className="text-red-500 text-xl font-semibold">
          R$ {prato.vl_preco}
        </Text>

        <View className="mt-4">
          {itemNoCarrinho ? (
            <View className="flex-row items-center justify-between bg-red-500 py-2 px-4 rounded-xl shadow-lg">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => removeItemCart(itemNoCarrinho)}
                className="w-10 h-10 bg-white/20 rounded-lg items-center justify-center"
              >
                <Ionicons name="remove" size={20} color="#FFFFFF" />
              </TouchableOpacity>

              <View className="items-center">
                <Text className="text-white font-bold text-base">
                  {itemNoCarrinho.amount} no carrinho
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => addCart(prato)}
                className="w-10 h-10 bg-white/20 rounded-lg items-center justify-center"
              >
                <Ionicons name="add" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-red-500 py-4 rounded-xl items-center shadow-lg"
              onPress={() => addCart(prato)}
            >
              <Text className="text-white font-bold text-base">
                Adicionar ao Carrinho
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

export default Product;