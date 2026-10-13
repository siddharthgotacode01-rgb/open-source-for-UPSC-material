import React from 'react';
import { BookOpen, Search, Plus, CheckCircle2, Bookmark, Compass, GitCompare, Sparkles, X } from 'lucide-react';

interface HeaderProps {
  currentTab: 'books' | 'tracker' | 'syllabus' | 'kits' | 'comparisons';
  setCurrentTab: (tab: 'books' | 'tracker' | 'syllabus' | 'kits' | 'comparisons') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenAddModal: () => void;
  bookmarkedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  searchQuery,
  setSearchQuery,
  onOpenAddModal,
  bookmarkedCount
}) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with branding and actions */}
        <div className="flex items-center justify-between py-4 border-b border-slate-800/80">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-xl font-bold tracking-tight text-white font-serif-editorial">
                  UPSC Grantha
                </span>
                <span className="text-xs text-amber-400/90 font-medium tracking-wider uppercase">
                  CSE Booklist & Study Matrix
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Authentic Standard Books · NCERT Foundation · Topper Guides · Revision Tracker
              </p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenAddModal}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Material</span>
            </button>
          </div>
        </div>

        {/* Lower navigation and search bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-3">
          {/* Segmented navigation buttons */}
          <nav className="flex items-center space-x-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none" aria-label="Tabs">
            <button
              onClick={() => setCurrentTab('books')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                currentTab === 'books'
                  ? 'bg-slate-800 text-amber-400 font-semibold shadow-inner'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              All Books Catalog
            </button>
            <button
              onClick={() => setCurrentTab('tracker')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors inline-flex items-center space-x-1.5 ${
                currentTab === 'tracker'
                  ? 'bg-slate-800 text-amber-400 font-semibold shadow-inner'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>My Study Tracker</span>
              {bookmarkedCount > 0 && (
                <span className="text-[10px] text-slate-400 ml-1">({bookmarkedCount})</span>
              )}
            </button>
            <button
              onClick={() => setCurrentTab('syllabus')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors inline-flex items-center space-x-1.5 ${
                currentTab === 'syllabus'
                  ? 'bg-slate-800 text-amber-400 font-semibold shadow-inner'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>Syllabus Matrix</span>
            </button>
            <button
              onClick={() => setCurrentTab('kits')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors inline-flex items-center space-x-1.5 ${
                currentTab === 'kits'
                  ? 'bg-slate-800 text-amber-400 font-semibold shadow-inner'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Topper Stacks</span>
            </button>
            <button
              onClick={() => setCurrentTab('comparisons')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors inline-flex items-center space-x-1.5 ${
                currentTab === 'comparisons'
                  ? 'bg-slate-800 text-amber-400 font-semibold shadow-inner'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <GitCompare className="w-3.5 h-3.5 text-indigo-400" />
              <span>Book Dilemmas</span>
            </button>
          </nav>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, authors, topics (e.g. Laxmikanth, NCERT)..."
              className="w-full pl-8 pr-8 py-1.5 text-xs bg-slate-800/90 text-slate-100 placeholder-slate-400 border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
