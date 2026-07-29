import React, { useState } from "react";
import { TextInput } from "react-native";

export default function SearchBar({ onSearch }: { onSearch?: (text: string) => void }) {
  const [busca, setBusca] = useState("");

  const handleChange = (text: string) => {
    setBusca(text);
    if (onSearch) onSearch(text);
  };

  return (
      <TextInput
        value={busca}
        onChangeText={handleChange}
        placeholder="Buscar lanche, bebida..."
        placeholderTextColor="#9ca3af"
        className="flex-1 text-white text-base py-3 items-center flex rounded-xl mx-6 px-4 mt-6 border border-white/30"
      />
  );
}