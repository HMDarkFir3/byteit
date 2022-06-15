import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 64px;

  background-color: ${({ theme: { colors } }) => colors.bottom_tabs.background};
`;

export const NavigationButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  position: absolute;
`;

export const Gradient = styled(LinearGradient)`
  width: 24px;
  height: 24px;
`;
