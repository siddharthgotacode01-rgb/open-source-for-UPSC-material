import { TopperKit } from '../types/book';

export const TOPPER_KITS: TopperKit[] = [
  {
    id: 'core-ten',
    title: 'The Non-Negotiable Core 10 Books',
    badge: 'Rank-1 Foundation',
    description: 'The definitive minimal stack followed by 95% of UPSC toppers to secure top ranks with high revisions rather than multiple sources.',
    targetAspirant: 'Every UPSC CSE Aspirant (Beginner to Repeater)',
    bookIds: [
      'laxmikanth-polity',
      'spectrum-modern-history',
      'rs-sharma-ancient',
      'nitin-singhania-art-culture',
      'ncert-fine-arts-class-11',
      'ncert-physical-geography-class-11',
      'ncert-india-physical-class-11',
      'gc-leong-geography',
      'ramesh-singh-economy',
      'shankar-ias-environment',
      'lexicon-ethics',
      'ashok-kumar-internal-security'
    ],
    estimatedTotalHours: 480,
    strategyNote: 'Toppers emphasize "Read 1 book 10 times, rather than 10 books 1 time". Complete this core stack first before touching any other supplementary material.'
  },
  {
    id: 'ncert-starter',
    title: '90-Day NCERT Foundation Kit',
    badge: 'Beginner Friendly',
    description: 'The baseline conceptual books needed in the first 2-3 months to build vocabulary, historical timelines, and physical geographic intuition.',
    targetAspirant: 'Fresh Aspirants starting from scratch',
    bookIds: [
      'ncert-physical-geography-class-11',
      'ncert-india-physical-class-11',
      'ncert-fine-arts-class-11',
      'ncert-macroeconomics-class-12',
      'ncert-indian-society-class-12',
      'ncert-social-change-class-12',
      'ncert-biology-ecology-class-12',
      'rs-sharma-ancient',
      'satish-chandra-medieval'
    ],
    estimatedTotalHours: 180,
    strategyNote: 'Do not make notes on the first reading of NCERTs. Read them like newspapers. On the second reading, highlight definitions and core frameworks.'
  },
  {
    id: 'prelims-fast-track',
    title: 'Prelims High-Yield Fast Track Stack',
    badge: 'Prelims Sprint',
    description: 'Targeted books that account for 75%+ of Prelims General Studies Paper 1 and Paper 2 cutoff marks.',
    targetAspirant: 'Aspirants within 4-6 months of Prelims',
    bookIds: [
      'laxmikanth-polity',
      'spectrum-modern-history',
      'shankar-ias-environment',
      'ncert-physical-geography-class-11',
      'ncert-india-physical-class-11',
      'atlas-orient-oxford',
      'economic-survey-budget',
      'csat-arihant-manual'
    ],
    estimatedTotalHours: 320,
    strategyNote: 'Focus heavily on Polity Articles, Modern History Chronology, National Parks/Wetlands, and Economic Survey terminology.'
  },
  {
    id: 'mains-governance-toolkit',
    title: 'Mains GS 2 & GS 3 Governance & Reports Stack',
    badge: 'Mains Booster',
    description: 'High-scoring analytical sources designed to supply committee recommendations, ARC reforms, and NITI Aayog blueprints.',
    targetAspirant: 'Aspirants preparing for Mains Answer Writing',
    bookIds: [
      'second-arc-reports',
      'niti-aayog-strategy-75',
      'laxmikanth-governance',
      'ashok-kumar-internal-security',
      'rajiv-sikri-foreign-policy',
      'jaishankar-india-way'
    ],
    estimatedTotalHours: 160,
    strategyNote: 'Examiners reward authentic institutional recommendations. Mentioning 2nd ARC Report 4 or NITI Aayog Strategy adds 1-2 bonus marks per question.'
  },
  {
    id: 'ethics-essay-mastery',
    title: 'Ethics (GS 4) & Essay Mastery Kit',
    badge: '500-Mark Gamechanger',
    description: 'GS Paper 4 (250 Marks) and Essay Paper (250 Marks) have the highest score variation. This kit maximizes return on study time.',
    targetAspirant: 'Aspirants aiming to crack Top 50 ranks',
    bookIds: [
      'lexicon-ethics',
      'subba-rao-ethics',
      'second-arc-reports',
      'pulkit-khare-essays'
    ],
    estimatedTotalHours: 120,
    strategyNote: 'Spend 2 hours weekly writing 1 essay and solving 2 ethical case studies. Prepare personal quotes and real-world administrative case examples.'
  }
];
