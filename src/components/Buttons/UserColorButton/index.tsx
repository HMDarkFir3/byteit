import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Gradient } from "./styles";

interface Props extends TouchableOpacityProps {
  isActive: boolean;
  data: {
    id: string;
    colors: string[];
  };
}

export const UserColorButton: FC<Props> = (props) => {
  const { isActive, ...rest } = props;
  const { colors } = props.data;

  return (
    <Container isActive={isActive} {...rest}>
      <Gradient colors={colors} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} />
    </Container>
  );
};
