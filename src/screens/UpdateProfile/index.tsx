import React, { useState, useCallback, FC } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import * as NavigationBar from "expo-navigation-bar";
import { LinearGradientText } from "react-native-linear-gradient-text";
import { CaretLeft, Check, Camera } from "phosphor-react-native";

import { useAuth } from "../../hooks/useAuth";
import { useCustomTheme } from "../../hooks/useCustomTheme";

import { Skeletons } from "./Skeleton";
import { Input } from "../../components/Inputs/Input";
import { UserColorButton } from "../../components/Buttons/UserColorButton";

import { userColors } from "../../utils/userColors";

import {
  Container,
  Header,
  ImageButton,
  ImageBorder,
  ImageWrapper,
  Image,
  CaretLeftButton,
  CheckButton,
  Username,
  Email,
  Content,
  LeftAlignment,
} from "./styles";

interface ImagePickerResult {
  cancelled: boolean;
  height?: number;
  type?: string;
  uri?: string;
  width?: number;
}

export const UpdateProfile: FC = () => {
  const { state: authState, dispatch: authDispatch, updateProfile } = useAuth();
  const { goBack } = useNavigation();
  const { theme } = useCustomTheme();
  const { colors, fonts } = useTheme();

  const [userColor, setUserColor] = useState<string[]>(
    authState.user.user_color
  );

  function changeUserColor(colors: string[]) {
    setUserColor(colors);
    authDispatch({ type: "changeUserColor", payload: colors });
  }

  function handleGoBack() {
    goBack();
  }

  async function handleImagePicker() {
    const result: ImagePickerResult = await ImagePicker.launchImageLibraryAsync(
      {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      }
    );

    if (!result.cancelled) {
      authDispatch({ type: "field", fieldName: "image", payload: result.uri });
    }
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

  if (authState.isLoading) {
    return <Skeletons />;
  }

  return (
    <Container>
      <StatusBar style={theme.title === "light" ? "dark" : "light"} />
      <Header>
        <ImageButton activeOpacity={0.7} onPress={handleImagePicker}>
          <ImageBorder
            colors={authState.user.user_color}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <ImageWrapper>
              <Image
                source={{
                  uri:
                    authState.image !== ""
                      ? authState.image
                      : authState.user?.image,
                }}
              />
              <Camera
                style={{ position: "absolute" }}
                color={colors.screens.update_profile.icon}
                size={80}
              />
            </ImageWrapper>
          </ImageBorder>
        </ImageButton>

        <CaretLeftButton activeOpacity={0.7} onPress={handleGoBack}>
          <CaretLeft color={colors.screens.update_profile.icon} size={28} />
        </CaretLeftButton>

        <CheckButton activeOpacity={0.7} onPress={updateProfile}>
          <Check color={colors.screens.update_profile.icon} size={28} />
        </CheckButton>

        <Username>{authState.user.name}</Username>
        <Email>{authState.user.email}</Email>
      </Header>

      <Content>
        <Input
          label="Nome"
          placeholder="Nome"
          placeholderTextColor={colors.components.input.placeholder}
          defaultValue={authState.user.name}
          onChangeText={(text) =>
            authDispatch({ type: "field", fieldName: "name", payload: text })
          }
        />

        <LeftAlignment>
          <LinearGradientText
            colors={authState.user.user_color}
            text="Cores"
            textStyle={{
              alignSelf: "flex-start",
              marginTop: 28,
              fontFamily: fonts.semi_bold,
              fontSize: 20,
            }}
          />
        </LeftAlignment>

        <FlatList
          style={{ marginTop: 20 }}
          data={userColors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserColorButton
              isActive={item.colors[0] === userColor[0]}
              data={item}
              onPress={() => changeUserColor(item.colors)}
              disabled={item.colors[0] === userColor[0]}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
};
