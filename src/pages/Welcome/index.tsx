import { useNavigation } from "@react-navigation/native";
import React from "react";

import { useTheme } from "../../hooks/useTheme";

import { Container, Title, Label, Input, Button, ButtonText } from "./styles";

import welcomeImg from "../../assets/welcome.png";
import { useState } from "react";

export function Welcome() {
  const [name, setName] = useState("");

  const navigator = useNavigation();
  const { theme } = useTheme();

  return (
    <Container
      source={welcomeImg}
      resizeMode="cover"
      imageStyle={{ alignSelf: "flex-end" }}
    >
      <Title>Welcome{"\n"} to the tracking app</Title>

      <Label>what should i call you?</Label>

      <Input
        placeholder="your name"
        placeholderTextColor={theme.colors.white}
        value={name}
        onChangeText={setName}
      />
      <Button
        enabled={name.trim().length > 3}
        onPress={() => navigator.navigate("Tab")}
      >
        <ButtonText>Get Started</ButtonText>
      </Button>
    </Container>
  );
}
