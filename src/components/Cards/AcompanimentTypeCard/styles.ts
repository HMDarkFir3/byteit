import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 24px;
  padding: 16px 24px;

  background-color: ${({ theme: { colors } }) =>
    colors.components.accompaniment_type_card.background};
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.components.accompaniment_type_card.title};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: 4px;

  font-size: 16px;
  line-height: 20px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.regular};
    color: ${colors.components.accompaniment_type_card.placeholder};
  `}
`;
