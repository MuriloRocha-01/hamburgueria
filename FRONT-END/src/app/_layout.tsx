import { Slot } from "expo-router";
import React from "react";
import "./../../global.css";
import PratosProvider from "../context/pratosProvider";

export default function RootLayout() {
  return (
    <PratosProvider>
      <Slot />
    </PratosProvider>
  );
}