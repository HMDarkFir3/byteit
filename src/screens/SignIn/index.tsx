import React, { useState, FC } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { Envelope, LockOpen, Eye, EyeSlash } from "phosphor-react-native";

import { useAuth } from "../../hooks/useAuth";
import { useCustomTheme } from "../../hooks/useCustomTheme";

import { LinearButton } from "../../components/Buttons/LinearButton";

import {
  Container,
  LogoWrapper,
  Content,
  Title,
  Subtitle,
  Form,
  InputWrapper,
  Input,
  ForgotPassword,
  ButtonContainer,
} from "./styles";

import LogoBlackSVG from "../../assets/logo-black.svg";
import LogoWhiteSVG from "../../assets/logo-white.svg";

export const SignIn: FC = () => {
  const { state: authState, dispatch: authDispatch, signIn } = useAuth();
  const { theme } = useCustomTheme();
  const { colors } = useTheme();

  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(true);

  function handleSignIn() {
    if (authState.email.trim() === "") {
      Alert.alert("Atenção!", "Digite seu e-mail");
      return;
    }

    if (authState.password.trim() === "") {
      Alert.alert("Atenção!", "Digite sua senha");
      return;
    }

    signIn();
  }

  function toggleVisibilityPassword() {
    setIsVisiblePassword(!isVisiblePassword);
  }

  return (
    <Container>
      <StatusBar style={theme.title === "light" ? "dark" : "light"} />

      <LogoWrapper>
        {theme.title === "light" ? (
          <LogoBlackSVG width={249} height={164} />
        ) : (
          <LogoWhiteSVG width={249} height={164} />
        )}
      </LogoWrapper>

      <Content showsVerticalScrollIndicator={false}>
        <Title>Bem-vindo!</Title>
        <Subtitle>Conheça melhor app de comandas coletivas!</Subtitle>

        <Form>
          <InputWrapper style={{ borderBottomWidth: 0.5 }}>
            <Envelope color={colors.screens.sign_in.title} size={32} />

            <Input
              placeholder="Email"
              placeholderTextColor={colors.screens.sign_in.placeholder}
              value={authState.email}
              onChangeText={(text) =>
                authDispatch({
                  type: "field",
                  fieldName: "email",
                  payload: text,
                })
              }
              keyboardType="email-address"
            />
          </InputWrapper>

          <InputWrapper style={{ borderTopWidth: 0.5 }}>
            <LockOpen color={colors.screens.sign_in.title} size={32} />
            <Input
              placeholder="Senha"
              placeholderTextColor={colors.screens.sign_in.placeholder}
              secureTextEntry={isVisiblePassword}
              value={authState.password}
              onChangeText={(text) =>
                authDispatch({
                  type: "field",
                  fieldName: "password",
                  payload: text,
                })
              }
            />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={toggleVisibilityPassword}
            >
              {isVisiblePassword ? (
                <Eye color={colors.screens.sign_in.placeholder} size={32} />
              ) : (
                <EyeSlash
                  color={colors.screens.sign_in.placeholder}
                  size={32}
                />
              )}
            </TouchableOpacity>
          </InputWrapper>
        </Form>
        <ForgotPassword>Recuperar senha</ForgotPassword>
      </Content>
      <ButtonContainer>
        <LinearButton
          title="Iniciar sessão"
          isLoading={authState.isLoading}
          onPress={handleSignIn}
          disabled={authState.isLoading}
        />
      </ButtonContainer>
    </Container>
  );
};
