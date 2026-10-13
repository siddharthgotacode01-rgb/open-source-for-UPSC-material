import React from 'react';
import { BookItem, UserBookProgress } from '../types/book';
import { Bookmark, Check, Clock, ChevronRight, Star, ExternalLink, Sparkles } from 'lucide-react';

interface BookCardProps {
  book: BookItem;
  progress: UserBookProgress;
  onSelectBook: (book: BookItem) => void;
  onToggleBookmark: (bookId: string) => void;
  onUpdateStatus: (bookId: string, status: UserBookProgress['status']) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  progress,
  onSelectBook,
  onToggleBookmark,
  onUpdateStatus
}) => {
  const completedChaptersCount = progress.checkedChapterIds?.length || 0;
  const totalChapters = book.chapters?.length || 0;
  const progressPercent = totalChapters > 0 ? Math.round((completedChaptersCount / totalChapters) * 100) : 0;

  // Human priority label
  const priorityLabels: Record<string, { label: string; textClass: string }> = {
    'core-pillar': { label: 'Core Pillar (Must-Read)', textClass: 'text-amber-800 font-semibold' },
    'essential-reference': { label: 'Essential Reference', textClass: 'text-blue-800 font-medium' },
    'selective-reading': { label: 'Selective Reading Only', textClass: 'text-indigo-800 font-medium' },
    'ncert-foundation': { label: 'NCERT Foundation', textClass: 'text-emerald-800 font-semibold' },
    'supplementary': { label: 'Supplementary / Current Affairs', textClass: 'text-slate-700 font-medium' }
  };

  const currentPriority = priorityLabels[book.priority] || { label: book.priority, textClass: 'text-slate-700' };

  return (
    <div className="bg-white rounded-lg border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
      <div className="p-5">
        {/* Top quiet metadata line with typographic separators (NO PILLS) */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
          <div className="flex items-center space-x-1.5 flex-wrap">
            <span className={currentPriority.textClass}>{currentPriority.label}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{book.stage === 'both' ? 'Prelims & Mains' : book.stage.toUpperCase()}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{book.editionOrVersion}</span>
          </div>

          <button
            onClick={() => onToggleBookmark(book.id)}
            className={`p-1 rounded transition-colors ${
              progress.isBookmarked
                ? 'text-amber-500 hover:text-amber-600'
                : 'text-slate-300 hover:text-slate-500'
            }`}
            title={progress.isBookmarked ? 'Remove bookmark' : 'Bookmark book'}
            aria-label="Bookmark"
          >
            <Bookmark className={`w-4 h-4 ${progress.isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Title and Author */}
        <div className="mb-2">
          <h3
            onClick={() => onSelectBook(book)}
            className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors cursor-pointer leading-snug"
          >
            {book.title}
          </h3>
          <div className="text-xs text-slate-600 mt-0.5">
            By <span className="font-medium text-slate-800">{book.author}</span>
            <span aria-hidden="true" className="text-slate-300 mx-1.5">·</span>
            <span className="text-slate-500">{book.publisher}</span>
          </div>
        </div>

        {/* Subject and Papers info */}
        <div className="text-xs text-slate-600 mb-3 flex items-center space-x-1.5">
          <span className="font-medium text-slate-700">{book.subject}</span>
          <span aria-hidden="true" className="text-slate-300">/</span>
          <span className="text-slate-500">
            {book.papers.map((p) => p.toUpperCase().replace('-', ' ')).join(', ')}
          </span>
        </div>

        {/* Summary snippet */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {book.summary}
        </p>

        {/* Topper Note Snippet */}
        <div className="p-2.5 rounded bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-4">
          <div className="text-[11px] font-semibold text-slate-800 mb-0.5 flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Topper's Advice</span>
          </div>
          <p className="line-clamp-2 text-slate-600 italic">
            "{book.toppersTake}"
          </p>
        </div>

        {/* Chapters progress bar if user started reading */}
        {totalChapters > 0 && progress.status !== 'not-started' && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
              <span>Chapter Progress</span>
              <span className="font-semibold text-slate-700">
                {completedChaptersCount}/{totalChapters} ({progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  progressPercent === 100 ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Key metadata facts */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
          <div className="flex items-center space-x-1 text-slate-600">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>~{book.estimatedReadHours} hrs read</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="font-semibold text-slate-700">{book.rating.toFixed(1)}</span>
          </div>
          <div className="text-slate-500">
            {book.difficulty}
          </div>
        </div>
      </div>

      {/* Card footer controls */}
      <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between gap-2">
        {/* Status selector */}
        <div className="flex items-center space-x-1 text-xs">
          <select
            value={progress.status}
            onChange={(e) => onUpdateStatus(book.id, e.target.value as UserBookProgress['status'])}
            className="text-xs bg-white border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            <option value="not-started">Not Started</option>
            <option value="reading">Reading Now</option>
            <option value="completed">Completed</option>
            <option value="revising">Revising (x{progress.revisionCount || 1})</option>
          </select>
        </div>

        {/* Open Details Button */}
        <button
          onClick={() => onSelectBook(book)}
          className="inline-flex items-center space-x-1 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors"
        >
          <span>Study Guide</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
