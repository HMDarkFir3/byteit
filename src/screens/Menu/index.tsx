import React, { useState, useCallback, FC, useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

import { Skeletons } from "./Skeletons";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { CategoryFood } from "../../components/CategoryFood";
import { MenuCard } from "../../components/Cards/MenuCard";

import { categoriesFoodType } from "../../utils/categoriesFoodType";
import { plates } from "../../utils/categoriesFood";

import { Container, CategoryFoodWrapper, MenuLabel } from "./styles";

export const Menu: FC = () => {
  const theme = useTheme();

  const { navigate } = useNavigation();

  const [selectedCategoryFood, setSelectedCategoryFood] = useState<string>("0");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function handleCategoryFood(category: string) {
    setSelectedCategoryFood(category);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(theme.colors.navigation_bar.color);
      NavigationBar.setBorderColorAsync(theme.colors.navigation_bar.color);
      NavigationBar.setButtonStyleAsync(
        theme.title === "light" ? "dark" : "light"
      );
    }, [theme.title])
  );

  if (isLoading) {
    return <Skeletons />;
  }

  return (
    <Container>
      <StatusBar style={theme.title === "light" ? "dark" : "light"} />
      <Header title="Cardápio" />

      <Search />

      <CategoryFoodWrapper>
        {categoriesFoodType.map((category) => (
          <CategoryFood
            key={category.id}
            icon={category.icon}
            title={category.label}
            isActive={selectedCategoryFood === category.id}
            onPress={() => handleCategoryFood(category.id)}
          />
        ))}
      </CategoryFoodWrapper>

      <MenuLabel>Pratos</MenuLabel>

      <FlatList
        data={plates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuCard data={item} />}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 24,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginTop: 24,
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
