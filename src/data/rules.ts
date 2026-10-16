export type RuleBlock = { heading?: string; text: string };

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
        heading: 'Day 1 (18th December) — Indian cultural attire is mandatory',
        text: 'All traditional formals (Example, Kurtas, sarees, half-sarees…). Casual or inappropriate clothing, including jeans, T-shirts, shorts, or sportswear, is not permitted.',
      },
      {
        heading: 'Day 2 (19th December) — Western formal attire is mandatory',
        text: 'A Suit, blazer, formal shirt, formal blouse, formal skirt (knee-length or longer) or trousers, formal dresses, stockings for dresses and skirts, closed-toe shoes, and formal shoes, as well as sleeveless attire, are permitted. Neutral makeup is requested, and hair should be well-kept for the conference.',
      },
    ],
  },
  {
    title: 'Contraband',
    blocks: [
      {
        text: 'Any substances or intoxicants will be confiscated immediately, as well as lighters or matches, caffeinated drinks, and outside food, which will also be reported. All phones will be submitted to the front office in the foyer. If found in bags or on persons during the conference, they will be confiscated. Bag checks will also be conducted on both days of the conference. Ordering items through delivery apps is strictly prohibited and will be reported to the secretariat and EB.',
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
    ],
  },
];
