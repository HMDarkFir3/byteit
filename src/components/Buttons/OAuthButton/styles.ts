import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  padding: 12px 20px;

  border-radius: 16px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.components.o_auth_button.background};
    border: 1px solid ${colors.components.o_auth_button.border};
  `}
`;
