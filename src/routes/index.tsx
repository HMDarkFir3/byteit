import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/useAuth";

import { AuthRoutes } from "./auth.routes";
import { AppStackRoutes } from "./app.stack.routes";

export const Routes: FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user?.uid ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
