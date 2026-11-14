export type RuleBlock = { heading?: string; text: string; list?: string[] };

export type Rule = { title: string; blocks: RuleBlock[] };

// Code of conduct, as provided by the HUSMUN Secretariat.
export const rulesWarning =
  'Any repeated violation of the code of conduct will result in the delegate’s / EB’s dismissal, and no certification will be awarded.';

export const rules: Rule[] = [
  {
    title: 'Professional Conduct',
    blocks: [
      {
        text: 'All participants — including delegates, chairs, and members of the Secretariat are expected to uphold the highest standards of professionalism, integrity, and respect throughout the conference.',
      },
      {
        text: 'Courtesy and respect must be demonstrated at all times, regardless of nationality, culture, religion, gender, or background.',
      },
      {
        text: 'Harassment, bullying, discrimination, or inappropriate language or behaviour will not be tolerated under any circumstances.',
      },
    ],
  },
  {
    title: 'Dress Code',
    blocks: [
      {
        heading: 'Cultural attire is mandatory on the 7th',
        text: 'All traditional formals (Example, Kurtas, sarees, half-sarees…). Casual or inappropriate clothing, including jeans, T-shirts, shorts, or sportswear, is not permitted.',
      },
      {
        heading: 'Western business attire is mandatory on the 8th',
        text: 'A Suit, blazer, formal shirt, formal blouse, formal skirt (knee-length or longer) or trousers, formal dresses, stockings for dresses and skirts, closed-toe shoes, and formal shoes, as well as sleeveless attire, are permitted. Neutral makeup is requested, and hair should be well-kept for the conference.',
      },
    ],
  },
  {
    title: 'Contraband',
    blocks: [
      {
        text: 'Any substances or intoxicants will be confiscated immediately, as well as lighters or matches, caffeinated drinks, and outside food, which will also be reported. If found in bags or on persons during the conference, they will be confiscated. Bag checks will also be conducted on both days of the conference. Ordering items through delivery apps is strictly prohibited and will be reported to the secretariat and EB.',
      },
    ],
  },
  {
    title: 'Committee Decorum',
    blocks: [
      {
        text: 'Delegates must remain in character, representing their assigned country or organisation in accordance with its official policies.',
      },
      {
        text: 'All participants must adhere to the parliamentary procedure and rulings of the Chair/Dais.',
      },
      {
        text: 'Formal titles and honorifics must be used when addressing delegates, the chair, or members of the board during a session.',
      },
      {
        text: 'Disruptive actions such as excessive talking, heckling, misuse of technology, or disrespect toward fellow delegates or the dais will result in disciplinary action.',
      },
    ],
  },
  {
    title: 'Use of Technology',
    blocks: [
      {
        text: 'Laptops and tablets may be used only for research, note-taking, or drafting resolutions relevant to the committee’s agenda.',
      },
      {
        text: 'The use of devices for entertainment, social media, or unrelated communication during sessions is strictly prohibited. If this behaviour is repeated, the device may be confiscated.',
      },
      {
        text: 'Photography or videography in committee rooms is permitted only with authorisation from the Secretariat or the press and media.',
      },
    ],
  },
  {
    title: 'Punctuality and Attendance',
    blocks: [
      {
        text: 'All participants are expected to be punctual for committee sessions, ceremonies, and scheduled events using the given itinerary.',
      },
      {
        text: 'Delegates must be present for attendance at the beginning of each session; repeated tardiness or absence without a valid justification may lead to disciplinary measures.',
      },
    ],
  },
  {
    title: 'Security and Discipline',
    blocks: [
      {
        text: 'Delegates must comply with instructions issued by the Secretariat, the USG of Security and Discipline, volunteers, and event coordinators at all times.',
      },
      {
        text: 'Any physical or verbal altercation, property damage, or conduct that endangers the safety of participants will result in intervention from the USG of Security and Discipline.',
      },
      {
        heading: 'Violations will be addressed through a three-tier response system',
        text: '',
        list: [
          'Verbal Warning — for minor infractions or first-time misconduct.',
          'Written Warning — issued for repeated or serious misconduct and reported to the Secretariat.',
          'Dismissal — participants will be removed from the conference upon approval by the Secretary-General.',
        ],
      },
    ],
  },
  {
    title: 'Conduct Beyond Committee Sessions',
    blocks: [
      { text: 'Delegates are representatives of both their assigned nations and their respective schools.' },
      {
        text: 'Professional behaviour is expected in all conference spaces, including lobbies, the cafeteria, and social events.',
      },
      { text: 'Respect for host institution property and staff must be maintained at all times.' },
    ],
  },
  {
    title: 'Reporting Misconduct',
    blocks: [
      {
        text: 'Any participant who witnesses or experiences inappropriate behaviour may report it directly to the USG of Security and Discipline.',
      },
      {
        text: 'All reports will be handled discreetly, ensuring fairness and confidentiality for all parties involved.',
      },
    ],
  },
];

export type EvacuationStage = { title: string; steps: string[] };

export const evacuation = {
  chainOfCommand: [
    { role: 'The Secretary-General', duty: 'Authorises the evacuation.' },
    { role: 'The USG of Security and Discipline', duty: 'Supervises the process.' },
    {
      role: 'Committee Chairs and Admin',
      duty: 'Ensure all delegates exit their rooms promptly and safely.',
    },
  ],
  stages: [
    {
      title: 'During Committee',
      steps: [
        'The evacuation will be triggered by the alarm system.',
        'Every individual is requested to remain calm. Chairs must halt debate, instruct delegates to leave all materials behind, and exit the rooms.',
        'The USG of Security and Discipline must immediately direct delegates down the stairs.',
        'Admin assigned to each committee will ensure rooms and washrooms are empty.',
        'The delegates, Admin, EB, Secretariat, and faculty must make it to the ground floor as soon as instructed and out of the school building through any of the 3 front exits.',
        'All participants and faculty must stay out of the school building until instructed otherwise by the Secretary-General or the USG of Security and Discipline.',
      ],
    },
    {
      title: 'During Cafeteria Breaks',
      steps: [
        'The evacuation will be triggered by the alarm system.',
        'Every individual is requested to remain calm and follow the immediate instructions of the Secretary-General.',
        'The USG of Security and Discipline, as well as the Admin assigned during breaks, will direct all delegates, EB, and the Secretariat across the school ground floor to the 3 front exits.',
        'All participants and faculty must stay out of the school building until instructed otherwise by the Secretary-General or the USG of Security and Discipline.',
      ],
    },
  ] as EvacuationStage[],
};
