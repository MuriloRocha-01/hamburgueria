import { Drawer } from "expo-router/drawer";
import { useRouter } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { PratosContext } from "@/src/context/pratosContext/pratosContext";
import cores from "@/src/theme/cores";

export default function Layout() {
  const router = useRouter();
  const { cartAmount } = useContext(PratosContext);

  return (
    <Drawer
      screenOptions={{  
        headerShown: true,
        sceneStyle: { backgroundColor: cores.fundo },
        drawerStyle: {
          backgroundColor: cores.cartao,
        },
        drawerActiveTintColor: cores.vermelho.DEFAULT,
        drawerActiveBackgroundColor: cores.vermelho.claro,
        drawerInactiveTintColor: cores.suave,
        headerStyle: {
          backgroundColor: cores.cartao,
        },
        headerTintColor: cores.tinta,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/card")}
            style={{ marginRight: 20 }}
            className="flex-row items-center justify-center p-2"
          >
            <View className="relative">
              <Ionicons name="cart-outline" size={26} color={cores.tinta} />
              {cartAmount > 0 && (
                <View className="absolute -top-1 -right-2 bg-vermelho rounded-full w-5 h-5 justify-center items-center">
                  <Text className="text-white text-xs font-bold">
                    {cartAmount}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Início",
          headerTitle: () => (
            <Text className="text-vermelho text-xl font-spicy tracking-wider">
              Braza Burguer
            </Text>
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Rotas navegáveis, mas escondidas do menu lateral.
          O name precisa ser o caminho real da tela (pasta/arquivo); com só "card" ou "product"
          o menu não encontrava a tela e mostrava o nome interno da rota. */}
      <Drawer.Screen
        name="categorias/[cd_categoria]"
        options={({ route }) => ({
          drawerItemStyle: { display: "none" },
          headerTitle: String((route.params as { nome?: string } | undefined)?.nome ?? "Categoria"),
        })}
      />

      <Drawer.Screen
        name="card/index"
        options={{
          drawerItemStyle: { display: "none" },
          headerTitle: "Carrinho",
        }}
      />

      <Drawer.Screen
        name="product/[cd_prato]"
        options={{
          drawerItemStyle: { display: "none" },
          headerTitle: "Prato",
        }}
      />
    </Drawer>
  );
}