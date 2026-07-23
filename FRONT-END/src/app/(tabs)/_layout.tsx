import { Drawer } from "expo-router/drawer";
import React from "react";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        title: "Braza Burguer",
        
        drawerStyle: {
          backgroundColor: "#1e1e1e",
        },

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
    </Drawer>
  );
}