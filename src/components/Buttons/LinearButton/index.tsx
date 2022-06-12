import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import { useAuth } from "../../../hooks/useAuth";

import { Container, CustomLinearGradient, Title, Loading } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export const LinearButton: FC<Props> = (props) => {
  const { title, isLoading = false, ...rest } = props;

  const { user } = useAuth();
  const { colors } = useTheme();

  const fomarttedColor = user?.uid!
    ? user?.user_color!
    : ["#E76F00", "#EA374E"];

  return (
    <Container activeOpacity={0.7} {...rest}>
      <CustomLinearGradient
        colors={fomarttedColor}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        {isLoading ? (
          <Loading color={colors.components.linear_button.title} size={24} />
        ) : (
          <Title>{title}</Title>
        )}
      </CustomLinearGradient>
    </Container>
  );
};
