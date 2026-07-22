import * as React from "react";
import { View, ScrollView } from "react-native";
import { useEffect, useState, useContext } from "react";
import { PratosProps } from "@/src/interface/pratosInterface";
import { PratosContext } from "@/src/context/pratosContext";
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "../../../components/spinners/index";
import Slider from "../../../components/home/Slider"; // Altere para o caminho do seu arquivo
import Categoria from '@/src/components/home/Categoria';

export default function ListaCubinhosRetos() {
  const { getAllPratos } = usePratos();
  const { savePratos } = useContext(PratosContext);
  const [pratos, setPratos] = useState<PratosProps[]>([]);
  const [loading, setLoading] = useState(false);

  function addCard(prato: PratosProps) {
    // Sua lógica de adicionar ao carrinho
  }

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
    <ScrollView className="bg-[#151417] flex-1">
      <View className="w-full">
        {loading ? (
          <CarregamentoSimples />
        ) : (
          <View>
          <Slider pratos={pratos} addCard={addCard} />
          <Categoria />
          </View>
        )}
      </View>
    </ScrollView>
  );
}