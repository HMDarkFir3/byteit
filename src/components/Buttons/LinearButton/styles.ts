import styled, { css } from "styled-components/native";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(TouchableOpacity)``;

export const CustomLinearGradient = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  padding: 20px;

  border-radius: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.semi_bold};
    color: ${colors.components.linear_button.title};
  `}
`;

export const Loading = styled(ActivityIndicator)``;
