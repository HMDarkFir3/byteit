import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-right: 16px;
  padding: 4px 8px;

  border-radius: 16px;
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
