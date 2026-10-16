import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, space } from '../theme';

// Gold rule with a centred diamond, echoing the divider on the poster.
export function Divider({ width = 220 }: { width?: number }) {
  return (
    <View style={[styles.divider, { width }]}>
      <View style={styles.line} />
      <View style={styles.diamond} />
      <View style={styles.line} />
    </View>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <View style={styles.heading}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: { flexDirection: 'row', alignItems: 'center', alignSelf: 'center' },
  line: { flex: 1, height: 1, backgroundColor: colors.goldLine },
  diamond: {
    width: 8,
    height: 8,
    marginHorizontal: space.sm,
    backgroundColor: colors.gold,
    transform: [{ rotate: '45deg' }],
  },
  heading: { alignItems: 'center', gap: space.sm },
  eyebrow: {
    fontFamily: fonts.displayRegular,
    fontSize: 13,
    letterSpacing: 4,
    color: colors.muted,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 40,
    letterSpacing: 3,
    color: colors.goldLight,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
