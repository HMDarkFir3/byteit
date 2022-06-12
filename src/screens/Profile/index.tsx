import React, { useState, useCallback, FC } from "react";
import { Alert, View } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import {
  NotePencil,
  Heart,
  ClockCounterClockwise,
  Globe,
  Moon,
  Sun,
  Archive,
  ArrowRight,
} from "phosphor-react-native";

import { useAuth } from "../../hooks/useAuth";
import { useCustomTheme } from "../../hooks/useCustomTheme";

import { GradientText } from "../../components/GradientText";
import { SettingsCard } from "../../components/Cards/SettingsCard";
import { Switch } from "../../components/Switch";

import {
  Container,
  Header,
  ImageBorder,
  ImageWrapper,
  Image,
  EditButton,
  Username,
  Email,
  Content,
} from "./styles";

export const Profile: FC = () => {
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useCustomTheme();
  const { colors } = useTheme();

  const [isSwitchTheme, setIsSwitchTheme] = useState<boolean>(false);

  function handleToggleSwitch() {
    setIsSwitchTheme(!isSwitchTheme);
    toggleTheme();
  }

  function handleSignOut() {
    Alert.alert("Byteit", "Deseja sair do aplicativo?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => signOut(),
      },
    ]);
  }

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(colors.navigation_bar.color);
      NavigationBar.setBorderColorAsync(colors.navigation_bar.color);
      NavigationBar.setButtonStyleAsync(
        theme.title === "light" ? "dark" : "light"
      );
    }, [theme.title])
  );

  return (
    <Container>
      <StatusBar style={theme.title === "light" ? "dark" : "light"} />
      <Header>
        <ImageBorder
          colors={user.user_color}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <ImageWrapper>
            <Image source={{ uri: user?.image }} />
          </ImageWrapper>
        </ImageBorder>

        <EditButton>
          <NotePencil color={colors.screens.profile.edit_icon} size={32} />
        </EditButton>

        <Username>{user.name}</Username>
        <Email>{user.email}</Email>
      </Header>

      <Content showsVerticalScrollIndicator={false}>
        <GradientText
          style={{ alignSelf: "flex-start", marginTop: 20 }}
          title="Conteúdo"
        />
        <SettingsCard icon={Heart} title="Favoritos" />
        <SettingsCard icon={ClockCounterClockwise} title="Histórico" />

        <GradientText
          style={{ alignSelf: "flex-start", marginTop: 20 }}
          title="Preferências"
        />
        <SettingsCard icon={Globe} title="idioma" />
        <SettingsCard
          icon={theme.title === "light" ? Sun : Moon}
          title={`Tema: ${theme.title === "light" ? "claro" : "escuro"}`}
          disabled={true}
          hasOptionalElement={true}
          optionalElement={() => (
            <Switch
              value={isSwitchTheme}
              onValueChange={handleToggleSwitch}
              thumbColor={user.user_color}
              trackColor={{ true: "#fff", false: "#fff" }}
            />
          )}
        />
        <SettingsCard icon={Archive} title="Acompanhamentos" />

        <GradientText
          style={{ alignSelf: "flex-start", marginTop: 20 }}
          title="Sair do Aplicativo"
        />
        <SettingsCard
          icon={ArrowRight}
          title="Encerrar sessão"
          onPress={handleSignOut}
        />
      </Content>
    </Container>
  );
};
