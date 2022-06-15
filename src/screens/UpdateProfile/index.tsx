import React, { useState, useCallback, FC } from "react";
import { FlatList, Alert, View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { LinearGradientText } from "react-native-linear-gradient-text";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { translationFirebaseErrorsPTBR } from "react-translation-firebase-errors";
import { CaretLeft, Check } from "phosphor-react-native";

import { UserDTO } from "../../dtos/UserDTO";

import { COLLECTION_USER } from "../../storages";

import { useAuth } from "../../hooks/useAuth";
import { useCustomTheme } from "../../hooks/useCustomTheme";

import { Skeletons } from "./Skeleton";
import { Input } from "../../components/Inputs/Input";
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
  LeftAlignment,
} from "./styles";

export const UpdateProfile: FC = () => {
  const { user, setUser } = useAuth();
  const { goBack } = useNavigation();
  const { theme } = useCustomTheme();
  const { colors, fonts } = useTheme();

  const [name, setName] = useState<string>(user.name);
  const [isActiveUserColor, setIsActiveUserColor] = useState<string[]>(
    user.user_color
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleGoBack() {
    goBack();
  }

  function handleSelectedUserColor(userColor: string[]) {
    setIsActiveUserColor(userColor);
  }

  async function handleSaveProfile() {
    setIsLoading(true);

    await firestore()
      .collection("users")
      .doc(user.uid)
      .update({
        name: name,
        user_color: isActiveUserColor,
      })
      .then(async () => {
        await firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then(async (profile) => {
            if (profile.exists) {
              const { name, email, has_image, user_color } =
                profile.data() as UserDTO;

              const reference = storage().ref(
                `/users/${has_image ? user.uid : "empty_user"}.png`
              );

              const imageUrl = await reference.getDownloadURL();

              const data: UserDTO = {
                uid: user.uid,
                name,
                email,
                image: imageUrl,
                user_color,
              };

              setUser(data);

              await AsyncStorage.removeItem(COLLECTION_USER);
              await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));
            }
          })
          .catch((err) => {
            const error = translationFirebaseErrorsPTBR(err.code);
            Alert.alert(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      });
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

  if (isLoading) {
    return <Skeletons />;
  }

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

        <CheckButton activeOpacity={0.7} onPress={handleSaveProfile}>
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

        <LeftAlignment>
          <LinearGradientText
            colors={user.user_color}
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
