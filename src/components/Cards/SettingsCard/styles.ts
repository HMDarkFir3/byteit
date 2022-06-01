import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 16px 0;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 16px;

  text-align: center;
  font-size: 20px;
  line-height: 24px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.components.settings_card.title};
  `}
`;
