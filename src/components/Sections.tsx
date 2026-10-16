import type { ReactNode } from 'react';
import { Image, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { committees, conference } from '../data/committees';
import { colors, contentMaxWidth, fonts, space } from '../theme';
import { Divider, SectionHeading } from './Ornament';
import { Reveal } from './Reveal';
import { useViewport } from '../hooks/useViewport';

const logo = require('../../assets/images/logo.png');

// Centred, width-capped column with equal gutters on both sides.
export function Section({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const { width } = useViewport();
  const gutter = width < 600 ? space.md : space.lg;
  return (
    <View style={[styles.section, { paddingHorizontal: gutter }, style]}>
      <View style={styles.sectionInner}>{children}</View>
    </View>
  );
}

export function AgendaSection() {
  const { width } = useViewport();
  // Two columns of equal cards on wide screens (3 + 3), one column on phones.
  const columns = width >= 820 ? 2 : 1;
  const withAgenda = committees.filter((c) => c.agenda);
  return (
    <Section style={styles.agenda}>
      <Reveal>
        <SectionHeading eyebrow="HUSMUN 2026" title="Agenda" />
      </Reveal>
      <View style={styles.agendaGrid}>
        {withAgenda.map((c, i) => (
          <Reveal
            key={c.id}
            delay={(i % columns) * 120}
            style={{ width: columns === 2 ? '48%' : '100%' }}
          >
            <AgendaCard code={c.code} agenda={c.agenda!} />
          </Reveal>
        ))}
      </View>
    </Section>
  );
}

export function AgendaCard({ code, agenda }: { code: string; agenda: string }) {
  return (
    <View style={styles.agendaCard}>
      <Text style={styles.agendaCode}>{code}</Text>
      <Divider width={120} />
      <Text style={styles.agendaText}>{agenda}</Text>
    </View>
  );
}

export function Footer() {
  return (
    <View style={styles.footer}>
      <Image source={logo} style={styles.footerLogo} />
      <Divider width={160} />
      <Text style={styles.footerVenue}>{conference.venue}</Text>
      {conference.address.map((line) => (
        <Text key={line} style={styles.footerAddress}>
          {line}
        </Text>
      ))}
      <Text style={styles.footerCopy}>© 2026 HUSMUN · husmun.org</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { width: '100%', alignItems: 'center', paddingVertical: space.xxl },
  sectionInner: { width: '100%', maxWidth: contentMaxWidth, gap: space.xl },
  agenda: { backgroundColor: colors.navy, borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.goldFaint },
  agendaGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: space.md },
  agendaCard: {
    flex: 1,
    alignItems: 'center',
    gap: space.sm,
    paddingVertical: space.lg,
    paddingHorizontal: space.lg,
    backgroundColor: colors.navyDeep,
    borderWidth: 1,
    borderColor: colors.goldLine,
    borderRadius: 4,
  },
  agendaCode: { fontFamily: fonts.display, fontSize: 20, letterSpacing: 3, color: colors.goldLight, textAlign: 'center' },
  agendaText: { fontFamily: fonts.serif, fontSize: 21, lineHeight: 30, color: colors.ivory, textAlign: 'center' },
  footer: {
    alignItems: 'center',
    gap: space.xs,
    paddingVertical: space.xl,
    paddingHorizontal: space.md,
    backgroundColor: colors.navyDeep,
  },
  footerLogo: { width: 72, height: 72, marginBottom: space.xs },
  footerVenue: { marginTop: space.xs, fontFamily: fonts.display, fontSize: 15, letterSpacing: 2, color: colors.goldLight, textAlign: 'center' },
  footerAddress: { fontFamily: fonts.serif, fontSize: 15, color: colors.muted, textAlign: 'center' },
  footerCopy: {
    marginTop: space.md,
    fontFamily: fonts.displayRegular,
    fontSize: 11,
    letterSpacing: 3,
    color: colors.gold,
    textTransform: 'uppercase',
  },
});
