import React from 'react';
import { View, ActivityIndicator } from 'react-native';

function CarregamentoSimples (){
  return (
    <View className='flex-1 flex items-center justify-center bg-[#151417]'>
        <ActivityIndicator size="large" color="#ff0015" className=''/>
    </View>
  );
};


export default CarregamentoSimples;
