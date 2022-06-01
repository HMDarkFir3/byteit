import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes: FC = () => {
  return (
    <Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};
