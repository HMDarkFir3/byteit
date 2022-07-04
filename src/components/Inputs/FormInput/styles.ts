import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 64px;

  padding: 0 20px;

  border-radius: 16px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.components.form_input.background};
    border: solid 1px ${colors.components.form_input.border};
  `}
`;

export const CustomInput = styled(TextInput)`
  flex: 1;
  height: 64px;

  padding: 0 16px;

  font-size: 20px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.regular};
    color: ${colors.components.form_input.text};
  `}
`;
