import React from 'react';
import { BOOK_COMPARISONS } from '../data/comparisons';
import { GitCompare, CheckCircle2, AlertCircle, Award, Sparkles } from 'lucide-react';

export const ComparisonView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">
          <GitCompare className="w-4 h-4" />
          <span>The Great UPSC Book Dilemmas</span>
        </div>
        <h2 className="text-xl font-bold font-serif-editorial text-slate-900">
          Book vs. Book Analysis
        </h2>
        <p className="text-xs text-slate-500 mt-1 max-w-2xl">
          Objective side-by-side breakdown of the most hotly debated book choices in the UPSC civil services community.
        </p>
      </div>

      {/* Comparisons */}
      <div className="space-y-6">
        {BOOK_COMPARISONS.map((comp) => (
          <div
            key={comp.id}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all"
          >
            {/* Title banner */}
            <div className="bg-slate-900 px-6 py-3.5 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-400 font-medium">{comp.subject}</span>
                <h3 className="text-base sm:text-lg font-bold font-serif-editorial text-white">
                  {comp.title}
                </h3>
              </div>
            </div>

            {/* Side by side comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              {/* Book A */}
              <div className="p-5 space-y-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Option A</div>
                  <h4 className="text-base font-bold text-slate-900">{comp.bookA.title}</h4>
                  <div className="text-xs text-slate-500">By {comp.bookA.author}</div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-emerald-800">Key Strengths:</div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {comp.bookA.pros.map((p, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {comp.bookA.cons.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-600">Limitations:</div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {comp.bookA.cons.map((c, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-slate-400">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 text-xs">
                  <span className="font-semibold text-slate-800">Ideal For: </span>
                  <span className="text-slate-600">{comp.bookA.idealFor}</span>
                </div>
              </div>

              {/* Book B */}
              <div className="p-5 space-y-4 bg-slate-50/50">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Option B</div>
                  <h4 className="text-base font-bold text-slate-900">{comp.bookB.title}</h4>
                  <div className="text-xs text-slate-500">By {comp.bookB.author}</div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-emerald-800">Key Strengths:</div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {comp.bookB.pros.map((p, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {comp.bookB.cons.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-600">Limitations:</div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {comp.bookB.cons.map((c, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-slate-400">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 text-xs">
                  <span className="font-semibold text-slate-800">Ideal For: </span>
                  <span className="text-slate-600">{comp.bookB.idealFor}</span>
                </div>
              </div>
            </div>

            {/* Topper Verdict Footer */}
            <div className="bg-amber-50/80 px-6 py-3.5 border-t border-amber-200/60 flex items-start space-x-2.5 text-xs text-slate-800">
              <Award className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-amber-900">Toppers’ Verdict: </span>
                <span className="leading-relaxed">{comp.toppersVerdict}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
