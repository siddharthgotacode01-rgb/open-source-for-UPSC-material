import React from 'react';
import { BookItem, UserBookProgress } from '../types/book';
import { Award, BookCheck, Clock, Bookmark, Layers } from 'lucide-react';

interface StatsBannerProps {
  allBooks: BookItem[];
  progressMap: Record<string, UserBookProgress>;
  activePresetFilter: string | null;
  setActivePresetFilter: (filter: string | null) => void;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({
  allBooks,
  progressMap,
  activePresetFilter,
  setActivePresetFilter
}) => {
  const coreBooks = allBooks.filter((b) => b.isCoreTen);
  const coreCompletedCount = coreBooks.filter(
    (b) => progressMap[b.id]?.status === 'completed' || (progressMap[b.id]?.revisionCount ?? 0) > 0
  ).length;

  const readingCount = Object.values(progressMap).filter((p) => p.status === 'reading').length;
  const completedCount = Object.values(progressMap).filter((p) => p.status === 'completed').length;
  const totalRevisions = Object.values(progressMap).reduce(
    (acc, curr) => acc + (curr.revisionCount || 0),
    0
  );

  const totalCoreHours = coreBooks.reduce((acc, curr) => acc + curr.estimatedReadHours, 0);

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Metric stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-md bg-amber-50 text-amber-700">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">
                {coreCompletedCount} / {coreBooks.length}
              </div>
              <div className="text-xs text-slate-500 font-medium">Core 10 Pillars Read</div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-md bg-emerald-50 text-emerald-700">
              <BookCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">
                {completedCount} <span className="text-xs text-slate-500 font-normal">({readingCount} active)</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">Books Finished</div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-md bg-blue-50 text-blue-700">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">{totalRevisions}</div>
              <div className="text-xs text-slate-500 font-medium">Total Revisions Logged</div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-md bg-indigo-50 text-indigo-700">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">~{totalCoreHours}h</div>
              <div className="text-xs text-slate-500 font-medium">Estimated Core Reading Time</div>
            </div>
          </div>
        </div>

        {/* Quick Filter Presets bar (Buttons with functional segmented styling) */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-slate-500 font-medium">Quick Focus:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setActivePresetFilter(null)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  activePresetFilter === null
                    ? 'bg-slate-900 text-white font-medium'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Books ({allBooks.length})
              </button>
              <button
                onClick={() => setActivePresetFilter('core10')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  activePresetFilter === 'core10'
                    ? 'bg-amber-600 text-white font-medium'
                    : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
                }`}
              >
                Core 10 Pillars (Must Read)
              </button>
              <button
                onClick={() => setActivePresetFilter('ncert')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  activePresetFilter === 'ncert'
                    ? 'bg-emerald-700 text-white font-medium'
                    : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                }`}
              >
                NCERT Foundations Only
              </button>
              <button
                onClick={() => setActivePresetFilter('prelims')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  activePresetFilter === 'prelims'
                    ? 'bg-blue-700 text-white font-medium'
                    : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                }`}
              >
                Prelims Focus
              </button>
              <button
                onClick={() => setActivePresetFilter('mains')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  activePresetFilter === 'mains'
                    ? 'bg-purple-700 text-white font-medium'
                    : 'bg-purple-50 text-purple-900 hover:bg-purple-100'
                }`}
              >
                Mains GS 1-4 & Reports
              </button>
              <button
                onClick={() => setActivePresetFilter('reading')}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  activePresetFilter === 'reading'
                    ? 'bg-slate-800 text-white font-medium'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                My Active Reads ({readingCount})
              </button>
            </div>
          </div>

          <div className="text-slate-500 hidden lg:block">
            Tip: Click any book to view <span className="font-semibold text-slate-700">Chapters to Skip & High-Yield Strategy</span>.
          </div>
        </div>
      </div>
    </div>
  );
};
