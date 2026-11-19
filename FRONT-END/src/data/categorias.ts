import type { ImageSourcePropType } from "react-native";

/** Uma categoria (grupo de pratos) do cardápio. O `id` é o cd_categoria do banco de dados. */
export interface CategoriaProps {
  id: string;
  nome: string;
  icone: ImageSourcePropType;
}

/**
 * Categorias do cardápio, na ordem em que aparecem no menu lateral e na Home.
 * Os ícones coloridos são PNGs com fundo transparente em assets/categorias.
 */
export const CATEGORIAS: CategoriaProps[] = [
  { id: "1", nome: "Combos", icone: require("@/assets/categorias/combos.png") },
  { id: "2", nome: "Hambúrgueres Artesanais", icone: require("@/assets/categorias/hamburgueres.png") },
  { id: "3", nome: "Smash Burguers", icone: require("@/assets/categorias/smash.png") },
  { id: "4", nome: "Acompanhamentos", icone: require("@/assets/categorias/acompanhamentos.png") },
  { id: "5", nome: "Bebidas", icone: require("@/assets/categorias/bebidas.png") },
  { id: "6", nome: "Sobremesas", icone: require("@/assets/categorias/sobremesas.png") },
];
