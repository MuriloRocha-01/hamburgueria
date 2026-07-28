import {  Stack } from "expo-router";
import React from "react";
import "./../../global.css";
import PratosProvider from "../context/pratosProvider";
import 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <PratosProvider>
    <Stack screenOptions={{headerShown: false,}}>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen  name="(public)"/>
    </Stack>
    </PratosProvider>
  );
}