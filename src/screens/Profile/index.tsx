import React, { useState, useCallback, FC } from "react";
import { Alert } from "react-native";
import { Switch } from "react-native-paper";
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

import { SettingsCard } from "../../components/Cards/SettingsCard";

import {
  Container,
  Header,
  ImageWrapper,
  Image,
  EditButton,
  Username,
  Email,
  Content,
  Title,
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
        <ImageWrapper borderColor={user.user_color}>
          <Image source={{ uri: user?.image }} />
        </ImageWrapper>

        <EditButton>
          <NotePencil color={user.user_color} size={32} />
        </EditButton>

        <Username>{user.name}</Username>
        <Email>{user.email}</Email>
      </Header>

      <Content showsVerticalScrollIndicator={false}>
        <Title color={user.user_color}>Conteúdo</Title>
        <SettingsCard icon={Heart} title="Favoritos" />
        <SettingsCard icon={ClockCounterClockwise} title="Histórico" />

        <Title style={{ marginTop: 20 }} color={user.user_color}>
          Preferências
        </Title>
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
              trackColor={{
                true: colors.switch.track_color,
                false: colors.switch.track_color,
              }}
            />
          )}
        />
        <SettingsCard icon={Archive} title="Acompanhamentos" />

        <Title style={{ marginTop: 20 }} color={user.user_color}>
          Sair do aplicativo
        </Title>
        <SettingsCard
          icon={ArrowRight}
          title="Encerrar sessão"
          onPress={handleSignOut}
        />
      </Content>
    </Container>
  );
};
