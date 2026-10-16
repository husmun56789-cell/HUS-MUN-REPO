import { StyleSheet, Text, View } from 'react-native';

import { rules, rulesWarning } from '../data/rules';
import { colors, fonts, space } from '../theme';
import { SectionHeading } from './Ornament';
import { Reveal } from './Reveal';
import { Section } from './Sections';
import { useViewport } from '../hooks/useViewport';

const RULES_MAX_WIDTH = 820;

export function RulesSection() {
  const { width } = useViewport();
  const compact = width < 600;
  return (
    <Section>
      <Reveal>
        <SectionHeading eyebrow="Code of Conduct" title="Rules" />
      </Reveal>

      <Reveal delay={100}>
        <View style={[styles.warning, compact && styles.cardCompact]}>
          <Text style={styles.warningLabel}>Please Note</Text>
          <Text style={styles.warningText}>{rulesWarning}</Text>
        </View>
      </Reveal>

      <View style={styles.list}>
        {rules.map((rule, i) => (
          <Reveal key={rule.title}>
            <View style={[styles.card, compact && styles.cardCompact]}>
              <View style={styles.header}>
                <View style={styles.number}>
                  <Text style={styles.numberText}>{i + 1}</Text>
                </View>
                <Text style={[styles.title, compact && styles.titleCompact]}>{rule.title}</Text>
              </View>
              {rule.blocks.map((block) => (
                <View key={block.text} style={styles.block}>
                  {block.heading ? <Text style={styles.blockHeading}>{block.heading}</Text> : null}
                  <Text style={styles.body}>{block.text}</Text>
                </View>
              ))}
            </View>
          </Reveal>
        ))}
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  warning: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: RULES_MAX_WIDTH,
    alignItems: 'center',
    gap: space.xs,
    paddingVertical: space.md,
    paddingHorizontal: space.lg,
    borderWidth: 1,
    borderColor: colors.goldLight,
    borderRadius: 4,
    backgroundColor: colors.goldFaint,
  },
  warningLabel: {
    fontFamily: fonts.display,
    fontSize: 12,
    letterSpacing: 4,
    color: colors.goldLight,
    textTransform: 'uppercase',
  },
  warningText: { fontFamily: fonts.serifBold, fontSize: 19, lineHeight: 28, color: colors.ivory, textAlign: 'center' },
  list: { alignSelf: 'center', width: '100%', maxWidth: RULES_MAX_WIDTH, gap: space.md },
  card: {
    gap: space.md,
    paddingVertical: space.lg,
    paddingHorizontal: space.lg,
    backgroundColor: colors.navy,
    borderWidth: 1,
    borderColor: colors.goldLine,
    borderRadius: 4,
  },
  cardCompact: { paddingHorizontal: space.md },
  header: { alignItems: 'center', gap: space.sm },
  number: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: { fontFamily: fonts.display, fontSize: 16, color: colors.goldLight },
  title: {
    fontFamily: fonts.display,
    fontSize: 24,
    letterSpacing: 3,
    color: colors.goldLight,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  titleCompact: { fontSize: 19, letterSpacing: 2 },
  block: { gap: space.xs },
  blockHeading: { fontFamily: fonts.display, fontSize: 15, letterSpacing: 1, color: colors.ivory },
  body: { fontFamily: fonts.serif, fontSize: 19, lineHeight: 29, color: colors.muted },
});
