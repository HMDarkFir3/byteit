import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import { useAuth } from "../../hooks/useAuth";

import { GradientText } from "../../components/GradientText";

import { Container, Card, Gradient, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  icon: any;
  title: string;
  isActive: boolean;
}

export const CategoryFood: FC<Props> = (props) => {
  const { icon: Icon, title, isActive, ...rest } = props;

  const { user } = useAuth();
  const { colors } = useTheme();

  const filterColor = isActive
    ? user.user_color
    : colors.components.category_food.inactive;

  return (
    <Container>
      <Card activeOpacity={0.7} {...rest}>
        <Gradient
          colors={filterColor}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Icon />
        </Gradient>
      </Card>

      <GradientText style={{ marginTop: 8 }} title={title} />
    </Container>
  );
};
