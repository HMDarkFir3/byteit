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
