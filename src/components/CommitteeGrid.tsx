import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { committees, type Committee } from '../data/committees';
import { colors, contentMaxWidth, fonts, space, webOnly } from '../theme';
import { Reveal } from './Reveal';
import { useViewport } from '../hooks/useViewport';

const GAP = space.md;

// Column count is chosen so every row is either full or centred
// (8 cards: 4 + 4, 3 + 3 + 2, 2 + 2 + 2 + 2), keeping the grid symmetrical.
function useGrid() {
  const { width } = useViewport();
  const gutter = width < 600 ? space.md : space.lg;
  const available = Math.min(width, contentMaxWidth) - gutter * 2;
  const columns = width >= 1000 ? 4 : width >= 680 ? 3 : 2;
  const cardWidth = Math.floor((available - GAP * (columns - 1)) / columns);
  return { cardWidth, columns, compact: width < 600 };
}

export function CommitteeGrid() {
  const { cardWidth, columns, compact } = useGrid();
  return (
    <View style={styles.grid}>
      {committees.map((committee, i) => (
        <Reveal key={committee.id} delay={(i % columns) * 120} style={{ width: cardWidth }}>
          <CommitteeCard committee={committee} compact={compact} />
        </Reveal>
      ))}
    </View>
  );
}

function CommitteeCard({ committee, compact }: { committee: Committee; compact: boolean }) {
  return (
    <Link href={`/committees/${committee.id}`} asChild>
      <Pressable accessibilityRole="link" accessibilityLabel={`${committee.code} — view overview`}>
        {(state) => {
          const { pressed, hovered } = state as { pressed: boolean; hovered?: boolean };
          const active = pressed || hovered;
          return (
            <View style={[styles.card, compact && styles.cardCompact, active && styles.cardActive]}>
              <Image
                source={committee.emblem}
                style={[styles.emblem, compact && styles.emblemCompact]}
                accessibilityIgnoresInvertColors
              />
              <Text style={[styles.code, compact && styles.codeCompact]}>{committee.code}</Text>
              <View style={[styles.nameBox, compact && styles.nameBoxCompact]}>
                <Text style={[styles.name, compact && styles.nameCompact]} numberOfLines={compact ? 4 : 3}>
                  {committee.name}
                </Text>
              </View>
              <Text style={[styles.cta, compact && styles.ctaCompact, active && styles.ctaActive]}>
                {compact ? 'Overview' : 'View Overview'}
              </Text>
            </View>
          );
        }}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: GAP,
  },
  card: {
    alignItems: 'center',
    gap: space.sm,
    paddingVertical: space.lg,
    paddingHorizontal: space.md,
    backgroundColor: colors.navy,
    borderWidth: 1,
    borderColor: colors.goldLine,
    borderRadius: 4,
    ...webOnly({ transitionProperty: 'transform, border-color, background-color', transitionDuration: '300ms', cursor: 'pointer' }),
  },
  cardCompact: { paddingVertical: space.md, paddingHorizontal: space.sm, gap: space.xs },
  cardActive: {
    borderColor: colors.goldLight,
    backgroundColor: colors.navyRaised,
    transform: [{ translateY: -6 }],
  },
  emblem: { width: 150, height: 150 },
  emblemCompact: { width: 104, height: 104 },
  code: { fontFamily: fonts.display, fontSize: 24, letterSpacing: 3, color: colors.goldLight, textAlign: 'center' },
  codeCompact: { fontSize: 17, letterSpacing: 2 },
  // Fixed-height name box so every card's emblem, title and link line up.
  nameBox: { height: 66, justifyContent: 'center' },
  nameBoxCompact: { height: 72 },
  name: { fontFamily: fonts.serif, fontSize: 17, lineHeight: 22, color: colors.muted, textAlign: 'center' },
  nameCompact: { fontSize: 14, lineHeight: 18 },
  cta: {
    fontFamily: fonts.displayRegular,
    fontSize: 11,
    letterSpacing: 3,
    color: colors.gold,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    textAlign: 'center',
    paddingBottom: 2,
  },
  ctaCompact: { letterSpacing: 2 },
  ctaActive: { color: colors.goldLight, borderBottomColor: colors.goldLight },
});
