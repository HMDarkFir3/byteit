import React, { FC } from "react";
import { TextProps, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

import { useAuth } from "../../hooks/useAuth";

import { CustomGradient, Title } from "./styles";

interface Props extends TextProps {
  title: string;
}

export const GradientText: FC<Props> = (props) => {
  const { title, ...rest } = props;

  const { user } = useAuth();

  return (
    <MaskedView
      maskElement={
        <Title style={{ backgroundColor: "transparent" }}>{title}</Title>
      }
      {...rest}
    >
      <CustomGradient
        colors={user.user_color}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        <Title style={{ opacity: 0 }}>{title}</Title>
      </CustomGradient>
    </MaskedView>
  );
};
