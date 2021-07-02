import React from "react";
import { transparentize } from "polished";
import { Feather } from "@expo/vector-icons";

import { useTheme } from "../../hooks/useTheme";
import DeleviryGirlImage from "../../assets/delivery-girl.png";

import {
  Container,
  Header,
  Heading,
  HeadingStrong,
  Title,
  Label,
  InputContainer,
  Input,
  Button,
  Callout,
  CalloutText,
  Image,
} from "./styles";

export function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Header>
        <Heading>
          Hello, <HeadingStrong>Arthur</HeadingStrong>
        </Heading>
        <Title>Create new tracking</Title>

        <Button fixed onPress={() => toggleTheme()}>
          <Feather
            name={theme.title === "light" ? "sun" : "moon"}
            size={24}
            color={theme.colors.background}
          />
        </Button>

        <Label>Enter the tracking code</Label>
        <InputContainer>
          <Input
            placeholder="BR010101010145555EF"
            placeholderTextColor={transparentize(0.2, theme.colors.text)}
          />
          <Button>
            <Feather name="plus" size={24} color={theme.colors.background} />
          </Button>
        </InputContainer>
      </Header>

      <Callout>
        <CalloutText>
          When you enter the code, we try to select the carrier automatically,
          you may need to correct it manually
        </CalloutText>
      </Callout>

      <Image source={DeleviryGirlImage} resizeMode="contain" />
    </Container>
  );
}
