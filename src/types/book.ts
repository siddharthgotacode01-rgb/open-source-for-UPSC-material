export type UPSCStage = 'prelims' | 'mains' | 'both' | 'foundation' | 'optional';

export type GSPaper = 
  | 'prelims-1' 
  | 'prelims-csat' 
  | 'gs-1' 
  | 'gs-2' 
  | 'gs-3' 
  | 'gs-4' 
  | 'essay' 
  | 'optional' 
  | 'governance-reports';

export type SubjectCategory =
  | 'Indian Polity & Governance'
  | 'Modern Indian History'
  | 'Ancient & Medieval History'
  | 'Art & Culture'
  | 'World History'
  | 'Geography'
  | 'Indian Society & Social Issues'
  | 'Indian Economy & Agriculture'
  | 'Environment & Biodiversity'
  | 'Science & Technology'
  | 'Internal Security & Disaster Management'
  | 'Ethics, Integrity & Aptitude'
  | 'CSAT & Aptitude'
  | 'Essay Paper'
  | 'Government Reports & Policy'
  | 'Optional Subject';

export type PriorityTier =
  | 'core-pillar'          // Core Pillar (Must Read)
  | 'essential-reference' // Essential Reference
  | 'selective-reading'   // Selective Reading Only
  | 'ncert-foundation'    // Foundation NCERT
  | 'supplementary';      // Value Addition / Supplementary

export interface ChapterItem {
  id: string;
  title: string;
  isHighYield: boolean;
  notes?: string;
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  publisher: string;
  editionOrVersion: string;
  stage: UPSCStage;
  papers: GSPaper[];
  subject: SubjectCategory;
  priority: PriorityTier;
  rating: number; // e.g. 4.9
  difficulty: 'Beginner Friendly' | 'Moderate' | 'Bulky / Deep';
  estimatedReadHours: number;
  recommendedOrder: number;
  summary: string;
  toppersTake: string;
  syllabusMapping: string[];
  mustReadChapters: string[];
  skipOrSkimChapters?: string[];
  alternativeBooks?: string[];
  freeResourceUrl?: string;
  isCoreTen: boolean;
  chapters: ChapterItem[];
  isCustom?: boolean;
}

export interface UserBookProgress {
  bookId: string;
  status: 'not-started' | 'reading' | 'completed' | 'revising';
  revisionCount: number;
  checkedChapterIds: string[];
  notes: string;
  targetDate?: string;
  isBookmarked: boolean;
  updatedAt: string;
}

export interface TopperKit {
  id: string;
  title: string;
  badge: string;
  description: string;
  targetAspirant: string;
  bookIds: string[];
  estimatedTotalHours: number;
  strategyNote: string;
}

export interface BookComparison {
  id: string;
  title: string;
  subject: string;
  bookA: {
    id: string;
    title: string;
    author: string;
    pros: string[];
    cons: string[];
    idealFor: string;
  };
  bookB: {
    id: string;
    title: string;
    author: string;
    pros: string[];
    cons: string[];
    idealFor: string;
  };
  toppersVerdict: string;
}
