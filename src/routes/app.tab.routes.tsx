import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { BookOpen, Receipt, UsersThree, User } from "phosphor-react-native";

import { useAuth } from "../hooks/useAuth";

import { Menu } from "../screens/Menu";
import { Demands } from "../screens/Demands";
import { Groups } from "../screens/Groups";
import { Profile } from "../screens/Profile";

import { CustomTabBar } from "../components/CustomTabBar";

const { Navigator, Screen } = createBottomTabNavigator();

export const AppTabRoutes: FC = () => {
  const { user } = useAuth();
  const { colors, fonts } = useTheme();

  return (
    <Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        header: () => null,

        tabBarStyle: {
          height: 64,
          backgroundColor: colors.bottom_tabs.background,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
          textTransform: "uppercase",
          fontFamily: fonts.semi_bold,
          fontSize: 10,
        },
        tabBarActiveTintColor: colors.bottom_tabs.active,
        tabBarInactiveTintColor: colors.bottom_tabs.inactive,
      }}
    >
      <Screen
        options={{
          title: "Cardápio",
          tabBarIcon: ({ color, size, focused }) => (
            <BookOpen
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
        name="Menu"
        component={Menu}
      />

      <Screen
        options={{
          title: "Pedidos",
          tabBarIcon: ({ color, size, focused }) => (
            <Receipt
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
        name="Demands"
        component={Demands}
      />

      <Screen
        options={{
          title: "Grupos",
          tabBarIcon: ({ color, size, focused }) => (
            <UsersThree
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
        name="Groups"
        component={Groups}
      />

      <Screen
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size, focused }) => (
            <User
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Navigator>
  );
};
