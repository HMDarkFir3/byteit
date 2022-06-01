import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Wrapper, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  icon: any;
  title: string;
  hasOptionalElement?: boolean;
  optionalElement?: any;
}

export const SettingsCard: FC<Props> = (props) => {
  const {
    icon: Icon,
    title,
    hasOptionalElement = false,
    optionalElement: OptionalElement,
    ...rest
  } = props;

  const { colors } = useTheme();

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Wrapper>
        <Icon color={colors.components.settings_card.title} size={32} />
        <Title>{title}</Title>
      </Wrapper>

      {hasOptionalElement && <OptionalElement />}
    </Container>
  );
};
