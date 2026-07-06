import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
// Certifique-se de que o caminho da imagem está correto
import hamburgerImg from "../../../assets/hamburger.png";
import porcao from "../../../assets/porcao.png";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function HomePublic() {
  // Captura a largura real da tela do dispositivo

  const listaImagens = [
    { id: "1", imagem: hamburgerImg },
    { id: "2", imagem: porcao },
  ];

  return (
    <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.8)']}
        locations={[0.0, 0.4, 0.8]}
        className="absolute left-0 right-0 top-0 bottom-0 justify-center items-center py-4"
      >
    <View className="w-full justify-center items-center py-4 ">
      <Carousel
        loop
        width={400}
        height={220}
        autoPlay={true}
        autoPlayInterval={2000}
        data={listaImagens}
        scrollAnimationDuration={1000}
        mode="parallax"
        renderItem={({ item }) => (
          <View className="flex-1 rounded-2xl overflow-hidden bg-transparent justify-center items-center">
            <Image
              source={item.imagem}
              style={{
                width: 300,
                height: 400,
                resizeMode: "contain",
              }}
            />
          </View>
        )}
      />

      <TouchableOpacity className="w-[70%] bg-[#E5160B] border border-white rounded-lg py-2 mt-28"  
      onPress={() => router.push('/login')}>
        <Text className="text-white text-center">Fazer pedido</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}
