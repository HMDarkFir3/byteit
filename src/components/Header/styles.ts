import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface BorderProps {
  borderColor: string;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + 20}px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 36px;
  line-height: 44px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.screens.menu.title};
  `}
`;

export const Border = styled(TouchableOpacity)<BorderProps>`
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border: 3px solid ${({ borderColor }) => borderColor};
  border-radius: 25px;
`;

export const Image = styled.Image`
  width: 45px;
  height: 45px;

  border-radius: 25px;
`;
