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
    colors.screens.update_profile.background};

  overflow: hidden;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: ${getStatusBarHeight() + 24}px;

  overflow: hidden;
`;

export const LeftIcon = styled.View`
  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;
`;

export const RightIcon = styled.View`
  position: absolute;
  top: 0;
  right: 0;

  overflow: hidden;
`;

export const Content = styled.View`
  margin-top: 36px;
`;

export const UserColors = styled.View`
  flex-direction: row;
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
