import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./src/hooks/useTheme";

export default function App() {
  const { theme } = useTheme();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="auto" backgroundColor={theme.colors.primary} />
    </ThemeProvider>
  );
}
