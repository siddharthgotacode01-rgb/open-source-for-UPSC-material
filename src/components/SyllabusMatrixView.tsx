import React, { useState } from 'react';
import { SYLLABUS_MATRIX, SyllabusTopic } from '../data/syllabusMatrix';
import { BookItem } from '../types/book';
import { Compass, BookOpen, ChevronRight, Sparkles, Filter } from 'lucide-react';

interface SyllabusMatrixViewProps {
  allBooks: BookItem[];
  onSelectBook: (book: BookItem) => void;
}

export const SyllabusMatrixView: React.FC<SyllabusMatrixViewProps> = ({
  allBooks,
  onSelectBook
}) => {
  const [selectedPaper, setSelectedPaper] = useState<string>('All');

  const papers = ['All', 'GS 1', 'GS 2', 'GS 3', 'GS 4'];

  const filteredTopics = SYLLABUS_MATRIX.filter((topic) => {
    if (selectedPaper === 'All') return true;
    return topic.paper === selectedPaper;
  });

  return (
    <div className="space-y-6">
      {/* Intro card */}
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <div className="flex items-center space-x-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
          <Compass className="w-4 h-4" />
          <span>Official UPSC CSE Syllabus to Book Reference Matrix</span>
        </div>
        <h2 className="text-xl font-bold font-serif-editorial text-slate-900">
          Syllabus-to-Source Mapping
        </h2>
        <p className="text-xs text-slate-500 mt-1 max-w-2xl">
          Every official syllabus heading from UPSC notification mapped to the exact standard textbooks and toppers’ high-yield focal chapters.
        </p>

        {/* Paper selector tabs */}
        <div className="mt-4 flex items-center space-x-1.5 border-t border-slate-100 pt-3">
          {papers.map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPaper(p)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                selectedPaper === p
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {p === 'All' ? 'All GS Papers' : `Mains ${p}`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Syllabus Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTopics.map((topic) => {
          // Find mapped books
          const mappedBooks = allBooks.filter((b) => topic.recommendedBookIds.includes(b.id));

          return (
            <div
              key={topic.id}
              className="bg-white rounded-xl border border-slate-200/90 p-5 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-800">{topic.paper}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-800 font-medium">{topic.frequencyInExam}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {topic.description}
                </p>

                {/* High yield focal note */}
                <div className="p-2.5 rounded bg-amber-50/70 border border-amber-200/60 text-xs text-slate-700 mb-4">
                  <div className="font-semibold text-amber-900 text-[11px] mb-0.5 flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>High-Yield Concepts to Master</span>
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed">
                    {topic.keyChaptersOrNotes}
                  </p>
                </div>
              </div>

              {/* Recommended Books list */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Standard Source Books:
                </div>
                <div className="space-y-1.5">
                  {mappedBooks.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => onSelectBook(b)}
                      className="group/b flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <div>
                          <div className="text-xs font-semibold text-slate-800 group-hover/b:text-amber-900">
                            {b.title}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            By {b.author} · {b.editionOrVersion}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/b:text-amber-700" />
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
