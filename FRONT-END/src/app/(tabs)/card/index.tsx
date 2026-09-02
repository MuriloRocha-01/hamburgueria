import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PratosContext } from "@/src/context/pratosContext/pratosContext";
import { TableContext } from "@/src/context/mesaContext/tableContext";
import { usePedido } from "@/src/hooks/card_hooks/usePedido.hook";
import { Ionicons } from "@expo/vector-icons";
import { clear } from "node:console";

type FeedbackModal = {
  visible: boolean;
  type: "success" | "error";
  title: string;
  message: string;
};

function Card() {
  const { cart, addCart, removeItemCart, clearCart } = useContext(PratosContext);
  const { cdMesa } = useContext(TableContext);
  const { postPedido } = usePedido();

  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackModal>({
    visible: false,
    type: "success",
    title: "",
    message: "",
  });

  const totalCarrinho = cart.reduce((acc, item) => acc + Number(item.total), 0);

  const mostrarFeedback = (type: "success" | "error", title: string, message: string) => {
    setFeedback({ visible: true, type, title, message });
  };

  const finalizarPedido = async () => {
    if (!cdMesa) {
      setModalVisible(false);
      mostrarFeedback(
        "error",
        "Erro",
        "Número da mesa não identificado. Por favor, escaneie o QR Code novamente."
      );
      return;
    }

    try {
      setLoading(true);

      await postPedido({
        cd_mesa: cdMesa,
        itens: cart.map((item) => ({
          cd_prato: item.cd_prato,
          quantidade: item.amount,
        })),
      });

      setModalVisible(false);
      mostrarFeedback("success", "Sucesso!", "Seu pedido foi enviado para a cozinha.");
      
      clearCart(); // Limpa o carrinho após finalizar o pedido com sucesso
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      setModalVisible(false);
      mostrarFeedback("error", "Erro", "Não foi possível finalizar o pedido. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView edges={["bottom"]} className="flex-1 bg-[#151417] p-4">
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
                <Text
                  className="text-white text-base font-bold"
                  numberOfLines={1}
                >
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
                  onPress={() => removeItemCart(item)}
                  className="w-8 h-8 rounded-lg bg-white/10 items-center justify-center active:bg-white/30"
                >
                  <Ionicons name="remove-outline" size={18} color="#ffffff" />
                </TouchableOpacity>

                <Text className="text-white font-bold mx-3 text-base">
                  {item.amount}
                </Text>

                <TouchableOpacity
                  onPress={() => addCart(item)}
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

          <View>
            {/* Botão que aciona a abertura do modal de confirmação */}
            <TouchableOpacity
              className="bg-white py-3.5 rounded-xl items-center active:opacity-80"
              onPress={() => setModalVisible(true)}
            >
              <Text className="text-[#151417] font-bold text-base">
                Finalizar Pedido
              </Text>
            </TouchableOpacity>

            {/* Modal de confirmação */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View className="flex-1 bg-black/50 justify-center items-center px-6">
                <View className="bg-white w-full rounded-2xl p-6 items-center shadow-lg">
                  <Text className="text-xl font-bold text-[#151417] mb-2">
                    Confirmar Pedido
                  </Text>

                  <Text className="text-gray-600 text-center mb-6">
                    Deseja realmente finalizar o seu pedido para a Mesa {cdMesa}?
                  </Text>

                  <View className="flex-row gap-3 w-full">
                    <TouchableOpacity
                      className="flex-1 bg-gray-200 py-3 rounded-xl items-center"
                      onPress={() => setModalVisible(false)}
                      disabled={loading}
                    >
                      <Text className="text-gray-700 font-bold">Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      className="flex-1 bg-[#151417] py-3 rounded-xl items-center"
                      onPress={finalizarPedido}
                      disabled={loading}
                    >
                      <Text className="text-white font-bold">
                        {loading ? "Enviando..." : "Confirmar"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

            {/* Modal de feedback (sucesso/erro) — substitui o Alert.alert, funciona no web também */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={feedback.visible}
              onRequestClose={() => setFeedback((prev) => ({ ...prev, visible: false }))}
            >
              <View className="flex-1 bg-black/50 justify-center items-center px-6">
                <View className="bg-white w-full rounded-2xl p-6 items-center shadow-lg">
                  <View
                    className={`w-14 h-14 rounded-full items-center justify-center mb-3 ${
                      feedback.type === "success" ? "bg-emerald-100" : "bg-red-100"
                    }`}
                  >
                    <Ionicons
                      name={feedback.type === "success" ? "checkmark-circle" : "close-circle"}
                      size={36}
                      color={feedback.type === "success" ? "#10b981" : "#ef4444"}
                    />
                  </View>

                  <Text className="text-xl font-bold text-[#151417] mb-2">
                    {feedback.title}
                  </Text>

                  <Text className="text-gray-600 text-center mb-6">
                    {feedback.message}
                  </Text>

                  <TouchableOpacity
                    className="bg-[#151417] py-3 rounded-xl items-center w-full"
                    onPress={() => setFeedback((prev) => ({ ...prev, visible: false }))}
                  >
                    <Text className="text-white font-bold">Ok</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

export default Card;
