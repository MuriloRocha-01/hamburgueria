import * as React from "react";
import { View, ScrollView, Text } from "react-native";
import { useEffect, useState} from "react";
import { PratosProps } from "@/src/interface/pratosInterface";
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "../../components/spinners/index";
import Slider from "../../components/home/Slider";
import Categoria from "@/src/components/home/Categoria";
import SearchBar from "@/src/components/home/SearchBar";

export default function ListaCubinhosRetos() {
  const { getAllPratos } = usePratos();
  const [pratos, setPratos] = useState<PratosProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function buscarDados() {
      setLoading(true);
      try {
        const dados = await getAllPratos();
        setPratos(dados);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    buscarDados();
  }, []);


  return (
    <ScrollView className="bg-[#151417] ">
      <View className="flex-1 pb-6">
        {loading ? (
          <CarregamentoSimples />
        ) : (
          <View className="gap-3">
            <SearchBar />
            <Categoria />
            <Slider titulo="Principais Produtos" pratos={pratos} />
            <Slider titulo="Combos Promocionais" pratos={pratos.filter(item => Number(item.cd_categoria) === 1)}  />
            <Slider titulo="Hambúrgueres Artesanais" pratos={pratos.filter(item => Number(item.cd_categoria) === 2)}  />
            <Slider titulo="Smash Burgers" pratos={pratos.filter(item => Number(item.cd_categoria) === 3)}  />
            <Slider titulo="Acompanhamentos" pratos={pratos.filter(item => Number(item.cd_categoria) === 4)}  />
            <Slider titulo="Bebidas" pratos={pratos.filter(item => Number(item.cd_categoria) === 5)}  />
            <Slider titulo="Sobremesas" pratos={pratos.filter(item => Number(item.cd_categoria) === 6)}  />      
          </View>
        )}
      </View>
    </ScrollView>
  );
}