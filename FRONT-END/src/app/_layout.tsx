import {  Stack } from "expo-router";
import React from "react";
import "./../../global.css";
import PratosProvider from "../context/pratosContext/pratosProvider";
import 'react-native-gesture-handler';
import TableProvider from "../context/mesaContext/tableProvider";

export default function RootLayout() {
  return (
    <TableProvider>
    <PratosProvider>
    <Stack screenOptions={{headerShown: false,}}>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen  name="(public)"/>
    </Stack>
    </PratosProvider>
    </TableProvider>
  );
}