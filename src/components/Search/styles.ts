import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 56px;

  padding: 0 20px;

  background-color: ${({ theme: { colors } }) =>
    colors.components.search.background};
  border-radius: 16px;
`;

export const Input = styled.TextInput`
  width: 100%;

  padding: 0 20px;

  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.regular};
    color: ${colors.components.search.title};
  `}
`;
