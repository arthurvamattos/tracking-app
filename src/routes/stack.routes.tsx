import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../pages/Welcome";
import { TabRoutes } from "./tab.routes";
import { useTheme } from "../hooks/useTheme";

const Stack = createStackNavigator();

export function StackRoutes() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.background },
      }}
      headerMode="none"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Tab" component={TabRoutes} />
    </Stack.Navigator>
  );
}
