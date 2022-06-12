import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme: { colors } }) =>
    colors.screens.menu.background};
`;

export const CountGroupWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;
`;

export const GroupLabel = styled.Text`
  margin-left: 6px;

  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.groups.label};
  `}
`;
