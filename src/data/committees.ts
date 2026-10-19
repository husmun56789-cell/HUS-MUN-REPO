import type { ImageSourcePropType } from 'react-native';

// Optional bullet points and closing line cover briefs (like IPJ's) that list key aspects.
export type Brief = { intro: string; points?: string[]; outro?: string };

export type Committee = {
  id: string;
  code: string;
  name: string;
  overview: string;
  // Press committees report on the others and have no agenda of their own.
  agenda?: string;
  brief: Brief;
  teams?: { options: string[]; teamSize: number };
  emblem: ImageSourcePropType;
};

// Overviews are taken word-for-word from the official HUSMUN poster; briefs and
// agendas are as provided by the Secretariat.
export const committees: Committee[] = [
  {
    id: 'disec',
    code: 'DISEC',
    name: 'Disarmament and International Security Committee',
    overview:
      'Debate pressing global security challenges, arms control, and threats to international peace.',
    agenda:
      'Regulating the Use of Artificial Intelligence in Modern Warfare',
    brief: { intro: 'Focuses on the practical side of international security, exploring military expansion, arms proliferation, and emerging threats such as artificial intelligence in modern warfare. A great pick if you’re interested in geopolitics, military strategy, and understanding how nations balance national security with global peace.' },
    emblem: require('../../assets/images/committees/disec.png'),
  },
  {
    id: 'unodc',
    code: 'UNODC',
    name: 'United Nations Office on Drugs and Crime',
    overview:
      'Address transnational crime, drug trafficking, and international cooperation against organised crime.',
    agenda:
      'Human Trafficking for Forced Criminality in Online Scam Centres',
    brief: { intro: 'Delves into the world of transnational crime, drug trafficking, human trafficking, cybercrime, and corruption. Ideal for delegates interested in criminal networks, international law enforcement, and the complex challenge of tackling organised crime across national borders.' },
    emblem: require('../../assets/images/committees/unodc.png'),
  },
  {
    id: 'unhrc',
    code: 'UNHRC',
    name: 'United Nations Human Rights Council',
    overview:
      'Examine pressing human-rights concerns and debate measures to protect fundamental freedoms worldwide.',
    agenda:
      'Addressing Human Rights Violations Against Refugees and Migrants',
    brief: { intro: 'Involves debating solutions to human rights abuses and questioning the ethical responsibilities of governments. A strong choice if you’re interested in social justice, international law, and challenging the systems that allow discrimination, persecution, and violations of fundamental freedoms to persist.' },
    emblem: require('../../assets/images/committees/unhrc.png'),
  },
  {
    id: 'ccc',
    code: 'CCC',
    name: 'Continuous Crisis Committee',
    overview:
      'Respond to rapidly evolving situations through strategic decision-making, negotiation, and crisis management.',
    agenda:
      'Addressing the Breakdown of the Gaza Ceasefire and Establishing a Framework for Lasting Peace Between Israel and Hamas',
    brief: { intro: 'A fast-paced, high-pressure committee where situations evolve through unexpected crisis updates, forcing delegates to adapt their strategies and make decisions under uncertainty. With dynamic developments, urgent directives, and intense negotiations, CCC is ideal for those who enjoy thinking on their feet, taking initiative, and navigating unpredictable situations.' },
    emblem: require('../../assets/images/committees/ccc.png'),
  },
  {
    id: 'unga',
    code: 'UNGA ESS',
    name: 'United Nations General Assembly — Environmental and Sustainability Committee',
    overview:
      'Tackle urgent international crises through diplomacy, coalition-building, and collective decision-making.',
    agenda:
      'Financing Climate Adaptation in Developing Countries',
    brief: { intro: 'Explores the intersection of environmental protection, economic development, and international responsibility. From climate change and renewable energy to resource management and biodiversity, this committee is a great choice for delegates interested in sustainability, global cooperation, and finding practical solutions to challenges that affect the planet.' },
    emblem: require('../../assets/images/committees/unga.png'),
  },
  {
    id: 'ipl',
    code: 'IPL',
    name: 'Indian Premier League',
    overview:
      'Step into the world of professional cricket, navigating strategy, leadership, business, and high-pressure decisions.',
    agenda: 'Building the ultimate IPL Team',
    teams: {
      options: ['RCB', 'CSK', 'MI', 'PBKS', 'LSG', 'DC', 'GT', 'KKR', 'RR', 'SRH'],
      teamSize: 3,
    },
    brief: { intro: 'A competitive, strategy-driven committee centred around building the best possible IPL team. Delegates will need to evaluate players, make smart auction decisions, manage budgets, and construct a balanced squad capable of competing at the highest level. Perfect for cricket enthusiasts and strategic thinkers who enjoy negotiation, team-building, and the business side of professional sport.' },
    emblem: require('../../assets/images/committees/ipl.png'),
  },
  {
    id: 'ipj',
    code: 'IPJ',
    name: 'International Press — Journalism',
    overview:
      'Report on the conference through journalism, investigation, interviews, and compelling written coverage.',
    brief: {
      intro: 'Mainly focuses on reporting and investigating the happenings of the conference, with two key aspects:',
      points: [
        'Writing news reports and articles covering committee proceedings, highlighting successful negotiations, questionable arguments, and major developments.',
        'Interviewing and questioning delegates to scrutinise their positions, expose inconsistencies, and challenge their reasoning.',
      ],
      outro: 'Ideal for those who enjoy writing, investigative journalism, and putting delegates on the spot.',
    },
    emblem: require('../../assets/images/committees/ipj.png'),
  },
  {
    id: 'ipp',
    code: 'IPP',
    name: 'International Press — Photography',
    overview:
      'Capture the key moments of HUSMUN through impactful visual storytelling and photojournalism.',
    brief: { intro: 'Focuses on documenting the conference through photography, capturing important speeches, negotiations, delegate interactions, and memorable moments. A great option for those interested in visual storytelling, creativity, and photojournalism, where the goal is to communicate the atmosphere and intensity of the conference through compelling images.' },
    emblem: require('../../assets/images/committees/ipp.png'),
  },
];

export const conference = {
  edition: '4th Edition',
  dates: '18th – 19th December 2026',
  venue: 'Hiranandani Upscale School',
  address: [
    '5/63, Old Mahabalipuram Road, Opp. SIPCOT IT Park,',
    'Egattur Village, Rajiv Gandhi Salai, Kelambakkam,',
    'Chennai, Tamil Nadu — 600130',
  ],
  fees: [
    { label: 'Internal Delegates', amount: '₹800' },
    { label: 'External Delegates', amount: '₹1,600' },
  ],
  motto: ['Debate', 'Diplomacy', 'Leadership', 'Impact'],
};

export const findCommittee = (id: string | undefined) =>
  committees.find((c) => c.id === id);
