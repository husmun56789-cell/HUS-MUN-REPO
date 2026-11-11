export type ScheduleItem = { time: string; event: string; isBreak?: boolean };

export type ScheduleDay = { day: string; date: string; dress: string; items: ScheduleItem[] };

// Conference itinerary, as provided by the HUSMUN Secretariat.
export const schedule: ScheduleDay[] = [
  {
    day: 'Day 1',
    date: '18th December',
    dress: 'Traditional Wear',
    items: [
      { time: '8:00 – 8:30 AM', event: 'Registration and Seating of Delegates' },
      { time: '8:30 – 9:15 AM', event: 'Opening Ceremony' },
      { time: '9:15 – 9:35 AM', event: 'Quick Refreshment Break', isBreak: true },
      { time: '9:35 AM – 1:40 PM', event: 'Committee Session I' },
      { time: '1:40 – 2:10 PM', event: 'Lunch Break', isBreak: true },
      { time: '2:10 – 4:15 PM', event: 'Committee Session II' },
      { time: '4:15 – 4:30 PM', event: 'Wrap-up and Announcements' },
    ],
  },
  {
    day: 'Day 2',
    date: '19th December',
    dress: 'Western Wear',
    items: [
      { time: '8:00 – 8:15 AM', event: 'Delegates Assemble and Announcements' },
      { time: '8:15 – 10:45 AM', event: 'Committee Session III' },
      { time: '10:45 – 11:00 AM', event: 'Refreshment Break', isBreak: true },
      { time: '11:00 AM – 1:30 PM', event: 'Committee Session IV' },
      { time: '1:30 – 2:15 PM', event: 'Lunch Break', isBreak: true },
      { time: '2:15 – 4:15 PM', event: 'Committee Session V' },
      { time: '4:15 – 5:15 PM', event: 'Closing Ceremony and Awards Distribution' },
      { time: '5:15 – 6:30 PM', event: 'Delegates Socials' },
    ],
  },
];
