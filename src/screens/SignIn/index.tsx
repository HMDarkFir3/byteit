import React, { useState, FC } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { Envelope, LockOpen, Eye, EyeSlash } from "phosphor-react-native";

import { useAuth } from "../../hooks/useAuth";
import { useCustomTheme } from "../../hooks/useCustomTheme";

import { LinearButton } from "../../components/Buttons/LinearButton";
import { OAuthButton } from "../../components/Buttons/OAuthButton";

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
  ContinueWithWrapper,
  Divider,
  ContinueWithLabel,
  OAuthButtonWrapper,
} from "./styles";

import LogoBlackSVG from "../../assets/logo-black.svg";
import LogoWhiteSVG from "../../assets/logo-white.svg";
import GoogleLogoSVG from "../../assets/google.svg";
import GithubBlackLogoSVG from "../../assets/github-black.svg";
import GithubWhiteLogoSVG from "../../assets/github-white.svg";
import SlackLogoSVG from "../../assets/slack.svg";

export const SignIn: FC = () => {
  const { isLoading, signIn, signInWithGoogle } = useAuth();
  const { theme } = useCustomTheme();
  const { colors } = useTheme();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(true);

  function handleSignIn() {
    if (email.trim() === "") {
      Alert.alert("Atenção!", "Digite seu e-mail");
      return;
    }

    if (password.trim() === "") {
      Alert.alert("Atenção!", "Digite sua senha");
      return;
    }

    signIn(email, password);
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
              value={email}
              onChangeText={setEmail}
            />
          </InputWrapper>

          <InputWrapper style={{ borderTopWidth: 0.5 }}>
            <LockOpen color={colors.screens.sign_in.title} size={32} />
            <Input
              placeholder="Senha"
              placeholderTextColor={colors.screens.sign_in.placeholder}
              secureTextEntry={isVisiblePassword}
              value={password}
              onChangeText={setPassword}
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

        <ButtonContainer>
          <LinearButton
            title="Iniciar sessão"
            isLoading={isLoading}
            onPress={handleSignIn}
            disabled={isLoading}
          />
        </ButtonContainer>

        <ContinueWithWrapper>
          <Divider />
          <ContinueWithLabel>Ou continue com</ContinueWithLabel>
          <Divider />
        </ContinueWithWrapper>

        <OAuthButtonWrapper>
          <OAuthButton icon={GoogleLogoSVG} onPress={signInWithGoogle} />
          <OAuthButton
            icon={
              theme.title === "light" ? GithubBlackLogoSVG : GithubWhiteLogoSVG
            }
          />
          <OAuthButton icon={SlackLogoSVG} />
        </OAuthButtonWrapper>
      </Content>
    </Container>
  );
};
