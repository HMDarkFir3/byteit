import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Plus } from "phosphor-react-native";

import { MenuDTO } from "../../../dtos/MenuDTO";

import { Container, Image, Title, Price, Button, Gradient } from "./styles";

interface Props {
  data: MenuDTO;
}

export const MenuCard: FC<Props> = (props) => {
  const { name, price, image, about, preparing, stars, type } = props.data;

  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  function handleCard() {
    navigate("MenuDetails", {
      details: {
        name,
        price: formattedPrice,
        image,
        about,
        preparing,
        stars,
        type,
      },
    });
  }

  return (
    <Container activeOpacity={0.7} onPress={handleCard}>
      <Image source={{ uri: image }} />

      <Title>{name}</Title>

      <Price>{formattedPrice}</Price>

      <Button>
        <Gradient
          colors={colors.components.menu_card.add_button}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Plus
            color={colors.components.menu_card.color_button}
            size={16}
            weight="bold"
          />
        </Gradient>
      </Button>
    </Container>
  );
};
