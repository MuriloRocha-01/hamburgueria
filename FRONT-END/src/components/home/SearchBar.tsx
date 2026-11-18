import React, { useState } from "react";
import { TextInput } from "react-native";
import cores from "@/src/theme/cores";

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
        placeholderTextColor={cores.suave}
        className="flex-1 bg-cartao text-tinta text-base py-3 items-center flex rounded-2xl mx-6 px-4 mt-6 border border-linha shadow-sm"
      />
  );
}