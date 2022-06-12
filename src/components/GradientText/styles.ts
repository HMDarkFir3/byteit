import styled, { css } from "styled-components/native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(MaskedView)``;

export const CustomGradient = styled(LinearGradient)``;

export const Title = styled.Text`
  font-size: 20px;

  line-height: 24px;

  ${({ theme: { fonts } }) => css`
    font-family: ${fonts.medium};
  `}
  color: black;
`;
