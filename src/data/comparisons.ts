import { BookComparison } from '../types/book';

export const BOOK_COMPARISONS: BookComparison[] = [
  {
    id: 'comp-polity',
    title: 'M. Laxmikanth vs D.D. Basu',
    subject: 'Indian Polity & Constitution',
    bookA: {
      id: 'laxmikanth-polity',
      title: 'Indian Polity',
      author: 'M. Laxmikanth',
      pros: [
        'Extremely exam-oriented, bullet-pointed, and syllabus-conforming',
        'Direct source for 80-90% of Prelims polity questions',
        'Systematic coverage of Articles, amendment numbers, and constitutional bodies'
      ],
      cons: [
        'Lacks deep jurisprudential debate and philosophical commentary needed for constitutional law essays'
      ],
      idealFor: 'Prelims preparation and foundational Mains GS 2 structure'
    },
    bookB: {
      id: 'dd-basu-constitution',
      title: 'Introduction to the Constitution of India',
      author: 'Durga Das Basu',
      pros: [
        'Scholastic legal depth with extensive landmark Supreme Court judgments',
        'Brilliant for understanding constitutional philosophy, basic structure nuance, and federalism debates'
      ],
      cons: [
        'Legal language can be complex and intimidating for non-law backgrounds',
        'Too heavy for rapid revisions before Prelims'
      ],
      idealFor: 'Value addition for Mains GS 2 and Law / PSIR optionals'
    },
    toppersVerdict: '95% of toppers recommend sticking 100% to M. Laxmikanth for both Prelims and Mains. Refer to DD Basu only selectively for complex constitutional debate questions.'
  },
  {
    id: 'comp-modern-history',
    title: 'Spectrum (Rajiv Ahir) vs Bipan Chandra',
    subject: 'Modern Indian History',
    bookA: {
      id: 'spectrum-modern-history',
      title: 'A Brief History of Modern India',
      author: 'Rajiv Ahir (Spectrum)',
      pros: [
        'Chronological bullet points with brilliant summary tables at the end of every chapter',
        'Superb appendices covering viceroys, newspapers, congress sessions, tribal revolts',
        'Fast to revise 4-5 times before exam'
      ],
      cons: [
        'Prose is factual rather than story-driven'
      ],
      idealFor: 'High-scoring Prelims recall and concise Mains answers'
    },
    bookB: {
      id: 'bipan-chandra-struggle',
      title: "India's Struggle for Independence",
      author: 'Bipan Chandra et al.',
      pros: [
        'Narrative storytelling that builds genuine historical appreciation',
        'Deep analytical exploration of ideological currents (Leftists, Moderates, Communalism)'
      ],
      cons: [
        'Time consuming to memorize facts, dates, and small tribal uprisings'
      ],
      idealFor: 'Building initial interest and Mains analytical arguments'
    },
    toppersVerdict: 'Spectrum is the undisputed favourite for UPSC Prelims. If you have time in year 1, read Bipan Chandra once like a novel, then switch permanently to Spectrum for revision.'
  },
  {
    id: 'comp-economy',
    title: 'Ramesh Singh vs Sanjiv Verma vs Mrunal Notes',
    subject: 'Indian Economy',
    bookA: {
      id: 'ramesh-singh-economy',
      title: 'Indian Economy',
      author: 'Ramesh Singh',
      pros: [
        'Very exhaustive, covering almost all economic terminology and policy history',
        'Reliable standard reference used by educators for 15+ years'
      ],
      cons: [
        'Bulky (over 700 pages), can overwhelm beginners with dense prose'
      ],
      idealFor: 'Comprehensive reference and deep concept lookup'
    },
    bookB: {
      id: 'mrunal-or-sanjiv',
      title: 'Sanjiv Verma / Mrunal PCB Notes',
      author: 'Sanjiv Verma / Mrunal Patel',
      pros: [
        'Sanjiv Verma is concise (~300 pages) and lucid for beginners',
        'Mrunal notes contain humorous mnemonics, color charts, and previous year question analysis'
      ],
      cons: [
        'Mrunal handouts are voluminous (~1000 slides)',
        'Sanjiv Verma needs supplementation with latest data'
      ],
      idealFor: 'Speed learning and conceptual clarity for Prelims'
    },
    toppersVerdict: 'If Ramesh Singh feels too heavy, start with Class 12 Macroeconomics NCERT + Sanjiv Verma or Mrunal handouts, then strictly rely on the latest Economic Survey and Budget.'
  },
  {
    id: 'comp-geography',
    title: 'NCERT Class 11 vs G.C. Leong',
    subject: 'Physical Geography',
    bookA: {
      id: 'ncert-physical-geography-class-11',
      title: 'Fundamentals of Physical Geography (NCERT)',
      author: 'NCERT',
      pros: [
        'Authoritative government textbook; UPSC Prelims questions match exact sentences',
        'Crystal-clear definitions of plate tectonics, geomorphic cycles, and heat budget'
      ],
      cons: [
        'Only covers general principles; does not elaborate world regional climatic zones in detail'
      ],
      idealFor: 'Non-negotiable foundational reading for all aspirants'
    },
    bookB: {
      id: 'gc-leong-geography',
      title: 'Certificate Physical & Human Geography',
      author: 'G.C. Leong',
      pros: [
        'Part 2 has the world-renowned explanation of all 12 climatic zones with vegetation and economic life',
        'Simple hand-drawn diagrams that are easy to replicate in Mains answers'
      ],
      cons: [
        'Part 1 geomorphology content is largely identical to NCERT'
      ],
      idealFor: 'Mastering World Climate zones (Part 2) and Mains diagram practice'
    },
    toppersVerdict: 'Do not choose between them: read NCERT Class 11 thoroughly first, then read Part 2 of G.C. Leong for World Climatic regions.'
  },
  {
    id: 'comp-environment',
    title: 'Shankar IAS vs PMF IAS',
    subject: 'Environment & Ecology',
    bookA: {
      id: 'shankar-ias-environment',
      title: 'Environment',
      author: 'Shankar IAS Academy',
      pros: [
        'Pioneer compilation used by toppers for over a decade',
        'Concise categorization of Indian environmental laws, protected species, and institutions'
      ],
      cons: [
        'Fewer pictorial diagrams compared to newer books'
      ],
      idealFor: 'Aspirants who prefer standard concise notes format'
    },
    bookB: {
      id: 'pmf-ias-environment',
      title: 'Environment & Ecology',
      author: 'PMF IAS (Manjunath Thamminidi)',
      pros: [
        'Extremely high-quality color maps, species photos, and updated scientific diagrams',
        'Comprehensive breakdown of biogeochemical cycles and recent COP summits'
      ],
      cons: [
        'Significantly bulkier book'
      ],
      idealFor: 'Visual learners and aspirants targeting Indian Forest Service (IFS) cutoff'
    },
    toppersVerdict: 'Both are outstanding. Pick ONE based on your visual preference and revise it 4 times before Prelims. Pair with current affairs compilations for new species discoveries.'
  }
];
