import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/Home";
import { MyTrackings } from "../pages/MyTrackings";
import { useTheme } from "../hooks/useTheme";

import { TabBarIcon } from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.white,
        showLabel: false,

        style: {
          marginHorizontal: 24,
          marginVertical: 8,
          borderRadius: 16,
          elevation: 0,
          shadowColor: "none",
          height: 64,
          backgroundColor:
            theme.title === "light"
              ? theme.colors.black
              : theme.colors.foreground,
          overflow: "hidden",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <TabBarIcon
              iconName="plus-circle"
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyTrackings"
        component={MyTrackings}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <TabBarIcon
              iconName="bookmark"
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
