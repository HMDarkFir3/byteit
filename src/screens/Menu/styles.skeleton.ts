import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface MarginProps {
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme: { colors } }) =>
    colors.screens.menu.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + 20}px;
  margin-bottom: 16px;
`;

export const CategoryFoodWrapper = styled.View`
  flex-direction: row;

  margin-top: 16px;
`;

export const MenuCardWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 12px;
`;

export const Margin = styled.View<MarginProps>`
  ${({ marginTop }) =>
    !!marginTop &&
    css`
      margin-top: ${marginTop}px;
    `}

  ${({ marginBottom }) =>
    !!marginBottom &&
    css`
      margin-bottom: ${marginBottom}px;
    `}

    ${({ marginRight }) =>
    !!marginRight &&
    css`
      margin-right: ${marginRight}px;
    `}

    ${({ marginLeft }) =>
    !!marginLeft &&
    css`
      margin-left: ${marginLeft}px;
    `}
`;
