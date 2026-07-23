import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ onSearch }: { onSearch?: (text: string) => void }) {
  const [busca, setBusca] = useState("");

  const handleChange = (text: string) => {
    setBusca(text);
    if (onSearch) onSearch(text);
  };

  return (
    <View >

      {/* Input de Texto */}
      <TextInput
        value={busca}
        onChangeText={handleChange}
        placeholder="Buscar lanche, bebida..."
        placeholderTextColor="#9ca3af"
        className="flex-1 text-white text-base flex-row items-center bg-white/10 rounded-xl mx-6 px-4 py-3 my-6 border border-white/30"
      />

    </View>
  );
}