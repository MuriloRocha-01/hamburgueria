import React, { useContext, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { TableContext } from "../../context/mesaContext/tableContext";
import { router } from "expo-router";

export default function QrScannerScreen({ navigation }: any) {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [isManual, setIsManual] = useState(false); // Alterna entre Câmera e Digitação Manual
  const [inputMesa, setInputMesa] = useState("");
  const { setCdMesa } = useContext(TableContext);

  const salvarMesa = (numeroMesa: number) => {
    if (!numeroMesa || numeroMesa <= 0) {
      Alert.alert(
        "Mesa Inválida",
        "Por favor, informe um número de mesa válido.",
      );
      return;
    }

    setCdMesa(numeroMesa);
    Alert.alert("Mesa Identificada!", `Conectado à Mesa ${numeroMesa}`, [
      {
        text: "Ver Cardápio",
        onPress: () => {
          router.replace("/(tabs)/home");
        },
      },
    ]);
  };

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    if (scanned) return;
    setScanned(true);

    const numeroMesa = Number(data.trim());
    salvarMesa(numeroMesa);
  };

  const handleManualSubmit = () => {
    const numeroMesa = Number(inputMesa.trim());
    salvarMesa(numeroMesa);
  };

  if (isManual) {
    return (
      <View className="flex-1 bg-[#151417] justify-center px-6">
        <View className="bg-white/10 p-6 rounded-2xl w-full border border-white/10">
          <Text className="text-white text-2xl font-bold text-center mb-2">
            Digite o Número
          </Text>
          <Text className="text-gray-400 text-sm text-center mb-6">
            Insira o número da mesa onde você está sentado
          </Text>

          <View className="flex-row items-center bg-white/20 rounded-xl px-4 py-3 mb-4">
            <TextInput
              className="flex-1 text-white text-base"
              placeholder="Número da mesa"
              placeholderTextColor="#9ca3af"
              keyboardType="numeric"
              value={inputMesa}
              onChangeText={setInputMesa}
              autoFocus
            />
          </View>

          <TouchableOpacity
            className="bg-white py-3.5 rounded-xl items-center active:opacity-80 mb-3"
            onPress={handleManualSubmit}
          >
            <Text className="text-[#151417] font-bold text-base">
              Confirmar Mesa
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="py-3 items-center active:opacity-80"
            onPress={() => setIsManual(false)}
          >
            <Text className="text-gray-300 font-semibold text-sm">
              Voltar para Câmera (QR Code)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Se precisar de permissão da câmera
  if (!permission) {
    return <View className="flex-1 bg-[#151417]" />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center bg-[#151417] px-6">
        <Ionicons
          name="camera-outline"
          size={64}
          color="#9ca3af"
          className="mb-4"
        />
        <Text className="text-white text-lg font-bold text-center mb-2">
          Permissão de Câmera Necessária
        </Text>
        <Text className="text-gray-400 text-center mb-6">
          Precisamos acessar sua câmera para escanear o QR Code da mesa ou você
          pode inserir manualmente.
        </Text>

        <TouchableOpacity
          className="bg-white py-3.5 px-6 rounded-xl items-center active:opacity-80 w-full mb-3"
          onPress={requestPermission}
        >
          <Text className="text-[#151417] font-bold text-base">
            Conceder Permissão
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white/20 py-3.5 px-6 rounded-xl items-center active:opacity-80 w-full"
          onPress={() => setIsManual(true)}
        >
          <Text className="text-white font-bold text-base">
            Digitar Número Manualmente
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white py-3.5 px-6 rounded-xl items-center active:opacity-80 w-full mb-3"
          onPress={() => {router.replace("/(tabs)/home")}}
        >
          <Text className="text-[#151417] font-bold text-base">
            Liberar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center bg-black">
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      >
        <View className="flex-1 justify-between p-8 items-center bg-black/40">
          <View className="mt-16 items-center">
            <Text className="text-white text-2xl font-bold text-center mb-2">
              Escaneie a Mesa
            </Text>
            <Text className="text-gray-300 text-sm text-center max-w-[280px]">
              Aponte a câmera para o QR Code fixado na mesa para começar
            </Text>
          </View>

          {/* Área de foco visual do QR Code */}
          <View className="w-64 h-64 border-2 border-white/60 rounded-3xl justify-center items-center bg-transparent shadow-2xl">
            <Ionicons
              name="scan-outline"
              size={56}
              color="white"
              className="opacity-20"
            />
          </View>

          {/* Botões inferiores (Trocar para manual / Re-escanear) */}
          <View className="w-full flex-row gap-3 mb-4">
            <TouchableOpacity
              className="flex-1 bg-white/20 py-3 px-4 rounded-xl flex-row justify-center items-center active:opacity-80 backdrop-blur-md"
              onPress={() => setIsManual(true)}
            >
              <Ionicons
                name="keypad-outline"
                size={20}
                color="white"
                className="mr-2"
              />
              <Text className="text-white font-bold text-sm">Digitar Mesa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 bg-white/20 py-3 px-4 rounded-xl flex-row justify-center items-center active:opacity-80 backdrop-blur-md"
              onPress={() => setScanned(false)}
            >
              <Ionicons
                name="refresh-outline"
                size={20}
                color="white"
                className="mr-2"
              />
              <Text className="text-white font-bold text-sm">Re-escanear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}
