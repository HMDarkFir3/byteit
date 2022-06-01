import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface ImageWrapperProps {
  borderColor: string;
}

interface TitleProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme: { colors } }) =>
    colors.screens.profile.background};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: ${getStatusBarHeight() + 24}px;
`;

export const ImageWrapper = styled.View<ImageWrapperProps>`
  align-items: center;
  justify-content: center;

  width: 184px;
  height: 184px;

  border-radius: 92px;

  ${({ theme: { colors }, borderColor }) => css`
    background-color: ${colors.screens.profile.background};
    border: solid 8px ${borderColor};
  `}
`;

export const Image = styled.Image`
  width: 160px;
  height: 160px;

  border-radius: 92px;
`;

export const EditButton = styled.View`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Username = styled.Text`
  margin-top: 24px;

  text-align: center;
  font-size: 32px;
  line-height: 38px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.profile.title};
  `}
`;

export const Email = styled.Text`
  margin-top: 8px;

  text-align: center;
  font-size: 16px;
  line-height: 20px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.regular};
    color: ${colors.screens.profile.placeholder};
  `}
`;

export const Content = styled.ScrollView`
  margin-top: 28px;
`;

export const Title = styled.Text<TitleProps>`
  margin-bottom: 12px;

  font-size: 20px;
  line-height: 24px;

  ${({ theme: { fonts }, color }) => css`
    font-family: ${fonts.medium};
    color: ${color};
  `}
`;
