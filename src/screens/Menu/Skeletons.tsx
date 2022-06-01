import React, { FC } from "react";
import { Dimensions, View } from "react-native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { Skeleton } from "../../components/Skeleton";

import {
  Container,
  Header,
  CategoryFoodWrapper,
  MenuCardWrapper,
  Margin,
} from "./styles.skeleton";

export const Skeletons: FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar style={theme.title === "light" ? "dark" : "light"} />
      <Header>
        <Skeleton width={156} height={44} borderRadius={8} />

        <Skeleton width={50} height={50} borderRadius={25} />
      </Header>

      <Skeleton
        width={Number(Dimensions.get("screen").width - 48)}
        height={56}
        borderRadius={16}
      />

      <CategoryFoodWrapper>
        <Margin marginRight={24}>
          <Skeleton width={64} height={64} borderRadius={16} />
        </Margin>

        <Margin marginRight={24}>
          <Skeleton width={64} height={64} borderRadius={16} />
        </Margin>

        <Margin marginRight={24}>
          <Skeleton width={64} height={64} borderRadius={16} />
        </Margin>
      </CategoryFoodWrapper>

      <Margin marginTop={16}>
        <MenuCardWrapper>
          <Skeleton
            width={Dimensions.get("screen").width / 2.43}
            height={224}
            borderRadius={16}
          />

          <Skeleton
            width={Dimensions.get("screen").width / 2.43}
            height={224}
            borderRadius={16}
          />
        </MenuCardWrapper>

        <MenuCardWrapper>
          <Skeleton
            width={Dimensions.get("screen").width / 2.43}
            height={224}
            borderRadius={16}
          />

          <Skeleton
            width={Dimensions.get("screen").width / 2.43}
            height={224}
            borderRadius={16}
          />
        </MenuCardWrapper>

        <MenuCardWrapper>
          <Skeleton
            width={Dimensions.get("screen").width / 2.43}
            height={224}
            borderRadius={16}
          />

          <Skeleton
            width={Dimensions.get("screen").width / 2.43}
            height={224}
            borderRadius={16}
          />
        </MenuCardWrapper>
      </Margin>
    </Container>
  );
};
