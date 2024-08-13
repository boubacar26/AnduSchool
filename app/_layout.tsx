import React, { useEffect, useRef } from "react";
import { DarkTheme, DefaultTheme, NavigationContainer, NavigationContainerRef} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemeProvider } from "@react-navigation/native";
// import Loading from "@/components/Loading";

SplashScreen.preventAutoHideAsync();
type RootStackParamList = {
  Carousel: undefined;
  Otp: undefined;
  CodeVerification: undefined;
  Enfants: undefined;
  DetailEnfant: undefined;
};

function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const insets = useSafeAreaInsets();
  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList> | null>(null);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: theme.colors.background,
      }}
    >
      <ThemeProvider value={theme}>
        <Stack
          initialRouteName={"Carousel"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Carousel" options={{ headerShown: false }} />
          <Stack.Screen name="Otp" options={{ headerShown: false }} />
          <Stack.Screen
            name="CodeVerification"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Enfants" options={{ headerShown: false }} />
          <Stack.Screen name="DetailEnfant" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer independent>
      <RootLayout />
    </NavigationContainer>
  );
}
