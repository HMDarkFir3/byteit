import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-right: 16px;
  padding: 4px 8px;

  background-color: ${({ theme: { colors } }) =>
    colors.components.info_card.background};
  border-radius: 8px;
`;

export const Title = styled.Text`
  margin-left: 4px;

  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.components.info_card.title};
  `}
`;
