import Head from 'expo-router/head';
import { StyleSheet, Text } from 'react-native';

import { CommitteeGrid } from '../components/CommitteeGrid';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/Ornament';
import { PageScroll } from '../components/PageScroll';
import { Reveal } from '../components/Reveal';
import { RulesSection } from '../components/RulesSection';
import { AgendaSection, Footer, Section } from '../components/Sections';
import { colors, fonts, space } from '../theme';

export default function Home() {
  return (
    <PageScroll>
      <Head>
        <title>HUSMUN 2026 — Model United Nations</title>
      </Head>

      <Hero />

      <Section>
        <Reveal style={styles.heading}>
          <SectionHeading eyebrow="Eight Committees" title="Committees" />
          <Text style={styles.intro}>Select a committee to read its overview.</Text>
        </Reveal>
        <CommitteeGrid />
      </Section>

      <AgendaSection />
      <RulesSection />
      <Footer />
    </PageScroll>
  );
}

const styles = StyleSheet.create({
  heading: { gap: space.md },
  intro: {
    fontFamily: fonts.serifItalic,
    fontSize: 20,
    color: colors.muted,
    textAlign: 'center',
  },
});
