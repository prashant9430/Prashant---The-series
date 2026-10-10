/**
 * Central portfolio data for Prashant.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Lines marked TODO are placeholders: replace them with real details before publishing.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Prashant Pandey',
  displayName: 'Prashant',
  firstName: 'PRASHANT',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PRASHANT ORIGINAL',
  role: 'Web Developer',
  tagline: ['BCA Aspirant', 'Web Developer', 'AI Enthusiast'],
  intro:
    'A curious builder learning web development through hands-on projects: a culture-focused web platform, an AI assistant and a real-time chat experiment, built one iteration at a time.',
  location: 'Mehsi, Bihar',
  email: 'prashantkumarpandey9430@gmail.com',
  links: {
    linkedin: '', // none; hidden on the site
    github: 'https://github.com/prashant9430',
  },
  resumePdf: '/assets/Prashant_Resume.pdf', // TODO: add this file in public/assets
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Prashant',
  },
  interests: ['Web Development', 'AI Tools'],
};

export const education = [
  {
    school: 'IGNOU',
    place: '',
    degree: 'BCA (online)',
    period: 'Starting January 2027',
    score: '',
  },
  {
    school: 'Class 12 (Science)',
    place: '',
    degree: 'Intermediate',
    period: 'Completed 2026',
    score: '294/500',
  },
  {
    school: 'U.H.S Parsauni Dewajit',
    place: '',
    degree: 'Secondary (Class 10)',
    period: 'Completed 2023',
    score: '351/500',
  },
];

export const experience = [
  {
    company: 'Personal projects',
    role: 'Self-driven builder',
    place: '',
    period: 'Now',
    points: [
      'Learning web development through hands-on projects, experiments and constant iteration.',
      'Building Brahmtatva, Pratigya AI and Cybertalk.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public: the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'brahmtatva',
    title: 'Brahmtatva',
    year: '2026',
    genre: 'Culture • Web • UI',
    logline: 'A digital space for Panchang, pooja resources, mantras and Sanatan knowledge.',
    stack: ['React', 'UI Design', 'Web'],
    build: [
      'Building a digital space for Panchang, pooja resources, mantras and Sanatan knowledge. Live at https://brahmtatva.netlify.app/ (in progress).',
    ],
    features: ['Panchang', 'Pooja resources', 'Mantras', 'Sanatan knowledge'],
    metrics: [], // TODO: add real numbers only if you have them (visitors, pages, etc.)
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'pratigya-ai',
    title: 'Pratigya AI',
    year: '2026',
    genre: 'AI • Bot • Telegram',
    logline: 'A conversational assistant concept focused on a helpful, thoughtful user experience.',
    stack: ['Python', 'Telegram', 'AI'],
    build: ['An experiment in building a conversational AI assistant that feels helpful and thoughtful to use.'],
    features: ['Conversational assistant', 'Telegram bot interface'],
    metrics: [],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'cybertalk',
    title: 'Cybertalk',
    year: '2026',
    genre: 'Community • Web • Real-time',
    logline: 'A dark-themed chat project exploring real-time communication and interface design.',
    stack: ['Firebase', 'Web', 'UI'],
    build: ['An experiment in real-time chat with a dark, cyber-style interface, built on Firebase.'],
    features: ['Real-time messaging', 'Dark-themed interface'],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

// TODO: add real achievements here, in the same shape as below. Left empty so nothing false is shown.
export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link: string };

// TODO: add real certifications (issuer, name, link) if you have any.
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'HTML / CSS', mono: 'Ht' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React', mono: 'Re' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Tools',
    subtitle: 'Data and version control',
    skills: [
      { name: 'Firebase', mono: 'Fb' },
      { name: 'Git / GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'Exploring',
    skills: [{ name: 'AI Tools', mono: 'Ai' }],
  },
];

/** Where each skill appears in the projects above. */
export const skillEvidence: Record<string, string[]> = {
  React: ['Brahmtatva'],
  'HTML / CSS': ['Brahmtatva', 'Cybertalk'],
  Firebase: ['Cybertalk'],
  'AI Tools': ['Pratigya AI'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2023',
    synopsis: 'Secondary education done, and the first look at what technology can make possible.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Beginning',
        description: 'Completed secondary education and started exploring what technology can make possible.',
        tags: ['Secondary education'],
        runtime: '2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Science & Curiosity',
    period: '2026',
    synopsis: 'Class 12 in the Science stream, the foundation for the next chapter.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Foundation',
        description: 'Completed Class 12 in the Science stream, building the foundation for the next chapter.',
        tags: ['Class 12', 'Science'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Build in Public',
    period: 'Now',
    synopsis: 'Learning web development through hands-on projects, experiments and constant iteration.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Builder',
        description: 'Brahmtatva, Pratigya AI and Cybertalk: three projects, each one a lesson.',
        tags: ['React', 'Python', 'Firebase'],
        runtime: 'In progress',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Next Chapter',
        description: 'Growing as a developer and turning more ideas into useful products, with an online BCA at IGNOU starting January 2027.',
        tags: ['BCA', 'IGNOU', 'Web', 'AI'],
        runtime: 'Loading',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Live project', title: 'Brahmtatva', detail: 'Panchang, pooja resources & mantras', palette: amber },
  { label: 'The AI Original', title: 'Pratigya AI', detail: 'Telegram assistant concept', palette: crimson },
  { label: 'Real-time', title: 'Cybertalk', detail: 'Dark-themed chat on Firebase', palette: ocean },
  { label: 'Main tool', title: 'React', detail: 'Used in Brahmtatva', palette: violet },
  { label: 'Current focus', title: 'Web + AI', detail: 'Learning by building in public', palette: crimson },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Class 12 · Science',
    lines: ['Class 12 completed 2026 · Secondary completed 2023', 'Next: BCA (online) at IGNOU, January 2027'],
  },
  {
    kicker: 'Skills',
    title: 'Learning by building.',
    lines: ['HTML / CSS, JavaScript, React', 'Firebase · Git / GitHub · AI tools'],
    chips: ['HTML / CSS', 'JavaScript', 'React', 'Firebase', 'GitHub'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Brahmtatva — Panchang, pooja resources & mantras', 'Pratigya AI — a Telegram AI assistant concept', 'Cybertalk — real-time dark-themed chat'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['Growing as a developer, one project at a time'],
  },
];

export type ProfileId = 'prashant' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

// 'moments' (achievements) is left out of every order until you add real achievements.
export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'prashant',
    name: 'Prashant',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume & skills first',
    color: '#4cc9ff',
    order: ['story', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Story so far', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights', palette: crimson },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: 'Coming soon', palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
