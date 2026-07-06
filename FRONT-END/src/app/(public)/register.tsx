import { useAuth, useClerk, useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Register() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [pendingEmailCode, setpendingEmailCode] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoaded } = useAuth();
  const { signUp } = useSignUp();
  const { setActive } = useClerk();


  async function handleRegister() {
    if (!isLoaded || !signUp) return;
    setLoading(true); 
    try {
      await signUp.create({
        emailAddress: email,
        password: senha,
        firstName: nome, 
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      Alert.alert("Sucesso", "Código de verificação enviado para seu email!");
      setpendingEmailCode(true);  
    } catch (error: any) {
      console.log("Erro no registro:", error);
      const mensagemErro = error.errors?.[0]?.longMessage || "Ocorreu um erro ao criar a conta.";
      Alert.alert("Erro", mensagemErro);
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyUser() {
    if (!isLoaded || !signUp) return;
    setLoading(true);

    try {
      const completSignUp = await signUp.attemptEmailAddressVerification({
        code: code,
      });

      if (completSignUp.status === "complete") {
        Alert.alert("Sucesso", "Conta criada com sucesso!");
        
        if (setActive) {
          await setActive({ session: completSignUp.createdSessionId });
        }
        
        router.replace("/home");
      } else {
        console.log(JSON.stringify(completSignUp, null, 2));
      }
    } catch (error: any) {
      console.log("Erro na verificação:", error);
      const mensagemErro = error.errors?.[0]?.longMessage || "Ocorreu um erro ao verificar a conta.";
      Alert.alert("Erro", mensagemErro);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-[#0B0D18]">
      {!pendingEmailCode && (
        <View className="gap-3 w-full items-center flex ">
          <Text className="text-2xl font-bold text-center pb-6 text-white">
            Crie uma conta
          </Text>
          <TextInput
            className="w-[70%] border-b border-[#71748f] text-center py-2 text-white"
            placeholder="Digite seu nome"
            placeholderTextColor={"#71748f"}
            autoCapitalize="none"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            className="w-[70%] border-b border-[#71748f] text-center py-2 text-white"
            placeholder="Digite seu email"
            placeholderTextColor={"#71748f"}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            className="w-[70%] border-b border-[#71748f] text-center py-2 text-white"
            placeholder="Digite sua senha"
            placeholderTextColor={"#71748f"}
            secureTextEntry
            autoCapitalize="none"
            value={senha}
            onChangeText={setSenha}
          />

          <Pressable
            className={`w-[70%] rounded-lg px-12 py-2 mt-4 mb-2 ${loading ? "bg-gray-400" : "bg-[#E5160B]"}`}
            onPress={handleRegister}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text className="text-center text-white text-[1rem]">
                Registrar-se
              </Text>
            )}
          </Pressable>

          <Text className="text-[#71748f]">
            Já tem uma conta ?{" "}
            <Link href={"/login"} className="text-[#E5160B]">
              Faça login
            </Link>
          </Text>
        </View>
      )}

      {pendingEmailCode && (
        <View className="gap-4 w-full items-center">
          <Text className="text-center font-semibold text-white">
            Digite seu código :{" "}
          </Text>
          <TextInput
            className="w-[70%] border-b border-[#71748f] text-center py-2 text-white"
            placeholder="000000"
            placeholderTextColor={"#71748f"}
            keyboardType="number-pad"
            value={code}
            onChangeText={setCode}
          />
          <Pressable
            className="w-[70%] rounded-lg px-12 py-2 mt-4 mb-2 "
            onPress={handleVerifyUser}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text className="text-white text-center">Verificar conta</Text>
            )}
          </Pressable>
        </View>
      )}
    </View>
  );
}