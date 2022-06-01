import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import {
  Container,
  Wrapper,
  Image,
  MenuWrapper,
  Title,
  Menu,
  Button,
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

        <Button isActive={isActive} />
      </Container>
    </TouchableOpacity>
  );
};
