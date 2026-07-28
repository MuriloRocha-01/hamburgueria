import * as React from "react";
import { View} from "react-native";
import { useEffect, useState} from "react";
import { PratosProps } from "@/src/interface/pratosInterface";
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "../../components/spinners/index";
import Slider from "../../components/home/Slider"; // Altere para o caminho do seu arquivo
import Categoria from '@/src/components/home/Categoria';
import SearchBar from "@/src/components/home/SearchBar";
import Destaque from "@/src/components/home/Destaque";

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
  },[]);

  return (
    <View className="bg-[#151417] flex-1">
      <View className="w-full">
        {loading ? (
          <CarregamentoSimples />
        ) : (
          <View className="gap-3">
          <SearchBar/> 
          <Categoria />
          <Slider pratos={pratos} />
          <Destaque pratos={pratos}/>
          </View>
        )}
      </View>
    </View>
  );
}