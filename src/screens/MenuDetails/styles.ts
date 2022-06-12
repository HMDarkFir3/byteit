import styled, { css } from "styled-components/native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const Header = styled(AnimatedLinearGradient)`
  padding: 0 24px;

  background-color: ${({ theme: { colors } }) =>
    colors.screens.menu_details.header};

  z-index: 1;
`;

export const SubHeader = styled.View`
  margin-top: ${getStatusBarHeight()}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled(Animated.ScrollView)`
  background-color: ${({ theme: { colors } }) =>
    colors.screens.menu_details.background};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  z-index: 0;
`;

export const Image = styled(Animated.Image)`
  align-self: center;
  position: absolute;
  bottom: -128px;

  width: 256px;
  height: 256px;

  border-radius: 128px;
`;

export const Title = styled.Text`
  padding: 0 24px;

  font-size: 24px;
  line-height: 34px;

  z-index: 1;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.menu_details.primary_text};
  `}
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

export const Price = styled.Text`
  font-size: 32px;
  line-height: 38px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.semi_bold};
    color: ${colors.screens.menu_details.price};
  `}
`;

export const AboutWrapper = styled.View`
  padding: 0 24px;
`;

export const About = styled.Text`
  margin-top: 36px;

  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.menu_details.primary_text};
  `}
`;

export const Description = styled.Text`
  margin-top: 16px;

  font-size: 18px;
  line-height: 22px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.regular};
    color: ${colors.screens.menu_details.placeholder};
  `}
`;

export const Accompaniment = styled.View`
  margin-bottom: 152px;
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
