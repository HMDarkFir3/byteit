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
  const { isLoading, signIn } = useAuth();
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
              keyboardType="email-address"
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
      </Content>
      <ButtonContainer>
        <LinearButton
          title="Iniciar sessão"
          isLoading={isLoading}
          onPress={handleSignIn}
          disabled={isLoading}
        />
      </ButtonContainer>
    </Container>
  );
};
