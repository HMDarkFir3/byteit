import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/useAuth";

import { Container, Title, Border, Image } from "./styles";

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

      <Border
        activeOpacity={0.7}
        onPress={handleImage}
        borderColor={user.user_color}
      >
        <Image source={{ uri: user?.image }} />
      </Border>
    </Container>
  );
};
