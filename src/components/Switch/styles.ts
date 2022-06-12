import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface TrackProps {
  color: string;
}

export const Container = styled(AnimatedTouchableOpacity)``;

export const Thumb = styled(AnimatedLinearGradient)`
  justify-content: center;

  width: 44px;
  height: 24px;

  padding: 0 3px;

  border-radius: 100px;
`;

export const Track = styled(Animated.View)<TrackProps>`
  width: 18px;
  height: 18px;

  border-radius: 20px;

  ${({ color }) => css`
    background-color: ${color};
  `}
`;
