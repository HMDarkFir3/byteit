import React, { useState, useCallback, FC, useEffect } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { LinearGradientText } from "react-native-linear-gradient-text";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

import { useCustomTheme } from "../../hooks/useCustomTheme";

import { Skeletons } from "./Skeletons";
import { Header } from "../../components/Header";
import { GroupCard } from "../../components/Cards/GroupCard";

import { groups } from "../../utils/groups";

import { Container, CountGroupWrapper, GroupLabel } from "./styles";

export const Groups: FC = () => {
  const { colors, fonts } = useTheme();
  const { theme } = useCustomTheme();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const activeGroups = groups.length;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
      <Header title="Grupos" />

      <CountGroupWrapper>
        <LinearGradientText
          colors={colors.screens.groups.gradient_label}
          text={String(activeGroups)}
          textStyle={{
            alignSelf: "flex-start",
            fontFamily: fonts.semi_bold,
            fontSize: 20,
          }}
        />
        <GroupLabel>Grupos ativos</GroupLabel>
      </CountGroupWrapper>

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroupCard data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
