import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";

interface Props extends TouchableOpacityProps {
  icon: any;
}

export const OAuthButton: FC<Props> = (props) => {
  const { icon: Icon, ...rest } = props;

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Icon />
    </Container>
  );
};
