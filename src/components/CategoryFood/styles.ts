import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface TitleProps {
  isActive: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  margin-right: 24px;
`;

export const Card = styled(TouchableOpacity)`
  border-radius: 16px;
`;

export const Gradient = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;

  border-radius: 16px;
`;

export const Title = styled.Text<TitleProps>`
  margin-top: 8px;

  font-size: 16px;
  line-height: 24px;

  ${({ theme: { colors, fonts }, isActive }) =>
    isActive
      ? css`
          font-family: ${fonts.semi_bold};
          color: ${colors.components.category_food.active_title};
        `
      : css`
          font-family: ${fonts.regular};
          color: ${colors.components.category_food.inactive_title};
        `}
`;
