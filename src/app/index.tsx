import Head from 'expo-router/head';
import { StyleSheet, Text } from 'react-native';

import { CountryMatrixCallout, RegistrationCards } from '../components/Callouts';
import { CommitteeGrid } from '../components/CommitteeGrid';
import { Hero } from '../components/Hero';
import { NavBar } from '../components/NavBar';
import { SectionHeading } from '../components/Ornament';
import { PageScroll } from '../components/PageScroll';
import { ScheduleSection } from '../components/ScheduleSection';
import { Reveal } from '../components/Reveal';
import { AgendaSection, Footer, Section } from '../components/Sections';
import { colors, fonts, space } from '../theme';

export default function Home() {
  return (
    <PageScroll>
      <Head>
        <title>HUSMUN 2026 — Model United Nations</title>
      </Head>

      <NavBar />
      <Hero />

      <Section>
        <Reveal style={styles.heading}>
          <SectionHeading eyebrow="Eight Committees" title="Committees" />
          <Text style={styles.intro}>Select a committee to read its overview.</Text>
        </Reveal>
        <CommitteeGrid />
        <Reveal>
          <CountryMatrixCallout />
        </Reveal>
      </Section>

      <AgendaSection />
      <ScheduleSection />

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Join Us" title="Register" />
        </Reveal>
        <Reveal delay={120}>
          <RegistrationCards />
        </Reveal>
      </Section>

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
