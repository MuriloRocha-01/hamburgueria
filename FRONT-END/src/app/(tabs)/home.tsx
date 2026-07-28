import * as React from "react";
<<<<<<< HEAD
import { View} from "react-native";
import { useEffect, useState} from "react";
import { PratosProps } from "@/src/interface/pratosInterface";
=======
import { View, ScrollView } from "react-native";
import { useEffect, useState, useContext } from "react";
import { PratosProps } from "@/src/interface/pratosInterface";
import { PratosContext } from "@/src/context/pratosContext";
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
import { usePratos } from "@/src/hooks/home_hooks/usePratos.hook";
import CarregamentoSimples from "../../components/spinners/index";
import Slider from "../../components/home/Slider"; // Altere para o caminho do seu arquivo
import Categoria from '@/src/components/home/Categoria';
import SearchBar from "@/src/components/home/SearchBar";
<<<<<<< HEAD
import Destaque from "@/src/components/home/Destaque";

export default function ListaCubinhosRetos() {
  const { getAllPratos } = usePratos();
  const [pratos, setPratos] = useState<PratosProps[]>([]);
  const [loading, setLoading] = useState(false);
  
=======

export default function ListaCubinhosRetos() {
  const { getAllPratos } = usePratos();
  const { savePratos } = useContext(PratosContext);
  const [pratos, setPratos] = useState<PratosProps[]>([]);
  const [loading, setLoading] = useState(false);

  function addCard(prato: PratosProps) {
    // Sua lógica de adicionar ao carrinho
  }
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97

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
<<<<<<< HEAD
  },[]);

  return (
    <View className="bg-[#151417] flex-1">
=======
  }, []);

  return (
    <ScrollView className="bg-[#151417] flex-1">
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
      <View className="w-full">
        {loading ? (
          <CarregamentoSimples />
        ) : (
<<<<<<< HEAD
          <View className="gap-3">
          <SearchBar/> 
          <Categoria />
          <Slider pratos={pratos} />
          <Destaque pratos={pratos}/>
          </View>
        )}
      </View>
    </View>
=======
          <View>
          <SearchBar/>
          <Categoria />
          <Slider pratos={pratos} addCard={addCard} />
          
          </View>
        )}
      </View>
    </ScrollView>
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
  );
}