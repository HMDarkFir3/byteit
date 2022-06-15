import React, { FC } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { LinearGradientText } from "react-native-linear-gradient-text";

import { useAuth } from "../../../hooks/useAuth";

import { Container, CustomInput, LeftAlignment } from "./styles";

interface Props extends TextInputProps {
  label: string;
}

export const Input: FC<Props> = (props) => {
  const { label, ...rest } = props;

  const { user } = useAuth();
  const { fonts } = useTheme();

  return (
    <Container>
      <LeftAlignment>
        <LinearGradientText
          colors={user.user_color}
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
