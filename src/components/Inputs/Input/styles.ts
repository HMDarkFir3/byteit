import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View``;

export const CustomInput = styled(TextInput)`
  width: 100%;
  height: 64px;

  margin-top: 12px;
  padding: 0 24px;

  border-radius: 16px;

  font-size: 20px;

  ${({ theme: { colors, fonts } }) => css`
    background-color: ${colors.components.input.background};
    border: solid 1px ${colors.components.input.border};

    font-family: ${fonts.regular};
    color: ${colors.components.input.text};
  `}
`;

export const LeftAlignment = styled.View`
  align-self: flex-start;
`;
