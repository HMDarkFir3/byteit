import React, { useState, FC } from "react";
import { TouchableOpacity, Alert, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { LinearGradientText } from "react-native-linear-gradient-text";
import { EnvelopeSimple, LockOpen, Eye, EyeSlash } from "phosphor-react-native";

import { useAuth } from "../../hooks/useAuth";
import { useCustomTheme } from "../../hooks/useCustomTheme";

import { FormInput } from "../../components/Inputs/FormInput";
import { LinearButton } from "../../components/Buttons/LinearButton";

import {
  Container,
  LogoWrapper,
  Content,
  Title,
  Subtitle,
  Form,
  InputWrapper,
  ButtonContainer,
} from "./styles";

import LogoBlackSVG from "../../assets/logo-black.svg";
import LogoWhiteSVG from "../../assets/logo-white.svg";

export const SignIn: FC = () => {
  const { state: authState, dispatch: authDispatch, signIn } = useAuth();
  const { theme } = useCustomTheme();
  const { colors, fonts } = useTheme();

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

  return (
    <Container>
      <StatusBar style={theme.title === "light" ? "dark" : "light"} />

      <LogoWrapper>
        {theme.title === "light" ? (
          <LogoBlackSVG width={203} height={133} />
        ) : (
          <LogoWhiteSVG width={203} height={133} />
        )}
      </LogoWrapper>

      <Content showsVerticalScrollIndicator={false}>
        <Title>Bem-vindo!</Title>
        <Subtitle>
          Conheça o melhor app de pedidos{`\n`}e comandas totalmente coletivas!
        </Subtitle>

        <Form>
          <View style={{ marginBottom: 24 }}>
            <FormInput
              icon={() => (
                <EnvelopeSimple
                  color={colors.screens.sign_in.title}
                  size={24}
                />
              )}
              placeholder="Email"
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
          </View>

          <FormInput
            icon={() => (
              <LockOpen color={colors.screens.sign_in.title} size={24} />
            )}
            isPassword={true}
            placeholder="Senha"
            placeholderTextColor={colors.screens.sign_in.placeholder}
            value={authState.password}
            onChangeText={(text) =>
              authDispatch({
                type: "field",
                fieldName: "password",
                payload: text,
              })
            }
          />

          <LinearGradientText
            textStyle={{
              alignSelf: "flex-end",
              marginTop: 16,
              fontFamily: fonts.regular,
              fontSize: 16,
            }}
            text="Esqueci minha senha"
            colors={colors.screens.sign_in.forgot_password}
          />
        </Form>
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
