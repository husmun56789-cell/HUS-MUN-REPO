import Head from 'expo-router/head';
import { createElement } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { ExternalButton } from '../components/ExternalButton';
import { NavBar } from '../components/NavBar';
import { SectionHeading } from '../components/Ornament';
import { PageScroll } from '../components/PageScroll';
import { Reveal } from '../components/Reveal';
import { Footer, Section } from '../components/Sections';
import { links } from '../data/committees';
import { colors, fonts, space } from '../theme';
import { useViewport } from '../hooks/useViewport';

export default function CountryMatrixPage() {
  const { height } = useViewport();
  return (
    <PageScroll>
      <Head>
        <title>Country Matrix — HUSMUN 2026</title>
      </Head>
      <NavBar />
      <Section>
        <Reveal style={styles.heading}>
          <SectionHeading eyebrow="Allocations" title="Country Matrix" />
          <Text style={styles.intro}>The countries and portfolios available in every committee.</Text>
          <View style={styles.cta}>
            <ExternalButton url={links.countryMatrix} label="Open in Google Sheets" solid />
          </View>
        </Reveal>

        {/* The live sheet is embedded on the web; native apps use the button above. */}
        {Platform.OS === 'web' ? (
          <Reveal delay={120}>
            <View style={[styles.frame, { height: Math.max(520, height * 0.75) }]}>
              {createElement('iframe', {
                src: links.countryMatrixEmbed,
                title: 'HUSMUN 2026 country matrix',
                style: { width: '100%', height: '100%', border: 0, backgroundColor: '#FFFFFF' },
              })}
            </View>
          </Reveal>
        ) : null}
      </Section>
      <Footer />
    </PageScroll>
  );
}

const styles = StyleSheet.create({
  heading: { gap: space.md },
  intro: { fontFamily: fonts.serifItalic, fontSize: 20, color: colors.muted, textAlign: 'center' },
  cta: { alignItems: 'center', marginTop: space.xs },
  frame: {
    width: '100%',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.goldLine,
    borderRadius: 4,
  },
});
