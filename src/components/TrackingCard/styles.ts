import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  margin-top: 8px;
  border-radius: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.foreground};
`;

export const Code = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const LastUpdate = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 14px;
  line-height: 18px;
`;

export const Status = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 12px;
  line-height: 16px;
`;
