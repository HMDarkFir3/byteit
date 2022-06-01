import React, { useState, FC } from "react";
import { useTheme } from "styled-components/native";
import { Plus, Minus } from "phosphor-react-native";

import {
  Container,
  Image,
  Wrapper,
  Title,
  Price,
  ButtonWrapper,
  Button,
  Count,
} from "./styles";

interface Props {
  data: {
    id: string;
    title: string;
    price: number;
    image: string;
  };
}

export const DemandCard: FC<Props> = (props) => {
  const { title, price, image } = props.data;

  const { colors } = useTheme();

  const [count, setCount] = useState<number>(1);

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <Container>
      <Image source={{ uri: image }} />

      <Wrapper>
        <Title>{title}</Title>

        <Price>{formattedPrice}</Price>
      </Wrapper>

      <ButtonWrapper>
        <Button activeOpacity={0.7} onPress={handlePlus}>
          <Plus color={colors.components.demand_card.count_icon} size={16} />
        </Button>

        <Count>{count}</Count>

        <Button activeOpacity={0.7} onPress={handleMinus}>
          <Minus color={colors.components.demand_card.count_icon} size={16} />
        </Button>
      </ButtonWrapper>
    </Container>
  );
};
