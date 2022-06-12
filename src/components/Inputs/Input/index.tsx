import React, { FC } from "react";
import { TextInputProps } from "react-native";

import { GradientText } from "../../GradientText";

import { Container, CustomInput } from "./styles";

interface Props extends TextInputProps {
  label: string;
}

export const Input: FC<Props> = (props) => {
  const { label, ...rest } = props;

  return (
    <Container>
      <GradientText style={{ alignSelf: "flex-start" }} title={label} />
      <CustomInput {...rest} />
    </Container>
  );
};
