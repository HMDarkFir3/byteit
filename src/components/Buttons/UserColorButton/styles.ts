import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonUserColorsProps {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonUserColorsProps>`
  margin-right: 32px;

  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.3;
        `}
`;

export const Gradient = styled(LinearGradient)`
  width: 48px;
  height: 48px;

  border-radius: 24px;
`;
