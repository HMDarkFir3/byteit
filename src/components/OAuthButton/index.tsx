import React, { FC } from "react";

import { Container } from "./styles";

interface Props {
  icon: any;
}

export const OAuthButton: FC<Props> = (props) => {
  const { icon: Icon } = props;

  return (
    <Container>
      <Icon />
    </Container>
  );
};
