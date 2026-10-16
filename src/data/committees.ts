import type { ImageSourcePropType } from 'react-native';

export type Committee = {
  id: string;
  code: string;
  name: string;
  overview: string;
  // Press committees report on the others and have no agenda of their own.
  agenda?: string;
  emblem: ImageSourcePropType;
};

// Overviews are taken word-for-word from the official HUSMUN poster.
export const committees: Committee[] = [
  {
    id: 'disec',
    code: 'DISEC',
    name: 'Disarmament and International Security Committee',
    overview:
      'Debate pressing global security challenges, arms control, and threats to international peace.',
    agenda:
      'Regulating the Use of Artificial Intelligence in Modern Warfare',
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
    emblem: require('../../assets/images/committees/ccc.png'),
  },
  {
    id: 'unga',
    code: 'UNGA ESS',
    name: 'United Nations General Assembly — Emergency Special Session',
    overview:
      'Tackle urgent international crises through diplomacy, coalition-building, and collective decision-making.',
    agenda:
      'Financing Climate Adaptation in Developing Countries',
    emblem: require('../../assets/images/committees/unga.png'),
  },
  {
    id: 'ipl',
    code: 'IPL',
    name: 'Indian Premier League',
    overview:
      'Step into the world of professional cricket, navigating strategy, leadership, business, and high-pressure decisions.',
    agenda: 'Building the ultimate IPL Team',
    emblem: require('../../assets/images/committees/ipl.png'),
  },
  {
    id: 'ipj',
    code: 'IPJ',
    name: 'International Press — Journalism',
    overview:
      'Report on the conference through journalism, investigation, interviews, and compelling written coverage.',
    emblem: require('../../assets/images/committees/ipj.png'),
  },
  {
    id: 'ipp',
    code: 'IPP',
    name: 'International Press — Photography',
    overview:
      'Capture the key moments of HUSMUN through impactful visual storytelling and photojournalism.',
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
  fee: '₹800',
  motto: ['Debate', 'Diplomacy', 'Leadership', 'Impact'],
};

export const findCommittee = (id: string | undefined) =>
  committees.find((c) => c.id === id);
