import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/useAuth";

import { Container, Title, Button, Border, Image } from "./styles";

interface Props {
  title: string;
}

export const Header: FC<Props> = (props) => {
  const { title } = props;

  const { user } = useAuth();
  const { navigate } = useNavigation();

  function handleImage() {
    navigate("Profile");
  }

  return (
    <Container>
      <Title>{title}</Title>

      <Button activeOpacity={0.7} onPress={handleImage}>
        <Border
          colors={user.user_color}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Image source={{ uri: user?.image }} />
        </Border>
      </Button>
    </Container>
  );
};
