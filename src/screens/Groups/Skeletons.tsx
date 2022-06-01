import React, { FC } from "react";
import { Dimensions, View } from "react-native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { Skeleton } from "../../components/Skeleton";

import { Container, Header, Wrapper, Margin } from "./styles.skeleton";

export const Skeletons: FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar style={theme.title === "light" ? "dark" : "light"} />

      <Header>
        <Skeleton width={156} height={44} borderRadius={8} />

        <Skeleton width={50} height={50} borderRadius={25} />
      </Header>

      <Skeleton width={152} height={24} borderRadius={8} />

      <Wrapper>
        <Margin marginBottom={24}>
          <Skeleton
            width={Number(Dimensions.get("screen").width - 48)}
            height={104}
            borderRadius={24}
          />
        </Margin>

        <Margin marginBottom={24}>
          <Skeleton
            width={Number(Dimensions.get("screen").width - 48)}
            height={104}
            borderRadius={24}
          />
        </Margin>

        <Margin marginBottom={24}>
          <Skeleton
            width={Number(Dimensions.get("screen").width - 48)}
            height={104}
            borderRadius={24}
          />
        </Margin>
      </Wrapper>
    </Container>
  );
};
