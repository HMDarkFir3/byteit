import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(TouchableOpacity)`
  align-items: center;

  width: ${Dimensions.get("screen").width / 2.43}px;

  padding: 12px 20px;

  background-color: ${({ theme: { colors } }) =>
    colors.components.menu_card.background};
  border-radius: 32px;
`;

export const Image = styled.Image`
  width: 92px;
  height: 92px;

  border-radius: 100px;
`;

export const Title = styled.Text`
  margin-top: 12px;

  text-align: center;
  font-size: 14px;
  line-height: 17px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.semi_bold};
    color: ${colors.components.menu_card.title};
  `}
`;

export const Price = styled.Text`
  margin-top: 8px;
  margin-bottom: 20px;

  text-align: center;
  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.semi_bold};
    color: ${colors.components.menu_card.price};
  `}
`;

export const Button = styled.View`
  position: absolute;
  bottom: -8px;

  border-radius: 16px;
`;

export const Gradient = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  border-radius: 16px;
`;
