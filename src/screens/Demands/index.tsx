import React, { useState, useCallback, FC, useEffect } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { LinearGradientText } from "react-native-linear-gradient-text";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

import { useAuth } from "../../hooks/useAuth";
import { useCustomTheme } from "../../hooks/useCustomTheme";

import { Skeletons } from "./Skeletons";
import { Header } from "../../components/Header";
import { DemandCard } from "../../components/Cards/DemandCard";
import { LinearButton } from "../../components/Buttons/LinearButton";

import { demands } from "../../utils/demands";

import {
  Container,
  Content,
  Subheader,
  CountDemandWrapper,
  DemandLabel,
  TotalValueDemand,
  ButtonContainer,
} from "./styles";

export const Demands: FC = () => {
  const { user } = useAuth();
  const { fonts } = useTheme();
  const { theme } = useCustomTheme();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const activeDemands = demands.length;
  const totalDemandValue = demands.reduce((acc, demand) => {
    return (acc += demand.price);
  }, 0);

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalDemandValue);

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

      <Content>
        <Header title="Pedidos" />

        <Subheader>
          <CountDemandWrapper>
            <LinearGradientText
              colors={user.user_color}
              text={String(activeDemands)}
              textStyle={{
                alignSelf: "flex-start",
                fontFamily: fonts.semi_bold,
                fontSize: 20,
              }}
            />

            <DemandLabel>Pedidos</DemandLabel>
          </CountDemandWrapper>

          <TotalValueDemand>Total: {formattedPrice}</TotalValueDemand>
        </Subheader>
      </Content>

      <FlatList
        data={demands}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DemandCard data={item} />}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 100, paddingHorizontal: 24 }}
      />

      <ButtonContainer>
        <LinearButton title="Finalizar pedido" />
      </ButtonContainer>
    </Container>
  );
};
