import React, { useState } from 'react';
import { TOPPER_KITS } from '../data/topperKits';
import { BookItem, TopperKit } from '../types/book';
import { Sparkles, Check, Clock, BookOpen, ArrowRight, UserCheck, CheckCircle } from 'lucide-react';

interface TopperKitsViewProps {
  allBooks: BookItem[];
  onSelectBook: (book: BookItem) => void;
  onApplyKit: (bookIds: string[]) => void;
}

export const TopperKitsView: React.FC<TopperKitsViewProps> = ({
  allBooks,
  onSelectBook,
  onApplyKit
}) => {
  const [appliedKitId, setAppliedKitId] = useState<string | null>(null);

  const handleApply = (kit: TopperKit) => {
    onApplyKit(kit.bookIds);
    setAppliedKitId(kit.id);
    setTimeout(() => setAppliedKitId(null), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <div className="flex items-center space-x-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Curated UPSC CSE Preparation Kits</span>
        </div>
        <h2 className="text-xl font-bold font-serif-editorial text-slate-900">
          Topper-Recommended Book Stacks
        </h2>
        <p className="text-xs text-slate-500 mt-1 max-w-2xl">
          Carefully structured packages tailored for different phases of preparation — from 90-day NCERT foundations to final revision sprints.
        </p>
      </div>

      {/* Kit Cards */}
      <div className="space-y-5">
        {TOPPER_KITS.map((kit) => {
          const kitBooks = allBooks.filter((b) => kit.bookIds.includes(b.id));

          return (
            <div
              key={kit.id}
              className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="max-w-2xl">
                  <div className="flex items-center space-x-2 text-xs text-slate-500 mb-1.5">
                    <span className="font-bold text-amber-800">{kit.badge}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-600">{kit.targetAspirant}</span>
                    <span aria-hidden="true">·</span>
                    <span>~{kit.estimatedTotalHours} Study Hours</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif-editorial text-slate-900">
                    {kit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {kit.description}
                  </p>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <button
                    onClick={() => handleApply(kit)}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-sm"
                  >
                    {appliedKitId === kit.id ? (
                      <>
                        <Check className="w-4 h-4 text-slate-950" />
                        <span>Added to My Tracker!</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Track This Entire Stack</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Topper Note */}
              <div className="my-4 p-3 bg-slate-50 border border-slate-100 rounded-lg text-xs text-slate-700">
                <span className="font-semibold text-slate-900">Strategy Rationale: </span>
                <span className="italic text-slate-600">{kit.strategyNote}</span>
              </div>

              {/* Included Books Grid */}
              <div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Included Books in this Stack ({kitBooks.length}):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {kitBooks.map((book) => (
                    <div
                      key={book.id}
                      onClick={() => onSelectBook(book)}
                      className="p-2.5 rounded-lg border border-slate-200 hover:border-amber-300 hover:bg-amber-50/40 cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <BookOpen className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <div className="truncate">
                          <div className="text-xs font-bold text-slate-800 truncate group-hover:text-amber-900">
                            {book.title}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {book.author} · {book.subject}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-700 shrink-0 ml-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
