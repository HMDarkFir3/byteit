import React, { useState, FC } from "react";
import { ViewProps } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { Container, Thumb, Track } from "./styles";

interface Props extends ViewProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  thumbColor?: string[];
  trackColor?: {
    true: string;
    false: string;
  };
}

export const Switch: FC<Props> = (props) => {
  const {
    value,
    onValueChange,
    thumbColor = ["#ABB1BA", "#ABB1BA"],
    trackColor = {
      true: "#ffffff",
      false: "#ffffff",
    },
    ...rest
  } = props;

  const trackValue = value ? 0 : 20;

  const trackAnimation = useSharedValue<number>(trackValue);

  const trackStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: (trackAnimation.value = withTiming(trackAnimation.value, {
            duration: 1000,
          })),
        },
      ],
    };
  });

  function toggleValueChange() {
    onValueChange(value);

    if (value) {
      trackAnimation.value = withTiming((trackAnimation.value = 20), {
        duration: 1000,
      });
    } else {
      trackAnimation.value = withTiming((trackAnimation.value = 0), {
        duration: 1000,
      });
    }
  }

  return (
    <Container activeOpacity={0.7} onPress={toggleValueChange} {...rest}>
      <Thumb colors={thumbColor} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
        <Track
          style={trackStyle}
          color={value ? trackColor.true : trackColor.false}
        />
      </Thumb>
    </Container>
  );
};
