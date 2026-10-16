import { Cinzel_400Regular, Cinzel_700Bold } from '@expo-google-fonts/cinzel';
import {
  CormorantGaramond_500Medium,
  CormorantGaramond_500Medium_Italic,
  CormorantGaramond_700Bold,
} from '@expo-google-fonts/cormorant-garamond';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { colors } from '../theme';

export default function RootLayout() {
  const [loaded] = useFonts({
    Cinzel_400Regular,
    Cinzel_700Bold,
    CormorantGaramond_500Medium,
    CormorantGaramond_500Medium_Italic,
    CormorantGaramond_700Bold,
  });

  // On web the statically rendered page shows immediately and the fonts swap in;
  // native platforms wait so text never renders with an unregistered font.
  if (!loaded && Platform.OS !== 'web') return null;

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.navyDeep },
          animation: 'fade',
        }}
      />
    </>
  );
}
