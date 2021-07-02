import { Feather } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "../../hooks/useTheme";

import { TrackingCard } from "../../components/TrackingCard";

import { Container, BackButton, Title, Divider } from "./styles";

export function MyTrackings() {
  const { theme } = useTheme();

  return (
    <Container
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <BackButton>
        <Feather name="arrow-left" size={24} color={theme.colors.black} />
      </BackButton>
      <Title>My Trackings</Title>

      <TrackingCard code="BR010101010145555EF" />
      <TrackingCard code="BR010101010145555EF" />
      <TrackingCard code="BR010101010145555EF" />
      <TrackingCard code="BR010101010145555EF" />
      <TrackingCard code="BR010101010145555EF" />

      <Divider />
    </Container>
  );
}
