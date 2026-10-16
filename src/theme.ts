import { Platform } from 'react-native';

export const colors = {
  navyDeep: '#04101F',
  navy: '#071A33',
  navyRaised: '#0B2546',
  gold: '#D4A64A',
  goldLight: '#F2C76E',
  goldLine: 'rgba(212, 166, 74, 0.45)',
  goldFaint: 'rgba(212, 166, 74, 0.14)',
  ivory: '#F4EEE1',
  muted: '#AEB9CC',
};

// 8-point spacing scale. Every gap on the site comes from here so that
// left/right and top/bottom spacing always match.
export const space = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 40,
  xl: 64,
  xxl: 96,
};

export const fonts = {
  display: 'Cinzel_700Bold',
  displayRegular: 'Cinzel_400Regular',
  serif: 'CormorantGaramond_500Medium',
  serifItalic: 'CormorantGaramond_500Medium_Italic',
  serifBold: 'CormorantGaramond_700Bold',
};

export const contentMaxWidth = 1120;

// Web-only style props (CSS transitions, cursor) that React Native's types don't know about.
export const webOnly = (style: Record<string, unknown>): object =>
  Platform.OS === 'web' ? style : {};
