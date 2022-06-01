import React, { FC } from "react";

import { Container, Title } from "./styles";

interface Props {
  title: string;
}

export const Button: FC<Props> = (props) => {
  const { title } = props;

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
