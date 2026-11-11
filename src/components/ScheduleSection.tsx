import { StyleSheet, Text, View } from 'react-native';

import { schedule, type ScheduleDay } from '../data/schedule';
import { colors, fonts, space } from '../theme';
import { Divider, SectionHeading } from './Ornament';
import { Reveal } from './Reveal';
import { Section } from './Sections';
import { useViewport } from '../hooks/useViewport';

// Both days side by side on wide screens, stacked on phones.
export function ScheduleSection({ eyebrow = 'HUSMUN 2026' }: { eyebrow?: string }) {
  const { width } = useViewport();
  const stacked = width < 1000;
  const compact = width < 600;
  return (
    <Section>
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title="Schedule" />
      </Reveal>
      <View style={[styles.days, stacked && styles.daysStacked]}>
        {schedule.map((day, i) => (
          <Reveal key={day.day} delay={stacked ? 0 : i * 120} style={stacked ? styles.dayStacked : styles.dayWide}>
            <DayCard day={day} compact={compact} />
          </Reveal>
        ))}
      </View>
    </Section>
  );
}

function DayCard({ day, compact }: { day: ScheduleDay; compact: boolean }) {
  return (
    <View style={[styles.card, compact && styles.cardCompact]}>
      <View style={styles.header}>
        <Text style={styles.day}>{day.day}</Text>
        <Text style={styles.date}>{day.date}</Text>
        <View style={[styles.dress, compact && styles.dressCompact]}>
          <Text style={styles.dressLabel}>Dress Code</Text>
          <Text style={styles.dressValue}>{day.dress}</Text>
        </View>
        <Divider width={140} />
      </View>
      <View>
        {day.items.map((item, i) => (
          <View key={item.event} style={[styles.row, compact && styles.rowCompact, i > 0 && styles.rowRule]}>
            <Text style={[styles.time, compact && styles.timeCompact]}>{item.time}</Text>
            <Text style={[styles.event, item.isBreak && styles.eventBreak]}>{item.event}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  days: { flexDirection: 'row', alignItems: 'stretch', gap: space.md },
  daysStacked: { flexDirection: 'column', alignSelf: 'center', width: '100%', maxWidth: 640 },
  dayWide: { flex: 1 },
  dayStacked: { width: '100%' },
  card: {
    flex: 1,
    gap: space.md,
    paddingVertical: space.lg,
    paddingHorizontal: space.lg,
    backgroundColor: colors.navy,
    borderWidth: 1,
    borderColor: colors.goldLine,
    borderRadius: 4,
  },
  cardCompact: { paddingHorizontal: space.md },
  header: { alignItems: 'center', gap: space.xs },
  day: { fontFamily: fonts.display, fontSize: 28, letterSpacing: 3, color: colors.goldLight, textTransform: 'uppercase' },
  date: { fontFamily: fonts.displayRegular, fontSize: 14, letterSpacing: 3, color: colors.ivory, textTransform: 'uppercase' },
  dress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.xs,
    marginVertical: space.xs,
    paddingVertical: 6,
    paddingHorizontal: space.sm,
    borderWidth: 1,
    borderColor: colors.goldLight,
    borderRadius: 4,
    backgroundColor: colors.goldFaint,
  },
  dressCompact: { flexDirection: 'column', gap: 2, paddingHorizontal: space.md },
  dressLabel: { fontFamily: fonts.displayRegular, fontSize: 11, letterSpacing: 2, color: colors.muted, textTransform: 'uppercase' },
  dressValue: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 2, color: colors.goldLight, textTransform: 'uppercase' },
  row: { flexDirection: 'row', alignItems: 'baseline', gap: space.md, paddingVertical: 12 },
  rowCompact: { flexDirection: 'column', alignItems: 'flex-start', gap: 4 },
  rowRule: { borderTopWidth: 1, borderTopColor: colors.goldFaint },
  time: { width: 150, fontFamily: fonts.displayRegular, fontSize: 13, letterSpacing: 1, color: colors.gold },
  timeCompact: { width: 'auto', fontSize: 12 },
  event: { flex: 1, fontFamily: fonts.serifBold, fontSize: 19, lineHeight: 25, color: colors.ivory },
  eventBreak: { fontFamily: fonts.serifItalic, color: colors.muted },
});
