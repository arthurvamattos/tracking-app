import styled from "styled-components/native";

export const Container = styled.View`
  height: 64px;
  justify-content: center;
  position: relative;
`;

export const ActiveIndicator = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.background};
  position: absolute;
  bottom: -8px;
  left: 4px;
  transform: rotate(45deg);
`;
