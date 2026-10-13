export interface SyllabusTopic {
  id: string;
  paper: 'GS 1' | 'GS 2' | 'GS 3' | 'GS 4' | 'Prelims' | 'Essay';
  title: string;
  description: string;
  recommendedBookIds: string[];
  keyChaptersOrNotes: string;
  frequencyInExam: 'Very High (Annual)' | 'High' | 'Moderate';
}

export const SYLLABUS_MATRIX: SyllabusTopic[] = [
  // GS 1
  {
    id: 'syl-art-culture',
    paper: 'GS 1',
    title: 'Indian Art Forms, Literature & Architecture',
    description: 'Salient aspects of Art Forms, literature and Architecture from ancient to modern times.',
    recommendedBookIds: ['ncert-fine-arts-class-11', 'nitin-singhania-art-culture', 'rs-sharma-ancient'],
    keyChaptersOrNotes: 'Temple styles (Nagara/Dravida/Vesara), Buddhist rock-cut caves, Indus seals, Mauryan pillars, classical dances & music.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-modern-history',
    paper: 'GS 1',
    title: 'Modern Indian History & Freedom Struggle',
    description: 'Significant events, personalities, issues from mid-18th century; Freedom Struggle stages and contributors from across India.',
    recommendedBookIds: ['spectrum-modern-history', 'bipan-chandra-struggle'],
    keyChaptersOrNotes: 'Socio-religious reform movements, 1857 revolt, Swadeshi, Non-Cooperation, Civil Disobedience, Quit India, Constitutional acts (1909, 1919, 1935).',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-post-independence',
    paper: 'GS 1',
    title: 'Post-Independence Consolidation & Reorganization',
    description: 'Consolidation and reorganization within the country, accession of states, linguistic reorganization.',
    recommendedBookIds: ['bipan-chandra-post-independence'],
    keyChaptersOrNotes: 'Integration of Kashmir/Hyderabad/Junagadh, State Reorganisation Act 1956, Tribal Panchsheel, Land reforms.',
    frequencyInExam: 'Moderate'
  },
  {
    id: 'syl-world-history',
    paper: 'GS 1',
    title: 'World History (18th Century to Modern)',
    description: 'Industrial revolution, world wars, redrawal of boundaries, colonization, decolonization, political ideologies (communism, socialism, capitalism).',
    recommendedBookIds: ['norman-lowe-world-history'],
    keyChaptersOrNotes: 'Fascism/Nazism rise, League of Nations failures, Cold War proxy wars, African/Asian decolonization.',
    frequencyInExam: 'Moderate'
  },
  {
    id: 'syl-indian-society',
    paper: 'GS 1',
    title: 'Salient Features of Indian Society & Diversity',
    description: 'Role of women, population issues, urbanization, poverty, globalization effects, social empowerment, communalism, regionalism, secularism.',
    recommendedBookIds: ['ncert-indian-society-class-12', 'ncert-social-change-class-12'],
    keyChaptersOrNotes: 'Caste continuity vs change, Sanskritisation, elderly population, gig workers, communalism vs secularism.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-physical-geography',
    paper: 'GS 1',
    title: 'Physical Geography & Geophysical Phenomena',
    description: 'Salient features of world’s physical geography, earthquakes, Tsunami, Volcanic activity, cyclone etc.',
    recommendedBookIds: ['ncert-physical-geography-class-11', 'gc-leong-geography'],
    keyChaptersOrNotes: 'Plate tectonics, volcanic landforms, pressure belts, monsoon mechanism, ocean currents, tropical vs temperate cyclones.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-indian-geography',
    paper: 'GS 1',
    title: 'Indian Physical Environment & Natural Resources',
    description: 'Distribution of natural resources across India and world; critical geographical features, flora & fauna changes.',
    recommendedBookIds: ['ncert-india-physical-class-11', 'atlas-orient-oxford'],
    keyChaptersOrNotes: 'Himalayas vs Peninsular drainage, Indian monsoon mechanism, soil erosion, mineral belts of Chota Nagpur.',
    frequencyInExam: 'Very High (Annual)'
  },

  // GS 2
  {
    id: 'syl-constitution',
    paper: 'GS 2',
    title: 'Indian Constitution & Basic Structure',
    description: 'Historical underpinnings, evolution, features, amendments, significant provisions and basic structure.',
    recommendedBookIds: ['laxmikanth-polity', 'dd-basu-constitution'],
    keyChaptersOrNotes: 'Fundamental Rights (Art 14, 19, 21), DPSP harmonization, Kesavananda Bharati basic structure, 42nd & 44th amendments.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-federalism',
    paper: 'GS 2',
    title: 'Functions & Challenges of Federal Structure',
    description: 'Issues and challenges pertaining to federal structure, devolution of powers and finances up to local levels.',
    recommendedBookIds: ['laxmikanth-polity', 'second-arc-reports'],
    keyChaptersOrNotes: 'Centre-State fiscal federalism, GST Council role, Governor’s discretion, 73rd/74th amendments empowerment.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-governance-accountability',
    paper: 'GS 2',
    title: 'Transparency, Accountability & Citizen Charters',
    description: 'Important aspects of governance, transparency and accountability, e-governance applications, Citizens Charters, institutional measures.',
    recommendedBookIds: ['laxmikanth-governance', 'second-arc-reports'],
    keyChaptersOrNotes: 'Sevottam model, RTI Act exemptions & bottlenecks, Social Audit in MGNREGA, e-Governance digital public infra.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-international-relations',
    paper: 'GS 2',
    title: 'India and its Neighborhood & Global Groupings',
    description: 'Bilateral, regional and global groupings and agreements involving India or affecting India’s interests; Indian diaspora.',
    recommendedBookIds: ['rajiv-sikri-foreign-policy', 'jaishankar-india-way'],
    keyChaptersOrNotes: 'Neighborhood First, India-China LAC tensions, Quad, I2U2, Global South leadership, West Asian energy & diaspora.',
    frequencyInExam: 'Very High (Annual)'
  },

  // GS 3
  {
    id: 'syl-indian-economy',
    paper: 'GS 3',
    title: 'Economic Growth, Planning & Resource Mobilization',
    description: 'Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment; inclusive growth.',
    recommendedBookIds: ['ramesh-singh-economy', 'ncert-macroeconomics-class-12', 'economic-survey-budget'],
    keyChaptersOrNotes: 'GDP trends, NPA resolution, RBI Monetary Policy, FRBM fiscal glide path, jobless growth solutions.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-agriculture',
    paper: 'GS 3',
    title: 'Agriculture, Cropping Patterns, Subsidies & Food Security',
    description: 'Major crops, irrigation systems, transport and marketing of agricultural produce, e-technology; farm subsidies, MSP, PDS.',
    recommendedBookIds: ['ramesh-singh-economy', 'economic-survey-budget', 'niti-aayog-strategy-75'],
    keyChaptersOrNotes: 'MSP price distortion vs diversification, PM KUSUM, micro-irrigation, Agri-infrastructure fund, PDS reforms.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-science-tech',
    paper: 'GS 3',
    title: 'Science & Technology Developments & Applications',
    description: 'Achievements of Indians; indigenization; awareness in IT, Space, Computers, robotics, nano-technology, bio-technology, IPR.',
    recommendedBookIds: ['ravi-agrahari-science-tech'],
    keyChaptersOrNotes: 'CRISPR-Cas9 gene editing, Gaganyaan/Aditya-L1, Generative AI governance, Three-stage nuclear plan, Semiconductor mission.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-environment',
    paper: 'GS 3',
    title: 'Conservation, Pollution & Environmental Impact Assessment',
    description: 'General issues on Environmental Ecology, Bio-diversity and Climate Change, conservation, degradation, EIA.',
    recommendedBookIds: ['shankar-ias-environment', 'ncert-biology-ecology-class-12'],
    keyChaptersOrNotes: 'UNFCCC COP emissions targets, Paris Agreement Article 6 carbon markets, Wildlife Protection Act 2022 amendments, EIA notification.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-internal-security',
    paper: 'GS 3',
    title: 'Internal Security Challenges & Border Management',
    description: 'Extremism linkages, cyber security, money-laundering, border management, organized crime, security forces mandates.',
    recommendedBookIds: ['ashok-kumar-internal-security'],
    keyChaptersOrNotes: 'SAMADHAN doctrine for LWE, CIBMS smart border fencing, PMLA & FATF guidelines, CAPF command structures.',
    frequencyInExam: 'Very High (Annual)'
  },

  // GS 4
  {
    id: 'syl-ethics-human-interface',
    paper: 'GS 4',
    title: 'Ethics & Human Interface, Values & Attitudes',
    description: 'Essence, determinants and consequences of Ethics; dimensions of ethics; moral thinkers; role of family/society.',
    recommendedBookIds: ['lexicon-ethics', 'subba-rao-ethics'],
    keyChaptersOrNotes: 'Deontology vs Utilitarianism, Virtue ethics, moral attitude, persuasion techniques, Goleman’s emotional intelligence.',
    frequencyInExam: 'Very High (Annual)'
  },
  {
    id: 'syl-probity-governance',
    paper: 'GS 4',
    title: 'Probity in Governance, Code of Ethics & Case Studies',
    description: 'Public service concept, transparency, citizen charters, work culture, quality of service delivery, utilization of public funds.',
    recommendedBookIds: ['second-arc-reports', 'lexicon-ethics', 'subba-rao-ethics'],
    keyChaptersOrNotes: '2nd ARC 4th report, Nolan Committee 7 principles, conflict of interest management, case study resolution framework.',
    frequencyInExam: 'Very High (Annual)'
  }
];
