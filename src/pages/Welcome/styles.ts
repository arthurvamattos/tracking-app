import { RectButton } from "react-native-gesture-handler";
import { darken } from "polished";
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 28px;
  line-height: 36px;
  text-align: center;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 18px;
  line-height: 40px;
  text-align: center;
`;

export const Input = styled.TextInput`
  align-self: stretch;

  height: 48px;
  text-align: center;
  border: 1px;
  border-color: ${(props) => props.theme.colors.white};
  border-radius: 16px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 14px;
  margin-top: 12px;
`;

export const Button = styled(RectButton)`
  align-self: stretch;
  height: 48px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.enabled
      ? props.theme.colors.primary
      : darken(0.2, props.theme.colors.primary)};
  margin-top: 28px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-family: ${(props) => props.theme.fonts.bold};
`;
