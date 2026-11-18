import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import cores from "@/src/theme/cores";

function CarregamentoSimples (){
  return (
    // w-full + self-stretch: ocupa a tela toda mesmo quando o pai centraliza os filhos
    <View className='flex-1 w-full self-stretch items-center justify-center bg-fundo'>
        <ActivityIndicator size="large" color={cores.vermelho.DEFAULT} />
    </View>
  );
};


export default CarregamentoSimples;
