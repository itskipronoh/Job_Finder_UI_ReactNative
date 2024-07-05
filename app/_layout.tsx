import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import 'expo-router/entry';

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "WELCOME TO JOB FINDER!",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3F6CDF",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}

    </Stack>
    </GestureHandlerRootView>
  );
}
