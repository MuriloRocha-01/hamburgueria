import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Direciona para o grupo de abas */}
      <Stack.Screen name="(tabs)" /> 
    </Stack>
  );
}