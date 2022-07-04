import React, { useState, FC } from "react";
import { TextInputProps, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { Eye, EyeSlash } from "phosphor-react-native";

import { Container, CustomInput } from "./styles";

interface Props extends TextInputProps {
  icon: any;
  isPassword?: boolean;
}

export const FormInput: FC<Props> = (props) => {
  const { icon: Icon, isPassword = false, ...rest } = props;

  const { colors } = useTheme();

  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(true);

  return (
    <Container>
      <Icon />
      <CustomInput
        placeholderTextColor={colors.components.form_input.placeholder}
        secureTextEntry={isVisiblePassword}
        {...rest}
      />

      {isPassword && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsVisiblePassword(!isVisiblePassword)}
        >
          {isVisiblePassword ? (
            <Eye color={colors.screens.sign_in.placeholder} size={32} />
          ) : (
            <EyeSlash color={colors.screens.sign_in.placeholder} size={32} />
          )}
        </TouchableOpacity>
      )}
    </Container>
  );
};
