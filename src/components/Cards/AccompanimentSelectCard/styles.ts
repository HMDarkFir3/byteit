import styled, { css } from "styled-components/native";
import Animated from "react-native-reanimated";

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

  width: 32px;
  height: 32px;

  border-radius: 16px;

  ${({ theme: { colors }, isActive }) =>
    isActive
      ? css`
          background-color: ${colors.components.accompaniment_select_card
            .active};
          border: solid 8px
            ${colors.components.accompaniment_select_card.border};
        `
      : css`
          background-color: ${colors.components.accompaniment_select_card
            .inactive};
        `}
`;
