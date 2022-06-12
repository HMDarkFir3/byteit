import React, { useEffect, FC } from "react";
import { Animated, Easing } from "react-native";

import { Container, SkeletonAnimation } from "./styles";

interface Props {
  width: number;
  height: number;

  borderRadius?: number;
}

export const Skeleton: FC<Props> = (props) => {
  const { width, height, borderRadius, ...rest } = props;

  const animatedValue = new Animated.Value(0);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width * 2, width * 2],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  });

  return (
    <Container
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...rest}
    >
      <SkeletonAnimation style={{ transform: [{ translateX: translateX }] }} />
    </Container>
  );
};
