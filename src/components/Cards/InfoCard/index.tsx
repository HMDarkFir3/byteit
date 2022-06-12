import React, { FC } from "react";
import { useTheme } from "styled-components/native";

import { useAuth } from "../../../hooks/useAuth";

import { Container, Title } from "./styles";

interface Props {
  icon: any;
  title: string | number;
}

export const InfoCard: FC<Props> = (props) => {
  const { icon: Icon, title } = props;

  const { user } = useAuth();
  const { colors } = useTheme();

  return (
    <Container
      colors={user.user_color}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    >
      <Icon color={colors.components.info_card.title} size={24} />

      <Title>{title}</Title>
    </Container>
  );
};
