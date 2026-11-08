import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { links } from '../data/committees';
import { colors, fonts, space, webOnly } from '../theme';
import { ExternalButton } from './ExternalButton';
import { Divider } from './Ornament';
import { useViewport } from '../hooks/useViewport';

// Two equal cards, one per registration form.
export function RegistrationCards() {
  const { width } = useViewport();
  const stacked = width < 700;
  return (
    <View style={[styles.regRow, stacked && styles.regRowStacked]}>
      {links.registration.map((r) => (
        <View key={r.label} style={[styles.regCard, !stacked && styles.regCardWide]}>
          <Text style={styles.regLabel}>{r.label}</Text>
          <Divider width={120} />
          <Text style={styles.regNote}>{r.note}</Text>
          <ExternalButton url={r.url} label="Register Now" solid />
        </View>
      ))}
    </View>
  );
}

// Banner pointing to the country matrix page; sits below committee content.
export function CountryMatrixCallout() {
  return (
    <View style={styles.matrix}>
      <Text style={styles.matrixEyebrow}>Country Matrix</Text>
      <Text style={styles.matrixText}>See which countries and portfolios are available in each committee.</Text>
      <Link href="/country-matrix" asChild>
        <Pressable accessibilityRole="link" style={webOnly({ cursor: 'pointer' })}>
          {(state) => {
            const hovered = (state as { hovered?: boolean }).hovered || state.pressed;
            return (
              <View style={[styles.matrixButton, hovered && styles.matrixButtonActive]}>
                <Text style={[styles.matrixButtonText, hovered && styles.matrixButtonTextActive]}>
                  View Country Matrix →
                </Text>
              </View>
            );
          }}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  regRow: { alignSelf: 'center', width: '100%', maxWidth: 820, flexDirection: 'row', gap: space.md },
  regRowStacked: { flexDirection: 'column' },
  regCard: {
    alignItems: 'center',
    gap: space.md,
    paddingVertical: space.lg,
    paddingHorizontal: space.lg,
    backgroundColor: colors.navy,
    borderWidth: 1,
    borderColor: colors.goldLine,
    borderRadius: 4,
  },
  regCardWide: { flex: 1 },
  regLabel: { fontFamily: fonts.display, fontSize: 19, letterSpacing: 2, color: colors.goldLight, textAlign: 'center', textTransform: 'uppercase' },
  regNote: { fontFamily: fonts.serifItalic, fontSize: 19, lineHeight: 26, color: colors.muted, textAlign: 'center' },
  matrix: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 760,
    alignItems: 'center',
    gap: space.sm,
    paddingVertical: space.lg,
    paddingHorizontal: space.lg,
    borderWidth: 1,
    borderColor: colors.goldLight,
    borderRadius: 4,
    backgroundColor: colors.goldFaint,
  },
  matrixEyebrow: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 4, color: colors.goldLight, textTransform: 'uppercase' },
  matrixText: { fontFamily: fonts.serif, fontSize: 19, lineHeight: 27, color: colors.ivory, textAlign: 'center' },
  matrixButton: {
    marginTop: space.xs,
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 4,
    ...webOnly({ transitionProperty: 'background-color', transitionDuration: '200ms' }),
  },
  matrixButtonActive: { backgroundColor: colors.gold },
  matrixButtonText: { fontFamily: fonts.display, fontSize: 13, letterSpacing: 2, color: colors.goldLight, textTransform: 'uppercase' },
  matrixButtonTextActive: { color: colors.navyDeep },
});
