export interface NavLink {
  label: string;
  href: string;
}

export interface Book {
  id: 'dcb' | 'tcb';
  eyebrow: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  accent: 'gold' | 'teal';
  image: string;
  fallbackImage: string;
  description: string;
  points: string[];
  link: string;
  cta: string;
}

export interface TcbPillar {
  letter: string;
  name: string;
  description: string;
}

export interface DcbPillar {
  letter: string;
  name: string;
  description: string;
  points: string[];
}

export interface LifelongCompanion {
  id: string;
  index: string;
  name: string;
  maxim: string;
  b2bCementApplication: string;
  concretePourApplication: string;
}

export interface LeadershipDispatch {
  id: 'b2b-cement' | 'concrete-pour';
  badge: string;
  title: string;
  coreQuestion: string;
  leadParagraphs: string[];
  companionsInAction: {
    number: string;
    name: string;
    text: string;
  }[];
  dcbConnection: string;
  tcbConnection: string;
  closingQuestion: string;
  availabilityNote: string;
  websiteUrl: string;
  topics: string[];
}

export interface Leader {
  name: string;
  honorificName: string;
  role: string;
  organization: string;
  tier: 'chairman' | 'executive';
  initials: string;
  domain: string;
}

export interface LeadershipMoment {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  caption: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
}

export interface Education {
  institution: string;
  degree: string;
}

export interface Certification {
  name: string;
  org: string;
  year: string;
}

export interface AwardItem {
  name: string;
  org: string;
  year: string;
}

export interface Testimonial {
  id: string;
  platform: string;
  label: string;
  quote: string;
  rating?: number;
  url: string;
  featured?: boolean;
}

export interface AnthemStanza {
  id: string;
  index: string;
  label: string;
  pillarTag: string;
  seekTime: number;
  lines: string[];
  meaning: string;
}

export const navLinks: NavLink[] = [
  { label: 'Diwali', href: '#diwali' },
  { label: 'Anthem', href: '#anthem' },
  { label: 'Books', href: '#books' },
  { label: 'Companions', href: '#companions' },
  { label: 'Top Leaders', href: '#leaders' },
];

export const portraitImage = '/images/19972f2d-f13f-4958-91d5-ea5027d907d9.jpeg';
export const booksHoldingImage = '/images/f898e051-99fe-44bd-8fd4-9bdf1522d066.jpeg';
export const fourCompanionsPosterImage =
  '/assets/aistudio/578fbc2b-3e27-4aac-af50-4163de63fc0b_b0c31b63.jpeg';
export const diwaliSpecialImage =
  '/assets/aistudio/a16761e2-16a7-469a-b86a-8bdae8adc3f7_ec490893.jpeg';
export const dcbCoverExternalUrl =
  'https://books.google.com/books/publisher/content?id=prrwEQAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE715xvLyBLD2pTB_LcQavAHhrlTq7LyFPKFpIxTPzGzfzbPIETY_c-U6lQszEZPdotGk1KTWq7B-ZXQAWCW4MzRiCXTbdvYmV7gElywlT3SvIhYMC5WYJYFIkB4CRjOKzSsdwM-l';
export const dcbCoverLocalUrl = '/images/dcb-cover.jpg';
export const authorAtWorkImage = '/images/19972f2d-f13f-4958-91d5-ea5027d907d9.jpeg';

export const diwaliSpecialContent = {
  hindiTitle: 'ज्ञान का प्रकाश, विश्वास की शक्ति',
  englishTitle: 'A Diwali of Light, Learning and Possibility',
  sanskritShloka: '॥ तमसो मा ज्योतिर्गमय ॥',
  shlokaTranslation: 'Lead me from darkness to light.',
  hindiGreeting: 'आपको एवं आपके परिवार को दीपावली की हार्दिक शुभकामनाएँ।',
  hindiMessage:
    'दीपावली का प्रकाश हमें अपने भीतर झाँकने, जीवन के प्रति आभार व्यक्त करने और नई आशाओं के साथ आगे बढ़ने की प्रेरणा देता है। आइए, अपने ज्ञान को अच्छे कर्मों में बदलें और अपनी प्रगति से दूसरों के जीवन में भी उजाला लाएँ।',
  englishParagraphs: [
    'Diwali is a moment to pause with gratitude, reconnect with those who matter, and renew our commitment to a meaningful life.',
    'Through The DCB Success Formula, I share the power of Discipline × Consistency × Belief. Through The TCB Framework, I explore how Top-line, Cost-line and Bottom-line work together to support sustainable business growth.',
    'This Diwali, may these ideas inspire purposeful action, thoughtful choices and the belief that we can keep learning and contributing.',
  ],
  hindiPledge: 'एक दीप ज्ञान का। एक संकल्प अच्छे कर्म का।',
  englishPledge: 'Light a lamp of learning. Take a step with purpose.',
  closingWish:
    'Wishing you peace, good health, prosperity and the joy of growing together.',
  authorSignoff: 'गोपाल कृष्णा | Gopal Krishna',
  authorRoles: 'Author • Mentor • Coach • Trainer',
  diyas: [
    {
      id: 'gyan',
      hindi: 'ज्ञान का दीप',
      english: 'Lamp of Learning',
      caption: 'Seek clarity beyond reports and surface assumptions.',
    },
    {
      id: 'sankalp',
      hindi: 'संकल्प का दीप',
      english: 'Lamp of Discipline',
      caption: 'Turn knowledge into consistent, purposeful daily action.',
    },
    {
      id: 'vishwas',
      hindi: 'विश्वास का दीप',
      english: 'Lamp of Belief',
      caption: 'Hold steady conviction that uplifts teams and communities.',
    },
    {
      id: 'aabhar',
      hindi: 'आभार का दीप',
      english: 'Lamp of Gratitude',
      caption: 'Share credit with every person who helped light the way.',
    },
  ],
};

export const authorInfo = {
  tagline: 'Two books. One mission: turn ambition into measurable performance.',
  location: 'Ahmedabad, Gujarat, India',
  followers: '7,156+',
  experienceYears: '22+',
  website: 'www.gopalkrishna.in',
  availability: 'Available on Amazon • Flipkart • Kindle',
  summary:
    'Gopal Krishna is a business leader, strategic thinker, and author of The DCB Success Formula and The TCB Framework. With more than two decades of experience across infrastructure, manufacturing, and high-growth environments, he has led teams, built scalable systems, and driven performance through disciplined execution and structured leadership.',
  longBio: [
    'With over two decades of experience in business leadership, Gopal Krishna serves as the Chief and Business Head of Adani Concrete, Solutions & Products, and B2B Cement at Adani Cement. His role focuses on spearheading strategic initiatives in institutional sales, value-added products, and customer satisfaction through collaboration with cross-functional teams.',
    'Leveraging expertise in strategic thinking, change management, and business acumen, he contributes to sustainable growth and operational innovation. Committed to fostering business transformation, he aims to drive excellence and scalability in the cement and concrete solutions industry.',
    'His first book, The DCB Success Formula, captures the personal operating system behind sustainable success: Discipline, Consistency, and Belief. His second book, The TCB Framework, connects that mindset to business performance by bringing Top-line, Cost-line, and Bottom-line thinking together.',
  ],
};

export const lifelongCompanions: LifelongCompanion[] = [
  {
    id: 'curiosity',
    index: '01',
    name: 'Curiosity',
    maxim: 'Ask the question others overlook.',
    b2bCementApplication:
      'Curiosity takes me beyond the sales report. The report shows that our share of the customer’s business has fallen. A conversation at the site can reveal why a competing supplier earned the next order.',
    concretePourApplication:
      'Curiosity gets me out of the review room and onto the plant floor. A dispatch report can tell me how late we were. The people doing the work can tell me why.',
  },
  {
    id: 'courage',
    index: '02',
    name: 'Courage',
    maxim: 'Act when the answer is uncertain.',
    b2bCementApplication:
      'Courage helps me ask, “Did we promise a delivery date before checking with the plant?” When I’m willing to examine my own decisions, the team has more room to speak honestly about what happened.',
    concretePourApplication:
      'Courage helps me ask, “Did a decision I made contribute to the delay?” The answer can be uncomfortable. It can also give the team the freedom to speak honestly.',
  },
  {
    id: 'perseverance',
    index: '03',
    name: 'Perseverance',
    maxim: 'Keep going when progress is slow.',
    b2bCementApplication:
      'Perseverance means following through beyond the first order we win back. Did we deliver the promised quantity on time? Did we check the customer’s requirement for next week? That follow-through gives the customer a reason to order from us again.',
    concretePourApplication:
      'Perseverance means coming back on the next shift to see whether the change worked, and staying with it until the customer can count on us.',
  },
  {
    id: 'gratitude',
    index: '04',
    name: 'Gratitude with Humility',
    maxim: 'Give credit to those who helped.',
    b2bCementApplication:
      'Gratitude with humility means sharing the credit when business returns. The CAC partner who kept the conversation open, the dispatcher who secured the slot and the driver who reached the site on time all helped rebuild trust.',
    concretePourApplication:
      'Gratitude with humility means remembering, when the customer thanks us, to thank the driver who flagged the problem and the batcher who helped solve it.',
  },
];

export const leadershipDispatches: LeadershipDispatch[] = [
  {
    id: 'b2b-cement',
    badge: 'Field Dispatch 01 · B2B Cement & Customer Trust',
    title: 'Earning Back the Next Order in B2B Cement',
    coreQuestion: '“What did the customer need that we missed?”',
    leadParagraphs: [
      'When a project customer who buys cement from us places the next order with another supplier, the first question I want to ask is simple. “What did the customer need that we missed?”',
      'In B2B cement, the answer can look different depending on whom we ask. Our CAC partner may know when the order was discussed. The logistics team can tell us which delivery slot was available. The site engineer can tell us when the cement was actually needed. Listening to all three brings me back to four lifelong companions I value in leadership.',
    ],
    companionsInAction: [
      {
        number: '01',
        name: 'Curiosity',
        text: 'Curiosity takes me beyond the sales report. The report shows that our share of the customer’s business has fallen. A conversation at the site can reveal why a competing supplier earned the next order.',
      },
      {
        number: '02',
        name: 'Courage',
        text: 'Courage helps me ask, “Did we promise a delivery date before checking with the plant?” When I’m willing to examine my own decisions, the team has more room to speak honestly about what happened.',
      },
      {
        number: '03',
        name: 'Perseverance',
        text: 'Perseverance means following through beyond the first order we win back. Did we deliver the promised quantity on time? Did we check the customer’s requirement for next week? That follow-through gives the customer a reason to order from us again.',
      },
      {
        number: '04',
        name: 'Gratitude with Humility',
        text: 'Gratitude with humility means sharing the credit when business returns. The CAC partner who kept the conversation open, the dispatcher who secured the slot and the driver who reached the site on time all helped rebuild trust.',
      },
    ],
    dcbConnection:
      'In The DCB Success Formula, I express success as Discipline × Consistency × Belief. Belief gives us the confidence to approach an inactive customer again. Discipline makes us check availability before making a commitment. Consistency gives the customer a reason to believe our word.',
    tcbConnection:
      'In The TCB Framework, those habits show up in three places. Repeat orders grow the Top-line. Better dispatch planning reduces waiting and freight costs on the Cost-line. When we grow volume at a healthy margin and collect on time, the Bottom-line and cash flow both benefit.',
    closingQuestion:
      'Think of a customer whose trust you had to earn back. Which of these four companions made the difference?',
    availabilityNote:
      'Both books are available on Amazon and Flipkart, with e-book editions on Kindle.',
    websiteUrl: 'www.gopalkrishna.in',
    topics: ['B2B Cement', 'Leadership', 'The DCB Success Formula', 'The TCB Framework'],
  },
  {
    id: 'concrete-pour',
    badge: 'Field Dispatch 02 · Concrete Operations & Plant Floor',
    title: 'On-Time Concrete Pours & Plant Floor Leadership',
    coreQuestion: '“Where did we lose time, and who saw it happen?”',
    leadParagraphs: [
      'When a concrete pour runs late, the most useful question a leader can ask may be the simplest one. “Where did we lose time, and who saw it happen?”',
      'The driver, the batcher and the customer may each know a different part of the answer. What we do with their answers brings me back to four lifelong companions I’ve come to value in leadership.',
    ],
    companionsInAction: [
      {
        number: '01',
        name: 'Curiosity',
        text: 'Curiosity gets me out of the review room and onto the plant floor. A dispatch report can tell me how late we were. The people doing the work can tell me why.',
      },
      {
        number: '02',
        name: 'Courage',
        text: 'Courage helps me ask, “Did a decision I made contribute to the delay?” The answer can be uncomfortable. It can also give the team the freedom to speak honestly.',
      },
      {
        number: '03',
        name: 'Perseverance',
        text: 'Perseverance means coming back on the next shift to see whether the change worked, and staying with it until the customer can count on us.',
      },
      {
        number: '04',
        name: 'Gratitude with Humility',
        text: 'Gratitude with humility means remembering, when the customer thanks us, to thank the driver who flagged the problem and the batcher who helped solve it.',
      },
    ],
    dcbConnection:
      'These companions run through both my books. In The DCB Success Formula, I express success as Discipline × Consistency × Belief. It takes belief to try a different approach, discipline to act on it and consistency to follow through across shifts.',
    tcbConnection:
      'In The TCB Framework, I look at what those habits deliver for the business. A customer who books the next pour strengthens the Top-line. Fewer hours lost to waiting improve the Cost-line. Together, repeat business and lower delivery costs support the Bottom-line.',
    closingQuestion:
      'Which of these four companions has shaped the way you lead? I’d love to hear the moment that taught you its value.',
    availabilityNote:
      'Both books are available on Amazon and Flipkart, with e-book editions on Kindle.',
    websiteUrl: 'www.gopalkrishna.in',
    topics: ['Leadership', 'The DCB Success Formula', 'The TCB Framework', 'Lifelong Learning'],
  },
];

export const books: Book[] = [
  {
    id: 'dcb',
    eyebrow: 'Book one · The personal operating system',
    title: 'THE DCB SUCCESS FORMULA',
    shortTitle: 'The DCB Success Formula',
    subtitle: 'The Winning Trio: Discipline • Consistency • Belief',
    accent: 'gold',
    image: dcbCoverLocalUrl,
    fallbackImage: dcbCoverExternalUrl,
    description:
      'Why do some people sustain success while others struggle to maintain it? The DCB Success Formula breaks down the hidden structure behind consistent performance through habits, patterns, and practical reflections.',
    points: [
      'Build habits that outlast motivation',
      'Turn consistency into compounding progress',
      'Use belief to stay steady under pressure',
    ],
    link: 'https://play.google.com/store/books/details?id=prrwEQAAQBAJ',
    cta: 'Read about DCB',
  },
  {
    id: 'tcb',
    eyebrow: 'Book two · The business performance framework',
    title: 'THE TCB FRAMEWORK',
    shortTitle: 'The TCB Framework',
    subtitle: 'Top-line • Cost-line • Bottom-line',
    accent: 'teal',
    image: booksHoldingImage,
    fallbackImage: booksHoldingImage,
    description:
      'A practical guide for CEOs, senior leaders, entrepreneurs, and professionals who want to understand sustainable and profitable growth by managing revenue, operational efficiency, and business outcomes together.',
    points: [
      'Top-line: create revenue and growth',
      'Cost-line: strengthen operational efficiency',
      'Bottom-line: build sustainable profitability',
    ],
    link: 'https://www.amazon.in/TCB-Framework-Business-Strategy-Book/dp/B0HKRKBDB1',
    cta: 'Explore TCB',
  },
];

export const tcbPillars: TcbPillar[] = [
  {
    letter: 'T',
    name: 'Top-line',
    description: 'Revenue, growth, and the choices that expand a business with purpose.',
  },
  {
    letter: 'C',
    name: 'Cost-line',
    description: 'Operational efficiency, discipline, and the systems that protect value.',
  },
  {
    letter: 'B',
    name: 'Bottom-line',
    description: 'Sustainable profitability created by aligning growth with execution.',
  },
];

export const dcbPillars: DcbPillar[] = [
  {
    letter: 'D',
    name: 'Discipline',
    description:
      'Discipline is the foundation. It is the ability to do what needs to be done, even when motivation fades. High performers understand that discipline creates the structure within which success can flourish.',
    points: [
      'Build habits that outlast motivation',
      'Create systems that enforce consistency',
      'Master the art of focused execution',
    ],
  },
  {
    letter: 'C',
    name: 'Consistency',
    description:
      'Consistency transforms effort into results. It is the compounding power of small actions repeated over time. Success is not a single event but a series of deliberate choices made day after day.',
    points: [
      'Small actions compound into big results',
      'Maintain standards under pressure',
      'Turn good days into a great life',
    ],
  },
  {
    letter: 'B',
    name: 'Belief',
    description:
      'Belief is the fuel that sustains the journey. It is the unwavering conviction that your efforts matter, that obstacles are temporary, and that the vision you hold is worth pursuing—especially when the path gets hard.',
    points: [
      'Sustain momentum through setbacks',
      'Cultivate unshakeable self-trust',
      'Align vision with daily action',
    ],
  },
];

export const acknowledgementText =
  'This book would not have been possible without the guidance, support, and encouragement of many individuals. I extend my sincere gratitude to my mentors and leaders who have shaped my thinking and inspired me to move beyond conventional boundaries.';

export const fullAcknowledgementStatement =
  'I would like to acknowledge: Adani Group Chairman Mr. Gautam Adani and Mr. Karan Adani, Birla Group Chairman Mr. Kumar Mangalam Birla, Vedanta Group Chairman Mr. Anil Agarwal, Aparna Group Chairman Mr. S.S. Reddy, Mr. Vneet Jain, Mr. Ajay Kapoor, Mr. Atul Desai, Mr. S. Tatar, Mr. S. Sondur, Mr. Rakesh Vijayvargiya, Mr. Vinod Bahety, Mr. Manoj Sharma, Mr. Sanjay Behl, Mr. Ashwin Reddy.';

export const acknowledgedLeaders: Leader[] = [
  {
    name: 'Gautam Adani',
    honorificName: 'Mr. Gautam Adani',
    role: 'Chairman',
    organization: 'Adani Group',
    tier: 'chairman',
    initials: 'GA',
    domain: 'Nation-Building Infrastructure & Industrial Vision',
  },
  {
    name: 'Karan Adani',
    honorificName: 'Mr. Karan Adani',
    role: 'Leadership',
    organization: 'Adani Group',
    tier: 'chairman',
    initials: 'KA',
    domain: 'Strategic Scale, Cement & Logistics Transformation',
  },
  {
    name: 'Kumar Mangalam Birla',
    honorificName: 'Mr. Kumar Mangalam Birla',
    role: 'Chairman',
    organization: 'Birla Group',
    tier: 'chairman',
    initials: 'KB',
    domain: 'Global Conglomerate Stewardship & Institutional Excellence',
  },
  {
    name: 'Anil Agarwal',
    honorificName: 'Mr. Anil Agarwal',
    role: 'Chairman',
    organization: 'Vedanta Group',
    tier: 'chairman',
    initials: 'AA',
    domain: 'Natural Resources & Entrepreneurial Resilience',
  },
  {
    name: 'S.S. Reddy',
    honorificName: 'Mr. S.S. Reddy',
    role: 'Chairman',
    organization: 'Aparna Group',
    tier: 'chairman',
    initials: 'SR',
    domain: 'Real Estate & Building Materials Innovation',
  },
  {
    name: 'Vneet Jain',
    honorificName: 'Mr. Vneet Jain',
    role: 'Executive Leader',
    organization: 'Industry Mentor',
    tier: 'executive',
    initials: 'VJ',
    domain: 'Infrastructure Execution & Strategic Growth',
  },
  {
    name: 'Ajay Kapoor',
    honorificName: 'Mr. Ajay Kapoor',
    role: 'Executive Leader',
    organization: 'Industry Mentor',
    tier: 'executive',
    initials: 'AK',
    domain: 'Cement & Building Materials Leadership',
  },
  {
    name: 'Atul Desai',
    honorificName: 'Mr. Atul Desai',
    role: 'Executive Leader',
    organization: 'Industry Mentor',
    tier: 'executive',
    initials: 'AD',
    domain: 'Operational Excellence & Commercial Strategy',
  },
  {
    name: 'S. Tatar',
    honorificName: 'Mr. S. Tatar',
    role: 'Executive Leader',
    organization: 'Industry Mentor',
    tier: 'executive',
    initials: 'ST',
    domain: 'Strategic Transformation & Governance',
  },
  {
    name: 'S. Sondur',
    honorificName: 'Mr. S. Sondur',
    role: 'Executive Leader',
    organization: 'Industry Mentor',
    tier: 'executive',
    initials: 'SS',
    domain: 'Engineering & Industrial Systems',
  },
  {
    name: 'Rakesh Vijayvargiya',
    honorificName: 'Mr. Rakesh Vijayvargiya',
    role: 'Executive Leader',
    organization: 'Industry Mentor',
    tier: 'executive',
    initials: 'RV',
    domain: 'Business Operations & Market Expansion',
  },
  {
    name: 'Vinod Bahety',
    honorificName: 'Mr. Vinod Bahety',
    role: 'Executive Leader',
    organization: 'Industry Mentor',
    tier: 'executive',
    initials: 'VB',
    domain: 'Financial Discipline & Value Creation',
  },
  {
    name: 'Manoj Sharma',
    honorificName: 'Mr. Manoj Sharma',
    role: 'Executive Leader',
    organization: 'Industry Mentor',
    tier: 'executive',
    initials: 'MS',
    domain: 'Organizational Leadership & Execution',
  },
  {
    name: 'Sanjay Behl',
    honorificName: 'Mr. Sanjay Behl',
    role: 'Executive Leader',
    organization: 'Industry Mentor',
    tier: 'executive',
    initials: 'SB',
    domain: 'Brand, Commercial & Consumer Strategy',
  },
  {
    name: 'Ashwin Reddy',
    honorificName: 'Mr. Ashwin Reddy',
    role: 'Executive Leader',
    organization: 'Aparna Group',
    tier: 'executive',
    initials: 'AR',
    domain: 'Enterprise Scale & Modern Manufacturing',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Chief / Business Head — Integrated Business RMC, Solution & Products and B2B Cement',
    company: 'Adani Cement',
    period: 'Mar 2026 — Present',
  },
  {
    role: 'Chief / Head — Adani Concrete Business, Adani Group',
    company: 'Adani Cement',
    period: 'Aug 2024 — Present',
  },
  {
    role: 'Business Head — Aparna RMC',
    company: 'Aparna Enterprises Limited',
    period: 'Mar 2023 — Aug 2024',
  },
  {
    role: 'Regional Business Head — Mumbai',
    company: 'Prism Johnson Limited (RMC India Division)',
    period: 'Nov 2020 — Mar 2023',
  },
  {
    role: 'Author — The DCB Success Formula',
    company: 'Author',
    period: '2025',
  },
  {
    role: 'Author — The TCB Framework',
    company: 'Author',
    period: '2026',
  },
];

export const educations: Education[] = [
  {
    institution: 'Indian Institute of Management, Calcutta',
    degree: 'APMP / EMBA, Sales & Marketing',
  },
  {
    institution: 'Asian Institute of Management and Technology',
    degree: 'Master of Engineering (MEng), Civil Engineering',
  },
  {
    institution: 'NIT Hamirpur, HP',
    degree: 'B.Tech, Civil Engineering',
  },
  {
    institution: 'CASI New York',
    degree: 'Fellowship in Sustainability and CSR in Manufacturing',
  },
];

export const certifications: Certification[] = [
  {
    name: 'Certified Six Sigma Black Belt',
    org: 'MSME — Technology Development Centre, Agra',
    year: '2013',
  },
  {
    name: 'Chartered Engineer (India)',
    org: 'The Institution of Engineers (India)',
    year: '2016',
  },
  {
    name: 'Certified Corporate Director',
    org: 'Institute of Directors, India',
    year: '2016',
  },
  {
    name: 'Certified Training Professional',
    org: 'Indian Leadership Academy',
    year: '2020',
  },
  {
    name: 'Developing Your Emotional Intelligence',
    org: 'LinkedIn',
    year: '2020',
  },
];

export const awards: AwardItem[] = [
  {
    name: 'Star Performer',
    org: 'Aditya Birla Group',
    year: '2008',
  },
  {
    name: 'Star Performer',
    org: 'Aditya Birla Group',
    year: '2009',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'deified',
    platform: 'Deified Publications',
    label: 'Official Book Review',
    quote:
      'In a literary market flooded with quick-fix guides and empty motivational fluff, Gopal Krishna has delivered something genuinely substantive and useful. It challenges you to stop waiting for inspiration and start building the invisible habits that sustain a meaningful life over the long haul.',
    rating: 4.4,
    url: 'https://deifiedpublications.com/book-reviews/the-dcb-success-formula-book-review-does-it-actually-work',
    featured: true,
  },
  {
    id: 'medium',
    platform: 'Medium',
    label: 'Featured Article',
    quote:
      'Why The DCB Success Formula might fix your work habits — a close look at how discipline, consistency, and belief replace the fragile cycle of relying on motivation.',
    url: 'https://medium.com/@deifiedbooks/why-the-dcb-success-formula-might-fix-your-work-habits-ed6dc532b4a8',
  },
  {
    id: 'youthkiawaaz',
    platform: 'Youth Ki Awaaz',
    label: 'Editorial Feature',
    quote:
      'Gopal Krishna shows why Indian youth need routine — and why discipline is the missing ingredient in most ambitions.',
    url: 'https://www.youthkiawaaz.com/2026/10/gopal-krishna-shows-why-indian-youth-need-routine/',
  },
  {
    id: 'goodreads-1',
    platform: 'Goodreads',
    label: 'Reader Review',
    quote: 'A clear, no-nonsense framework that turns consistency into a habit you can actually keep.',
    url: 'https://www.goodreads.com/review/show/9052074579',
  },
  {
    id: 'goodreads-2',
    platform: 'Goodreads',
    label: 'Reader Review',
    quote: 'Discipline, Consistency, Belief — the trio stays with you long after the last page.',
    url: 'https://www.goodreads.com/review/show/9052075103',
  },
  {
    id: 'goodreads-3',
    platform: 'Goodreads',
    label: 'Reader Review',
    quote: 'Practical, structured, and refreshingly free of empty motivation talk.',
    url: 'https://www.goodreads.com/review/show/9052076033',
  },
  {
    id: 'goodreads-4',
    platform: 'Goodreads',
    label: 'Reader Review',
    quote: 'A manual for builders — the kind of book you return to when your discipline slips.',
    url: 'https://www.goodreads.com/review/show/9052076669',
  },
  {
    id: 'goodreads-5',
    platform: 'Goodreads',
    label: 'Reader Review',
    quote: 'Real case studies and an action-oriented tone make this a genuinely useful read.',
    url: 'https://www.goodreads.com/review/show/9052078661',
  },
  {
    id: 'facebook-1',
    platform: 'Facebook',
    label: 'Community Review',
    quote: 'A reader shares how the DCB trio reshaped their daily routine.',
    url: 'https://www.facebook.com/share/p/1HmZgWNYam/',
  },
  {
    id: 'facebook-2',
    platform: 'Facebook',
    label: 'Community Review',
    quote: 'A thoughtful take on building belief that holds up under pressure.',
    url: 'https://www.facebook.com/share/p/1MuHw5x1Bz/',
  },
  {
    id: 'instagram-1',
    platform: 'Instagram',
    label: 'Deified Books',
    quote: 'Highlighting the framework that turns ambition into measurable performance.',
    url: 'https://www.instagram.com/deifiedbooks/p/De57pBJk6G4/',
  },
  {
    id: 'instagram-2',
    platform: 'Instagram',
    label: 'Radcliffe Bureau HQ',
    quote: 'A spotlight on the discipline-first approach to sustained success.',
    url: 'https://www.instagram.com/radcliffebureauhq/p/De58SA3krSl/',
  },
  {
    id: 'amazon-1',
    platform: 'Amazon',
    label: 'Verified Review',
    quote: 'A reader breaks down why the DCB formula actually works in practice.',
    url: 'https://prnt.sc/2yHcFqEqzBUC',
  },
  {
    id: 'amazon-2',
    platform: 'Amazon',
    label: 'Verified Review',
    quote: 'A practical, honest framework for anyone tired of fleeting motivation.',
    url: 'https://prnt.sc/osGnAqL64_5L',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    label: 'Professional Post',
    quote: 'A leadership perspective on how the DCB framework applies to high-performance teams.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7519995421453324288',
  },
  {
    id: 'threads',
    platform: 'Threads',
    label: 'Discussion',
    quote: 'A quick take on why routine beats motivation every single time.',
    url: 'https://www.threads.com/share/FKQQX6FSk/',
  },
  {
    id: 'x',
    platform: 'X',
    label: 'Post',
    quote: 'A sharp summary of why discipline is the real driver of lasting results.',
    url: 'https://x.com/DeifiedBooks/status/2114230792285257984?s=20',
  },
];

export const skills: string[] = [
  'Business Strategy',
  'Strategic Planning',
  'Strategic Thinking',
  'Change Management',
  'P&L Management',
  'Sales & Marketing',
  'Market Analysis',
  'Pricing Strategy',
  'Business Model',
  'Entry Strategies',
  'Facilitation',
  'Acquisition',
  'Commercial',
  'Government Relations',
  'Authoring',
];

export const marqueeQuotes: string[] = [
  'हर दिन थोड़ा सीख रे मन, हर दिन थोड़ा जीत — अपने सच्चे कर्मों से तू, लिख दे अपना गीत।',
  '॥ तमसो मा ज्योतिर्गमय ॥ — Lead me from darkness to light.',
  'एक दीप ज्ञान का। एक संकल्प अच्छे कर्म का। — Light a lamp of learning. Take a step with purpose.',
  'Discipline creates the room where confidence grows.',
  'Consistency turns ordinary effort into uncommon results.',
  'Curiosity · Courage · Perseverance · Gratitude with Humility.',
];

export const dcbAnthemContent = {
  titleHindi: 'हर दिन थोड़ा सीख रे मन, हर दिन थोड़ा जीत',
  shortTitleHindi: 'हर दिन थोड़ा जीत',
  titleEnglish: 'Learn a Little Every Day, Win a Little Every Day',
  subtitle: 'The Musical Anthem of Discipline × Consistency × Belief',
  artist: 'गोपाल कृष्णा | Gopal Krishna',
  sunoShortUrl: 'https://suno.com/s/u9GeZ4HEtKycFIc6',
  sunoSongUrl: 'https://suno.com/song/f61dbb07-9665-4d76-a8fe-708de1a67977',
  sunoEmbedUrl: 'https://suno.com/embed/f61dbb07-9665-4d76-a8fe-708de1a67977',
  localMediaUrl: '/assets/suno/dcb-anthem.mp4',
  coverImageUrl: '/assets/suno/dcb-anthem-cover.jpg',
  coreDcbVerse: 'अनुशासन हो कदमों में, निरंतरता हो चाल, मन में अपने विश्वास रख, फिर कोशिश कर हर हाल।',
  stanzas: [
    {
      id: 'stanza-1',
      index: '01',
      label: 'मुखड़ा · Opening Chorus',
      pillarTag: 'Daily Mastery · छोटे-छोटे कदम',
      seekTime: 0,
      lines: [
        'हर दिन थोड़ा सीख रे मन, हर दिन थोड़ा जीत,',
        'अपने सच्चे कर्मों से तू, लिख दे अपना गीत।',
        'मंच पे जो चमकेगा कल, आज उसे तू गढ़,',
        'छोटे-छोटे कदमों से तू, मंज़िल की ओर बढ़।',
      ],
      meaning:
        'Learn a little every day, win a little every day; write your own song through honest deeds. Shape today what will shine on stage tomorrow, advancing toward your destination through small, deliberate steps.',
    },
    {
      id: 'stanza-2',
      index: '02',
      label: 'अंतरा १ · Verse I',
      pillarTag: 'Self-Accountability · संकल्प और वचन',
      seekTime: 24,
      lines: [
        'सुबह की पहली किरणों संग, संकल्प नया जगाना है,',
        'कल जहाँ पर चूक हुई थी, आज उसे सुधराना है।',
        'कोई देखे या ना देखे, अपना वचन निभाना है,',
        'रोज़ पसीने की बूँदों से, सपनों को सींचते जाना है।',
      ],
      meaning:
        'Awaken a fresh resolve with the first rays of morning and correct where you fell short yesterday. Whether anyone is watching or not, honor your word and water your dreams daily with drops of honest effort.',
    },
    {
      id: 'stanza-3',
      index: '03',
      label: 'स्थायी · Refrain',
      pillarTag: 'Authentic Action · सच्चे कर्म',
      seekTime: 50,
      lines: [
        'हर दिन थोड़ा सीख रे मन, हर दिन थोड़ा जीत,',
        'अपने सच्चे कर्मों से तू, लिख दे अपना गीत।',
      ],
      meaning:
        'The core heartbeat of personal transformation: continuous learning paired with small daily victories.',
    },
    {
      id: 'stanza-4',
      index: '04',
      label: 'अंतरा २ · Verse II',
      pillarTag: 'Preparation & Resilience · तैयारी और साहस',
      seekTime: 66,
      lines: [
        'कक्षा हो या खेल का मैदान, काम की कोई ज़िम्मेदारी,',
        'हर चुनौती से पहले कर ले, मन से अपनी तैयारी।',
        'गिरना भी सिखलाता हमको, कहाँ सँभलकर चलना है,',
        'अपने बीते कल से आगे, आज हमें कुछ बढ़ना है।',
      ],
      meaning:
        'Whether in the classroom, on the playing field, or in any professional responsibility, prepare your mind before every challenge. Even falling teaches us where to walk with care so we outgrow our yesterday.',
    },
    {
      id: 'stanza-5',
      index: '05',
      label: 'अंतरा ३ · The DCB Verse',
      pillarTag: 'Discipline × Consistency × Belief · अनुशासन · निरंतरता · विश्वास',
      seekTime: 96,
      lines: [
        'अनुशासन हो कदमों में, निरंतरता हो चाल,',
        'मन में अपने विश्वास रख, फिर कोशिश कर हर हाल।',
        'साथ मिले तो साथ बढ़ें, सबका हौसला बढ़ाएँ,',
        'अपनी मेहनत के उजियारे, औरों तक भी पहुँचाएँ।',
      ],
      meaning:
        'Let Discipline guide your steps, Consistency define your pace, and Belief anchor your heart as you strive in every circumstance. Grow together, uplift everyone’s courage, and share the light of your hard work.',
    },
    {
      id: 'stanza-6',
      index: '06',
      label: 'समापन · Finale',
      pillarTag: 'Compounding Practice · सच्चा अभ्यास और नया सवेरा',
      seekTime: 126,
      lines: [
        'तालियाँ जिस दिन गूँजेंगी, याद हमें यह आएगा',
        'रोज़ किया जो सच्चा अभ्यास, वही काम आ जाएगा।',
        'जीत की अपनी नींव बना, उम्मीदों का दीप जला,',
        'आज की तैयारी से ही, कल का नया सवेरा ला।',
      ],
      meaning:
        'On the day applause echoes, we will remember that it was true daily practice that made the difference. Lay the foundation of victory, light the lamp of hope, and bring tomorrow’s new dawn through today’s preparation.',
    },
  ] as AnthemStanza[],
};

export const leadershipBookMoments: LeadershipMoment[] = [
  {
    id: 'dilip-gohel',
    image: '/assets/aistudio/2e3a4f19-f865-47a8-a1e3-c9aa6f83f6e3_db598b30.jpeg',
    title: 'With Mr. Dilip Gohel',
    subtitle: 'The DCB Success Formula & The TCB Framework',
    caption:
      'Presenting both titles — uniting personal Discipline, Consistency, and Belief with Top-line, Cost-line, and Bottom-line business strategy.',
  },
  {
    id: 'executive-tcb-1',
    image: '/assets/aistudio/b866ba5f-4308-451d-b962-8496bfae3e52_dc96a6f0.jpeg',
    title: 'Senior Leadership Exchange',
    subtitle: 'Presenting The TCB Framework',
    caption:
      'Sharing practical perspectives on sustainable business growth, operational discipline, and team alignment across cement and concrete operations.',
  },
  {
    id: 'executive-tcb-2',
    image: '/assets/aistudio/c7e10867-effb-4648-88a2-36d41a66ba12_4635ff2a.jpeg',
    title: 'Executive Book Presentation',
    subtitle: 'The TCB Framework in Action',
    caption:
      'Dialogue with senior leadership on turning strategic clarity across Top-line, Cost-line, and Bottom-line into enduring enterprise value.',
  },
];


