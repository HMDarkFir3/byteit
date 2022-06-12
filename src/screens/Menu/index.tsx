import React, { useState, useEffect, useCallback, FC } from "react";
import { FlatList, SectionList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { LinearTextGradient } from "react-native-text-gradient";

import { useMenu } from "../../hooks/useMenu";

import { Skeletons } from "./Skeletons";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { CategoryFood } from "../../components/CategoryFood";
import { MenuCard } from "../../components/Cards/MenuCard";

import { categoriesFoodType } from "../../utils/categoriesFoodType";

import { Container, CategoryFoodWrapper, MenuLabel } from "./styles";

interface CategoryFoodTypeData {
  id: string;
  icon: any;
  label: string;
  type: "all" | "plate" | "drink";
}

export const Menu: FC = () => {
  const { plates, drinks, isLoading, fetchMenu } = useMenu();
  const theme = useTheme();

  const [selectedCategoryFood, setSelectedCategoryFood] = useState<
    "all" | "plate" | "drink"
  >("all");

  const SECTIONS = [
    {
      title: "Pratos",
      data: plates,
    },
    {
      title: "Bebidas",
      data: drinks,
    },
  ];

  function handleCategoryFood(type: "all" | "plate" | "drink") {
    setSelectedCategoryFood(type);
  }

  useEffect(() => {
    fetchMenu(selectedCategoryFood);
  }, [selectedCategoryFood]);

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
        {categoriesFoodType.map((category: CategoryFoodTypeData) => (
          <CategoryFood
            key={category.id}
            icon={category.icon}
            title={category.label}
            isActive={selectedCategoryFood === category.type}
            onPress={() => handleCategoryFood(category.type)}
          />
        ))}
      </CategoryFoodWrapper>

      {selectedCategoryFood === "all" && (
        <SectionList
          sections={SECTIONS}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => <MenuCard data={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <MenuLabel style={{ marginBottom: 24 }}>{title}</MenuLabel>
          )}
          contentContainerStyle={{
            justifyContent: "space-between",
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}

      {selectedCategoryFood === "plate" && <MenuLabel>Pratos</MenuLabel>}

      {selectedCategoryFood === "plate" && (
        <FlatList
          data={plates}
          keyExtractor={(item) => item.uid}
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
      )}

      {selectedCategoryFood === "drink" && <MenuLabel>Bebidas</MenuLabel>}

      {selectedCategoryFood === "drink" && (
        <FlatList
          data={drinks}
          keyExtractor={(item) => item.uid}
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
      )}
    </Container>
  );
};
