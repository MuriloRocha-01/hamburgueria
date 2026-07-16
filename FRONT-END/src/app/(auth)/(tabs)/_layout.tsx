import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          left: 20,
          right: 20,
          height: 70,
          backgroundColor: "rgba(30, 30, 30, 1)", // bg-[#1e1e1e]/85
          borderRadius: 24,
          elevation: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View 
              className={`w-[50px] h-[50px] rounded-2xl items-center justify-center ${
                focused ? "bg-white" : "bg-transparent"
              }`}
            >
              <Ionicons 
                name="home-outline" 
                size={22} 
                color={focused ? "#000" : "#fff"} 
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <View 
              className={`w-[50px] h-[50px] rounded-2xl items-center justify-center ${
                focused ? "bg-white" : "bg-transparent"
              }`}
            >
              <Ionicons 
                name="search-outline" 
                size={22} 
                color={focused ? "#000" : "#fff"} 
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}