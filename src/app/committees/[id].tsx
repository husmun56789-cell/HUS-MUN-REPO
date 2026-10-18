import { Link, Redirect, useLocalSearchParams, type Href } from 'expo-router';
import Head from 'expo-router/head';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Divider, SectionHeading } from '../../components/Ornament';
import { PageScroll } from '../../components/PageScroll';
import { Reveal } from '../../components/Reveal';
import { AgendaCard, Footer, Section } from '../../components/Sections';
import { committees, conference, findCommittee, type Brief } from '../../data/committees';
import { colors, fonts, space, webOnly } from '../../theme';
import { useViewport } from '../../hooks/useViewport';

const logo = require('../../../assets/images/logo.png');

// Pre-render one HTML page per committee for the static web export.
export function generateStaticParams() {
  return committees.map((c) => ({ id: c.id }));
}

export default function CommitteePage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { width } = useViewport();
  const committee = findCommittee(id);
  if (!committee) return <Redirect href="/" />;

  const compact = width < 600;
  const index = committees.indexOf(committee);
  const prev = committees[(index - 1 + committees.length) % committees.length];
  const next = committees[(index + 1) % committees.length];

  return (
    <PageScroll>
      <Head>
        <title>{`${committee.code} — HUSMUN 2026`}</title>
      </Head>

      <TopBar compact={compact} />

      <Section style={styles.hero}>
        <Reveal style={styles.heroInner}>
          <Image
            source={committee.emblem}
            style={{ width: compact ? 180 : 240, height: compact ? 180 : 240 }}
            accessibilityLabel={`${committee.code} emblem`}
          />
          <Text style={[styles.code, compact && styles.codeCompact]}>{committee.code}</Text>
          <Text style={[styles.fullName, compact && styles.fullNameCompact]}>{committee.name}</Text>
          <Divider width={compact ? 180 : 260} />
        </Reveal>
      </Section>

      <Section style={styles.overviewSection}>
        <Reveal>
          <SectionHeading title="Overview" />
        </Reveal>
        <Reveal delay={120}>
          <View style={styles.quoteCard}>
            <Text style={[styles.quote, compact && styles.quoteCompact]}>{committee.overview}</Text>
          </View>
        </Reveal>
        {committee.agenda ? (
          <Reveal delay={180} style={styles.agendaBlock}>
            <SectionHeading title="Agenda" />
            <AgendaCard code={committee.code} agenda={committee.agenda} />
          </Reveal>
        ) : null}
        <Reveal delay={200} style={styles.agendaBlock}>
          <SectionHeading title="Committee Brief" />
          <BriefCard brief={committee.brief} />
        </Reveal>
        <Reveal delay={240}>
          <View style={[styles.facts, compact && styles.factsCompact]}>
            <Fact label="Dates" value={conference.dates} />
            <Fact label="Venue" value={conference.venue} />
            <Fact label="Entry Fees" value={conference.fee} />
          </View>
        </Reveal>
        <Reveal delay={360}>
          <View style={styles.pager}>
            <PagerLink href={`/committees/${prev.id}`} label="Previous" code={prev.code} align="left" />
            <PagerLink href={`/committees/${next.id}`} label="Next" code={next.code} align="right" />
          </View>
        </Reveal>
      </Section>

      <Footer />
    </PageScroll>
  );
}

// Three equal columns (back · emblem · spacer) so the emblem stays centred.
function TopBar({ compact }: { compact: boolean }) {
  return (
    <View style={[styles.topBar, { paddingHorizontal: compact ? space.md : space.lg }]}>
      <View style={styles.topSide}>
        <Link href="/" asChild>
          <Pressable accessibilityRole="link" style={webOnly({ cursor: 'pointer' })}>
            <Text style={styles.topLink}>{compact ? '← Home' : '← All Committees'}</Text>
          </Pressable>
        </Link>
      </View>
      <Link href="/" asChild>
        <Pressable accessibilityRole="link" accessibilityLabel="HUSMUN home" style={styles.topCenter}>
          <Image source={logo} style={styles.topLogo} />
          {!compact && <Text style={styles.topTitle}>HUSMUN</Text>}
        </Pressable>
      </Link>
      <View style={styles.topSide} />
    </View>
  );
}

function BriefCard({ brief }: { brief: Brief }) {
  return (
    <View style={styles.briefCard}>
      <Text style={styles.briefText}>{brief.intro}</Text>
      {brief.points?.map((point) => (
        <View key={point} style={styles.briefPoint}>
          <View style={styles.briefBullet} />
          <Text style={[styles.briefText, styles.briefPointText]}>{point}</Text>
        </View>
      ))}
      {brief.outro ? <Text style={styles.briefText}>{brief.outro}</Text> : null}
    </View>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.fact}>
      <Text style={styles.factLabel}>{label}</Text>
      <Text style={styles.factValue}>{value}</Text>
    </View>
  );
}

function PagerLink({ href, label, code, align }: { href: Href; label: string; code: string; align: 'left' | 'right' }) {
  const alignItems = align === 'left' ? 'flex-start' : 'flex-end';
  // Layout styles live on the wrapper: <Link asChild> forwards the Pressable's
  // style to the DOM anchor on web, which rejects style arrays.
  return (
    <View style={styles.pagerItem}>
      <Link href={href} asChild>
        <Pressable accessibilityRole="link" style={webOnly({ cursor: 'pointer' })}>
          {(state) => {
            const hovered = (state as { hovered?: boolean }).hovered || state.pressed;
            return (
              <View style={[styles.pagerInner, { alignItems }, hovered && styles.pagerInnerActive]}>
                <Text style={styles.pagerLabel}>{align === 'left' ? `← ${label}` : `${label} →`}</Text>
                <Text style={styles.pagerCode}>{code}</Text>
              </View>
            );
          }}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: space.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.goldFaint,
    backgroundColor: colors.navy,
  },
  topSide: { flex: 1 },
  topCenter: { flexDirection: 'row', alignItems: 'center', gap: space.xs },
  topLogo: { width: 44, height: 44 },
  topTitle: { fontFamily: fonts.display, fontSize: 18, letterSpacing: 3, color: colors.ivory },
  topLink: {
    fontFamily: fonts.displayRegular,
    fontSize: 12,
    letterSpacing: 2,
    color: colors.gold,
    textTransform: 'uppercase',
  },
  hero: { paddingBottom: 0 },
  heroInner: { alignItems: 'center', gap: space.md },
  code: { fontFamily: fonts.display, fontSize: 56, letterSpacing: 6, color: colors.goldLight, textAlign: 'center' },
  codeCompact: { fontSize: 38, letterSpacing: 4 },
  fullName: {
    maxWidth: 640,
    fontFamily: fonts.displayRegular,
    fontSize: 22,
    lineHeight: 32,
    letterSpacing: 1,
    color: colors.ivory,
    textAlign: 'center',
  },
  fullNameCompact: { fontSize: 17, lineHeight: 26 },
  overviewSection: { paddingTop: space.xl },
  quoteCard: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 760,
    paddingVertical: space.xl,
    paddingHorizontal: space.lg,
    backgroundColor: colors.navy,
    borderWidth: 1,
    borderColor: colors.goldLine,
    borderRadius: 4,
  },
  quote: { fontFamily: fonts.serif, fontSize: 28, lineHeight: 42, color: colors.ivory, textAlign: 'center' },
  quoteCompact: { fontSize: 21, lineHeight: 32 },
  agendaBlock: { alignSelf: 'center', width: '100%', maxWidth: 760, gap: space.lg, marginTop: space.lg },
  briefCard: {
    gap: space.md,
    paddingVertical: space.lg,
    paddingHorizontal: space.lg,
    backgroundColor: colors.navy,
    borderWidth: 1,
    borderColor: colors.goldLine,
    borderRadius: 4,
  },
  briefText: { fontFamily: fonts.serif, fontSize: 19, lineHeight: 29, color: colors.ivory },
  briefPoint: { flexDirection: 'row', alignItems: 'flex-start', gap: space.sm, paddingLeft: space.xs },
  briefBullet: {
    width: 7,
    height: 7,
    marginTop: 11,
    backgroundColor: colors.gold,
    transform: [{ rotate: '45deg' }],
  },
  briefPointText: { flex: 1, color: colors.muted },
  facts: { alignSelf: 'center', width: '100%', maxWidth: 760, flexDirection: 'row', gap: space.md },
  factsCompact: { flexDirection: 'column' },
  fact: {
    flex: 1,
    alignItems: 'center',
    gap: space.xs,
    paddingVertical: space.md,
    paddingHorizontal: space.sm,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.goldFaint,
  },
  factLabel: { fontFamily: fonts.displayRegular, fontSize: 11, letterSpacing: 3, color: colors.gold, textTransform: 'uppercase' },
  factValue: { fontFamily: fonts.serifBold, fontSize: 18, color: colors.ivory, textAlign: 'center' },
  pager: { alignSelf: 'center', width: '100%', maxWidth: 760, flexDirection: 'row', gap: space.md },
  pagerItem: { flex: 1 },
  pagerInner: {
    gap: space.xs,
    paddingVertical: space.md,
    paddingHorizontal: space.md,
    borderWidth: 1,
    borderColor: colors.goldLine,
    borderRadius: 4,
    ...webOnly({ transitionProperty: 'background-color, border-color', transitionDuration: '250ms' }),
  },
  pagerInnerActive: { backgroundColor: colors.navyRaised, borderColor: colors.goldLight },
  pagerLabel: { fontFamily: fonts.displayRegular, fontSize: 11, letterSpacing: 3, color: colors.gold, textTransform: 'uppercase' },
  pagerCode: { fontFamily: fonts.display, fontSize: 20, letterSpacing: 2, color: colors.ivory },
});
