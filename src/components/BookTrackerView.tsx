import React, { useState } from 'react';
import { BookItem, UserBookProgress } from '../types/book';
import {
  CheckCircle2,
  Clock,
  BookOpen,
  Layers,
  Calendar,
  Download,
  FileText,
  ChevronRight,
  Bookmark,
  Share2,
  Trash2,
  Filter
} from 'lucide-react';

interface BookTrackerViewProps {
  allBooks: BookItem[];
  progressMap: Record<string, UserBookProgress>;
  onSelectBook: (book: BookItem) => void;
  onUpdateStatus: (bookId: string, status: UserBookProgress['status']) => void;
  onDeleteCustomBook?: (bookId: string) => void;
}

export const BookTrackerView: React.FC<BookTrackerViewProps> = ({
  allBooks,
  progressMap,
  onSelectBook,
  onUpdateStatus,
  onDeleteCustomBook
}) => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'reading' | 'completed' | 'revising'>('all');
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);

  // Filter books that are tracked (status !== 'not-started' OR bookmarked OR has notes)
  const trackedBooks = allBooks.filter((book) => {
    const p = progressMap[book.id];
    if (!p) return false;
    const isActivelyTracked =
      p.status !== 'not-started' || p.isBookmarked || (p.checkedChapterIds?.length ?? 0) > 0 || (p.notes?.length ?? 0) > 0;

    if (!isActivelyTracked) return false;
    if (onlyBookmarked && !p.isBookmarked) return false;
    if (statusFilter !== 'all' && p.status !== statusFilter) return false;
    return true;
  });

  const readingList = allBooks.filter((b) => progressMap[b.id]?.status === 'reading');
  const completedList = allBooks.filter((b) => progressMap[b.id]?.status === 'completed');
  const revisingList = allBooks.filter((b) => progressMap[b.id]?.status === 'revising');

  // Export reading plan
  const handleExportPlan = () => {
    const lines = [
      '==========================================',
      'UPSC CSE PERSONAL STUDY & BOOKLIST TRACKER',
      `Exported: ${new Date().toLocaleDateString()}`,
      '==========================================\n',
      '--- CURRENTLY READING ---'
    ];

    readingList.forEach((b) => {
      const p = progressMap[b.id];
      lines.push(`• ${b.title} by ${b.author}`);
      lines.push(`  Subject: ${b.subject} | Chapters: ${p?.checkedChapterIds?.length || 0}/${b.chapters.length}`);
      if (p?.notes) lines.push(`  Notes: ${p.notes}`);
      if (p?.targetDate) lines.push(`  Target Date: ${p.targetDate}`);
      lines.push('');
    });

    lines.push('--- REVISION CYCLE ---');
    revisingList.forEach((b) => {
      const p = progressMap[b.id];
      lines.push(`• ${b.title} (${p?.revisionCount || 1}x Revised)`);
      if (p?.notes) lines.push(`  Notes: ${p.notes}`);
      lines.push('');
    });

    lines.push('--- COMPLETED BOOKS ---');
    completedList.forEach((b) => {
      lines.push(`• ${b.title} by ${b.author}`);
    });

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `upsc-study-plan-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Top action header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-serif-editorial text-slate-900">
            My Study Tracker & Reading Pipeline
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Track reading completion, chapter checklists, revisions, and personal notes across books.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleExportPlan}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Study Plan</span>
          </button>
        </div>
      </div>

      {/* Pipeline Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-amber-50/70 border border-amber-200/90 rounded-xl p-4">
          <div className="flex items-center justify-between text-xs text-amber-900 font-semibold mb-2">
            <span className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>Reading Now</span>
            </span>
            <span className="text-base font-bold text-amber-800">{readingList.length}</span>
          </div>
          <p className="text-xs text-amber-900/70">
            Active books in your current weekly study timetable.
          </p>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-xl p-4">
          <div className="flex items-center justify-between text-xs text-emerald-900 font-semibold mb-2">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Completed (1st Read)</span>
            </span>
            <span className="text-base font-bold text-emerald-800">{completedList.length}</span>
          </div>
          <p className="text-xs text-emerald-900/70">
            Finished first comprehensive cover-to-cover reading.
          </p>
        </div>

        <div className="bg-blue-50/70 border border-blue-200/90 rounded-xl p-4">
          <div className="flex items-center justify-between text-xs text-blue-900 font-semibold mb-2">
            <span className="flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-blue-700" />
              <span>In Revision Cycle</span>
            </span>
            <span className="text-base font-bold text-blue-800">{revisingList.length}</span>
          </div>
          <p className="text-xs text-blue-900/70">
            Books with 2x or 3x revisions logged for exam readiness.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs bg-white p-3.5 rounded-lg border border-slate-200">
        <div className="flex items-center space-x-2">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500 font-medium">Filter Pipeline:</span>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 rounded transition-colors ${
                statusFilter === 'all'
                  ? 'bg-slate-900 text-white font-medium'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Tracked ({trackedBooks.length})
            </button>
            <button
              onClick={() => setStatusFilter('reading')}
              className={`px-2.5 py-1 rounded transition-colors ${
                statusFilter === 'reading'
                  ? 'bg-amber-600 text-white font-medium'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
              }`}
            >
              Reading ({readingList.length})
            </button>
            <button
              onClick={() => setStatusFilter('revising')}
              className={`px-2.5 py-1 rounded transition-colors ${
                statusFilter === 'revising'
                  ? 'bg-blue-600 text-white font-medium'
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
              }`}
            >
              Revising ({revisingList.length})
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`px-2.5 py-1 rounded transition-colors ${
                statusFilter === 'completed'
                  ? 'bg-emerald-600 text-white font-medium'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              Completed ({completedList.length})
            </button>
          </div>
        </div>

        <button
          onClick={() => setOnlyBookmarked(!onlyBookmarked)}
          className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded border transition-colors ${
            onlyBookmarked
              ? 'bg-amber-50 border-amber-300 text-amber-800 font-medium'
              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-current text-amber-600' : ''}`} />
          <span>Bookmarked Only</span>
        </button>
      </div>

      {/* Tracked Books List */}
      {trackedBooks.length === 0 ? (
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700">No books in this view yet</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
            Mark books as "Reading Now" from the All Books tab or apply a Topper Kit to populate your pipeline.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {trackedBooks.map((book) => {
            const p = progressMap[book.id];
            const completedChCount = p?.checkedChapterIds?.length || 0;
            const totalCh = book.chapters?.length || 0;
            const pct = totalCh > 0 ? Math.round((completedChCount / totalCh) * 100) : 0;

            return (
              <div
                key={book.id}
                className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-slate-300 transition-all shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 text-xs text-slate-500 mb-1">
                      <span className="font-semibold text-slate-700">{book.subject}</span>
                      <span aria-hidden="true">·</span>
                      <span>{book.stage === 'both' ? 'Prelims & Mains' : book.stage.toUpperCase()}</span>
                      <span aria-hidden="true">·</span>
                      <span>{book.editionOrVersion}</span>
                      {book.isCustom && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-amber-700 font-medium">Custom User Material</span>
                        </>
                      )}
                    </div>

                    <h3
                      onClick={() => onSelectBook(book)}
                      className="text-base font-bold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                    >
                      {book.title}
                    </h3>
                    <div className="text-xs text-slate-600 mt-0.5">
                      By {book.author} · {book.publisher}
                    </div>

                    {/* Personal Notes preview if present */}
                    {p?.notes && (
                      <div className="mt-3 p-2.5 rounded bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-start space-x-2">
                        <FileText className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                        <div className="line-clamp-2 italic text-slate-600">
                          {p.notes}
                        </div>
                      </div>
                    )}

                    {/* Progress bar */}
                    {totalCh > 0 && (
                      <div className="mt-3 max-w-md">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                          <span>Chapters completed</span>
                          <span className="font-semibold text-slate-700">
                            {completedChCount}/{totalCh} ({pct}%)
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              pct === 100 ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right side controls */}
                  <div className="flex flex-col sm:items-end justify-between gap-3 shrink-0">
                    <div className="flex items-center space-x-2">
                      <select
                        value={p?.status || 'not-started'}
                        onChange={(e) =>
                          onUpdateStatus(book.id, e.target.value as UserBookProgress['status'])
                        }
                        className="text-xs bg-white border border-slate-300 rounded px-2.5 py-1 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="not-started">Not Started</option>
                        <option value="reading">Reading Now</option>
                        <option value="completed">Completed (1st)</option>
                        <option value="revising">In Revision Cycle</option>
                      </select>

                      {p?.status === 'revising' && (
                        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                          {p.revisionCount || 1}x Rev
                        </span>
                      )}
                    </div>

                    {p?.targetDate && (
                      <div className="flex items-center space-x-1 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Due: {new Date(p.targetDate).toLocaleDateString()}</span>
                      </div>
                    )}

                    <div className="flex items-center space-x-3">
                      {book.isCustom && onDeleteCustomBook && (
                        <button
                          onClick={() => onDeleteCustomBook(book.id)}
                          className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                          title="Delete custom book"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}

                      <button
                        onClick={() => onSelectBook(book)}
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-amber-700 hover:text-amber-800"
                      >
                        <span>Open Guide & Notes</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
