import Head from 'expo-router/head';

import { NavBar } from '../components/NavBar';
import { PageScroll } from '../components/PageScroll';
import { ScheduleSection } from '../components/ScheduleSection';
import { Footer } from '../components/Sections';
import { conference } from '../data/committees';

export default function SchedulePage() {
  return (
    <PageScroll>
      <Head>
        <title>Schedule — HUSMUN 2026</title>
      </Head>
      <NavBar />
      <ScheduleSection eyebrow={conference.dates} />
      <Footer />
    </PageScroll>
  );
}
