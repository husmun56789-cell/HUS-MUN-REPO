import { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { conference } from '../data/committees';
import { colors, fonts, space } from '../theme';
import { Divider } from './Ornament';
import { useScroll } from './PageScroll';
import { useViewport } from '../hooks/useViewport';

const logo = require('../../assets/images/logo.png');
const background = require('../../assets/images/hero-bg.jpg');

export function Hero() {
  const { width, height } = useViewport();
  const { scrollY } = useScroll();
  const intro = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(intro, {
      toValue: 1,
      duration: 1400,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 2600, easing: Easing.inOut(Easing.sin), useNativeDriver: false }),
        Animated.timing(pulse, { toValue: 0, duration: 2600, easing: Easing.inOut(Easing.sin), useNativeDriver: false }),
      ]),
    ).start();
  }, [intro, pulse]);

  const compact = width < 600;
  const logoSize = Math.min(width * 0.62, compact ? 260 : 340);
  const heroHeight = Math.max(height, compact ? 760 : 820);

  // As the visitor scrolls, the emblem recedes so the committees take focus.
  const logoParallax = {
    opacity: Animated.multiply(
      intro,
      scrollY.interpolate({ inputRange: [0, heroHeight * 0.7], outputRange: [1, 0.15], extrapolate: 'clamp' }),
    ),
    transform: [
      { translateY: scrollY.interpolate({ inputRange: [0, heroHeight], outputRange: [0, heroHeight * 0.25], extrapolate: 'clamp' }) },
      { scale: Animated.multiply(
          intro.interpolate({ inputRange: [0, 1], outputRange: [0.86, 1] }),
          scrollY.interpolate({ inputRange: [0, heroHeight], outputRange: [1, 0.82], extrapolate: 'clamp' }),
        ) },
    ],
  };

  const textIn = (start: number) => ({
    opacity: intro.interpolate({ inputRange: [start, 1], outputRange: [0, 1], extrapolate: 'clamp' }),
    transform: [{ translateY: intro.interpolate({ inputRange: [start, 1], outputRange: [16, 0], extrapolate: 'clamp' }) }],
  });

  const cueBounce = {
    opacity: intro,
    transform: [{ translateY: pulse.interpolate({ inputRange: [0, 1], outputRange: [0, 8] }) }],
  };

  return (
    <View style={[styles.hero, { minHeight: heroHeight }]}>
      <Image source={background} style={styles.background} resizeMode="cover" />
      <LinearGradient
        colors={['rgba(4,16,31,0.55)', 'rgba(4,16,31,0.35)', colors.navyDeep]}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.inner}>
        <Animated.View style={logoParallax}>
          <Animated.View
            style={[
              styles.glow,
              {
                width: logoSize + 36,
                height: logoSize + 36,
                borderRadius: (logoSize + 36) / 2,
                opacity: pulse.interpolate({ inputRange: [0, 1], outputRange: [0.35, 0.9] }),
              },
            ]}
          />
          <Image
            source={logo}
            style={{ width: logoSize, height: logoSize }}
            accessibilityLabel="HUSMUN emblem"
          />
        </Animated.View>

        <Animated.View style={[styles.titleBlock, textIn(0.35)]}>
          <Text style={[styles.wordmark, compact && styles.wordmarkCompact]}>
            HUS<Text style={styles.wordmarkGold}>MUN</Text>
          </Text>
          <Text style={styles.edition}>{conference.edition}</Text>
          <Text style={[styles.subtitle, compact && styles.subtitleCompact]}>Model United Nations</Text>
        </Animated.View>

        <Animated.View style={[styles.details, textIn(0.55)]}>
          <Divider width={compact ? 180 : 260} />
          <Text style={styles.dates}>{conference.dates}</Text>
          <Text style={styles.venue}>{conference.venue}</Text>
          <Text style={styles.fee}>
            Entry Fees: <Text style={styles.feeValue}>{conference.fee}</Text>
          </Text>
        </Animated.View>

        <Animated.Text style={[styles.motto, compact && styles.mottoCompact, textIn(0.75)]}>
          {compact
            ? `${conference.motto.slice(0, 2).join('  •  ')}\n${conference.motto.slice(2).join('  •  ')}`
            : conference.motto.join('  •  ')}
        </Animated.Text>

        <Animated.View style={[styles.cue, cueBounce]}>
          <Text style={styles.cueText}>Committees</Text>
          <View style={styles.chevron} />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { width: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  background: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.85 },
  inner: {
    alignItems: 'center',
    paddingHorizontal: space.md,
    paddingVertical: space.xl,
    gap: space.md,
  },
  glow: {
    position: 'absolute',
    top: -18,
    left: -18,
    borderWidth: 1,
    borderColor: colors.gold,
    shadowColor: colors.goldLight,
    shadowOpacity: 0.8,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 0 },
  },
  titleBlock: { alignItems: 'center', gap: space.xs, marginTop: space.sm },
  wordmark: { fontFamily: fonts.display, fontSize: 64, letterSpacing: 6, color: colors.ivory, textAlign: 'center' },
  wordmarkCompact: { fontSize: 46, letterSpacing: 4 },
  wordmarkGold: { color: colors.goldLight },
  edition: { fontFamily: fonts.displayRegular, fontSize: 18, letterSpacing: 4, color: colors.gold, textTransform: 'uppercase' },
  subtitle: {
    fontFamily: fonts.displayRegular,
    fontSize: 28,
    letterSpacing: 3,
    color: colors.ivory,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subtitleCompact: { fontSize: 20 },
  details: { alignItems: 'center', gap: space.xs },
  dates: {
    marginTop: space.xs,
    fontFamily: fonts.displayRegular,
    fontSize: 18,
    letterSpacing: 2,
    color: colors.goldLight,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  venue: { fontFamily: fonts.serifBold, fontSize: 22, color: colors.ivory, textAlign: 'center' },
  fee: { fontFamily: fonts.displayRegular, fontSize: 15, letterSpacing: 2, color: colors.muted, textTransform: 'uppercase' },
  feeValue: { fontFamily: fonts.display, color: colors.ivory },
  motto: {
    marginTop: space.sm,
    fontFamily: fonts.display,
    fontSize: 15,
    letterSpacing: 3,
    color: colors.ivory,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  mottoCompact: { fontSize: 12, lineHeight: 22, letterSpacing: 2 },
  cue: { marginTop: space.lg, alignItems: 'center', gap: space.xs },
  cueText: { fontFamily: fonts.displayRegular, fontSize: 12, letterSpacing: 4, color: colors.gold, textTransform: 'uppercase' },
  chevron: {
    width: 12,
    height: 12,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: colors.gold,
    transform: [{ rotate: '45deg' }],
  },
});
