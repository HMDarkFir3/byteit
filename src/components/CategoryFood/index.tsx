import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Card, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  icon: any;
  title: string;
  isActive: boolean;
}

export const CategoryFood: FC<Props> = (props) => {
  const { icon: Icon, title, isActive, ...rest } = props;

  return (
    <Container>
      <Card activeOpacity={0.7} isActive={isActive} {...rest}>
        <Icon />
      </Card>

      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
};
