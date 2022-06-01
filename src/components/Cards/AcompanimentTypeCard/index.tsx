import React, { FC } from "react";

import { Container, Title, Subtitle } from "./styles";

interface Props {
  title: string;
  subtitle: string;
}

export const AccompanimentTypeCard: FC<Props> = (props) => {
  const { title, subtitle } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
