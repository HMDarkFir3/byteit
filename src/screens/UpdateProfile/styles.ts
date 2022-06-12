import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface ButtonUserColorsProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme: { colors } }) =>
    colors.screens.update_profile.background};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: ${getStatusBarHeight() + 24}px;
`;

export const ImageBorder = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  width: 184px;
  height: 184px;

  border-radius: 92px;
`;

export const ImageWrapper = styled.View`
  align-items: center;
  justify-content: center;

  width: 168px;
  height: 168px;

  border-radius: 90px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.screens.update_profile.background};
  `}
`;

export const Image = styled.Image`
  width: 160px;
  height: 160px;

  border-radius: 92px;
`;

export const CaretLeftButton = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const CheckButton = styled(TouchableOpacity)`
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
    color: ${colors.screens.update_profile.title};
  `}
`;

export const Email = styled.Text`
  margin-top: 8px;

  text-align: center;
  font-size: 16px;
  line-height: 20px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.regular};
    color: ${colors.screens.update_profile.placeholder};
  `}
`;

export const Content = styled.View`
  margin-top: 36px;
`;

export const ButtonUserColors = styled(TouchableOpacity)<ButtonUserColorsProps>`
  margin-right: 32px;

  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.5;
        `}
`;

export const GradientUserColor = styled(LinearGradient)`
  width: 48px;
  height: 48px;

  border-radius: 24px;
`;
