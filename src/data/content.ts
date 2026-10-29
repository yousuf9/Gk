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

export interface Leader {
  name: string;
  role: string;
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

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'The Books', href: '#books' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'DCB Framework', href: '#framework' },
  { label: 'Acknowledgements', href: '#acknowledgements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#credentials' },
];

export const portraitImage = '/images/19972f2d-f13f-4958-91d5-ea5027d907d9.jpeg';
export const booksHoldingImage = '/images/f898e051-99fe-44bd-8fd4-9bdf1522d066.jpeg';
export const dcbCoverExternalUrl =
  'https://books.google.com/books/publisher/content?id=prrwEQAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE715xvLyBLD2pTB_LcQavAHhrlTq7LyFPKFpIxTPzGzfzbPIETY_c-U6lQszEZPdotGk1KTWq7B-ZXQAWCW4MzRiCXTbdvYmV7gElywlT3SvIhYMC5WYJYFIkB4CRjOKzSsdwM-l';
export const dcbCoverLocalUrl = '/images/dcb-cover.jpg';
export const authorAtWorkImage = '/images/19972f2d-f13f-4958-91d5-ea5027d907d9.jpeg';

export const authorInfo = {
  tagline: 'Two books. One mission: turn ambition into measurable performance.',
  location: 'Ahmedabad, Gujarat, India',
  followers: '7,156+',
  experienceYears: '22+',
  summary:
    'Gopal Krishna is a business leader, strategic thinker, and author of The DCB Success Formula and The TCB Framework. With more than two decades of experience across infrastructure, manufacturing, and high-growth environments, he has led teams, built scalable systems, and driven performance through disciplined execution and structured leadership.',
  longBio: [
    'With over two decades of experience in business leadership, Gopal Krishna serves as the Chief and Business Head of Adani Concrete, Solutions & Products, and B2B Cement at Adani Cement. His role focuses on spearheading strategic initiatives in institutional sales, value-added products, and customer satisfaction through collaboration with cross-functional teams.',
    'Leveraging expertise in strategic thinking, change management, and business acumen, he contributes to sustainable growth and operational innovation. Committed to fostering business transformation, he aims to drive excellence and scalability in the cement and concrete solutions industry.',
    'His first book, The DCB Success Formula, captures the personal operating system behind sustainable success: Discipline, Consistency, and Belief. His second book, The TCB Framework, connects that mindset to business performance by bringing Top-line, Cost-line, and Bottom-line thinking together.',
  ],
};

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

export const acknowledgedLeaders: Leader[] = [
  { name: 'Gautam Adani', role: 'Chairman, Adani Group' },
  { name: 'Karan Adani', role: 'Adani Group' },
  { name: 'Kumar Mangalam Birla', role: 'Chairman, Birla Group' },
  { name: 'Anil Agarwal', role: 'Chairman, Vedanta Group' },
  { name: 'S.S. Reddy', role: 'Chairman, Aparna Group' },
  { name: 'Vneet Jain', role: 'Leader' },
  { name: 'Ajay Kapoor', role: 'Leader' },
  { name: 'Atul Desai', role: 'Leader' },
  { name: 'S. Tatar', role: 'Leader' },
  { name: 'S. Sondur', role: 'Leader' },
  { name: 'Rakesh Vijayvargiya', role: 'Leader' },
  { name: 'Vinod Bahety', role: 'Leader' },
  { name: 'Manoj Sharma', role: 'Leader' },
  { name: 'Sanjay Behl', role: 'Leader' },
  { name: 'Ashwin Reddy', role: 'Leader' },
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

export const platformBadgeStyles: Record<string, string> = {
  'Deified Publications': 'border-gold-500/30 bg-gold-400/10 text-gold-300',
  Medium: 'border-white/15 bg-white/5 text-white',
  'Youth Ki Awaaz': 'border-teal-400/30 bg-teal-400/10 text-teal-300',
  Goodreads: 'border-amber-500/30 bg-amber-400/10 text-amber-300',
  Facebook: 'border-blue-500/30 bg-blue-400/10 text-blue-300',
  Instagram: 'border-pink-500/30 bg-pink-400/10 text-pink-300',
  Amazon: 'border-orange-500/30 bg-orange-400/10 text-orange-300',
  LinkedIn: 'border-sky-500/30 bg-sky-400/10 text-sky-300',
  Threads: 'border-white/15 bg-white/5 text-white',
  X: 'border-white/15 bg-white/5 text-white',
};

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
  'Discipline creates the room where confidence grows.',
  'Consistency turns ordinary effort into uncommon results.',
  'Lead yourself first. Then lead the room.',
  'Growth is a practice, not a performance.',
];
