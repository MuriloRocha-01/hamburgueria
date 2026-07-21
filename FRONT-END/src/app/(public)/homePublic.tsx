import React from "react";
import { Image, View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import maocomlanche from '../../../assets/especial_da_casa.png';
import { router } from "expo-router";

export default function HomePublic() {
  const listaImagens = [
    { id: "1", imagem: maocomlanche },
  ];

  const { width: larguraDaTela } = useWindowDimensions();

  return (
    <View className="flex-1 w-full justify-between items-center py-16 px-4 relative">
      
      <View className="absolute inset-0 bg-[#FFFFFF] -z-10">
        <View className="w-full h-[50%] bg-[#ff0016] lg:rounded-b-[400px] rounded-b-[150px]" />
      </View>

      <View className="items-center mt-4">
        <Text className="font-spicy lg:text-7xl text-5xl text-white tracking-wider text-center">
          Brasa Burger
        </Text>
        <Text className="text-sm font-semibold text-white/80 uppercase tracking-widest mt-1">
          Venha conhecer
        </Text>
      </View>

      <View className="w-full justify-center items-center my-2">
        <Carousel
          loop
          width={larguraDaTela}
          height={400}
          autoPlay={true}
          autoPlayInterval={3000}
          data={listaImagens}
          scrollAnimationDuration={2500}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.95,
            parallaxScrollingOffset: 40,
          }}
          renderItem={({ item }) => (
            <View className="flex-1 overflow-hidden justify-center items-center">
              <Image
                className="w-full md:max-w-[700px] max-w-[550px] aspect-[55/60]"
                source={item.imagem}
                style={{
                  resizeMode: "contain",
                }}
              />
            </View>
          )}
        />
      </View>
      
      <TouchableOpacity 
        className="px-8 bg-[#E5160B] rounded-[1.2rem] py-5 w-full max-w-xs shadow-md"  
        onPress={() => router.push('/(auth)/(tabs)/home')}
      >
        <Text className="md:text-[1rem] text-[1.2rem] font-bold text-white text-center">
          Faça o seu pedido agora
        </Text>
      </TouchableOpacity>

    </View>
  );
}