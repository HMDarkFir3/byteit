import React, { useState, useCallback, FC } from "react";
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
  SubHeader,
  Content,
  Image,
  InfoWrapper,
  InfoContent,
  AboutWrapper,
  ButtonContainer,
  Margin,
  Overflow,
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
        <SubHeader>
          <Overflow>
            <Skeleton width={28} height={28} borderRadius={12} />
          </Overflow>

          <Overflow>
            <Skeleton width={82} height={54} borderRadius={12} />
          </Overflow>

          <Overflow>
            <Skeleton width={28} height={28} borderRadius={12} />
          </Overflow>
        </SubHeader>

        <Image>
          <Skeleton width={256} height={256} borderRadius={128} />
        </Image>
      </Header>

      <Content>
        <Margin marginLeft={24} marginTop={140}>
          <Skeleton width={240} height={34} borderRadius={8} />
        </Margin>

        <InfoWrapper>
          <InfoContent>
            <Margin marginRight={16}>
              <Skeleton width={80} height={32} borderRadius={8} />
            </Margin>
            <Skeleton width={80} height={32} borderRadius={8} />
          </InfoContent>

          <Skeleton width={132} height={40} borderRadius={8} />
        </InfoWrapper>

        <AboutWrapper>
          <Skeleton width={58} height={24} borderRadius={8} />

          <Margin marginTop={16}>
            <Skeleton
              width={Number(Dimensions.get("screen").width - 48)}
              height={88}
              borderRadius={8}
            />
          </Margin>
        </AboutWrapper>
      </Content>

      <ButtonContainer>
        <Skeleton
          width={Number(Dimensions.get("screen").width - 48)}
          height={64}
          borderRadius={8}
        />
      </ButtonContainer>
    </Container>
  );
};
