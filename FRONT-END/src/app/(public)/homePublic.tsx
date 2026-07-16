import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import maocomlanche from '../../../assets/especial_da_casa.png';
import { router } from "expo-router";
import { useWindowDimensions } from 'react-native';

export default function HomePublic() {
  // Captura a largura real da tela do dispositivo

  const listaImagens = [
    { id: "1", imagem: maocomlanche },
  ];

  const { width: larguraDaTela } = useWindowDimensions();
  return (
    
    <View className="bg-[#151417] flex-1 w-full justify-center items-center ">
      <Carousel
        loop
        width={larguraDaTela}
        height={300}
        autoPlay={true}
        autoPlayInterval={3000}
        data={listaImagens}
        scrollAnimationDuration={3000}
        mode="parallax"
        renderItem={({ item }) => (
          <View className="flex-1 rounded-2xl overflow-hidden bg-transparent justify-center items-center">
            <Image
              source={item.imagem}
              style={{
                width: 550,
                height: 500,
                resizeMode: "contain",
              }}
            />
          </View>
        )}
      />

      <TouchableOpacity className="px-12 bg-[#E5160B] rounded-lg py-6 mt-28"  
      onPress={() => router.push('/login')}>
        <Text className="text-white text-center font-bold ">Faça o seu pedido agora</Text>
      </TouchableOpacity>
    </View>
    
  );
}
