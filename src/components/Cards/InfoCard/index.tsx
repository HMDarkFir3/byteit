import React, { FC } from "react";
import { useTheme } from "styled-components/native";

import { Container, Title } from "./styles";

interface Props {
  icon: any;
  title: string | number;
}

export const InfoCard: FC<Props> = (props) => {
  const { icon: Icon, title } = props;

  const { colors } = useTheme();

  return (
    <Container>
      <Icon color={colors.components.info_card.title} size={24} />

      <Title>{title}</Title>
    </Container>
  );
};
