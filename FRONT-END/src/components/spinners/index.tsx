import React from 'react';
import { View, ActivityIndicator } from 'react-native';

function CarregamentoSimples (){
  return (
    // w-full + self-stretch: ocupa a tela toda mesmo quando o pai centraliza os filhos
    <View className='flex-1 w-full self-stretch items-center justify-center bg-[#151417]'>
        <ActivityIndicator size="large" color="#ff0015" />
    </View>
  );
};


export default CarregamentoSimples;
