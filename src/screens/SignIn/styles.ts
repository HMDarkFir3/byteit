import styled, { css } from "styled-components/native";
import { ImageBackground } from "react-native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme: { colors } }) =>
    colors.screens.sign_in.background};
`;

export const LogoWrapper = styled.View`
  align-items: center;

  margin-top: 48px;
  margin-bottom: 32px;
`;

export const Content = styled.ScrollView``;

export const Title = styled.Text`
  text-align: center;
  font-size: 48px;
  line-height: 58px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.semi_bold};
    color: ${colors.screens.sign_in.title};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: 10px;
  margin-bottom: 40px;

  text-align: center;
  font-size: 14px;
  line-height: 16px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.sign_in.placeholder};
  `}
`;

export const Form = styled.View`
  margin: 0 24px;

  background-color: ${({ theme: { colors } }) => colors.screens.sign_in.input};
  border-radius: 16px;
  border: 1px solid ${({ theme: { colors } }) => colors.screens.sign_in.border};
`;

export const InputWrapper = styled.View`
  flex-direction: row;

  align-items: center;

  padding: 20px 16px;

  border-color: ${({ theme: { colors } }) => colors.screens.sign_in.border};
`;

export const Input = styled.TextInput`
  flex: 1;

  padding: 0 16px;

  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.sign_in.placeholder};
  `}
`;

export const ForgotPassword = styled.Text`
  margin-top: 12px;
  margin-right: 24px;

  text-align: right;
  font-size: 16px;
  line-height: 20px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.regular};
    color: ${colors.screens.sign_in.placeholder};
  `}
`;

export const ButtonContainer = styled.View`
  align-self: flex-end;

  width: 100%;

  margin-top: 28px;
  padding: 0 24px 24px 24px;

  background-color: ${({ theme: { colors, fonts } }) => css`
    background-color: ${colors.screens.sign_in.background};
  `};
`;
