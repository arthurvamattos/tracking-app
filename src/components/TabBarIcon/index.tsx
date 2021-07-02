import React from "react";
import { Feather } from "@expo/vector-icons";

type TabBarIconProps = {
  iconName: "plus-circle" | "bookmark";
  size: number;
  color: string;
  focused: boolean;
};

import { Container, ActiveIndicator } from "./styles";

export function TabBarIcon({
  iconName,
  size,
  color,
  focused,
}: TabBarIconProps) {
  return (
    <Container>
      <Feather name={iconName} size={size} color={color} />
      {focused && <ActiveIndicator />}
    </Container>
  );
}
