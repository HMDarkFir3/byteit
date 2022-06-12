import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppTabRoutes } from "./app.tab.routes";

import { MenuDetails } from "../screens/MenuDetails";
import { UpdateProfile } from "../screens/UpdateProfile";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppStackRoutes: FC = () => {
  return (
    <Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Screen name="AppTabRoutes" component={AppTabRoutes} />
      <Screen name="MenuDetails" component={MenuDetails} />
      <Screen name="UpdateProfile" component={UpdateProfile} />
    </Navigator>
  );
};
