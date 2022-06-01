import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 20px;

  background-color: ${({ theme: { colors } }) =>
    colors.components.button.background};
  border-radius: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.components.button.title};
  `}
`;
