import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
import { useLocalSearchParams } from "expo-router";
import { PratosProps } from "@/src/interface/pratosInterface";
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "@/src/components/spinners";
<<<<<<< HEAD
import { PratosContext } from "@/src/context/pratosContext";
import { Ionicons } from "@expo/vector-icons";
=======
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97

function Product() {
  const [prato, setPrato] = useState<PratosProps | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useLocalSearchParams();
  const id = params.id as string;
  const { getAllPratos } = usePratos();
<<<<<<< HEAD
  const { cart, removeItemCard, addCard } = useContext(PratosContext);
  //Verifica se o carrinho esta no indexAtual
  const itemNoCarrinho = cart.find((item) => item.cd_prato === prato?.cd_prato);
  //Adiciona o item ao carrinho
  function addItemCard(pratos: PratosProps) {
    addCard(pratos);
  }
  //tras o Prato especifico
=======

>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
  useEffect(() => {
    async function getPrato() {
      setLoading(true);
      try {
        const todosOsPratos = await getAllPratos();

        const pratoEncontrado = todosOsPratos.find(
<<<<<<< HEAD
          (item: PratosProps) => String(item.cd_prato) === String(id),
=======
          (item: PratosProps) => String(item.cd_prato) === String(id)
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
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
    <ScrollView className=" bg-[#151417] flex-1">
      <Image
        source={{
<<<<<<< HEAD
          uri: prato.ds_imagem_url,
=======
          uri: prato.ds_imagem_url || "https://via.placeholder.com/400x300",
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
        }}
        className="lg:w-90 w-full  h-72 object-cover rounded-xl"
      />

      <View className="p-3  gap-4">
<<<<<<< HEAD
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
        <View>
          {itemNoCarrinho ? (
            <View className="flex-row items-center justify-between bg-red-500 py-2 px-4 rounded-xl shadow-lg">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => removeItemCard(itemNoCarrinho)}
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
                onPress={() => addCard(prato)}
                className="w-10 h-10 bg-white/20 rounded-lg items-center justify-center"
              >
                <Ionicons name="add" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-red-500 py-4 rounded-xl items-center mt-6 shadow-lg"
              onPress={() => addItemCard(prato)}
            >
              <Text className="text-white font-bold text-base">
                Adicionar ao Carrinho
              </Text>
            </TouchableOpacity>
          )}
        </View>
=======

          <Text className="text-white text-2xl font-bold">
          {prato.nm_prato}
        </Text>
          <View className="gap-1 mt-2">
            <Text className="text-gray-400 font-semibold text-sm">
              Descrição
            </Text>
            <Text className="text-gray-300 text-base leading-relaxed">
              {prato.ds_pratos}
            </Text>
          </View>
        
          <Text className="text-red-500 text-xl font-semibold">
            R$ {prato.vl_preco} 
          </Text>
       

        <TouchableOpacity 
          activeOpacity={0.8}
          className="bg-red-500 py-4 rounded-xl items-center mt-6 shadow-lg"
          onPress={() => console.log("Adicionar prato:", prato.cd_prato)}
        >
          <Text className="text-white font-bold text-base">
            Adicionar ao Carrinho
          </Text>
        </TouchableOpacity>
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
      </View>
    </ScrollView>
  );
}

<<<<<<< HEAD
export default Product;
=======
export default Product;
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
