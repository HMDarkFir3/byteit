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

  background-color: ${({ theme: { colors } }) =>
    colors.screens.menu_details.primary};

  overflow: hidden;
`;

export const Header = styled.View`
  height: 260px;

  padding: 0 24px;

  background-color: ${({ theme: { colors } }) =>
    colors.screens.menu_details.header};

  z-index: 1;
`;

export const SubHeader = styled.View`
  margin-top: ${getStatusBarHeight() + 20}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  height: 100%;

  background-color: ${({ theme: { colors } }) =>
    colors.screens.menu_details.background};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  z-index: 0;
  overflow: hidden;
`;

export const Image = styled.View`
  align-self: center;
  position: absolute;
  bottom: -128px;

  width: 256px;
  height: 256px;

  border-radius: 128px;
  overflow: hidden;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
  padding: 0 24px;
`;

export const InfoContent = styled.View`
  flex-direction: row;
`;

export const AboutWrapper = styled.View`
  margin-top: 36px;
  padding: 0 24px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;

  width: 100%;

  padding: 20px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.screens.menu_details.background};
  `}
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

export const Overflow = styled.View`
  border-radius: 12px;

  overflow: hidden;
`;
