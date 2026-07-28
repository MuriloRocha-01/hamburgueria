import React, { useState } from "react";
<<<<<<< HEAD
import { View, TextInput } from "react-native";

=======
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97

export default function SearchBar({ onSearch }: { onSearch?: (text: string) => void }) {
  const [busca, setBusca] = useState("");

  const handleChange = (text: string) => {
    setBusca(text);
    if (onSearch) onSearch(text);
  };

  return (
    <View >
<<<<<<< HEAD
=======

>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
      {/* Input de Texto */}
      <TextInput
        value={busca}
        onChangeText={handleChange}
        placeholder="Buscar lanche, bebida..."
        placeholderTextColor="#9ca3af"
<<<<<<< HEAD
        className="flex-1 text-white text-base flex-row items-center bg-white/10 rounded-xl mx-6 px-4 py-3 mt-6 border border-white/30"
=======
        className="flex-1 text-white text-base flex-row items-center bg-white/10 rounded-xl mx-6 px-4 py-3 my-6 border border-white/30"
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
      />

    </View>
  );
}