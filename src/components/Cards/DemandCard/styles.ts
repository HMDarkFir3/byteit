import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
  padding: 20px;

  background-color: ${({ theme: { colors } }) =>
    colors.components.demand_card.background};
  border-radius: 32px;
`;

export const Image = styled.Image`
  width: 96px;
  height: 96px;

  border-radius: 48px;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;

  height: 96px;

  padding-left: 12px;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.components.demand_card.title};
  `}
`;

export const Price = styled.Text`
  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.semi_bold};
    color: ${colors.components.demand_card.price};
  `}
`;

export const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: space-between;

  height: 100px;

  padding: 4px;

  border: 2px solid
    ${({ theme: { colors } }) => colors.components.demand_card.border};
  border-radius: 32px;
`;

export const Button = styled(TouchableOpacity)`
  border-radius: 12px;

  elevation: 5;
`;

export const Gradient = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  border-radius: 12px;
`;

export const Count = styled.Text`
  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.semi_bold};
    color: ${colors.components.demand_card.count};
  `}
`;
