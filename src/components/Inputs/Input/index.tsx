import React, { FC } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { LinearGradientText } from "react-native-linear-gradient-text";

import { Container, CustomInput, LeftAlignment } from "./styles";

interface Props extends TextInputProps {
  label: string;
  userColor: string[];
}

export const Input: FC<Props> = (props) => {
  const { label, userColor, ...rest } = props;

  const { fonts } = useTheme();

  return (
    <Container>
      <LeftAlignment>
        <LinearGradientText
          colors={userColor}
          text={label}
          textStyle={{
            alignSelf: "flex-start",
            fontFamily: fonts.semi_bold,
            fontSize: 20,
          }}
        />
      </LeftAlignment>
      <CustomInput {...rest} />
    </Container>
  );
};
