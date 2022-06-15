import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { LinearGradientText } from "react-native-linear-gradient-text";

import { useAuth } from "../../hooks/useAuth";

import { Container, Card, Gradient } from "./styles";

interface Props extends TouchableOpacityProps {
  icon: any;
  title: string;
  isActive: boolean;
}

export const CategoryFood: FC<Props> = (props) => {
  const { icon: Icon, title, isActive, ...rest } = props;

  const { user } = useAuth();
  const { colors, fonts } = useTheme();

  const filterCardColor = isActive
    ? user.user_color
    : colors.components.category_food.inactive;

  const filterTitleColor = isActive
    ? user.user_color
    : colors.components.category_food.inactive_title;

  return (
    <Container>
      <Card activeOpacity={0.7} {...rest}>
        <Gradient
          colors={filterCardColor}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Icon />
        </Gradient>
      </Card>

      <LinearGradientText
        colors={filterTitleColor}
        text={title}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        textStyle={{
          marginVertical: 8,
          fontFamily: fonts.semi_bold,
          fontSize: 14,
        }}
      />
    </Container>
  );
};
