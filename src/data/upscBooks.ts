import { BookItem } from '../types/book';

export const UPSC_BOOKS: BookItem[] = [
  // ==========================================
  // INDIAN POLITY & GOVERNANCE (GS 2 & PRELIMS)
  // ==========================================
  {
    id: 'laxmikanth-polity',
    title: 'Indian Polity for Civil Services Examination',
    author: 'M. Laxmikanth',
    publisher: 'McGraw Hill',
    editionOrVersion: '7th / 8th Edition',
    stage: 'both',
    papers: ['prelims-1', 'gs-2'],
    subject: 'Indian Polity & Governance',
    priority: 'core-pillar',
    rating: 5.0,
    difficulty: 'Moderate',
    estimatedReadHours: 70,
    recommendedOrder: 1,
    isCoreTen: true,
    summary: 'The uncontested "Bible of Polity" for UPSC CSE. Virtually 90% of Prelims polity questions and fundamental constitutional concepts in Mains GS 2 are drawn directly from this book.',
    toppersTake: 'Read cover-to-cover at least 5-6 times before Prelims. Make highlights in the book itself instead of making duplicate notes. Memorize Articles, Constitutional & Non-Constitutional bodies.',
    syllabusMapping: [
      'Indian Constitution—historical underpinnings, evolution, features, amendments, significant provisions and basic structure',
      'Functions and responsibilities of the Union and the States, issues and challenges pertaining to the federal structure',
      'Separation of powers between various organs, dispute redressal mechanisms and institutions',
      'Parliament and State Legislatures—structure, functioning, conduct of business, powers & privileges',
      'Appointment to various Constitutional posts, powers, functions and responsibilities of various Constitutional Bodies',
      'Statutory, regulatory and various quasi-judicial bodies'
    ],
    mustReadChapters: [
      'Part I: Constitutional Framework (Historical Background, Making, Salient Features, Preamble, Fundamental Rights, DPSP, Fundamental Duties, Amendment, Basic Structure)',
      'Part II: System of Government (Parliamentary, Federal, Centre-State Relations, Emergency Provisions)',
      'Part III: Central Government (President, Vice-President, Prime Minister, Central Council of Ministers, Parliament, Supreme Court)',
      'Part IV: State Government (Governor, Chief Minister, State Legislature, High Court, Subordinate Courts)',
      'Part V: Local Government (Panchayati Raj, Municipalities)',
      'Part VII & VIII: Constitutional Bodies (ECI, UPSC, Finance Commission, CAG, AG) & Non-Constitutional Bodies (NITI Aayog, NHRC, CIC, CVC, Lokpal)'
    ],
    skipOrSkimChapters: [
      'Special Provisions relating to certain classes (skim only recent amendments)',
      'Elections and Political Parties (read static parts, supplement with Current Affairs)',
      'Public Services & Official Language (skim for factual points)'
    ],
    alternativeBooks: [
      'Introduction to the Constitution of India by D.D. Basu (best for deep Mains constitutional arguments)',
      'Our Constitution / Our Parliament by Subhash Kashyap (good for building initial intuition)'
    ],
    freeResourceUrl: 'https://legislative.gov.in/constitution-of-india/',
    chapters: [
      { id: 'ch-1', title: 'Historical Background & Making of Constitution', isHighYield: true },
      { id: 'ch-2', title: 'Preamble & Salient Features', isHighYield: true },
      { id: 'ch-3', title: 'Fundamental Rights (Articles 12-35)', isHighYield: true },
      { id: 'ch-4', title: 'Directive Principles & Fundamental Duties', isHighYield: true },
      { id: 'ch-5', title: 'Amendment of Constitution & Basic Structure Doctrine', isHighYield: true },
      { id: 'ch-6', title: 'President & Vice-President', isHighYield: true },
      { id: 'ch-7', title: 'Parliament (Powers, Committees, Bills, Budget)', isHighYield: true },
      { id: 'ch-8', title: 'Judiciary: Supreme Court & High Courts & Judicial Review', isHighYield: true },
      { id: 'ch-9', title: 'Emergency Provisions (Art 352, 356, 360)', isHighYield: true },
      { id: 'ch-10', title: 'Centre-State Relations & Inter-State Council', isHighYield: true },
      { id: 'ch-11', title: 'Panchayati Raj & 73rd / 74th Amendments', isHighYield: true },
      { id: 'ch-12', title: 'Constitutional Bodies (CAG, ECI, UPSC, Finance Comm)', isHighYield: true },
      { id: 'ch-13', title: 'Non-Constitutional Bodies (Lokpal, CBI, CVC, NHRC)', isHighYield: true }
    ]
  },
  {
    id: 'laxmikanth-governance',
    title: 'Governance in India',
    author: 'M. Laxmikanth',
    publisher: 'McGraw Hill',
    editionOrVersion: '3rd Edition',
    stage: 'mains',
    papers: ['gs-2'],
    subject: 'Indian Polity & Governance',
    priority: 'selective-reading',
    rating: 4.4,
    difficulty: 'Moderate',
    estimatedReadHours: 25,
    recommendedOrder: 2,
    isCoreTen: false,
    summary: 'Dedicated coverage for Mains GS 2 governance topics: Citizen Charters, RTI, e-Governance, Civil Services role in a democracy, and SHGs/NGOs.',
    toppersTake: 'Do not read line-by-line. Use it as a reference book to prepare 2-page model frameworks for Citizen Charters, Social Audit, and Sevottam model.',
    syllabusMapping: [
      'Development processes and the development industry — the role of NGOs, SHGs, various groups and associations',
      'Welfare schemes for vulnerable sections of the population by the Centre and States',
      'Important aspects of governance, transparency and accountability, e-governance- applications, models, successes, limitations, and potential',
      'Citizens Charters, transparency & accountability and institutional and other measures',
      'Role of civil services in a democracy'
    ],
    mustReadChapters: [
      'Right to Information (RTI) Act & Implementation bottlenecks',
      'Citizen Charters and Sevottam Model',
      'e-Governance: Applications, benefits and digital divide',
      'Role of Civil Services in Democracy & Civil Service Reforms',
      'Self Help Groups (SHGs) and Microfinance Institutions'
    ],
    skipOrSkimChapters: [
      'Regulatory authorities background (refer latest acts online)',
      'Consumer protection older case studies'
    ],
    alternativeBooks: [
      '2nd ARC 1st Report (RTI Master Key to Good Governance)',
      '2nd ARC 12th Report (Citizen Centric Administration)'
    ],
    chapters: [
      { id: 'gov-1', title: 'Rights-based Governance & RTI Framework', isHighYield: true },
      { id: 'gov-2', title: 'Citizen Charters & Public Grievance Redressal', isHighYield: true },
      { id: 'gov-3', title: 'e-Governance: Models & Digital Initiatives', isHighYield: true },
      { id: 'gov-4', title: 'Civil Service Reforms & Accountability', isHighYield: true },
      { id: 'gov-5', title: 'NGOs, SHGs & Pressure Groups in Policy', isHighYield: true }
    ]
  },
  {
    id: 'dd-basu-constitution',
    title: 'Introduction to the Constitution of India',
    author: 'Durga Das Basu',
    publisher: 'LexisNexis',
    editionOrVersion: '26th Edition',
    stage: 'mains',
    papers: ['gs-2'],
    subject: 'Indian Polity & Governance',
    priority: 'essential-reference',
    rating: 4.8,
    difficulty: 'Bulky / Deep',
    estimatedReadHours: 50,
    recommendedOrder: 3,
    isCoreTen: false,
    summary: 'The scholastic legal masterpiece for understanding the spirit, constitutional debates, case law evolution, and judicial philosophies.',
    toppersTake: 'Not recommended for first-time reading. Read after completing Laxmikanth to enrich Mains answers with jurist quotes, constitutional philosophies, and landmark judgments.',
    syllabusMapping: [
      'Indian Constitution—historical underpinnings, evolution, features, amendments, significant provisions and basic structure',
      'Separation of powers and judicial independence'
    ],
    mustReadChapters: [
      'Nature of the Federal Principle in India (Asymmetric Federalism)',
      'Philosophy of the Constitution and Fundamental Rights jurisprudence',
      'Judicial Review and Basic Structure Doctrine'
    ],
    alternativeBooks: ['The Indian Constitution: Cornerstone of a Nation by Granville Austin'],
    chapters: [
      { id: 'ddb-1', title: 'Philosophical Foundations & Preamble Interpretations', isHighYield: true },
      { id: 'ddb-2', title: 'Federalism with Centralizing Tendency', isHighYield: true },
      { id: 'ddb-3', title: 'Fundamental Rights vs Directive Principles Harmony', isHighYield: true },
      { id: 'ddb-4', title: 'Emergency Provisions & Constitutional Safeguards', isHighYield: false }
    ]
  },

  // ==========================================
  // MODERN INDIAN HISTORY (GS 1 & PRELIMS)
  // ==========================================
  {
    id: 'spectrum-modern-history',
    title: 'A Brief History of Modern India',
    author: 'Rajiv Ahir, IPS',
    publisher: 'Spectrum Books',
    editionOrVersion: 'Latest Revised Edition',
    stage: 'both',
    papers: ['prelims-1', 'gs-1'],
    subject: 'Modern Indian History',
    priority: 'core-pillar',
    rating: 4.9,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 45,
    recommendedOrder: 1,
    isCoreTen: true,
    summary: 'The most popular and concise modern history handbook for UPSC. Contains chronological events, summary tables at chapter ends, and appendices covering viceroys, congress sessions, and tribal/peasant movements.',
    toppersTake: 'Read the summary boxes and appendices repeatedly before Prelims. Excellent for chronological timeline questions, tribal rebellions, and newspapers/journals list.',
    syllabusMapping: [
      'Modern Indian history from about the middle of the eighteenth century until the present- significant events, personalities, issues',
      'The Freedom Struggle — its various stages and important contributors /contributions from different parts of the country'
    ],
    mustReadChapters: [
      'Major Socio-Religious Reform Movements & Reformers (Tables are gold)',
      'Peasant, Tribal, and Civil Uprisings before and after 1857',
      'Moderate and Extremist phases of Indian National Congress',
      'Swadeshi Movement, Home Rule League, and Rowlatt Satyagraha',
      'Gandhian Movements: Non-Cooperation, Civil Disobedience, Quit India',
      'Constitutional, Administrative and Judicial Developments under British Rule',
      'Appendices: Governor-Generals, Congress Sessions, Press & Education Acts'
    ],
    skipOrSkimChapters: [
      'Very early chapters on Advent of Europeans can be read fast; focus on Carnatic wars & Battle of Plassey/Buxar'
    ],
    alternativeBooks: [
      "India's Struggle for Independence by Bipan Chandra (better analytical prose for Mains)",
      'From Plas invasion to Partition by Sekhar Bandyopadhyay'
    ],
    chapters: [
      { id: 'spec-1', title: 'Decline of Mughals & Advent of Europeans', isHighYield: false },
      { id: 'spec-2', title: 'British Expansion & Administrative Policies', isHighYield: true },
      { id: 'spec-3', title: 'Peasant, Tribal & 1857 Revolts', isHighYield: true },
      { id: 'spec-4', title: 'Socio-Religious Reform Movements', isHighYield: true },
      { id: 'spec-5', title: 'Early Phase of INC & Swadeshi Movement', isHighYield: true },
      { id: 'spec-6', title: 'Gandhian Era: Non-Cooperation & Civil Disobedience', isHighYield: true },
      { id: 'spec-7', title: 'Revolutionary Nationalism & Subhash Chandra Bose', isHighYield: true },
      { id: 'spec-8', title: 'Quit India Movement, Cabinet Mission & Partition', isHighYield: true },
      { id: 'spec-9', title: 'Constitutional Acts: 1858, 1909, 1919, 1935', isHighYield: true }
    ]
  },
  {
    id: 'bipan-chandra-struggle',
    title: "India's Struggle for Independence (1857-1947)",
    author: 'Bipan Chandra, Mridula Mukherjee, Aditya Mukherjee, et al.',
    publisher: 'Penguin Random House',
    editionOrVersion: 'Standard Edition',
    stage: 'mains',
    papers: ['gs-1'],
    subject: 'Modern Indian History',
    priority: 'essential-reference',
    rating: 4.7,
    difficulty: 'Moderate',
    estimatedReadHours: 50,
    recommendedOrder: 2,
    isCoreTen: false,
    summary: 'A literary, analytical narrative of the Indian national movement. Highly valued for writing thoughtful, nuanced analytical answers in Mains GS 1 regarding ideological currents.',
    toppersTake: 'Treat like a novel for conceptual clarity. Focus on chapters discussing the Strategy of Non-Violent struggle, Left movement in India, and communalism dynamics.',
    syllabusMapping: [
      'The Freedom Struggle — its various stages and important contributors /contributions from different parts of the country'
    ],
    mustReadChapters: [
      'Chapter 6: Socio-Religious Reforms and the National Awakening',
      'Chapter 10: The Foundation of the Congress: The Myth of Safety Valve',
      'Chapter 12-14: The Swadeshi Movement in Bengal and Split at Surat',
      'Chapter 25: The Politics of S-T-S (Struggle-Truce-Struggle) Strategy',
      'Chapter 32-34: The Rise of Left-Wing Politics and Peasant Movements',
      'Chapter 38: Communalism and Partition of India'
    ],
    alternativeBooks: ['A Brief History of Modern India (Spectrum)'],
    chapters: [
      { id: 'bc-1', title: 'First War of Independence 1857 & its Nature', isHighYield: true },
      { id: 'bc-2', title: 'Safety Valve Theory & Early Congress Ideology', isHighYield: true },
      { id: 'bc-3', title: 'Economic Nationalism: Naoroji, Ranade, RC Dutt', isHighYield: true },
      { id: 'bc-4', title: 'Gramscian Struggle-Truce-Struggle (STS) Strategy', isHighYield: true },
      { id: 'bc-5', title: 'Ideological streams: Socialists, Communists & CSP', isHighYield: true }
    ]
  },
  {
    id: 'bipan-chandra-post-independence',
    title: 'India Since Independence',
    author: 'Bipan Chandra, Mridula Mukherjee, Aditya Mukherjee',
    publisher: 'Penguin',
    editionOrVersion: 'Revised Edition',
    stage: 'mains',
    papers: ['gs-1'],
    subject: 'Modern Indian History',
    priority: 'selective-reading',
    rating: 4.5,
    difficulty: 'Bulky / Deep',
    estimatedReadHours: 35,
    recommendedOrder: 3,
    isCoreTen: false,
    summary: 'Covers post-independence consolidation of India, linguistic reorganization of states, tribal integration (Nehruvian Panchsheel for tribals), land reforms, and emergency.',
    toppersTake: 'Read ONLY the selective chapters for Mains GS 1 "Post-independence consolidation and reorganization within the country". Do not read the entire 800 pages.',
    syllabusMapping: [
      'Post-independence consolidation and reorganization within the country'
    ],
    mustReadChapters: [
      'Accession of Princely States (Kashmir, Hyderabad, Junagadh)',
      'Linguistic Reorganization of States (Fazal Ali Commission & SRC 1956)',
      'Tribal Integration policy: Nehruvian Tribal Panchsheel',
      'Agrarian Reforms & Land Ceiling legislations',
      'The Non-Aligned Movement and Foreign Policy roots'
    ],
    skipOrSkimChapters: [
      'Detailed political elections analysis of 1980s and 1990s coalition politics'
    ],
    alternativeBooks: ['India After Gandhi by Ramachandra Guha (selective chapters)'],
    chapters: [
      { id: 'post-1', title: 'Integration of Princely States by Sardar Patel', isHighYield: true },
      { id: 'post-2', title: 'Linguistic Reorganization & State Reorganization Act 1956', isHighYield: true },
      { id: 'post-3', title: 'Tribal Integration & Five Principles (Panchsheel)', isHighYield: true },
      { id: 'post-4', title: 'Land Reforms: Zamindari Abolition & Tenancy Reforms', isHighYield: true }
    ]
  },

  // ==========================================
  // ANCIENT & MEDIEVAL HISTORY (GS 1 & PRELIMS)
  // ==========================================
  {
    id: 'rs-sharma-ancient',
    title: "India's Ancient Past (Old NCERT Class 11)",
    author: 'R.S. Sharma',
    publisher: 'Oxford University Press / NCERT',
    editionOrVersion: 'Classic Edition',
    stage: 'both',
    papers: ['prelims-1', 'gs-1'],
    subject: 'Ancient & Medieval History',
    priority: 'core-pillar',
    rating: 4.8,
    difficulty: 'Moderate',
    estimatedReadHours: 30,
    recommendedOrder: 1,
    isCoreTen: true,
    summary: 'The gold standard for ancient Indian history. Explains the transition from Paleolithic to Neolithic, Harappan town planning, Vedic economy, Rise of Magadha, Mauryas, and Guptas.',
    toppersTake: 'Pay heavy attention to administrative terms, economic terminology, land grants (Agrahara), and Buddhist/Jain councils and doctrines.',
    syllabusMapping: [
      'Indian culture will cover the salient aspects of Art Forms, literature and Architecture from ancient to modern times'
    ],
    mustReadChapters: [
      'Harappan Civilization (Town planning, trade, decline)',
      'Rig Vedic & Later Vedic Age (Social stratification, sacrifice rituals, iron use)',
      'Rise of Mahajanapadas & Heterodox sects (Buddhism & Jainism)',
      'The Mauryan Empire (Ashoka’s Dhamma, Arthashastra administration)',
      'Post-Mauryan Age: Satavahanas, Kushanas, Sangam Age in South India',
      'Gupta Empire: Golden Age debate, temple architecture beginnings, land grants'
    ],
    alternativeBooks: [
      'A History of Ancient and Early Medieval India by Upinder Singh (academic benchmark, high depth)',
      'Tamil Nadu State Board Class 11 History (concise, factual and brilliant for south kingdoms)'
    ],
    freeResourceUrl: 'https://ncert.nic.in',
    chapters: [
      { id: 'rss-1', title: 'Stone Age Cultures & Chalcolithic Settlements', isHighYield: false },
      { id: 'rss-2', title: 'Harappan Civilization: Urbanism, Crafts & Religion', isHighYield: true },
      { id: 'rss-3', title: 'Vedic Society, Varna System & Iron Age Transition', isHighYield: true },
      { id: 'rss-4', title: 'Rise of Buddhism, Jainism & Six Systems of Philosophy', isHighYield: true },
      { id: 'rss-5', title: 'Mauryan Administration, Ashokan Inscriptions & Dhamma', isHighYield: true },
      { id: 'rss-6', title: 'Post-Mauryan Guilds, Indo-Greeks, Kushans & Sangam Age', isHighYield: true },
      { id: 'rss-7', title: 'Gupta Administration, Literature & Science', isHighYield: true }
    ]
  },
  {
    id: 'satish-chandra-medieval',
    title: 'History of Medieval India (Old NCERT Class 11)',
    author: 'Satish Chandra',
    publisher: 'Orient Blackswan / NCERT',
    editionOrVersion: 'Classic Edition',
    stage: 'both',
    papers: ['prelims-1', 'gs-1'],
    subject: 'Ancient & Medieval History',
    priority: 'core-pillar',
    rating: 4.6,
    difficulty: 'Moderate',
    estimatedReadHours: 28,
    recommendedOrder: 2,
    isCoreTen: false,
    summary: 'Systematic narrative of the Delhi Sultanate, Vijayanagara Empire, Chola state, and the Mughal Empire with deep analysis of land revenue (Zabt, Dahsala) and administrative structures (Mansabdari).',
    toppersTake: 'Focus primarily on Vijayanagara Empire (frequent UPSC Prelims questions on Nayankara system & temples), Delhi Sultanate administration (Iqta), and Mughal Mansabdari & Jagirdari.',
    syllabusMapping: [
      'Salient aspects of Art Forms, literature and Architecture from ancient to modern times'
    ],
    mustReadChapters: [
      'Cholas and South Indian Kingdoms (Local self-government, temples)',
      'Delhi Sultanate (Administrative system, Iqta, Market reforms of Alauddin Khalji)',
      'Vijayanagara and Bahmani Kingdoms (Nayankara system, foreign travelers like Nicolo Conti, Domingo Paes)',
      'Mughal Administration: Akbar’s Mansabdari system, Sulh-i-Kul, Zabt system',
      'Bhakti and Sufi Movements (Saint poets, philosophies, composite culture)'
    ],
    alternativeBooks: ['Tamil Nadu Board Class 11 History textbook'],
    chapters: [
      { id: 'sc-1', title: 'The Tripartite Struggle & Chola Village Administration', isHighYield: true },
      { id: 'sc-2', title: 'Delhi Sultanate: Administration, Iqta & Agrarian System', isHighYield: true },
      { id: 'sc-3', title: 'Vijayanagara Empire: Architecture, Society & Administration', isHighYield: true },
      { id: 'sc-4', title: 'Bhakti & Sufi Traditions: Ramanuja, Kabir, Guru Nanak', isHighYield: true },
      { id: 'sc-5', title: 'Mughal Empire: Mansabdari, Jagirdari & Revenue Reforms', isHighYield: true },
      { id: 'sc-6', title: 'Maratha Empire under Shivaji: Ashtapradhan & Chauth', isHighYield: true }
    ]
  },
  {
    id: 'tamilnadu-class-11-history',
    title: 'Tamil Nadu Board Class 11 History',
    author: 'Tamil Nadu State Council of Educational Research and Training (TNSCERT)',
    publisher: 'Government of Tamil Nadu',
    editionOrVersion: 'Standard Board Edition',
    stage: 'prelims',
    papers: ['prelims-1', 'gs-1'],
    subject: 'Ancient & Medieval History',
    priority: 'essential-reference',
    rating: 4.8,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 20,
    recommendedOrder: 3,
    isCoreTen: false,
    summary: 'A favorite hidden gem for UPSC aspirants. Clear chronological narrative, simple bullet points, and superior coverage of South Indian dynasties (Cholas, Pandyas, Pallavas, Cheras) often asked in Prelims.',
    toppersTake: 'If you find RS Sharma and Satish Chandra too dense for the first reading, start with TN Class 11. It provides an immediate baseline in under 3 days.',
    syllabusMapping: ['Ancient and Medieval Indian History and Culture'],
    mustReadChapters: [
      'The Sangam Age (Literature, society, trade routes)',
      'The Pallavas (Rock-cut architecture, Mahabalipuram)',
      'The Imperial Cholas (Brihadisvara temple, bronze sculptures, local assemblies: Ur, Sabha)',
      'Vijayanagar and Bahmani Kingdoms'
    ],
    freeResourceUrl: 'https://textbooksonline.tn.nic.in/',
    chapters: [
      { id: 'tn-1', title: 'Early South Indian Dynasties & Sangam Literature', isHighYield: true },
      { id: 'tn-2', title: 'Pallavas & Rock Cut Temple Architecture', isHighYield: true },
      { id: 'tn-3', title: 'Imperial Cholas & Uttaramerur Inscriptions', isHighYield: true }
    ]
  },

  // ==========================================
  // ART & CULTURE (GS 1 & PRELIMS)
  // ==========================================
  {
    id: 'nitin-singhania-art-culture',
    title: 'Indian Art and Culture',
    author: 'Nitin Singhania, IAS',
    publisher: 'McGraw Hill',
    editionOrVersion: '4th / 5th Edition',
    stage: 'both',
    papers: ['prelims-1', 'gs-1'],
    subject: 'Art & Culture',
    priority: 'core-pillar',
    rating: 4.7,
    difficulty: 'Bulky / Deep',
    estimatedReadHours: 55,
    recommendedOrder: 2,
    isCoreTen: true,
    summary: 'The most comprehensive encyclopedia of Indian Art & Culture. Encompasses visual arts (architecture, sculpture, paintings), performing arts (classical dances, music, theatre, puppetry), and culture (religions, UNESCO sites, festivals, handicrafts).',
    toppersTake: 'Read selectively! It is 800+ pages. First master Class 11 Fine Arts NCERT, then read high-yield chapters here: Temple Architecture, Buddhist caves, Classical Dance & Music, Paintings, and UNESCO Intangible Cultural Heritage.',
    syllabusMapping: [
      'Indian culture will cover the salient aspects of Art Forms, literature and Architecture from ancient to modern times'
    ],
    mustReadChapters: [
      'Chapter 1: Indian Architecture, Sculpture and Pottery (Indus Valley, Mauryan, Post-Mauryan caves, Temple Architecture: Nagara, Dravida, Vesara)',
      'Chapter 2: Indian Paintings (Mural paintings: Ajanta, Ellora, Bagh; Miniature paintings: Mughal, Rajasthani, Pahari)',
      'Chapter 3: Indian Handicrafts and UNESCO sites',
      'Chapter 5: Indian Classical Dance Forms (Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Sattriya, Mohiniyattam, Manipuri)',
      'Chapter 6: Indian Music (Hindustani vs Carnatic classical systems, Gharanas, musical instruments)',
      'Chapter 14: Religions in India (Philosophy of Buddhism, Jainism, Sufism, Bhakti movements)',
      'Chapter 15: Indian Literature & Philosophy (Vedas, Upanishads, Sangam texts, Six orthodox philosophical schools)'
    ],
    skipOrSkimChapters: [
      'Coinage in Ancient and Medieval India (read brief table only)',
      'Fairs, Festivals, and Martial Arts (memorize state names from summaries)',
      'Law and Culture (skim)'
    ],
    alternativeBooks: [
      'An Introduction to Indian Art Class 11 NCERT (mandatory prerequisite)',
      'CCRT (Centre for Cultural Resources and Training) website articles'
    ],
    chapters: [
      { id: 'ns-1', title: 'Indian Architecture: Caves, Stupas & Temples', isHighYield: true },
      { id: 'ns-2', title: 'Temple Styles: Nagara, Dravida, Vesara & Hoysala', isHighYield: true },
      { id: 'ns-3', title: 'Indian Paintings: Mural & Miniature Traditions', isHighYield: true },
      { id: 'ns-4', title: 'Classical Dance & Folk Dance Traditions', isHighYield: true },
      { id: 'ns-5', title: 'Hindustani & Carnatic Music Systems', isHighYield: true },
      { id: 'ns-6', title: 'Six Schools of Indian Philosophy (Shad Darshanas)', isHighYield: true },
      { id: 'ns-7', title: 'Buddhism, Jainism, Sufism & Bhakti Movements', isHighYield: true },
      { id: 'ns-8', title: 'Puppetry, Theatre Forms & UNESCO Intangible Heritage', isHighYield: true }
    ]
  },
  {
    id: 'ncert-fine-arts-class-11',
    title: 'An Introduction to Indian Art (Class 11 NCERT)',
    author: 'NCERT',
    publisher: 'National Council of Educational Research and Training',
    editionOrVersion: 'Part 1',
    stage: 'both',
    papers: ['prelims-1', 'gs-1'],
    subject: 'Art & Culture',
    priority: 'ncert-foundation',
    rating: 4.9,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 15,
    recommendedOrder: 1,
    isCoreTen: true,
    summary: 'The essential foundation for Art and Culture. Contains authentic photographic plates and official NCERT descriptions of Indus Valley seals, Mauryan pillar capitals, Buddhist rock-cut caves, and temple forms.',
    toppersTake: 'Non-negotiable. UPSC directly lifts descriptions and questions from this book (e.g., Bronze Dancing Girl, Didarganj Yakshi, Sarnath Lion Capital, Ellora Kailashnath temple). Read every caption under diagrams.',
    syllabusMapping: [
      'Salient aspects of Art Forms, literature and Architecture from ancient to modern times'
    ],
    mustReadChapters: [
      'Chapter 1: Prehistoric Rock Paintings (Bhimbetka)',
      'Chapter 2: Arts of the Indus Valley Civilization (Dancing girl, Priest King, Pashupati seal)',
      'Chapter 3: Arts of the Mauryan Period (Ashokan pillars, Yaksha-Yakshi sculptures, Barabar caves)',
      'Chapter 4: Post-Mauryan Trends in Indian Art and Architecture (Gandhara, Mathura, and Amaravati schools)',
      'Chapter 5: Later Mural Traditions (Ajanta, Badami, Sittanavasal)',
      'Chapter 6: Temple Architecture and Sculpture (Khajuraho, Konark, Mamallapuram, Chola bronzes)'
    ],
    freeResourceUrl: 'https://ncert.nic.in/textbook.php?keha1=0-8',
    chapters: [
      { id: 'fa-1', title: 'Prehistoric Rock Art & Bhimbetka Caves', isHighYield: true },
      { id: 'fa-2', title: 'Indus Valley Sculptures, Seals & Terracottas', isHighYield: true },
      { id: 'fa-3', title: 'Mauryan Art & Pillar Capitals', isHighYield: true },
      { id: 'fa-4', title: 'Gandhara, Mathura & Amaravati Sculptural Schools', isHighYield: true },
      { id: 'fa-5', title: 'Cave Architecture: Ajanta, Ellora & Elephanta', isHighYield: true },
      { id: 'fa-6', title: 'Temple Architecture: Nagara, Dravida & Vesara', isHighYield: true }
    ]
  },

  // ==========================================
  // GEOGRAPHY (GS 1 & PRELIMS)
  // ==========================================
  {
    id: 'gc-leong-geography',
    title: 'Certificate Physical and Human Geography',
    author: 'G.C. Leong',
    publisher: 'Oxford University Press',
    editionOrVersion: 'New Edition',
    stage: 'both',
    papers: ['prelims-1', 'gs-1'],
    subject: 'Geography',
    priority: 'core-pillar',
    rating: 4.8,
    difficulty: 'Moderate',
    estimatedReadHours: 35,
    recommendedOrder: 2,
    isCoreTen: true,
    summary: 'The timeless classic for Physical Geography and World Climatic Zones. Part 1 covers geomorphology, vulcanism, earthquakes, and weathering. Part 2 covers all 12 climatic zones of the world.',
    toppersTake: 'Part 2 (Weather, Climate and Vegetation) is gold for Prelims. Learn the climatic regions: Equatorial, Savanna, Mediterranean, Steppe, Taiga, Tundra, their typical vegetation, and economic human activities.',
    syllabusMapping: [
      'Salient features of world’s physical geography',
      'Distribution of key natural resources across the world'
    ],
    mustReadChapters: [
      'Part 1: The Earth’s Crust, Vulcanism and Earthquakes, Weathering and Mass Movement, Landforms of Glaciation, Arid Landforms, Karst Topography, Coastal Landforms',
      'Part 2: The Hot, Wet Equatorial Climate; The Tropical Monsoon & Tropical Marine Climate; The Savanna or Sudan Climate; The Hot Desert and Mid-Latitude Desert Climate; The Warm Temperate Western Margin (Mediterranean) Climate; The Cool Temperate Western Margin (British Type); The Siberian Climate (Taiga); The Polar Climate (Tundra)'
    ],
    alternativeBooks: [
      'PMF IAS Physical Geography (modern color diagrams & rich explanation)',
      'Physical Geography by Savindra Singh (for Geography Optional)'
    ],
    chapters: [
      { id: 'gcl-1', title: 'The Earth Crust, Rocks & Vulcanism', isHighYield: true },
      { id: 'gcl-2', title: 'Landforms: Fluvial, Karst, Glacial, Aeolian & Coastal', isHighYield: true },
      { id: 'gcl-3', title: 'Climatology: Pressure Belts, Planetary Winds & Cyclones', isHighYield: true },
      { id: 'gcl-4', title: 'Equatorial & Tropical Monsoon Climates', isHighYield: true },
      { id: 'gcl-5', title: 'Savanna & Desert Climates', isHighYield: true },
      { id: 'gcl-6', title: 'Mediterranean Climate & Citrus Fruits Economy', isHighYield: true },
      { id: 'gcl-7', title: 'Steppe, Taiga & Tundra Climatic Zones', isHighYield: true }
    ]
  },
  {
    id: 'ncert-physical-geography-class-11',
    title: 'Fundamentals of Physical Geography (Class 11 NCERT)',
    author: 'NCERT',
    publisher: 'National Council of Educational Research and Training',
    editionOrVersion: 'Class 11 Textbook',
    stage: 'both',
    papers: ['prelims-1', 'gs-1'],
    subject: 'Geography',
    priority: 'ncert-foundation',
    rating: 5.0,
    difficulty: 'Moderate',
    estimatedReadHours: 25,
    recommendedOrder: 1,
    isCoreTen: true,
    summary: 'The single most crucial textbook for UPSC Geography. Covers the Earth interior, plate tectonics, geomorphic processes, atmospheric circulation, ocean currents, and climate classification.',
    toppersTake: 'Read every line, chart, diagram, and box. Prelims questions on Coriolis force, adiabatic cooling, ocean trenches, plate boundaries, and el Niño/la Niña are taken verbatim from here.',
    syllabusMapping: [
      'Salient features of world’s physical geography',
      'Geophysical phenomena such as earthquakes, Tsunami, Volcanic activity, cyclone etc.'
    ],
    mustReadChapters: [
      'Unit II: The Earth (Interior of the Earth, Distribution of Oceans and Continents, Continental Drift, Plate Tectonics)',
      'Unit III: Landforms (Geomorphic Processes, Landforms and their Evolution)',
      'Unit IV: Climate (Composition and Structure of Atmosphere, Solar Radiation and Heat Budget, Atmospheric Circulation and Weather Systems, Water in the Atmosphere, World Climate)',
      'Unit V: Water (Oceans - Movement of Ocean Water: Currents, Waves and Tides)',
      'Unit VI: Life on the Earth (Biogeochemical cycles, Biodiversity)'
    ],
    freeResourceUrl: 'https://ncert.nic.in/textbook.php?kegy2=0-16',
    chapters: [
      { id: 'npg-1', title: 'Interior of the Earth & Seismic Waves', isHighYield: true },
      { id: 'npg-2', title: 'Continental Drift & Plate Tectonic Theory', isHighYield: true },
      { id: 'npg-3', title: 'Endogenic & Exogenic Geomorphic Processes', isHighYield: true },
      { id: 'npg-4', title: 'Atmospheric Layers & Terrestrial Heat Budget', isHighYield: true },
      { id: 'npg-5', title: 'Planetary Winds, Jet Streams & Tropical Cyclones', isHighYield: true },
      { id: 'npg-6', title: 'Ocean Relief, Salinity & Ocean Currents System', isHighYield: true }
    ]
  },
  {
    id: 'ncert-india-physical-class-11',
    title: 'India: Physical Environment (Class 11 NCERT)',
    author: 'NCERT',
    publisher: 'National Council of Educational Research and Training',
    editionOrVersion: 'Class 11 Textbook',
    stage: 'both',
    papers: ['prelims-1', 'gs-1'],
    subject: 'Geography',
    priority: 'ncert-foundation',
    rating: 5.0,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 20,
    recommendedOrder: 3,
    isCoreTen: true,
    summary: 'The foundation for Indian Geography. Meticulously details the physiographic divisions of India (Himalayas, Northern Plains, Peninsular Plateau), drainage systems (Himalayan vs Peninsular rivers), Indian Monsoon mechanism, and natural vegetation.',
    toppersTake: 'Map every river and its tributaries (Ganga, Brahmaputra, Indus, Godavari, Krishna, Cauvery, Narmada, Tapi) on an atlas while reading this book. UPSC asks 2-3 river/national park questions every year.',
    syllabusMapping: [
      'Salient features of world’s physical geography',
      'Geographical features and their location- changes in critical geographical features'
    ],
    mustReadChapters: [
      'Unit I: India — Location and Space Relations',
      'Unit II: Physiography (Structure and Physiography, Drainage Systems)',
      'Unit III: Climate, Vegetation and Soil (Climate: Monsoon Mechanism, Factors affecting Indian climate; Natural Vegetation and Forest Types; Soils of India: Alluvial, Black, Red, Laterite)',
      'Unit IV: Natural Hazards and Disasters: Floods, Droughts, Landslides'
    ],
    freeResourceUrl: 'https://ncert.nic.in/textbook.php?kegy1=0-7',
    chapters: [
      { id: 'nip-1', title: 'India Location, Borders & Strategic Maritime Zone', isHighYield: true },
      { id: 'nip-2', title: 'Physiography: Himalayas, Plains & Peninsular Shield', isHighYield: true },
      { id: 'nip-3', title: 'Indian Drainage System & River Tributaries', isHighYield: true },
      { id: 'nip-4', title: 'Mechanism of Indian Monsoon, ITCZ & El Niño', isHighYield: true },
      { id: 'nip-5', title: 'Forest Types of India & Conservation Efforts', isHighYield: true },
      { id: 'nip-6', title: 'Soils of India: Classification & Soil Degradation', isHighYield: true }
    ]
  },
  {
    id: 'atlas-orient-oxford',
    title: 'Orient Blackswan School Atlas / Oxford Student Atlas',
    author: 'Orient Blackswan / Oxford University Press',
    publisher: 'Orient Blackswan',
    editionOrVersion: 'Latest Edition',
    stage: 'both',
    papers: ['prelims-1', 'gs-1'],
    subject: 'Geography',
    priority: 'core-pillar',
    rating: 4.9,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 40,
    recommendedOrder: 4,
    isCoreTen: true,
    summary: 'The visual cornerstone for map-based questions in Prelims and diagram sketching in Mains GS 1. Essential for tracking geopolitical conflicts, straits, seas, mountain passes, and wetlands.',
    toppersTake: 'Spend 20 minutes every day marking places in the news: Red Sea, Black Sea, Mediterranean countries, Persian Gulf, South China Sea, and Indian passes/biosphere reserves.',
    syllabusMapping: [
      'Distribution of key natural resources across the world including South Asia and the Indian sub-continent',
      'Geographical features and their location'
    ],
    mustReadChapters: [
      'Map of India: Physical Features, Rivers, National Parks, Biosphere Reserves, Ramsar Sites, Mountain Passes',
      'Map of West Asia (Middle East: Seas, Straits, Borders)',
      'Map of Central Asia & Black Sea / Caspian Sea littoral states',
      'Map of Africa: Rift Valley, Great Lakes, Sahel region',
      'Map of Southeast Asia: Malacca Strait, South China Sea claims'
    ],
    chapters: [
      { id: 'atl-1', title: 'India: Mountain Ranges, Peaks & Passes', isHighYield: true },
      { id: 'atl-2', title: 'India: Rivers, Dams, Wetlands & Protected Areas', isHighYield: true },
      { id: 'atl-3', title: 'West Asia, Red Sea & Mediterranean Littoral States', isHighYield: true },
      { id: 'atl-4', title: 'Central Asia & Caspian/Black Sea Geopolitics', isHighYield: true },
      { id: 'atl-5', title: 'Southeast Asia, Straits & Island Arcs', isHighYield: true }
    ]
  },

  // ==========================================
  // INDIAN ECONOMY (GS 3 & PRELIMS)
  // ==========================================
  {
    id: 'ramesh-singh-economy',
    title: 'Indian Economy for Civil Services Examination',
    author: 'Ramesh Singh',
    publisher: 'McGraw Hill',
    editionOrVersion: '15th / 16th Edition',
    stage: 'both',
    papers: ['prelims-1', 'gs-3'],
    subject: 'Indian Economy & Agriculture',
    priority: 'core-pillar',
    rating: 4.6,
    difficulty: 'Bulky / Deep',
    estimatedReadHours: 65,
    recommendedOrder: 2,
    isCoreTen: true,
    summary: 'The long-standing standard textbook for UPSC economics. Comprehensive conceptual breakdown of GDP, inflation, banking, capital markets, external sector, agriculture, and infrastructure.',
    toppersTake: 'Very bulky. Beginners should read NCERTs or Sanjiv Verma first. Focus on core conceptual chapters (National Income, Inflation, Banking, External Sector, Balance of Payments). Supplement with the latest Economic Survey and Budget.',
    syllabusMapping: [
      'Indian Economy and issues relating to planning, mobilization, of resources, growth, development and employment',
      'Inclusive growth and issues arising from it',
      'Government Budgeting',
      'Major crops-cropping patterns in various parts of the country, different types of irrigation and irrigation systems storage, transport and marketing of agricultural produce and issues and related constraints',
      'Issues related to direct and indirect farm subsidies and minimum support prices'
    ],
    mustReadChapters: [
      'Introduction (GDP, GNP, NNP, National Income calculation methods)',
      'Growth, Development and Happiness Indices (HDI, Multidimensional Poverty Index)',
      'Inflation and Business Cycle (CPI, WPI, Headline vs Core, Monetary Policy transmission)',
      'Agriculture and Food Management (MSP, PDS, PM KUSUM, Food Processing)',
      'Banking in India (RBI, Monetary Policy Committee, NPA resolution, IBC, Basel III)',
      'Financial Market (Money market, Capital market, SEBI, Bonds, Derivatives)',
      'External Sector in India (Balance of Payments, CAD, Foreign Exchange Reserves, FDI vs FPI, Rupee convertibility)',
      'Public Finance in India (FRBM Act, Deficit types, GST structure, Finance Commission)'
    ],
    skipOrSkimChapters: [
      'Detailed chronological accounts of 1st to 12th Five-Year Plans (read summary table only)',
      'Old industrial policies prior to 1991 (read 1991 LPG reforms only)'
    ],
    alternativeBooks: [
      'Indian Economy by Nitin Singhania (clean, tabular, very exam-oriented)',
      'Indian Economy by Sanjiv Verma (lean and beginner friendly)',
      'Mrunal Patel PCB Handouts / Unacademy lectures (widely used for Prelims)'
    ],
    chapters: [
      { id: 'rs-1', title: 'National Income Accounting: GDP, GVA & NDP', isHighYield: true },
      { id: 'rs-2', title: 'Inflation: Causes, Indices (CPI/WPI) & RBI MPC Target', isHighYield: true },
      { id: 'rs-3', title: 'Banking Sector: RBI Tools, NPAs, IBC & PSL Norms', isHighYield: true },
      { id: 'rs-4', title: 'External Sector: Balance of Payments, CAD & Forex', isHighYield: true },
      { id: 'rs-5', title: 'Public Finance: Budget Deficits, Taxes & FRBM Act', isHighYield: true },
      { id: 'rs-6', title: 'Agriculture: MSP, Procurement, PDS & Subsidies', isHighYield: true },
      { id: 'rs-7', title: 'Infrastructure, Energy Transition & Logistics', isHighYield: true }
    ]
  },
  {
    id: 'ncert-macroeconomics-class-12',
    title: 'Introductory Macroeconomics (Class 12 NCERT)',
    author: 'NCERT',
    publisher: 'National Council of Educational Research and Training',
    editionOrVersion: 'Class 12 Textbook',
    stage: 'both',
    papers: ['prelims-1', 'gs-3'],
    subject: 'Indian Economy & Agriculture',
    priority: 'ncert-foundation',
    rating: 4.8,
    difficulty: 'Moderate',
    estimatedReadHours: 20,
    recommendedOrder: 1,
    isCoreTen: true,
    summary: 'The conceptual foundation for economic theory in UPSC. Teaches circular flow of income, aggregate demand, money supply multipliers (M1, M3), central banking functions, and foreign exchange determination.',
    toppersTake: 'Essential for Prelims conceptual questions. Do not get bogged down in mathematical algebra/calculus equations; focus on economic concepts, graphs, and definitions.',
    syllabusMapping: [
      'Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment',
      'Government Budgeting'
    ],
    mustReadChapters: [
      'Chapter 2: National Income Accounting (GDP deflator, Real vs Nominal GDP)',
      'Chapter 3: Money and Banking (Functions of money, High-powered money, Money multiplier, RBI tools)',
      'Chapter 4: Determination of Income and Employment (Marginal propensity to consume, Multiplier concept)',
      'Chapter 5: Government Budget and the Economy (Revenue vs Capital expenditure, Deficits)',
      'Chapter 6: Open Economy Macroeconomics (Balance of Payments, Fixed vs Floating Exchange Rates)'
    ],
    freeResourceUrl: 'https://ncert.nic.in/textbook.php?leec1=0-6',
    chapters: [
      { id: 'nme-1', title: 'National Income Accounting & Methods', isHighYield: true },
      { id: 'nme-2', title: 'Money, Banking & Money Multiplier Process', isHighYield: true },
      { id: 'nme-3', title: 'Government Budget: Receipts, Capital & Deficits', isHighYield: true },
      { id: 'nme-4', title: 'Open Economy & Balance of Payments Equilibrium', isHighYield: true }
    ]
  },
  {
    id: 'economic-survey-budget',
    title: 'Economic Survey of India & Union Budget (Current Year)',
    author: 'Department of Economic Affairs, Ministry of Finance, Govt of India',
    publisher: 'Government of India',
    editionOrVersion: 'Latest Annual Release',
    stage: 'both',
    papers: ['prelims-1', 'gs-3'],
    subject: 'Indian Economy & Agriculture',
    priority: 'core-pillar',
    rating: 4.9,
    difficulty: 'Bulky / Deep',
    estimatedReadHours: 40,
    recommendedOrder: 3,
    isCoreTen: true,
    summary: 'The official economic report card of India prepared by the Chief Economic Adviser (CEA). Packed with authentic government statistics, policy philosophy, and economic trends.',
    toppersTake: 'You do not need to memorize every number. Focus on the State of the Economy chapter, thematic policy names, graphs, and terminology coined by the CEA. Quote figures directly in Mains GS 3 answers.',
    syllabusMapping: [
      'Government Budgeting',
      'Inclusive growth and issues arising from it',
      'Major crops and agricultural growth',
      'Infrastructure: Energy, Ports, Roads, Airports, Railways etc.'
    ],
    mustReadChapters: [
      'Chapter: State of the Economy (Steady As She Goes / Growth drivers)',
      'Chapter: Monetary Management and Financial Intermediation',
      'Chapter: Prices and Inflation',
      'Chapter: Social Infrastructure and Employment',
      'Chapter: Agriculture and Food Management',
      'Chapter: Industry and Services Performance',
      'Chapter: Climate Change and the Environment (Mission LiFE)'
    ],
    freeResourceUrl: 'https://www.indiabudget.gov.in/economicsurvey/',
    chapters: [
      { id: 'es-1', title: 'Macroeconomic Overview & GDP Growth Trajectory', isHighYield: true },
      { id: 'es-2', title: 'Fiscal Developments & Revenue Mobilization', isHighYield: true },
      { id: 'es-3', title: 'External Sector Resilience & Trade Balance', isHighYield: true },
      { id: 'es-4', title: 'Agriculture, Allied Sectors & Rural Demand', isHighYield: true },
      { id: 'es-5', title: 'Industrial Production & PLI Schemes Impact', isHighYield: true },
      { id: 'es-6', title: 'Services Sector, Startups & Digital Public Infrastructure', isHighYield: true }
    ]
  },

  // ==========================================
  // ENVIRONMENT & BIODIVERSITY (GS 3 & PRELIMS)
  // ==========================================
  {
    id: 'shankar-ias-environment',
    title: 'Environment for Civil Services Preliminary & Main Examinations',
    author: 'Shankar IAS Academy',
    publisher: 'Shankar IAS Academy Publications',
    editionOrVersion: '9th / 10th Edition',
    stage: 'both',
    papers: ['prelims-1', 'gs-3'],
    subject: 'Environment & Biodiversity',
    priority: 'core-pillar',
    rating: 4.7,
    difficulty: 'Moderate',
    estimatedReadHours: 45,
    recommendedOrder: 1,
    isCoreTen: true,
    summary: 'The pioneer compilation for UPSC Environment. Covers ecology fundamentals, terrestrial & aquatic ecosystems, biodiversity, pollution, climate change conventions, and environmental institutions.',
    toppersTake: 'Crucial for Prelims because IFS (Indian Forest Service) shares the same preliminary exam. Learn IUCN status of major Indian species, National Parks, Ramsar wetlands, and UNFCCC COP treaties.',
    syllabusMapping: [
      'General issues on Environmental Ecology, Bio-diversity and Climate Change - that do not require subject specialization',
      'Conservation, environmental pollution and degradation, environmental impact assessment'
    ],
    mustReadChapters: [
      'Part 1: Ecology (Trophic levels, Ecological Pyramids, Biomagnification, Ecological Succession)',
      'Part 2: Biodiversity (Biodiversity Hotspots in India, Red Data Book IUCN categories, National Parks vs Wildlife Sanctuaries vs Biosphere Reserves, Project Tiger, Project Elephant)',
      'Part 3: Climate Change (Greenhouse effect, Global warming potentials, Ocean Acidification, Ozone Depletion)',
      'Part 4: Environmental Conventions & Acts (Wildlife Protection Act 1972 & 2022 Amendment, Environment Protection Act 1986, Forest Rights Act 2006, Biological Diversity Act 2002, UNFCCC, CBD, Ramsar Convention, CITES, CMS Bonn, Stockholm/Rotterdam/Minamata conventions)'
    ],
    alternativeBooks: [
      'PMF IAS Environment & Ecology (richly illustrated, updated scientific explanations)',
      'NCERT Class 12 Biology (Last 4 Chapters on Ecology)'
    ],
    chapters: [
      { id: 'env-1', title: 'Ecology Fundamentals: Biomes, Pyramids & Succession', isHighYield: true },
      { id: 'env-2', title: 'Aquatic Ecosystems: Coral Reefs & Mangroves', isHighYield: true },
      { id: 'env-3', title: 'Biodiversity: Hotspots & Protected Area Network', isHighYield: true },
      { id: 'env-4', title: 'Critically Endangered Fauna & Flora of India', isHighYield: true },
      { id: 'env-5', title: 'Pollution: Air (AQI, BS-VI), Water, Plastic & E-waste', isHighYield: true },
      { id: 'env-6', title: 'Global Climate Conventions: UNFCCC, Paris Agreement, COP', isHighYield: true },
      { id: 'env-7', title: 'Indian Environmental Laws: WPA 1972, EPA 1986 & BDA 2002', isHighYield: true }
    ]
  },
  {
    id: 'ncert-biology-ecology-class-12',
    title: 'Ecology Unit (Class 12 Biology NCERT, Chapters 13-16)',
    author: 'NCERT',
    publisher: 'National Council of Educational Research and Training',
    editionOrVersion: 'Class 12 Textbook (Unit X)',
    stage: 'both',
    papers: ['prelims-1', 'gs-3'],
    subject: 'Environment & Biodiversity',
    priority: 'ncert-foundation',
    rating: 4.9,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 12,
    recommendedOrder: 2,
    isCoreTen: false,
    summary: 'The 4 canonical chapters at the end of Class 12 Biology. Contains the purest scientific explanations of ecological concepts tested in UPSC Prelims.',
    toppersTake: 'Read before reading Shankar IAS or PMF IAS. Explains Liebig’s Law, Shelford’s Law, mutualism, commensalism, and ecological pyramids with exact diagrams.',
    syllabusMapping: [
      'General issues on Environmental Ecology, Bio-diversity and Climate Change'
    ],
    mustReadChapters: [
      'Chapter 13: Organisms and Populations (Adaptations, Population Growth Models: Exponential vs Logistic)',
      'Chapter 14: Ecosystem (Productivity, Decomposition, Energy Flow, Nutrient Cycling: Carbon & Phosphorus cycles)',
      'Chapter 15: Biodiversity and Conservation (Patterns of Biodiversity, The Evil Quartet, In-situ vs Ex-situ conservation)',
      'Chapter 16: Environmental Issues (Biomagnification, Eutrophication, Case Study of People’s Participation)'
    ],
    freeResourceUrl: 'https://ncert.nic.in/textbook.php?lebo1=13-16',
    chapters: [
      { id: 'bio-1', title: 'Organisms and Populations & Ecological Niches', isHighYield: true },
      { id: 'bio-2', title: 'Ecosystem Energy Flow & Biogeochemical Cycles', isHighYield: true },
      { id: 'bio-3', title: 'Biodiversity Loss & Conservation Techniques', isHighYield: true },
      { id: 'bio-4', title: 'Eutrophication, Biomagnification & Solid Waste', isHighYield: true }
    ]
  },

  // ==========================================
  // ETHICS, INTEGRITY & APTITUDE (GS 4)
  // ==========================================
  {
    id: 'lexicon-ethics',
    title: 'Lexicon for Ethics, Integrity & Aptitude',
    author: 'Niraj Kumar',
    publisher: 'Chronicle Books',
    editionOrVersion: 'Latest Edition',
    stage: 'mains',
    papers: ['gs-4'],
    subject: 'Ethics, Integrity & Aptitude',
    priority: 'core-pillar',
    rating: 4.7,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 35,
    recommendedOrder: 1,
    isCoreTen: true,
    summary: 'The most popular vocabulary and definition dictionary for GS 4. Clarifies nuances between integrity vs honesty, empathy vs compassion, attitude vs aptitude, and values vs morals.',
    toppersTake: 'Memorize precise definitions for each syllabus term (Probity, Accountability, Compassion, Emotional Intelligence). Prepare 2 personal real-life examples and 2 administrator examples for each value.',
    syllabusMapping: [
      'Ethics and Human Interface: Essence, determinants and consequences of Ethics in-human actions; dimensions of ethics; ethics - in private and public relationships',
      'Human Values - lessons from the lives and teachings of great leaders, reformers and administrators',
      'Attitude: content, structure, function; its influence and relation with thought and behaviour; moral and political attitudes; social influence and persuasion',
      'Aptitude and foundational values for Civil Service, integrity, impartiality and non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion towards the weaker-sections',
      'Emotional intelligence-concepts, and their utilities and application in administration and governance',
      'Probity in Governance: Concept of public service; Philosophical basis of governance and probity; Information sharing and transparency in government',
      'Case Studies on above issues'
    ],
    mustReadChapters: [
      'Ethics and Human Interface',
      'Human Values and Role of Family, Society and Educational Institutions',
      'Attitude and Social Influence / Persuasion',
      'Foundational Values for Civil Services (Nolan Committee 7 Principles)',
      'Emotional Intelligence and Administrative Utility',
      'Philosophical Thinkers: Western (Socrates, Plato, Aristotle, Kant, Mill) and Indian (Kautilya, Gandhi, Buddha, Swami Vivekananda)',
      'Probity in Governance & Citizen Charter',
      'Framework for Solving Case Studies (Stakeholder identification, ethical dilemmas, course of action evaluation)'
    ],
    alternativeBooks: [
      'Ethics, Integrity & Aptitude by G. Subba Rao & P.N. Roy Chowdhury (Access Publishing)',
      'Ethics, Integrity and Aptitude by D.K. Balaji IAS'
    ],
    chapters: [
      { id: 'eth-1', title: 'Ethics & Human Interface: Dimensions & Consequences', isHighYield: true },
      { id: 'eth-2', title: 'Attitude, Persuasion & Behavioral Change', isHighYield: true },
      { id: 'eth-3', title: 'Foundational Civil Service Values & Nolan Principles', isHighYield: true },
      { id: 'eth-4', title: 'Emotional Intelligence: Goleman Model in Governance', isHighYield: true },
      { id: 'eth-5', title: 'Moral Thinkers: Kantian Deontology vs Utilitarianism', isHighYield: true },
      { id: 'eth-6', title: 'Probity in Governance, Code of Ethics & Whistleblowing', isHighYield: true },
      { id: 'eth-7', title: 'Case Study Framework: Matrix of Options & Justification', isHighYield: true }
    ]
  },
  {
    id: 'subba-rao-ethics',
    title: 'Ethics, Integrity and Aptitude for Civil Services Examination',
    author: 'G. Subba Rao & P.N. Roy Chowdhury',
    publisher: 'Access Publishing',
    editionOrVersion: '6th Edition',
    stage: 'mains',
    papers: ['gs-4'],
    subject: 'Ethics, Integrity & Aptitude',
    priority: 'essential-reference',
    rating: 4.8,
    difficulty: 'Moderate',
    estimatedReadHours: 40,
    recommendedOrder: 2,
    isCoreTen: false,
    summary: 'Written by senior civil servants. Renowned for its rich reservoir of practical administrative case studies, ethical dilemmas from real governance scenarios, and clear analysis of ethical philosophers.',
    toppersTake: 'Use this book specifically for practicing Section B Case Studies. The authors provide structured options with pros, cons, and ethical justification.',
    syllabusMapping: [
      'Aptitude and foundational values for Civil Service',
      'Probity in Governance',
      'Case Studies on administrative dilemmas'
    ],
    mustReadChapters: [
      'Ethical dilemmas in public administration (Conflict of interest, political neutrality)',
      'Section on Western and Indian Moral Thinkers',
      'Solved case studies on crisis management, corruption, and communal tension'
    ],
    chapters: [
      { id: 'sr-1', title: 'Administrative Dilemmas & Ethical Decision Making', isHighYield: true },
      { id: 'sr-2', title: 'Contributions of Moral Philosophers & Reformers', isHighYield: true },
      { id: 'sr-3', title: 'Corruption in Public Life: Causes & Preventive Measures', isHighYield: true },
      { id: 'sr-4', title: 'Advanced Case Studies Bank & Practical Solutions', isHighYield: true }
    ]
  },

  // ==========================================
  // INTERNAL SECURITY & DISASTER MANAGEMENT (GS 3)
  // ==========================================
  {
    id: 'ashok-kumar-internal-security',
    title: 'Challenges to Internal Security of India',
    author: 'Ashok Kumar, IPS & Vipul Anekant, DANIPS',
    publisher: 'McGraw Hill',
    editionOrVersion: '5th / 6th Edition',
    stage: 'mains',
    papers: ['gs-3'],
    subject: 'Internal Security & Disaster Management',
    priority: 'core-pillar',
    rating: 4.8,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 25,
    recommendedOrder: 1,
    isCoreTen: true,
    summary: 'Written by serving IPS officers. Exactly covers the entire Mains GS 3 Internal Security syllabus: Left Wing Extremism (Naxalism), Insurgency in Northeast, Terrorism, Border Management, Money Laundering, and Cyber Security.',
    toppersTake: 'Compact and directly mapped to Mains questions. Make 2-page bullet points on each internal security challenge including causes, government measures, and way forward.',
    syllabusMapping: [
      'Linkages between development and spread of extremism',
      'Role of external state and non-state actors in creating challenges to internal security',
      'Challenges to internal security through communication networks, role of media and social networking sites in internal security challenges, basics of cyber security; money-laundering and its prevention',
      'Security challenges and their management in border areas - linkages of organized crime with terrorism',
      'Various Security forces and agencies and their mandate'
    ],
    mustReadChapters: [
      'Chapter 1: Left Wing Extremism (Causes, SAMADHAN doctrine, surrender policies)',
      'Chapter 2: Insurgency in the North-East (Historical grievances, Naga peace talks, AFSPA debate)',
      'Chapter 3: Terrorism in Hinterland and Jammu & Kashmir (Cross-border proxy war, hybrid warfare)',
      'Chapter 4: Border Management (Challenges of Indo-Pak, Indo-China, Indo-Myanmar, Indo-Bangladesh borders, CIBMS)',
      'Chapter 5: Cyber Security, Social Media & Information Warfare',
      'Chapter 6: Money Laundering & Black Money (PMLA Act, Hawala, FATF grey listing)',
      'Chapter 7: Linkages between Organised Crime and Terrorism',
      'Chapter 8: Mandates of CAPFs (CRPF, BSF, ITBP, CISF, SSB, Assam Rifles, NSG, NIA, IB, RAW)'
    ],
    alternativeBooks: ['Internal Security by Pavneet Singh'],
    chapters: [
      { id: 'is-1', title: 'Left Wing Extremism & SAMADHAN Strategy', isHighYield: true },
      { id: 'is-2', title: 'Northeast Insurgency & Peace Accords', isHighYield: true },
      { id: 'is-3', title: 'Terrorism, Radicalization & State/Non-State Actors', isHighYield: true },
      { id: 'is-4', title: 'Border Management & Smart Fencing (CIBMS)', isHighYield: true },
      { id: 'is-5', title: 'Cyber Security, Digital Forensics & CERT-In', isHighYield: true },
      { id: 'is-6', title: 'Organised Crime: Drug Trafficking & Hawala Networks', isHighYield: true },
      { id: 'is-7', title: 'Mandates of CAPFs, NIA, RAW & Intelligence Agencies', isHighYield: true }
    ]
  },

  // ==========================================
  // SCIENCE & TECHNOLOGY (GS 3 & PRELIMS)
  // ==========================================
  {
    id: 'ravi-agrahari-science-tech',
    title: 'Science and Technology for Civil Services Examination',
    author: 'Ravi P. Agrahari',
    publisher: 'McGraw Hill',
    editionOrVersion: '7th / 8th Edition',
    stage: 'both',
    papers: ['prelims-1', 'gs-3'],
    subject: 'Science & Technology',
    priority: 'essential-reference',
    rating: 4.6,
    difficulty: 'Moderate',
    estimatedReadHours: 35,
    recommendedOrder: 1,
    isCoreTen: false,
    summary: 'Comprehensive repository of Space technology, Biotechnology, Nanotechnology, Nuclear policy, Defence technology, AI, Quantum computing, and Intellectual Property Rights (IPR).',
    toppersTake: 'Static parts (orbital mechanics, CRISPR-Cas9, mRNA vaccines, nuclear fuel cycle) must be understood conceptually. Supplement with weekly science pages from The Hindu and Indian Express.',
    syllabusMapping: [
      'Science and Technology- developments and their applications and effects in everyday life',
      'Achievements of Indians in science & technology; indigenization of technology and developing new technology',
      'Awareness in the fields of IT, Space, Computers, robotics, nano-technology, bio-technology and issues relating to intellectual property rights'
    ],
    mustReadChapters: [
      'Space Technology (Orbits: LEO, GEO, SSO; Launch Vehicles: PSLV, GSLV, SSLV; Gaganyaan, Chandrayaan, Aditya-L1)',
      'Biotechnology (CRISPR-Cas9, Gene drive, Stem cells, GM crops: Bt Cotton, DMH-11 Mustard, Three-parent baby)',
      'Information & Communication Technology (5G/6G, Quantum Computing, Generative AI, Blockchain, Web3)',
      'Nanotechnology and its medical/agricultural applications',
      'Nuclear Technology (Three-Stage Nuclear Power Programme of India, Fast Breeder, Thorium reserves)'
    ],
    chapters: [
      { id: 'st-1', title: 'Space Science: Orbits, Launchers & Deep Space Probes', isHighYield: true },
      { id: 'st-2', title: 'Biotechnology: Genetic Engineering & Recombinant DNA', isHighYield: true },
      { id: 'st-3', title: 'AI, Quantum Computing, Supercomputers & Cybernetics', isHighYield: true },
      { id: 'st-4', title: 'Nuclear Technology & India Three-Stage Program', isHighYield: true },
      { id: 'st-5', title: 'Defence Tech: Ballistic/Cruise Missiles & Submarines', isHighYield: true },
      { id: 'st-6', title: 'Intellectual Property Rights: Patents, Trademarks & GI Tags', isHighYield: true }
    ]
  },

  // ==========================================
  // INTERNATIONAL RELATIONS (GS 2)
  // ==========================================
  {
    id: 'rajiv-sikri-foreign-policy',
    title: "Challenge and Strategy: Rethinking India's Foreign Policy",
    author: 'Rajiv Sikri',
    publisher: 'SAGE Publications',
    editionOrVersion: 'Revised Edition',
    stage: 'mains',
    papers: ['gs-2'],
    subject: 'Government Reports & Policy',
    priority: 'selective-reading',
    rating: 4.6,
    difficulty: 'Moderate',
    estimatedReadHours: 30,
    recommendedOrder: 1,
    isCoreTen: false,
    summary: 'Authored by a veteran Indian diplomat. Offers profound strategic perspectives on India’s immediate neighborhood (South Asia), extended neighborhood (West Asia, Central Asia, Southeast Asia), and major powers (USA, China, Russia).',
    toppersTake: 'Gives the foundational grammar for IR answer writing (e.g., Strategic Autonomy, Neighborhood First, Security and Growth for All in the Region - SAGAR, Act East policy).',
    syllabusMapping: [
      'India and its neighborhood- relations',
      'Bilateral, regional and global groupings and agreements involving India and/or affecting India’s interests',
      'Effect of policies and politics of developed and developing countries on India’s interests, Indian diaspora'
    ],
    mustReadChapters: [
      'Chapter on India and South Asian Neighbors (Pakistan, Bangladesh, Nepal, Sri Lanka, Bhutan, Maldives)',
      'Chapter on China: Border disputes, String of Pearls vs SAGAR, trade deficit',
      'Chapter on Indo-US Strategic Partnership and Quad',
      'Chapter on West Asia: Energy security, diaspora, Abraham Accords, I2U2'
    ],
    alternativeBooks: [
      'Pax Indica: India and the World of the 21st Century by Shashi Tharoor',
      'The India Way: Strategies for an Uncertain World by Dr. S. Jaishankar'
    ],
    chapters: [
      { id: 'ir-1', title: 'Neighborhood First: India & South Asian Geopolitics', isHighYield: true },
      { id: 'ir-2', title: 'India-China Rivalry: Borders, LAC & Indo-Pacific', isHighYield: true },
      { id: 'ir-3', title: 'Indo-US Ties, Quad & Technology Transfers', isHighYield: true },
      { id: 'ir-4', title: 'India-Russia Strategic Ties in Multipolar Order', isHighYield: true },
      { id: 'ir-5', title: 'West Asia Linkages: Energy, Diaspora & I2U2', isHighYield: true }
    ]
  },
  {
    id: 'jaishankar-india-way',
    title: 'The India Way: Strategies for an Uncertain World',
    author: 'Dr. S. Jaishankar',
    publisher: 'HarperCollins India',
    editionOrVersion: 'Bestseller Edition',
    stage: 'mains',
    papers: ['gs-2', 'essay'],
    subject: 'Government Reports & Policy',
    priority: 'supplementary',
    rating: 4.8,
    difficulty: 'Moderate',
    estimatedReadHours: 18,
    recommendedOrder: 2,
    isCoreTen: false,
    summary: 'Written by India’s External Affairs Minister. Explains India’s transition from non-alignment to multi-alignment, engagement with contradictions, and the rise of India as a Vishwamitra (friend to the world).',
    toppersTake: 'Tremendous source of vocabulary, geopolitical frameworks, and compelling essay quotes. Highly appreciated by Mains examiners.',
    syllabusMapping: [
      'Bilateral, regional and global groupings and agreements involving India',
      'Effect of policies and politics of developed and developing countries'
    ],
    mustReadChapters: [
      'The Lessons of 1947: Navigating past choices and alignments',
      'Krishna’s Choice: The Strategic Dilemmas of Mahabharata applied to modern diplomacy',
      'Making of a Leading Power: Overcoming hesitations of history',
      'The Nimble Multipolar Player: Engaging multiple powers simultaneously'
    ],
    chapters: [
      { id: 'jw-1', title: 'Multi-alignment & Plurilateral Formats (BRICS, Quad, SCO)', isHighYield: true },
      { id: 'jw-2', title: 'Managing Rise of China & Strategic Independence', isHighYield: true },
      { id: 'jw-3', title: 'The Mahabharata Strategic Metaphors for Diplomacy', isHighYield: true }
    ]
  },

  // ==========================================
  // INDIAN SOCIETY & SOCIAL ISSUES (GS 1 & GS 2)
  // ==========================================
  {
    id: 'ncert-indian-society-class-12',
    title: 'Indian Society (Class 12 NCERT)',
    author: 'NCERT',
    publisher: 'National Council of Educational Research and Training',
    editionOrVersion: 'Class 12 Textbook',
    stage: 'mains',
    papers: ['gs-1'],
    subject: 'Indian Society & Social Issues',
    priority: 'ncert-foundation',
    rating: 4.8,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 18,
    recommendedOrder: 1,
    isCoreTen: false,
    summary: 'Directly addresses the Mains GS 1 Indian Society syllabus. Covers demographic structure, caste system evolution, tribal communities, gender relations, and religious pluralism.',
    toppersTake: 'Mains GS 1 has 5-6 questions on Indian Society (75-90 marks). This NCERT and its companion Social Change in India give you all the sociological concepts: Sanskritisation, Westernisation, secularisation.',
    syllabusMapping: [
      'Salient features of Indian Society, Diversity of India',
      'Role of women and women’s organization, population and associated issues, poverty and developmental issues, urbanization, their problems and their remedies',
      'Effects of globalization on Indian society',
      'Social empowerment, communalism, regionalism & secularism'
    ],
    mustReadChapters: [
      'Chapter 2: The Demographic Structure of Indian Society (Demographic dividend, TFR, sex ratio)',
      'Chapter 3: Social Institutions: Continuity and Change (Caste: Varna vs Jati, Colonial interventions, Dominant Caste concept of M.N. Srinivas; Tribe classification; Family and Kinship)',
      'Chapter 4: The Market as a Social Institution (Indigenous weekly tribal markets, caste-based mercantile networks)',
      'Chapter 5: Patterns of Social Inequality and Exclusion (Untouchability, Dalits, Adivasis, Women, Disabled)',
      'Chapter 6: The Challenges of Cultural Diversity (Communalism, Regionalism, Secularism, Minorities)'
    ],
    freeResourceUrl: 'https://ncert.nic.in/textbook.php?lesy1=0-7',
    chapters: [
      { id: 'soc-1', title: 'Demographic Structure & India Dividend', isHighYield: true },
      { id: 'soc-2', title: 'Caste System: Dominant Caste & Reservation Dynamics', isHighYield: true },
      { id: 'soc-3', title: 'Tribal Identity, Isolation vs Assimilation Debates', isHighYield: true },
      { id: 'soc-4', title: 'Patterns of Social Exclusion & Women Empowerment', isHighYield: true },
      { id: 'soc-5', title: 'Communalism, Regionalism & Secularism in India', isHighYield: true }
    ]
  },
  {
    id: 'ncert-social-change-class-12',
    title: 'Social Change and Development in India (Class 12 NCERT)',
    author: 'NCERT',
    publisher: 'National Council of Educational Research and Training',
    editionOrVersion: 'Class 12 Textbook',
    stage: 'mains',
    papers: ['gs-1'],
    subject: 'Indian Society & Social Issues',
    priority: 'ncert-foundation',
    rating: 4.7,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 18,
    recommendedOrder: 2,
    isCoreTen: false,
    summary: 'Examines structural change (colonialism, industrialisation, urbanisation), cultural change (Sanskritisation, modernization, secularisation), and social movements (environmental, peasant, Dalit, women).',
    toppersTake: 'Crucial for questions on globalization’s impact on Indian culture, rural-to-urban transformation, and the gig economy.',
    syllabusMapping: [
      'Effects of globalization on Indian society',
      'Social empowerment, communalism, regionalism & secularism'
    ],
    mustReadChapters: [
      'Structural Change (Colonialism, Urbanisation, Industrialisation)',
      'Cultural Change (M.N. Srinivas concepts: Sanskritisation, Westernisation)',
      'Change and Development in Rural Society (Green Revolution social fallout)',
      'Globalisation and Social Change (Glocalisation, consumerism, culture hybridity)',
      'Social Movements (Chipko movement, Narmada Bachao Andolan, New farmers movements)'
    ],
    freeResourceUrl: 'https://ncert.nic.in/textbook.php?lesy2=0-8',
    chapters: [
      { id: 'scd-1', title: 'Colonialism & Structural Urban/Industrial Transformation', isHighYield: true },
      { id: 'scd-2', title: 'Cultural Change: Sanskritisation & Modernity', isHighYield: true },
      { id: 'scd-3', title: 'Agrarian Structure & Consequences of Green Revolution', isHighYield: true },
      { id: 'scd-4', title: 'Globalization Impact on Family, Youth & Traditions', isHighYield: true },
      { id: 'scd-5', title: 'Social Movements: Ecological, Dalit & Feminist', isHighYield: true }
    ]
  },

  // ==========================================
  // WORLD HISTORY (GS 1)
  // ==========================================
  {
    id: 'norman-lowe-world-history',
    title: 'Mastering Modern World History',
    author: 'Norman Lowe',
    publisher: 'Bloomsbury',
    editionOrVersion: '5th / 6th Edition',
    stage: 'mains',
    papers: ['gs-1'],
    subject: 'World History',
    priority: 'selective-reading',
    rating: 4.7,
    difficulty: 'Moderate',
    estimatedReadHours: 35,
    recommendedOrder: 1,
    isCoreTen: false,
    summary: 'The most readable world history textbook. Provides lucid accounts of World War I, the League of Nations, Rise of Fascism & Nazism, World War II, the Cold War, Decolonization in Asia & Africa, and the collapse of the Soviet Union.',
    toppersTake: 'World History is asked ONLY in Mains GS 1 (typically 1-2 questions = 15-25 marks). Do not spend months on it. Read selective chapters or rely on Arjun Dev NCERT + coaching summaries.',
    syllabusMapping: [
      'History of the world will include events from 18th century such as industrial revolution, world wars, redrawal of national boundaries, colonization, decolonization, political philosophies like communism, capitalism, socialism etc.— their forms and effect on the society'
    ],
    mustReadChapters: [
      'Part 1: War and International Relations (WWI causes, Treaty of Versailles, League of Nations failures)',
      'Part 2: The Rise of Dictatorships (Fascism in Italy: Mussolini; Nazism in Germany: Hitler)',
      'Part 3: World War II and the Holocaust',
      'Part 4: The Cold War (Cuban Missile Crisis, Berlin Blockade, Korean War, Vietnam War, Détente)',
      'Part 5: Decolonization and the Third World (Decolonization in Africa & Asia)',
      'Part 6: Fall of USSR, Glasnost, Perestroika'
    ],
    skipOrSkimChapters: [
      'British domestic parliamentary history',
      'Internal details of small European electoral skirmishes'
    ],
    alternativeBooks: [
      'Contemporary World History (NCERT Class 12 Old by Arjun Dev)',
      'A History of the Modern World by Jain & Mathur'
    ],
    chapters: [
      { id: 'nl-1', title: 'Industrial Revolution & European Imperialism', isHighYield: true },
      { id: 'nl-2', title: 'World War I: Imperial Rivalries & Versailles Treaty', isHighYield: true },
      { id: 'nl-3', title: 'Rise of Fascism in Italy & Nazism in Weimar Germany', isHighYield: true },
      { id: 'nl-4', title: 'World War II & Post-War Balance of Power', isHighYield: true },
      { id: 'nl-5', title: 'Cold War: Iron Curtain, Proxy Conflicts & Detente', isHighYield: true },
      { id: 'nl-6', title: 'Decolonization of Africa & Asia & NAM Roots', isHighYield: true },
      { id: 'nl-7', title: 'Disintegration of USSR & Fall of Berlin Wall', isHighYield: true }
    ]
  },

  // ==========================================
  // ESSAY PAPER
  // ==========================================
  {
    id: 'pulkit-khare-essays',
    title: 'Selected Essays for Civil Services Examination',
    author: 'Pulkit Khare, IAS',
    publisher: 'McGraw Hill / Arihant',
    editionOrVersion: 'Latest Edition',
    stage: 'mains',
    papers: ['essay'],
    subject: 'Essay Paper',
    priority: 'essential-reference',
    rating: 4.7,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 20,
    recommendedOrder: 1,
    isCoreTen: false,
    summary: 'Guides aspirants on structuring 1000-1200 word essays across philosophical, socio-economic, technological, and environmental themes. Demonstrates storytelling introductions, thematic transitions, and optimistic conclusions.',
    toppersTake: 'Essay carries 250 marks and can swing your rank by 50+ marks. Practice brainstorming multiple dimensions (PESTLE: Political, Economic, Social, Technological, Legal, Environmental, Ethical, Historical, International).',
    syllabusMapping: [
      'Candidates may be required to write essays on multiple topics. They will be expected to keep closely to the subject of the essay to arrange their ideas in an orderly fashion and to write concisely.'
    ],
    mustReadChapters: [
      'Techniques for Brainstorming & PESTLE Framework',
      'Writing Captivating Introductions (Anecdote, Quote, Rhetorical question, Historical paradox)',
      'Philosophical Essays Deconstruction (Decoding abstract proverbs)',
      'Connecting micro-examples to macro-civilizational visions'
    ],
    alternativeBooks: [
      'Fundamentals of Essay and Answer Writing by Anudeep Durishetty, AIR 1'
    ],
    chapters: [
      { id: 'ess-1', title: 'Framework of a 250-Mark Essay & Temporal Expansion', isHighYield: true },
      { id: 'ess-2', title: 'PESTLE Matrix for Multi-Dimensional Arguments', isHighYield: true },
      { id: 'ess-3', title: 'Deciphering Philosophical & Abstract Quotes', isHighYield: true },
      { id: 'ess-4', title: 'Model Essays on Science, Ethics, Democracy & Climate', isHighYield: true }
    ]
  },

  // ==========================================
  // CSAT (PRELIMS PAPER 2)
  // ==========================================
  {
    id: 'csat-arihant-manual',
    title: 'Cracking the CSAT Paper 2 (Civil Services Aptitude Test)',
    author: 'Arihant Experts / McGraw Hill',
    publisher: 'Arihant Publications',
    editionOrVersion: 'Latest Annual Edition',
    stage: 'prelims',
    papers: ['prelims-csat'],
    subject: 'CSAT & Aptitude',
    priority: 'core-pillar',
    rating: 4.6,
    difficulty: 'Moderate',
    estimatedReadHours: 40,
    recommendedOrder: 1,
    isCoreTen: false,
    summary: 'The comprehensive manual covering Reading Comprehension inference questions, Logical & Analytical Reasoning, and Basic Numeracy (Class 10 level maths: Permutations, Number System, Percentages, Time & Work).',
    toppersTake: 'CSAT has become an elimination hurdle in recent years! Do not take the 33% qualifying mark (66 marks out of 200) for granted. Solve PYQs from 2019 to 2025.',
    syllabusMapping: [
      'Comprehension; Interpersonal skills including communication skills; Logical reasoning and analytical ability; Decision making and problem solving; General mental ability; Basic numeracy (numbers and their relations, orders of magnitude, etc.) (Class X level), Data interpretation'
    ],
    mustReadChapters: [
      'Number System (Divisibility rules, Unit digit, Remainders, Factorials)',
      'Permutations, Combinations & Probability',
      'Percentages, Profit & Loss, Ratio & Proportion',
      'Time, Speed & Distance, Time & Work',
      'Syllogisms, Blood Relations, Seating Arrangements, Coding-Decoding',
      'Reading Comprehension: Identifying Assumptions, Inferences, and Corollaries'
    ],
    alternativeBooks: [
      'Quantitative Aptitude by R.S. Aggarwal',
      'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      'Analytical Reasoning by M.K. Pandey'
    ],
    chapters: [
      { id: 'csat-1', title: 'Number Systems, Remainders & Divisibility', isHighYield: true },
      { id: 'csat-2', title: 'Permutation, Combination & Probability', isHighYield: true },
      { id: 'csat-3', title: 'Time & Work, Speed, Distance & Ratios', isHighYield: true },
      { id: 'csat-4', title: 'Logical Reasoning: Arrangements, Syllogisms & Clocks', isHighYield: true },
      { id: 'csat-5', title: 'Reading Comprehension: Crux & Logical Corollary', isHighYield: true }
    ]
  },

  // ==========================================
  // GOVERNMENT REPORTS & POLICY
  // ==========================================
  {
    id: 'second-arc-reports',
    title: '2nd Administrative Reforms Commission (ARC) Key Reports',
    author: 'Second Administrative Reforms Commission, Government of India',
    publisher: 'Department of Administrative Reforms and Public Grievances (DARPG)',
    editionOrVersion: 'Official Government Commission Reports',
    stage: 'mains',
    papers: ['gs-2', 'gs-4', 'governance-reports'],
    subject: 'Government Reports & Policy',
    priority: 'core-pillar',
    rating: 4.9,
    difficulty: 'Moderate',
    estimatedReadHours: 25,
    recommendedOrder: 1,
    isCoreTen: true,
    summary: 'The ultimate repository of administrative reform recommendations for Mains GS 2 and GS 4. Quoting ARC recommendations transforms average answers into top-tier rank-winning submissions.',
    toppersTake: 'Read official executive summaries of 5 key reports: 1st Report (RTI), 4th Report (Ethics in Governance - mandatory for GS 4), 6th Report (Local Governance), 8th Report (Combating Terrorism), 12th Report (Citizen Centric Administration).',
    syllabusMapping: [
      'Role of civil services in a democracy',
      'Citizens Charters, transparency & accountability',
      'Ethics in Governance, probity and anti-corruption'
    ],
    mustReadChapters: [
      '4th Report: Ethics in Governance (Code of Ethics vs Code of Conduct, Benami transactions, Lokpal, Civil service values)',
      '1st Report: Right to Information - Master Key to Good Governance (Official Secrets Act repeal, suo motu disclosure)',
      '12th Report: Citizen Centric Administration - The Heart of Governance (Sevottam model, social audit, public grievance redressal)',
      '6th Report: Local Governance - An Inspiring Journey into the Future (Empowering Panchayats & Municipalities)'
    ],
    freeResourceUrl: 'https://darpg.gov.in/arc-reports',
    chapters: [
      { id: 'arc-1', title: '4th Report: Ethics in Governance & Anti-Corruption', isHighYield: true },
      { id: 'arc-2', title: '1st Report: RTI & Proactive Transparency', isHighYield: true },
      { id: 'arc-3', title: '12th Report: Citizen-Centric Governance & Sevottam', isHighYield: true },
      { id: 'arc-4', title: '6th Report: Empowering Panchayats & Municipal Bodies', isHighYield: true },
      { id: 'arc-5', title: '3rd Report: Crisis Management & Disaster Framework', isHighYield: true }
    ]
  },
  {
    id: 'niti-aayog-strategy-75',
    title: 'Strategy for New India @ 75 / NITI Aayog Policy Papers',
    author: 'NITI Aayog, Government of India',
    publisher: 'NITI Aayog',
    editionOrVersion: 'Official Document',
    stage: 'mains',
    papers: ['gs-2', 'gs-3', 'governance-reports'],
    subject: 'Government Reports & Policy',
    priority: 'selective-reading',
    rating: 4.7,
    difficulty: 'Beginner Friendly',
    estimatedReadHours: 20,
    recommendedOrder: 2,
    isCoreTen: false,
    summary: 'Structured in 4 pillars: Drivers, Infrastructure, Inclusion, and Governance. Provides concrete targets, constraints, and "Way Forward" for 41 socio-economic sectors.',
    toppersTake: 'Every chapter has a ready-made "Way Forward" section written by policy experts. Memorize these solutions to write actionable conclusions in GS 2 and GS 3 Mains answers.',
    syllabusMapping: [
      'Planning, mobilization of resources, growth and employment',
      'Infrastructure: Roads, Railways, Ports, Digital',
      'Inclusion: Health, Education, Skill Development'
    ],
    mustReadChapters: [
      'Agriculture: Doubling Farmers’ Income, Zero Budget Natural Farming, e-NAM',
      'Industry & Make in India: Ease of doing business, MSME support',
      'Infrastructure: Bharatmala, Sagarmala, UDAAN, National Waterways',
      'Social Sector: Health (Ayushman Bharat), Education (NEP 2020), Skill India'
    ],
    freeResourceUrl: 'https://www.niti.gov.in/',
    chapters: [
      { id: 'niti-1', title: 'Agricultural Modernization & Farmer Income Strategies', isHighYield: true },
      { id: 'niti-2', title: 'National Infrastructure Pipeline & Logistics', isHighYield: true },
      { id: 'niti-3', title: 'Universal Health Coverage & Educational Upgradation', isHighYield: true },
      { id: 'niti-4', title: 'Data-driven Governance & Aspirational Districts Program', isHighYield: true }
    ]
  },

  // ==========================================
  // TOP OPTIONALS (SELECTIVE HIGH ENROLLMENT)
  // ==========================================
  {
    id: 'op-gauba-political-theory',
    title: 'An Introduction to Political Theory (PSIR Optional)',
    author: 'O.P. Gauba',
    publisher: 'National Paperbacks / Mayur Paperbacks',
    editionOrVersion: '8th / 9th Edition',
    stage: 'optional',
    papers: ['optional'],
    subject: 'Optional Subject',
    priority: 'essential-reference',
    rating: 4.8,
    difficulty: 'Moderate',
    estimatedReadHours: 40,
    recommendedOrder: 1,
    isCoreTen: false,
    summary: 'The fundamental textbook for Political Science and International Relations (PSIR) Paper 1 Section A. Explains theories of State, Justice (Rawls, Nozick), Equality (Dworkin), Liberty (Berlin), Rights, and Democracy.',
    toppersTake: 'Must-read for PSIR aspirants to write theoretically sound answers citing scholars. Note down Rawlsian Difference Principle, Amartya Sen Capability Approach, and Communitarian critiques.',
    syllabusMapping: ['PSIR Optional Paper 1: Political Theory and Indian Politics'],
    mustReadChapters: [
      'Theories of the State: Liberal, Neoliberal, Marxist, Pluralist, Post-colonial',
      'Justice: Conceptions of justice with special reference to Rawl’s theory of justice',
      'Equality: Social, political and economic; relationship between equality and freedom',
      'Rights: Meaning and theories; Human Rights concept',
      'Democracy: Classical, participatory, and deliberative democracy models',
      'Political Ideologies: Liberalism, Socialism, Marxism, Fascism, Gandhism, Feminism'
    ],
    alternativeBooks: [
      'Political Theory: An Introduction by Andrew Heywood',
      'Shubhra Ranjan IAS PSIR Classroom Handouts'
    ],
    chapters: [
      { id: 'psir-1', title: 'Theories of the State: Liberal, Marxist & Post-Colonial', isHighYield: true },
      { id: 'psir-2', title: 'Theories of Justice: John Rawls & Robert Nozick', isHighYield: true },
      { id: 'psir-3', title: 'Theories of Equality & Ronald Dworkin', isHighYield: true },
      { id: 'psir-4', title: 'Democracy: Representative vs Deliberative Models', isHighYield: true },
      { id: 'psir-5', title: 'Political Ideologies: Marxism, Liberalism, Feminism', isHighYield: true }
    ]
  },
  {
    id: 'haralambos-sociology',
    title: 'Sociology: Themes and Perspectives (Sociology Optional)',
    author: 'Michael Haralambos & Martin Holborn',
    publisher: 'Collins',
    editionOrVersion: '8th / 9th Edition ("Orange Haralambos" / "Blue Haralambos")',
    stage: 'optional',
    papers: ['optional'],
    subject: 'Optional Subject',
    priority: 'essential-reference',
    rating: 4.9,
    difficulty: 'Bulky / Deep',
    estimatedReadHours: 60,
    recommendedOrder: 1,
    isCoreTen: false,
    summary: 'The world-famous textbook for Sociology Paper 1. Covers sociological thinkers (Marx, Weber, Durkheim, Parsons, Merton, Mead), research methods, stratification, family, religion, and social change.',
    toppersTake: 'Use the Blue Haralambos or Orange Haralambos for Paper 1 thinkers and stratification. Pair with Ram Ahuja or B.K. Nagla for Paper 2 Indian Society.',
    syllabusMapping: ['Sociology Optional Paper 1: Fundamentals of Sociology'],
    mustReadChapters: [
      'Sociological Thinkers: Karl Marx (Historical Materialism, Alienation, Class Struggle); Émile Durkheim (Division of Labor, Social Facts, Suicide, Religion); Max Weber (Social Action, Ideal Types, Protestant Ethic, Authority)',
      'Social Stratification and Mobility: Functionalist vs Conflict theories',
      'Sociology of Religion: Theories, Secularization',
      'Politics and Society: Power elite, Bureaucracy'
    ],
    alternativeBooks: [
      'Sociology by Anthony Giddens (accessible contemporary examples)',
      'Essential Sociology by Nitin Sangwan IAS'
    ],
    chapters: [
      { id: 'soc-th-1', title: 'Karl Marx: Historical Materialism & Alienation', isHighYield: true },
      { id: 'soc-th-2', title: 'Emile Durkheim: Division of Labour & Suicide Study', isHighYield: true },
      { id: 'soc-th-3', title: 'Max Weber: Social Action, Ideal Types & Bureaucracy', isHighYield: true },
      { id: 'soc-th-4', title: 'Talcott Parsons & Robert K. Merton Functionalism', isHighYield: true },
      { id: 'soc-th-5', title: 'Stratification: Davis-Moore vs Marxist Critiques', isHighYield: true }
    ]
  },
  {
    id: 'savindra-singh-physical-geography',
    title: 'Physical Geography (Geography Optional)',
    author: 'Savindra Singh',
    publisher: 'Pravalika Publications',
    editionOrVersion: 'Standard Edition',
    stage: 'optional',
    papers: ['optional'],
    subject: 'Geography',
    priority: 'essential-reference',
    rating: 4.8,
    difficulty: 'Bulky / Deep',
    estimatedReadHours: 55,
    recommendedOrder: 1,
    isCoreTen: false,
    summary: 'The benchmark book for Geography Optional Paper 1. Unmatched explanation of geomorphology cycles (Davis & Penck slope theories), plate tectonics, climatology, oceanography, and biogeography.',
    toppersTake: 'Geography optional aspirants must master Savindra Singh diagrams for Geomorphology and Climatology. Reproducing hand-drawn cross-sections fetches top marks.',
    syllabusMapping: ['Geography Optional Paper 1: Physical Geography'],
    mustReadChapters: [
      'Geomorphology: Plate tectonics, Davisian and Penckian cycles of erosion, Channel morphology',
      'Climatology: Air masses, Frontogenesis, Jet stream theories, Thornthwaite & Koppen classifications',
      'Oceanography: Bottom topography of Atlantic, Pacific and Indian Oceans, Coral bleaching'
    ],
    chapters: [
      { id: 'geo-1', title: 'Geomorphology: Slope Development & Fluvial Cycles', isHighYield: true },
      { id: 'geo-2', title: 'Climatology: Fronts, Cyclones & Koppen Classification', isHighYield: true },
      { id: 'geo-3', title: 'Oceanography: Ocean Floor Relief & Coral Reefs', isHighYield: true }
    ]
  },
  {
    id: 'prasad-prasad-pub-ad',
    title: 'Administrative Thinkers (Public Administration Optional)',
    author: 'D. Ravindra Prasad, V.S. Prasad, P. Satyanarayana, Y. Pardhasaradhi',
    publisher: 'Sterling Publishers',
    editionOrVersion: 'Latest Edition',
    stage: 'optional',
    papers: ['optional'],
    subject: 'Optional Subject',
    priority: 'essential-reference',
    rating: 4.8,
    difficulty: 'Moderate',
    estimatedReadHours: 35,
    recommendedOrder: 1,
    isCoreTen: false,
    summary: 'The core text for Public Administration Paper 1 Chapter 2 (Administrative Thought). Details classical theorists (Woodrow Wilson, Taylor, Fayol, Gulick, Urwick), human relations (Elton Mayo), behaviouralists (Chester Barnard, Herbert Simon), and motivational theorists (Maslow, Herzberg, McGregor).',
    toppersTake: 'Direct questions on Simon’s bounded rationality, Barnard’s acceptance theory of authority, and Riggs’ prismatic model are answered using Prasad & Prasad.',
    syllabusMapping: ['Public Administration Optional Paper 1: Administrative Thought'],
    mustReadChapters: [
      'Classical Theory: F.W. Taylor (Scientific Management), Henri Fayol, Luther Gulick and Lyndall Urwick',
      'Bureaucratic Theory: Max Weber',
      'Human Relations Theory: Elton Mayo and Hawthorne Experiments',
      'Behavioural Science: Chester Barnard (Functions of the Executive) and Herbert Simon (Decision Making)',
      'Ecological Approach: Fred W. Riggs (Prismatic Society model)'
    ],
    chapters: [
      { id: 'pa-1', title: 'Scientific Management: F.W. Taylor & Gilbreths', isHighYield: true },
      { id: 'pa-2', title: 'Max Weber: Legal-Rational Bureaucracy & Patrimonialism', isHighYield: true },
      { id: 'pa-3', title: 'Elton Mayo: Hawthorne Studies & Informal Organization', isHighYield: true },
      { id: 'pa-4', title: 'Herbert Simon: Bounded Rationality & Fact-Value Dichotomy', isHighYield: true },
      { id: 'pa-5', title: 'Fred Riggs: Agraria-Industria & Prismatic Sala Model', isHighYield: true }
    ]
  }
];
