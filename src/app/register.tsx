import Head from 'expo-router/head';
import { StyleSheet, Text } from 'react-native';

import { RegistrationCards } from '../components/Callouts';
import { NavBar } from '../components/NavBar';
import { SectionHeading } from '../components/Ornament';
import { PageScroll } from '../components/PageScroll';
import { Reveal } from '../components/Reveal';
import { Footer, Section } from '../components/Sections';
import { conference } from '../data/committees';
import { colors, fonts, space } from '../theme';

export default function RegisterPage() {
  return (
    <PageScroll>
      <Head>
        <title>Register — HUSMUN 2026</title>
      </Head>
      <NavBar />
      <Section style={styles.section}>
        <Reveal style={styles.heading}>
          <SectionHeading eyebrow={conference.dates} title="Registration" />
          <Text style={styles.intro}>Choose the form that applies to you.</Text>
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
  section: { flexGrow: 1 },
  heading: { gap: space.md },
  intro: { fontFamily: fonts.serifItalic, fontSize: 20, color: colors.muted, textAlign: 'center' },
});
