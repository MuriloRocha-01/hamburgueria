import {  Slot, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import "./../../global.css";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store"
import PratosProvider from "../context/pratosProvider";


const publichKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const tokenCache = {
  async getToken(key:string){
    try{
      return SecureStore.getItemAsync(key);
    }catch(err){
      return null;
    }
  },
  async saveToken(key:string, value:string){
    try{
      return SecureStore.setItemAsync(key, value);
    }catch(err){
      return;
    }
  }
}

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  const segments = useSegments();
  useEffect(()=>{
    if(!isLoaded) return;

    const inAuthGroup = segments[0] === "(auth)"

    if(isSignedIn && !inAuthGroup){
      router.replace("/home")
    }else {
      router.replace("/homePublic")
    }
  },[isSignedIn])

  return <Slot/>
}

export default function RootLayout() {
  return (
    <PratosProvider>
    <ClerkProvider publishableKey={publichKey} tokenCache={tokenCache}>
      <InitialLayout/>
    </ClerkProvider>
    </PratosProvider>
  );
}
