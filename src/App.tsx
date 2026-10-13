import React, { useState, useMemo } from 'react';
import { useBookTracker } from './hooks/useBookTracker';
import { BookItem, UPSCStage, SubjectCategory, PriorityTier, GSPaper } from './types/book';
import { Header } from './components/Header';
import { StatsBanner } from './components/StatsBanner';
import { BookCard } from './components/BookCard';
import { BookDetailModal } from './components/BookDetailModal';
import { BookTrackerView } from './components/BookTrackerView';
import { SyllabusMatrixView } from './components/SyllabusMatrixView';
import { TopperKitsView } from './components/TopperKitsView';
import { ComparisonView } from './components/ComparisonView';
import { AddCustomBookModal } from './components/AddCustomBookModal';
import {
  Filter,
  SlidersHorizontal,
  X,
  BookOpen,
  Sparkles,
  Layers,
  HelpCircle,
  GraduationCap
} from 'lucide-react';

export default function App() {
  const {
    allBooks,
    progressMap,
    getProgress,
    updateProgress,
    toggleChapter,
    toggleBookmark,
    addCustomBook,
    deleteCustomBook,
    applyTopperKit
  } = useBookTracker();

  // Navigation tab
  const [currentTab, setCurrentTab] = useState<'books' | 'tracker' | 'syllabus' | 'kits' | 'comparisons'>('books');

  // Search & Filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [stageFilter, setStageFilter] = useState<string>('all');
  const [paperFilter, setPaperFilter] = useState<string>('all');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [activePresetFilter, setActivePresetFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'order' | 'hours' | 'rating' | 'title'>('order');

  // Modals
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Subject categories available in data
  const subjectCategories = useMemo(() => {
    const set = new Set<string>();
    allBooks.forEach((b) => set.add(b.subject));
    return Array.from(set);
  }, [allBooks]);

  // Bookmarked count
  const bookmarkedCount = useMemo(() => {
    return Object.values(progressMap).filter((p) => p.isBookmarked).length;
  }, [progressMap]);

  // Filtered & Sorted books
  const filteredBooks = useMemo(() => {
    return allBooks
      .filter((book) => {
        // Search query across title, author, publisher, summary, chapters
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchTitle = book.title.toLowerCase().includes(q);
          const matchAuthor = book.author.toLowerCase().includes(q);
          const matchPublisher = book.publisher.toLowerCase().includes(q);
          const matchSubject = book.subject.toLowerCase().includes(q);
          const matchChapters = book.chapters?.some((c) => c.title.toLowerCase().includes(q));
          const matchSyllabus = book.syllabusMapping?.some((s) => s.toLowerCase().includes(q));
          if (!matchTitle && !matchAuthor && !matchPublisher && !matchSubject && !matchChapters && !matchSyllabus) {
            return false;
          }
        }

        // Preset filter from stats banner
        if (activePresetFilter === 'core10' && !book.isCoreTen) return false;
        if (activePresetFilter === 'ncert' && book.priority !== 'ncert-foundation') return false;
        if (activePresetFilter === 'prelims' && book.stage !== 'prelims' && book.stage !== 'both') return false;
        if (activePresetFilter === 'mains' && book.stage !== 'mains' && book.stage !== 'both') return false;
        if (activePresetFilter === 'reading') {
          const prog = progressMap[book.id];
          if (!prog || prog.status !== 'reading') return false;
        }

        // Stage filter
        if (stageFilter !== 'all') {
          if (stageFilter === 'prelims' && book.stage !== 'prelims' && book.stage !== 'both') return false;
          if (stageFilter === 'mains' && book.stage !== 'mains' && book.stage !== 'both') return false;
          if (stageFilter === 'foundation' && book.stage !== 'foundation' && book.priority !== 'ncert-foundation') return false;
          if (stageFilter === 'optional' && book.stage !== 'optional') return false;
        }

        // Paper filter
        if (paperFilter !== 'all') {
          if (!book.papers.includes(paperFilter as GSPaper)) return false;
        }

        // Subject filter
        if (subjectFilter !== 'all') {
          if (book.subject !== subjectFilter) return false;
        }

        // Priority filter
        if (priorityFilter !== 'all') {
          if (book.priority !== priorityFilter) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'order') {
          if (a.isCoreTen && !b.isCoreTen) return -1;
          if (!a.isCoreTen && b.isCoreTen) return 1;
          return a.recommendedOrder - b.recommendedOrder;
        }
        if (sortBy === 'hours') return a.estimatedReadHours - b.estimatedReadHours;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return 0;
      });
  }, [
    allBooks,
    searchQuery,
    stageFilter,
    paperFilter,
    subjectFilter,
    priorityFilter,
    activePresetFilter,
    sortBy,
    progressMap
  ]);

  const resetAllFilters = () => {
    setSearchQuery('');
    setStageFilter('all');
    setPaperFilter('all');
    setSubjectFilter('all');
    setPriorityFilter('all');
    setActivePresetFilter(null);
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    stageFilter !== 'all' ||
    paperFilter !== 'all' ||
    subjectFilter !== 'all' ||
    priorityFilter !== 'all' ||
    activePresetFilter !== null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        bookmarkedCount={bookmarkedCount}
      />

      {/* Stats and Fast Focus Banner */}
      <StatsBanner
        allBooks={allBooks}
        progressMap={progressMap}
        activePresetFilter={activePresetFilter}
        setActivePresetFilter={setActivePresetFilter}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* TAB 1: ALL BOOKS CATALOG */}
        {currentTab === 'books' && (
          <div className="space-y-6">
            {/* Filter and sorting toolbar */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2 text-xs text-slate-600 font-semibold">
                  <Filter className="w-4 h-4 text-slate-500" />
                  <span>Filter Directory</span>
                  <span className="text-slate-400 font-normal">
                    (Showing {filteredBooks.length} of {allBooks.length} books)
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-slate-500">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="order">Recommended Sequence</option>
                    <option value="hours">Estimated Reading Hours</option>
                    <option value="rating">Aspirant Rating</option>
                    <option value="title">Alphabetical (Title)</option>
                  </select>
                </div>
              </div>

              {/* Filter controls row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs">
                {/* Stage */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-500 mb-0.5">Stage</label>
                  <select
                    value={stageFilter}
                    onChange={(e) => setStageFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="all">All Stages</option>
                    <option value="prelims">Prelims</option>
                    <option value="mains">Mains</option>
                    <option value="foundation">NCERT Foundation</option>
                    <option value="optional">Optional Subject</option>
                  </select>
                </div>

                {/* Paper */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-500 mb-0.5">GS Paper</label>
                  <select
                    value={paperFilter}
                    onChange={(e) => setPaperFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="all">All Papers</option>
                    <option value="prelims-1">Prelims Paper 1</option>
                    <option value="prelims-csat">Prelims CSAT</option>
                    <option value="gs-1">Mains GS 1</option>
                    <option value="gs-2">Mains GS 2</option>
                    <option value="gs-3">Mains GS 3</option>
                    <option value="gs-4">Mains GS 4 (Ethics)</option>
                    <option value="essay">Essay Paper</option>
                    <option value="governance-reports">Government Reports</option>
                    <option value="optional">Optionals</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-500 mb-0.5">Subject</label>
                  <select
                    value={subjectFilter}
                    onChange={(e) => setSubjectFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="all">All Subjects</option>
                    {subjectCategories.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-500 mb-0.5">Priority Tier</label>
                  <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="all">All Priorities</option>
                    <option value="core-pillar">Core Pillar (Must Read)</option>
                    <option value="essential-reference">Essential Reference</option>
                    <option value="selective-reading">Selective Reading</option>
                    <option value="ncert-foundation">NCERT Foundation</option>
                    <option value="supplementary">Supplementary</option>
                  </select>
                </div>
              </div>

              {/* Reset active filters button if active */}
              {hasActiveFilters && (
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="text-slate-500">Active filters are applied.</span>
                  <button
                    onClick={resetAllFilters}
                    className="text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center space-x-1"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Clear All Filters</span>
                  </button>
                </div>
              )}
            </div>

            {/* Books Card Grid */}
            {filteredBooks.length === 0 ? (
              <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No matching books found</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4 max-w-sm mx-auto">
                  Try adjusting your search terms or clearing your filters to see the full UPSC database.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-4 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded hover:bg-slate-800"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    progress={getProgress(book.id)}
                    onSelectBook={(b) => setSelectedBook(b)}
                    onToggleBookmark={toggleBookmark}
                    onUpdateStatus={(bId, st) => updateProgress(bId, { status: st })}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: MY STUDY TRACKER */}
        {currentTab === 'tracker' && (
          <BookTrackerView
            allBooks={allBooks}
            progressMap={progressMap}
            onSelectBook={(b) => setSelectedBook(b)}
            onUpdateStatus={(bId, st) => updateProgress(bId, { status: st })}
            onDeleteCustomBook={deleteCustomBook}
          />
        )}

        {/* TAB 3: SYLLABUS MATRIX */}
        {currentTab === 'syllabus' && (
          <SyllabusMatrixView
            allBooks={allBooks}
            onSelectBook={(b) => setSelectedBook(b)}
          />
        )}

        {/* TAB 4: TOPPER KITS */}
        {currentTab === 'kits' && (
          <TopperKitsView
            allBooks={allBooks}
            onSelectBook={(b) => setSelectedBook(b)}
            onApplyKit={(bIds) => {
              applyTopperKit(bIds);
              setCurrentTab('tracker');
            }}
          />
        )}

        {/* TAB 5: BOOK COMPARISONS */}
        {currentTab === 'comparisons' && <ComparisonView />}
      </main>

      {/* Book Detail & Study Guide Modal */}
      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          progress={getProgress(selectedBook.id)}
          onClose={() => setSelectedBook(null)}
          onToggleChapter={toggleChapter}
          onToggleBookmark={toggleBookmark}
          onUpdateProgress={updateProgress}
        />
      )}

      {/* Add Custom Book Modal */}
      <AddCustomBookModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddBook={addCustomBook}
      />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span className="text-white font-medium font-serif-editorial">UPSC Grantha</span>
            <span>·</span>
            <span>The Complete Civil Services Examination Reference & Reading Navigator</span>
          </div>

          <div className="text-slate-400 text-center sm:text-right">
            <span>Syllabus mapped for Prelims GS & CSAT, Mains GS 1 to 4, Essay & Optionals.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
