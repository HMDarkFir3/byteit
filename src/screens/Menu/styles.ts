import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme: { colors } }) =>
    colors.screens.menu.background};
`;

export const CategoryFoodWrapper = styled.View`
  flex-direction: row;

  margin-top: 24px;
`;

export const MenuLabel = styled.Text`
  margin-top: 16px;

  font-size: 28px;
  line-height: 44px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.menu.title};
  `}
`;
