import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import {
  Container,
  Wrapper,
  Image,
  MenuWrapper,
  Title,
  Menu,
  Button,
  Gradient,
  GradientFill,
  InactiveFill,
} from "./styles";

interface Props extends TouchableOpacityProps {
  imageUri: string;
  title: string;
  menu?: string;
  isActive: boolean;
  style?: {
    opacity: number;
  };
}

export const AccompanimentSelectCard: FC<Props> = (props) => {
  const { imageUri, title, menu, isActive, style, ...rest } = props;

  const { colors } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <Container style={style}>
        <Wrapper>
          <Image source={{ uri: imageUri }} />

          <MenuWrapper>
            <Title>{title}</Title>
            {menu && <Menu>{menu}</Menu>}
          </MenuWrapper>
        </Wrapper>

        <Button isActive={isActive}>
          {isActive ? (
            <Gradient
              colors={colors.components.accompaniment_select_card.active}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >
              <GradientFill />
            </Gradient>
          ) : (
            <InactiveFill />
          )}
        </Button>
      </Container>
    </TouchableOpacity>
  );
};
