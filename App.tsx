import React, { FC } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { AuthProvider } from "./src/contexts/AuthContext";
import { ThemesProvider } from "./src/contexts/ThemeContext";

import { Routes } from "./src/routes";

export const App: FC = () => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <AuthProvider>
      <ThemesProvider>
        <PaperProvider>
          <StatusBar style="light" />
          <Routes />
        </PaperProvider>
      </ThemesProvider>
    </AuthProvider>
  );
};
