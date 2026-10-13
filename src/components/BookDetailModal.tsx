import React, { useState } from 'react';
import { BookItem, UserBookProgress } from '../types/book';
import {
  X,
  CheckCircle2,
  Bookmark,
  ExternalLink,
  Clock,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  ArrowRight,
  FileText,
  AlertTriangle,
  Check,
  Plus,
  Minus
} from 'lucide-react';

interface BookDetailModalProps {
  book: BookItem | null;
  progress: UserBookProgress;
  onClose: () => void;
  onToggleChapter: (bookId: string, chapterId: string) => void;
  onToggleBookmark: (bookId: string) => void;
  onUpdateProgress: (bookId: string, partial: Partial<UserBookProgress>) => void;
  onSelectAlternativeBook?: (bookId: string) => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  progress,
  onClose,
  onToggleChapter,
  onToggleBookmark,
  onUpdateProgress,
  onSelectAlternativeBook
}) => {
  if (!book) return null;

  const [notes, setNotes] = useState(progress.notes || '');
  const [targetDate, setTargetDate] = useState(progress.targetDate || '');
  const [activeTab, setActiveTab] = useState<'guide' | 'chapters' | 'notes' | 'syllabus'>('guide');
  const [notesSaved, setNotesSaved] = useState(false);

  const completedCount = progress.checkedChapterIds?.length || 0;
  const totalChapters = book.chapters?.length || 0;
  const progressPercent = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

  const handleSaveNotes = () => {
    onUpdateProgress(book.id, { notes, targetDate });
    setNotesSaved(true);
    setTimeout(() => setNotesSaved(false), 2000);
  };

  const incrementRevision = () => {
    const nextCount = (progress.revisionCount || 0) + 1;
    onUpdateProgress(book.id, {
      revisionCount: nextCount,
      status: 'revising'
    });
  };

  const decrementRevision = () => {
    const nextCount = Math.max(0, (progress.revisionCount || 0) - 1);
    onUpdateProgress(book.id, { revisionCount: nextCount });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center space-x-2 text-xs text-amber-400 font-medium mb-1">
              <span>{book.stage === 'both' ? 'Prelims & Mains' : book.stage.toUpperCase()}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>{book.subject}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>{book.editionOrVersion}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold font-serif-editorial text-white leading-tight">
              {book.title}
            </h2>
            <div className="text-xs text-slate-300 mt-0.5">
              By <span className="text-amber-200">{book.author}</span> · Published by {book.publisher}
            </div>
          </div>

          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => onToggleBookmark(book.id)}
              className={`p-1.5 rounded transition-colors ${
                progress.isBookmarked
                  ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
              title={progress.isBookmarked ? 'Remove bookmark' : 'Bookmark this book'}
            >
              <Bookmark className={`w-4 h-4 ${progress.isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Sub-navigation Bar */}
        <div className="px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Segmented sub-tabs */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                activeTab === 'guide'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Strategy & Selective Guide
            </button>
            <button
              onClick={() => setActiveTab('chapters')}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                activeTab === 'chapters'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Chapter Checklist ({completedCount}/{totalChapters})
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                activeTab === 'notes'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              My Notes & Schedule
            </button>
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                activeTab === 'syllabus'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Syllabus Points ({book.syllabusMapping.length})
            </button>
          </div>

          {/* Quick status selector */}
          <div className="flex items-center space-x-2">
            <span className="text-slate-500">Status:</span>
            <select
              value={progress.status}
              onChange={(e) =>
                onUpdateProgress(book.id, { status: e.target.value as UserBookProgress['status'] })
              }
              className="text-xs bg-white border border-slate-300 rounded px-2 py-1 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              <option value="not-started">Not Started</option>
              <option value="reading">Reading Now</option>
              <option value="completed">Completed (1st Read)</option>
              <option value="revising">In Revision Cycle</option>
            </select>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="px-6 py-5 overflow-y-auto flex-1 space-y-5 text-sm">
          {/* TAB 1: STRATEGY & SELECTIVE READING GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-5">
              {/* Overview & Toppers Advice */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Toppers' Core Strategy & Reading Approach</span>
                </div>
                <p className="text-slate-800 leading-relaxed font-serif-editorial text-sm">
                  "{book.toppersTake}"
                </p>
                <div className="mt-3 pt-2.5 border-t border-amber-200/50 flex flex-wrap items-center gap-4 text-xs text-amber-900/80">
                  <span>Estimated Read: ~{book.estimatedReadHours} hours</span>
                  <span aria-hidden="true">·</span>
                  <span>Recommended Order: Step {book.recommendedOrder} in {book.subject}</span>
                  <span aria-hidden="true">·</span>
                  <span>Difficulty: {book.difficulty}</span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  About this book in UPSC CSE
                </h4>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  {book.summary}
                </p>
              </div>

              {/* Selective Reading: What to Read vs What to Skip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Must Read Chapters */}
                <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-emerald-800 font-semibold text-xs mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Must-Read High-Yield Chapters</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {book.mustReadChapters.map((ch, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skip / Skim Chapters */}
                <div className="bg-rose-50/50 border border-rose-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-rose-800 font-semibold text-xs mb-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Chapters to Skip or Only Skim</span>
                  </div>
                  {book.skipOrSkimChapters && book.skipOrSkimChapters.length > 0 ? (
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {book.skipOrSkimChapters.map((skip, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <span className="text-rose-500 font-bold">✕</span>
                          <span>{skip}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-slate-500 italic">
                      Almost all chapters in this foundational book are relevant. Read systematically.
                    </p>
                  )}
                </div>
              </div>

              {/* Alternatives & Official Free Links */}
              <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-semibold text-slate-700">Alternative Options: </span>
                  <span className="text-slate-600">
                    {book.alternativeBooks && book.alternativeBooks.length > 0
                      ? book.alternativeBooks.join(' / ')
                      : 'Standard single authoritative text for this syllabus segment'}
                  </span>
                </div>

                {book.freeResourceUrl && (
                  <a
                    href={book.freeResourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <span>Official Free Portal / Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: CHAPTER CHECKLIST */}
          {activeTab === 'chapters' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                <div>
                  <span className="font-semibold text-slate-800">Your Reading Completion: </span>
                  <span className="text-slate-600">
                    {completedCount} of {totalChapters} key chapters read ({progressPercent}%)
                  </span>
                </div>
                <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      progressPercent === 100 ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                {book.chapters.map((ch) => {
                  const isChecked = progress.checkedChapterIds.includes(ch.id);
                  return (
                    <div
                      key={ch.id}
                      onClick={() => onToggleChapter(book.id, ch.id)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'bg-emerald-50/60 border-emerald-200 text-slate-900'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-slate-500' : ''}`}>
                            {ch.title}
                          </div>
                          {ch.isHighYield && (
                            <span className="text-[10px] text-amber-700 font-semibold">
                              ★ High-Yield UPSC Topic
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="text-[11px] text-slate-400">
                        {isChecked ? 'Read' : 'Mark as Read'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: NOTES & SCHEDULE */}
          {activeTab === 'notes' && (
            <div className="space-y-4">
              {/* Revision counter widget */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-slate-800 text-xs sm:text-sm">
                    Revisions Completed
                  </div>
                  <div className="text-xs text-slate-500">
                    Toppers recommend 3-5 revisions before the exam
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={decrementRevision}
                    className="p-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 text-slate-700"
                    title="Decrease revision count"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-lg font-bold text-slate-900 w-8 text-center">
                    {progress.revisionCount || 0}x
                  </span>
                  <button
                    onClick={incrementRevision}
                    className="p-1.5 rounded border border-amber-500 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold"
                    title="Log revision"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Target date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Completion Date
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className="text-xs border border-slate-300 rounded px-3 py-1.5 bg-white text-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  {targetDate && (
                    <span className="text-xs text-slate-500">
                      Target: {new Date(targetDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>

              {/* Aspirant notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  My Personal Study Notes & Key Page References
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Record chapter page numbers, summary mnemonics, difficult concepts to revisit..."
                  rows={6}
                  className="w-full text-xs sm:text-sm p-3 border border-slate-300 rounded-lg bg-white text-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={handleSaveNotes}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-md transition-colors shadow-xs"
                >
                  Save Notes & Schedule
                </button>
                {notesSaved && (
                  <span className="text-xs text-emerald-600 font-medium flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Saved successfully!</span>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: OFFICIAL SYLLABUS MAPPING */}
          {activeTab === 'syllabus' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-600">
                Official UPSC CSE Syllabus points directly addressed by this book:
              </p>
              <div className="space-y-2">
                {book.syllabusMapping.map((syl, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-xs text-slate-800 flex items-start space-x-2.5"
                  >
                    <span className="font-bold text-amber-700">0{idx + 1}.</span>
                    <span className="leading-relaxed">{syl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div>
            Last updated: {progress.updatedAt ? new Date(progress.updatedAt).toLocaleDateString() : 'Never'}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-slate-300 rounded text-slate-700 font-medium hover:bg-slate-100"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
