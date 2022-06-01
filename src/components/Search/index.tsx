import React, { FC } from "react";
import { useTheme } from "styled-components/native";
import { MagnifyingGlass } from "phosphor-react-native";

import { Container, Input } from "./styles";

export const Search: FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <MagnifyingGlass color={colors.components.search.placeholder} size={24} />
      <Input
        placeholder="Pesquisar"
        placeholderTextColor={colors.components.search.placeholder}
      />
    </Container>
  );
};
