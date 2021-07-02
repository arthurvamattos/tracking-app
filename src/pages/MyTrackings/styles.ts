import styled from "styled-components/native";
import Constants from "expo-constants";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.ScrollView`
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  padding: 24px;
  padding-top: ${Constants.statusBarHeight + 24}px;
  padding-bottom: 56px;
`;

export const BackButton = styled(RectButton)`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 30px;
  line-height: 34px;
  margin-top: 16px;
  margin-bottom: 24px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.text};
`;

export const Divider = styled.View`
  height: 48px;
`;
