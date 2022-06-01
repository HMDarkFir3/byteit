import styled, { css } from "styled-components/native";
import { Animated } from "react-native";

interface ContainerProps {
  width: number;
  height: number;

  borderRadius: number;
}

export const Container = styled.View<ContainerProps>`
  ${({ theme: { colors }, width, height }) => css`
    width: ${width}px;
    height: ${height}px;

    background-color: ${colors.skeleton.card};
  `}

  ${({ borderRadius }) =>
    !!borderRadius &&
    css`
      border-radius: ${borderRadius}px;
    `}
`;

export const SkeletonAnimation = styled(Animated.View)`
  width: 30%;
  height: 100%;

  background-color: ${({ theme: { colors } }) => colors.skeleton.background};

  opacity: 0.3;
`;
