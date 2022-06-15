import React, { FC } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradientText } from "react-native-linear-gradient-text";
import { BookOpen, Receipt, UsersThree, User } from "phosphor-react-native";

import { Container, NavigationButton, Gradient } from "./styles";

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
        <MaskedView
          maskElement={
            <BookOpen
              style={{ backgroundColor: "transparent" }}
              size={24}
              weight={state.index === 0 ? "fill" : "regular"}
            />
          }
        >
          <Gradient
            colors={
              state.index === 0
                ? colors.bottom_tabs.active
                : colors.bottom_tabs.inactive
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <BookOpen
              style={{ opacity: 0 }}
              size={24}
              weight={state.index === 0 ? "fill" : "regular"}
            />
          </Gradient>
        </MaskedView>

        <LinearGradientText
          text="Cardápio"
          colors={
            state.index === 0
              ? colors.bottom_tabs.active
              : colors.bottom_tabs.inactive
          }
        />
      </NavigationButton>

      <NavigationButton activeOpacity={0.5} onPress={() => goTo("Demands")}>
        <MaskedView
          maskElement={
            <Receipt
              style={{ backgroundColor: "transparent" }}
              size={24}
              weight={state.index === 1 ? "fill" : "regular"}
            />
          }
        >
          <Gradient
            colors={
              state.index === 1
                ? colors.bottom_tabs.active
                : colors.bottom_tabs.inactive
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <Receipt
              style={{ opacity: 0 }}
              size={24}
              weight={state.index === 1 ? "fill" : "regular"}
            />
          </Gradient>
        </MaskedView>

        <LinearGradientText
          text="Pedidos"
          colors={
            state.index === 1
              ? colors.bottom_tabs.active
              : colors.bottom_tabs.inactive
          }
        />
      </NavigationButton>

      <NavigationButton activeOpacity={0.5} onPress={() => goTo("Groups")}>
        <MaskedView
          maskElement={
            <UsersThree
              style={{ backgroundColor: "transparent" }}
              size={24}
              weight={state.index === 2 ? "fill" : "regular"}
            />
          }
        >
          <Gradient
            colors={
              state.index === 2
                ? colors.bottom_tabs.active
                : colors.bottom_tabs.inactive
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <UsersThree
              style={{ opacity: 0 }}
              size={24}
              weight={state.index === 2 ? "fill" : "regular"}
            />
          </Gradient>
        </MaskedView>

        <LinearGradientText
          text="Grupos"
          colors={
            state.index === 2
              ? colors.bottom_tabs.active
              : colors.bottom_tabs.inactive
          }
        />
      </NavigationButton>

      <NavigationButton activeOpacity={0.5} onPress={() => goTo("Profile")}>
        <MaskedView
          maskElement={
            <User
              style={{ backgroundColor: "transparent" }}
              size={24}
              weight={state.index === 3 ? "fill" : "regular"}
            />
          }
        >
          <Gradient
            colors={
              state.index === 3
                ? colors.bottom_tabs.active
                : colors.bottom_tabs.inactive
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <User
              style={{ opacity: 0 }}
              size={24}
              weight={state.index === 3 ? "fill" : "regular"}
            />
          </Gradient>
        </MaskedView>

        <LinearGradientText
          text="Perfil"
          colors={
            state.index === 3
              ? colors.bottom_tabs.active
              : colors.bottom_tabs.inactive
          }
        />
      </NavigationButton>
    </Container>
  );
};
