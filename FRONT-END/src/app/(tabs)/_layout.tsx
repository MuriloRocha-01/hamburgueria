import { Drawer } from "expo-router/drawer";
<<<<<<< HEAD
import { useRouter } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { PratosContext } from "@/src/context/pratosContext";

export default function Layout() {
  const router = useRouter();
  const { cartAmount } = useContext(PratosContext);

=======
import React from "react";

export default function Layout() {
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        title: "Braza Burguer",
<<<<<<< HEAD

=======
        
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
        drawerStyle: {
          backgroundColor: "#1e1e1e",
        },

<<<<<<< HEAD
        drawerActiveTintColor: "#ffffff",
        drawerInactiveTintColor: "#888888",

        headerStyle: {
          backgroundColor: "#1e1e1e",
        },
        headerTintColor: "#ffffff",

        // Ícone no canto superior direito do cabeçalho
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
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
=======
        drawerActiveTintColor: "#ffffff", 
        drawerInactiveTintColor: "#888888", 
        
        headerStyle: {
          backgroundColor: "#1e1e1e",
        },
        headerTintColor: "#ffffff", 
      }}
    >
      <Drawer.Screen name="home" options={{ drawerLabel: "Início" }} />
      
      <Drawer.Screen name="search" options={{ drawerLabel: "Buscar" }} />
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
    </Drawer>
  );
}