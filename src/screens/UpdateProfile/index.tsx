import React, { useState, useCallback, FC } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { CaretLeft, Check } from "phosphor-react-native";

import { useAuth } from "../../hooks/useAuth";
import { useCustomTheme } from "../../hooks/useCustomTheme";

import { Input } from "../../components/Inputs/Input";
import { GradientText } from "../../components/GradientText";
import { UserColorButton } from "../../components/Buttons/UserColorButton";

import { userColors } from "../../utils/userColors";

import {
  Container,
  Header,
  ImageBorder,
  ImageWrapper,
  Image,
  CaretLeftButton,
  CheckButton,
  Username,
  Email,
  Content,
  ButtonUserColors,
  GradientUserColor,
} from "./styles";

export const UpdateProfile: FC = () => {
  const { user } = useAuth();
  const { goBack } = useNavigation();
  const { theme } = useCustomTheme();
  const { colors } = useTheme();

  const [name, setName] = useState<string>(user.name);
  const [isActiveUserColor, setIsActiveUserColor] = useState<string[]>(
    user.user_color
  );

  function handleGoBack() {
    goBack();
  }

  function handleSelectedUserColor(userColor: string[]) {
    setIsActiveUserColor(userColor);

    console.log(userColor);
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

        <CaretLeftButton activeOpacity={0.7} onPress={handleGoBack}>
          <CaretLeft color={colors.screens.update_profile.icon} size={28} />
        </CaretLeftButton>

        <CheckButton activeOpacity={0.7}>
          <Check color={colors.screens.update_profile.icon} size={28} />
        </CheckButton>

        <Username>{user.name}</Username>
        <Email>{user.email}</Email>
      </Header>

      <Content>
        <Input
          label="Nome"
          placeholder="Nome"
          placeholderTextColor={colors.components.input.placeholder}
          value={name}
          onChangeText={setName}
        />

        <GradientText
          style={{ alignSelf: "flex-start", marginTop: 28 }}
          title="Cores"
        />

        <FlatList
          style={{ marginTop: 20 }}
          data={userColors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserColorButton
              isActive={item.colors[0] === isActiveUserColor[0]}
              data={item}
              onPress={() => handleSelectedUserColor(item.colors)}
              disabled={item.colors[0] === isActiveUserColor[0]}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
};
