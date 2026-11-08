import Head from 'expo-router/head';

import { NavBar } from '../components/NavBar';
import { PageScroll } from '../components/PageScroll';
import { EvacuationSection, RulesSection } from '../components/RulesSection';
import { Footer } from '../components/Sections';

export default function CodeOfConductPage() {
  return (
    <PageScroll>
      <Head>
        <title>Code of Conduct — HUSMUN 2026</title>
      </Head>
      <NavBar />
      <RulesSection />
      <EvacuationSection />
      <Footer />
    </PageScroll>
  );
}
