import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, CustomLinearGradient, Title, Loading } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export const LinearButton: FC<Props> = (props) => {
  const { title, isLoading = false, ...rest } = props;

  const { colors } = useTheme();

  return (
    <Container activeOpacity={0.7} {...rest}>
      <CustomLinearGradient
        colors={colors.components.linear_button.background}
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
