import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";

export default function Login() {
  const { isLoaded, setActive, signIn } = useSignIn();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSignIn() {
    if (!isLoaded) return;
    setLoading(true);

    try {
      const sigInUser = await signIn.create({
        identifier: email,
        password: senha,
      });

      if (setActive) {
        await setActive({ session: sigInUser.createdSessionId });
      }
      router.push("/(auth)/(tabs)/home");
    } catch (error: any) {
      const mensagemErro =
        error.errors?.[0]?.longMessage || "Ocorreu um erro ao fazer login.";
      return Alert.alert("Erro", mensagemErro);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex-1 items-center justify-center gap-4 bg-[#0B0D18]">
      <Text className="text-2xl font-bold text-white font-roboto-regular">Seja bem-vindo!</Text>
      <TextInput
        className="w-[70%] border-b border-[#71748f] text-center py-2 text-white"
        placeholder="Digite seu Email"
        placeholderTextColor={"#71748f"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-[70%] border-b border-[#71748f] text-center py-2 text-white"
        placeholder="Digite sua Senha"
        placeholderTextColor={"#71748f"}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity
        className="w-[70%] bg-[#E5160B] rounded-lg px-12 py-2 mt-4 mb-2"
        onPress={handleSignIn}
        activeOpacity={0.7}
        disabled={loading}
      >{ loading ? (
        <ActivityIndicator color="#fff" size="small" />
      ) : (
        <Text className="text-center text-white text-[1rem]">Entrar</Text>
      )}
      </TouchableOpacity>


      <Text className="text-[#71748f]">
        Não tem uma conta ? <Link href={"/register"}> <Text className="text-[#E5160B]">Cadastre-se</Text></Link>
      </Text>
    </View>
  );
}