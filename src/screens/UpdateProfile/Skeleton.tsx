import React, { useCallback, FC } from "react";
import { View, Dimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

import { useCustomTheme } from "../../hooks/useCustomTheme";

import { Skeleton } from "../../components/Skeleton";

import {
  Container,
  Header,
  LeftIcon,
  RightIcon,
  Content,
  UserColors,
  Margin,
} from "./styles.skeleton";

export const Skeletons: FC = () => {
  const { theme } = useCustomTheme();
  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(colors.navigation_bar.color);
      NavigationBar.setBorderColorAsync(colors.navigation_bar.color);
      NavigationBar.setButtonStyleAsync(
        theme.title === "light" ? "dark" : "light"
      );
    }, [theme.title])
  );

  return (
    <Container>
      <StatusBar style="light" />

      <Header>
        <LeftIcon>
          <Skeleton width={28} height={28} borderRadius={8} />
        </LeftIcon>

        <RightIcon>
          <Skeleton width={28} height={28} borderRadius={8} />
        </RightIcon>

        <View style={{ overflow: "hidden" }}>
          <Skeleton width={184} height={184} borderRadius={92} />
        </View>

        <Margin marginTop={24} marginBottom={8}>
          <Skeleton width={178} height={40} borderRadius={8} />
        </Margin>

        <Skeleton width={218} height={20} borderRadius={8} />
      </Header>

      <Content>
        <Margin marginBottom={12}>
          <Skeleton width={56} height={24} borderRadius={8} />
        </Margin>

        <Skeleton
          width={Number(Dimensions.get("screen").width - 48)}
          height={64}
          borderRadius={16}
        />

        <Margin marginTop={28} marginBottom={12}>
          <Skeleton width={56} height={24} borderRadius={8} />
        </Margin>

        <UserColors>
          <Margin marginRight={24}>
            <Skeleton width={48} height={48} borderRadius={24} />
          </Margin>

          <Margin marginRight={24}>
            <Skeleton width={48} height={48} borderRadius={24} />
          </Margin>

          <Margin marginRight={24}>
            <Skeleton width={48} height={48} borderRadius={24} />
          </Margin>

          <Margin marginRight={24}>
            <Skeleton width={48} height={48} borderRadius={24} />
          </Margin>

          <Skeleton width={48} height={48} borderRadius={24} />
        </UserColors>
      </Content>
    </Container>
  );
};
