import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Code, LastUpdate, Status } from "./styles";

type TrackingCardProps = RectButtonProps & {
  code: string;
};

export function TrackingCard({ code, ...rest }: TrackingCardProps) {
  return (
    <Container {...rest}>
      <Code>{code}</Code>
      <LastUpdate>Last update: 3 days ago</LastUpdate>
      <Status>Status: in transit</Status>
    </Container>
  );
}
