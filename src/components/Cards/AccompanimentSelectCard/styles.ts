import styled, { css } from "styled-components/native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonProps {
  isActive: boolean;
}

export const Container = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;
  padding: 0 24px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;

  border-radius: 32px; ;
`;

export const MenuWrapper = styled.View`
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 22px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.components.accompaniment_select_card.title};
  `}
`;

export const Menu = styled.Text`
  margin-top: 4px;

  font-size: 16px;
  line-height: 20px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.components.accompaniment_select_card.placeholder};
  `}
`;

export const Button = styled.View<ButtonProps>`
  align-items: center;
  justify-content: center;
`;

export const Gradient = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  border-radius: 16px;
`;

export const GradientFill = styled.View`
  width: 16px;
  height: 16px;

  background-color: ${({ theme: { colors } }) =>
    colors.components.accompaniment_select_card.inactive};
  border-radius: 8px;
`;

export const InactiveFill = styled.View`
  width: 32px;
  height: 32px;

  background-color: ${({ theme: { colors } }) =>
    colors.components.accompaniment_select_card.inactive};
  border-radius: 16px;
`;
