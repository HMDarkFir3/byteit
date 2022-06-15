import React, { useState, useCallback, FC } from "react";
import { Alert } from "react-native";

import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { LinearGradientText } from "react-native-linear-gradient-text";
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
  LeftAlignment,
} from "./styles";

export const Profile: FC = () => {
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();
  const { theme, toggleTheme } = useCustomTheme();
  const { colors, fonts } = useTheme();

  const [isSwitchTheme, setIsSwitchTheme] = useState<boolean>(
    theme.title === "light" ? true : false
  );

  function handleUpdateProfile() {
    navigate("UpdateProfile");
  }

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

        <EditButton activeOpacity={0.7} onPress={handleUpdateProfile}>
          <NotePencil color={colors.screens.profile.edit_icon} size={28} />
        </EditButton>

        <Username>{user.name}</Username>
        <Email>{user.email}</Email>
      </Header>

      <Content showsVerticalScrollIndicator={false}>
        <LeftAlignment>
          <LinearGradientText
            colors={colors.screens.profile.gradient_title}
            text="Conteúdo"
            textStyle={{
              alignSelf: "flex-start",
              fontFamily: fonts.semi_bold,
              fontSize: 20,
            }}
          />
        </LeftAlignment>
        <SettingsCard icon={Heart} title="Favoritos" />
        <SettingsCard icon={ClockCounterClockwise} title="Histórico" />

        <LeftAlignment>
          <LinearGradientText
            colors={colors.screens.profile.gradient_title}
            text="Preferências"
            textStyle={{
              alignSelf: "flex-start",
              fontFamily: fonts.semi_bold,
              fontSize: 20,
            }}
          />
        </LeftAlignment>
        <SettingsCard icon={Globe} title="idioma" />
        <SettingsCard
          icon={Moon}
          title="Tema escuro"
          disabled={true}
          hasOptionalElement={true}
          optionalElement={() => (
            <Switch
              value={isSwitchTheme}
              onValueChange={handleToggleSwitch}
              thumbColor={
                isSwitchTheme
                  ? colors.components.switch.inactive
                  : colors.components.switch.active
              }
              trackColor={{ true: "#fff", false: "#fff" }}
            />
          )}
        />
        <SettingsCard icon={Archive} title="Acompanhamentos" />

        <LeftAlignment>
          <LinearGradientText
            colors={colors.screens.profile.gradient_title}
            text="Sair do Aplicativo"
            textStyle={{
              alignSelf: "flex-start",
              fontFamily: fonts.semi_bold,
              fontSize: 20,
            }}
          />
        </LeftAlignment>
        <SettingsCard
          icon={ArrowRight}
          title="Encerrar sessão"
          onPress={handleSignOut}
        />
      </Content>
    </Container>
  );
};
