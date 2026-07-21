import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import "../../../global.css";
import { useFonts, SpicyRice_400Regular } from '@expo-google-fonts/spicy-rice';


export default function PublicLayout() {

  const [fontsLoaded, fontError] = useFonts({
    SpicyRice_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="HomePublic" />
    </Stack>
  );
}
