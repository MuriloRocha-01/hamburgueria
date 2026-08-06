import { Drawer } from "expo-router/drawer";
import { useRouter } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { PratosContext } from "@/src/context/pratosContext/pratosContext";

export default function Layout() {
  const router = useRouter();
  const { cartAmount } = useContext(PratosContext);

  return (
    <Drawer
      screenOptions={{  
        headerShown: true,
        // Removido o title global daqui para evitar herança indesejada em todas as páginas

        drawerStyle: {
          backgroundColor: "#1e1e1e",
        },

        drawerActiveTintColor: "#ffffff",
        drawerInactiveTintColor: "#888888",

        headerStyle: {
          backgroundColor: "#1e1e1e",
        },
        headerTintColor: "#ffffff",

        headerRight: () => (
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/card")}
            style={{ marginRight: 20 }}
            className="flex-row items-center justify-center p-2"
          >
            <View className="relative">
              <Ionicons name="cart-outline" size={26} color="#ffffff" />
              {cartAmount > 0 && (
                <View className="absolute -top-1 -right-2 bg-red-500 rounded-full w-5 h-5 justify-center items-center">
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
          // Definindo o título personalizado com a fonte font-spicy apenas para a Home
          headerTitle: () => (
            <Text className="text-white text-xl font-spicy tracking-wider">
              Braza Burguer
            </Text>
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

    </Drawer>
  );
}