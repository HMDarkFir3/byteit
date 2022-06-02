import React, { useState, useEffect } from "react";
import { Appearance } from "react-native";
import { ThemeProvider, DefaultTheme } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLLECTION_THEME } from "../storages";

import { light } from "../themes/light";
import { dark } from "../themes/dark";

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

//Create Context
export const ThemeContext = React.createContext({} as ThemeContextData);

export const ThemesProvider = ({ children }: ThemeProviderProps) => {
  //<-- States -->
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const colorScheme = Appearance.getColorScheme();

  async function loadTheme() {
    const themeLocal = await AsyncStorage.getItem(COLLECTION_THEME);

    if (themeLocal === null) {
      setTheme(colorScheme === "light" ? light : dark);
    } else {
      setTheme(themeLocal === "light" ? light : dark);
    }
  }

  async function toggleTheme() {
    if (theme.title === "light") {
      await AsyncStorage.setItem(COLLECTION_THEME, dark.title);

      setTheme(dark);
    } else {
      await AsyncStorage.setItem(COLLECTION_THEME, light.title);

      setTheme(light);
    }
  }

  useEffect(() => {
    loadTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
