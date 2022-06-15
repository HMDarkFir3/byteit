import React, { FC } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "react-native-linear-gradient";
import { BookOpen, Receipt, UsersThree, User } from "phosphor-react-native";

import { Container, NavigationButton, Title } from "./styles";

interface Props extends BottomTabBarProps {}

export const CustomTabBar: FC<Props> = (props) => {
  const { navigation, state } = props;

  const { colors } = useTheme();

  function goTo(screenName: string) {
    navigation.navigate(screenName);
  }

  return (
    <Container>
      <NavigationButton activeOpacity={0.5} onPress={() => goTo("Menu")}>
        <BookOpen
          color={
            state.index === 0
              ? colors.bottom_tabs.active
              : colors.bottom_tabs.inactive
          }
          size={24}
          weight={state.index === 0 ? "fill" : "regular"}
        />
      </NavigationButton>

      <NavigationButton activeOpacity={0.5} onPress={() => goTo("Demands")}>
        <Receipt
          color={
            state.index === 1
              ? colors.bottom_tabs.active
              : colors.bottom_tabs.inactive
          }
          size={24}
          weight={state.index === 1 ? "fill" : "regular"}
        />
      </NavigationButton>

      <NavigationButton activeOpacity={0.5} onPress={() => goTo("Groups")}>
        <UsersThree
          color={
            state.index === 2
              ? colors.bottom_tabs.active
              : colors.bottom_tabs.inactive
          }
          size={24}
          weight={state.index === 2 ? "fill" : "regular"}
        />
      </NavigationButton>

      <NavigationButton activeOpacity={0.5} onPress={() => goTo("Profile")}>
        <User
          color={
            state.index === 3
              ? colors.bottom_tabs.active
              : colors.bottom_tabs.inactive
          }
          size={24}
          weight={state.index === 3 ? "fill" : "regular"}
        />
      </NavigationButton>
    </Container>
  );
};
