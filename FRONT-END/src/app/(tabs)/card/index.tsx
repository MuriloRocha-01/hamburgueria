import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { PratosContext } from "@/src/context/pratosContext";
import { Ionicons } from "@expo/vector-icons";

function Card() {
  const { cart, addCard, removeItemCard } = useContext(PratosContext);

  // Soma o total de todos os pratos no carrinho
  const totalCarrinho = cart.reduce((acc, item) => acc + item.total, 0);

  return (
    <View className="flex-1 bg-[#151417] p-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <View
              key={item.cd_prato}
              className="bg-white/10 p-3 rounded-2xl mb-3 flex-row items-center justify-between border border-white/10"
            >
              <Image
                source={{ uri: item.ds_imagem_url }}
                className="w-20 h-20 rounded-xl"
                resizeMode="cover"
              />

              <View className="flex-1 ml-3 justify-center">
                <Text className="text-white text-base font-bold" numberOfLines={1}>
                  {item.nm_prato}
                </Text>

                <Text className="text-white/60 text-xs my-1">
                  R$ {item.vl_preco}
                </Text>

                <Text className="text-white font-semibold text-sm">
                  Subtotal: R$ {Number(item.total || 0).toFixed(2)}
                </Text>
              </View>

              <View className="flex-row items-center bg-black/30 rounded-xl p-1 border border-white/10 ml-2">
                <TouchableOpacity
                  onPress={() => removeItemCard(item)}
                  className="w-8 h-8 rounded-lg bg-white/10 items-center justify-center active:bg-white/30"
                >
                  <Ionicons name="remove-outline" size={18} color="#ffffff" />
                </TouchableOpacity>

                <Text className="text-white font-bold mx-3 text-base">
                  {item.amount}
                </Text>

                <TouchableOpacity
                  onPress={() => addCard(item)}
                  className="w-8 h-8 rounded-lg bg-white/10 items-center justify-center active:bg-white/30"
                >
                  <Ionicons name="add-outline" size={18} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View className="justify-center items-center py-20">
            <Text className="text-white/90 text-base font-medium">
              Seu carrinho está vazio 🛒
            </Text>
          </View>
        )}
      </ScrollView>

      {cart.length > 0 && (
        <View className="border-t border-white/10 pt-4 mt-auto">
          <View className="flex-row justify-between items-center mb-4 px-2">
            <Text className="text-white/80 text-lg">Total do pedido:</Text>
            <Text className="text-white text-xl font-bold">
              R$ {Number(totalCarrinho || 0).toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity className="bg-white py-3.5 rounded-xl items-center active:opacity-80">
            <Text className="text-[#151417] font-bold text-base">
              Finalizar Pedido
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default Card;