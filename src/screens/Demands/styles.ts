import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme: { colors } }) =>
    colors.screens.demands.background};
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const Subheader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const CountDemandWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Count = styled.Text`
  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.semi_bold};
    color: ${colors.screens.demands.count};
  `}
`;

export const DemandLabel = styled.Text`
  margin-left: 6px;

  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.demands.label};
  `}
`;

export const TotalValueDemand = styled.Text`
  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.demands.label};
  `}
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;

  width: 100%;

  padding: 20px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.screens.menu_details.background};
  `}
`;
