import styled, { css } from "styled-components/native";
import Constants from "expo-constants";
import { RectButton } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 36px 24px;
  height: 188px;
  background: ${(props) => props.theme.colors.primary};
`;

export const Heading = styled.Text`
  font-size: 24px;
  line-height: 28px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.black};
`;

export const HeadingStrong = styled.Text`
  font-size: 24px;
  line-height: 28px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.black};
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  margin-top: 20px;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.black};
`;

export const InputContainer = styled.View`
  margin-top: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.foreground};
  font-family: ${(props) => props.theme.fonts.regular};
  height: 48px;
  border-radius: 8px;
  padding: 0 12px;
  flex: 1;
`;

type ButtonProps = {
  fixed?: boolean;
};

export const Button = styled(RectButton)<ButtonProps>`
  height: 48px;
  width: 48px;
  border-radius: 12px;
  margin-left: 12px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.text};

  ${(props) =>
    props.fixed &&
    css`
      position: absolute;
      top: 20px;
      right: 24px;
    `}
`;

export const Callout = styled.View`
  margin: 36px 24px 24px;
  padding: 16px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.foreground};
`;

export const CalloutText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.foreground};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 12px;
  line-height: 20px;
`;

export const Image = styled.Image`
  height: ${Dimensions.get("window").width * 0.4}px;
  width: ${Dimensions.get("window").width * 0.6}px;
  margin: 0 auto;
`;
