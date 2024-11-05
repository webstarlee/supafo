import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Inter_900Black, useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold
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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="login" options={{headerShown: false}} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
