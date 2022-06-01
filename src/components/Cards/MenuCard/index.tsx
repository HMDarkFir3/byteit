import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Plus } from "phosphor-react-native";

import { Container, Image, Title, Price, Button } from "./styles";

interface Props {
  data: {
    id: string;
    title: string;
    price: number;
    about: string;
    stars: number;
    preparing: string;
    image: string;
  };
}

export const MenuCard: FC<Props> = (props) => {
  const { title, price, image, about, preparing, stars } = props.data;

  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  function handleCard() {
    navigate("MenuDetails", {
      details: { title, price: formattedPrice, image, about, preparing, stars },
    });
  }

  return (
    <Container activeOpacity={0.7} onPress={handleCard}>
      <Image source={{ uri: image }} />

      <Title>{title}</Title>

      <Price>{formattedPrice}</Price>

      <Button>
        <Plus
          color={colors.components.menu_card.color_button}
          size={16}
          weight="bold"
        />
      </Button>
    </Container>
  );
};
