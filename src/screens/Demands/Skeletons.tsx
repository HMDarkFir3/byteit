import React, { FC } from "react";
import { Dimensions, View } from "react-native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { Skeleton } from "../../components/Skeleton";

import {
  Container,
  Header,
  Subheader,
  Wrapper,
  Margin,
} from "./styles.skeleton";

export const Skeletons: FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar style={theme.title === "light" ? "dark" : "light"} />

      <Header>
        <Skeleton width={140} height={44} borderRadius={8} />

        <Skeleton width={50} height={50} borderRadius={25} />
      </Header>

      <Subheader>
        <Skeleton width={96} height={24} borderRadius={8} />

        <Skeleton width={150} height={24} borderRadius={8} />
      </Subheader>

      <Wrapper>
        <Margin marginBottom={24}>
          <Skeleton
            width={Number(Dimensions.get("screen").width - 48)}
            height={144}
            borderRadius={24}
          />
        </Margin>

        <Margin marginBottom={24}>
          <Skeleton
            width={Number(Dimensions.get("screen").width - 48)}
            height={144}
            borderRadius={24}
          />
        </Margin>

        <Margin marginBottom={24}>
          <Skeleton
            width={Number(Dimensions.get("screen").width - 48)}
            height={144}
            borderRadius={24}
          />
        </Margin>
      </Wrapper>
    </Container>
  );
};
