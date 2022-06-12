import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + 20}px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 36px;
  line-height: 44px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.menu.title};
  `}
`;

export const Button = styled(TouchableOpacity)``;

export const Border = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Image = styled.Image`
  width: 45px;
  height: 45px;

  border-radius: 25px;
`;
