import React, { useState } from 'react';
import { BookItem, UPSCStage, SubjectCategory, PriorityTier, GSPaper } from '../types/book';
import { X, Plus, Trash2, BookPlus } from 'lucide-react';

interface AddCustomBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: BookItem) => void;
}

export const AddCustomBookModal: React.FC<AddCustomBookModalProps> = ({
  isOpen,
  onClose,
  onAddBook
}) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [edition, setEdition] = useState('Current Edition');
  const [stage, setStage] = useState<UPSCStage>('both');
  const [subject, setSubject] = useState<SubjectCategory>('Indian Polity & Governance');
  const [priority, setPriority] = useState<PriorityTier>('essential-reference');
  const [difficulty, setDifficulty] = useState<BookItem['difficulty']>('Moderate');
  const [estimatedHours, setEstimatedHours] = useState('30');
  const [summary, setSummary] = useState('');
  const [toppersTake, setToppersTake] = useState('');
  const [chapterInputs, setChapterInputs] = useState<string[]>([
    'Module 1: Foundations',
    'Module 2: Advanced Core Topics',
    'Module 3: Current Developments & PYQs'
  ]);

  const handleAddChapter = () => {
    setChapterInputs([...chapterInputs, `Module ${chapterInputs.length + 1}`]);
  };

  const handleRemoveChapter = (index: number) => {
    setChapterInputs(chapterInputs.filter((_, i) => i !== index));
  };

  const handleUpdateChapter = (index: number, val: string) => {
    const updated = [...chapterInputs];
    updated[index] = val;
    setChapterInputs(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    const newBook: BookItem = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      author: author.trim(),
      publisher: publisher.trim() || 'Self / Coaching Institute',
      editionOrVersion: edition.trim() || 'Latest',
      stage,
      papers: stage === 'prelims' ? ['prelims-1'] : stage === 'mains' ? ['gs-2'] : ['prelims-1', 'gs-2'],
      subject,
      priority,
      rating: 4.8,
      difficulty,
      estimatedReadHours: parseInt(estimatedHours, 10) || 25,
      recommendedOrder: 1,
      summary: summary.trim() || 'Custom study material added by aspirant for UPSC preparation.',
      toppersTake: toppersTake.trim() || 'Revise key concepts and solve previous years questions.',
      syllabusMapping: ['Custom topic syllabus coverage'],
      mustReadChapters: chapterInputs.filter((c) => c.trim().length > 0),
      alternativeBooks: [],
      isCoreTen: false,
      isCustom: true,
      chapters: chapterInputs
        .filter((c) => c.trim().length > 0)
        .map((ch, idx) => ({
          id: `custom-ch-${idx + 1}`,
          title: ch.trim(),
          isHighYield: true
        }))
    };

    onAddBook(newBook);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <BookPlus className="w-5 h-5 text-amber-400" />
            <h2 className="text-base sm:text-lg font-bold text-white font-serif-editorial">
              Add Custom UPSC Material / Notes
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="px-6 py-5 overflow-y-auto flex-1 space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Book / Material Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Vision IAS PT 365 Polity / Shubhra Ranjan PSIR Notes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-slate-300 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Author / Source *</label>
              <input
                type="text"
                required
                placeholder="e.g. Vision IAS / Shubhra Ranjan"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Edition / Year</label>
              <input
                type="text"
                placeholder="e.g. 2026 Edition / Latest"
                value={edition}
                onChange={(e) => setEdition(e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Subject Category</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value as SubjectCategory)}
                className="w-full border border-slate-300 rounded px-2 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="Indian Polity & Governance">Indian Polity & Governance</option>
                <option value="Modern Indian History">Modern Indian History</option>
                <option value="Ancient & Medieval History">Ancient & Medieval History</option>
                <option value="Art & Culture">Art & Culture</option>
                <option value="Geography">Geography</option>
                <option value="Indian Economy & Agriculture">Indian Economy & Agriculture</option>
                <option value="Environment & Biodiversity">Environment & Biodiversity</option>
                <option value="Science & Technology">Science & Technology</option>
                <option value="Internal Security & Disaster Management">Internal Security</option>
                <option value="Ethics, Integrity & Aptitude">Ethics (GS 4)</option>
                <option value="Optional Subject">Optional Subject</option>
                <option value="Government Reports & Policy">Government Reports</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Target Stage</label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value as UPSCStage)}
                className="w-full border border-slate-300 rounded px-2 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="both">Both Prelims & Mains</option>
                <option value="prelims">Prelims Only</option>
                <option value="mains">Mains Only</option>
                <option value="optional">Optional Subject</option>
                <option value="foundation">Foundation</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Estimated Hours</label>
              <input
                type="number"
                min="1"
                value={estimatedHours}
                onChange={(e) => setEstimatedHours(e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Priority Tier</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as PriorityTier)}
                className="w-full border border-slate-300 rounded px-2 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="core-pillar">Core Pillar (Must Read)</option>
                <option value="essential-reference">Essential Reference</option>
                <option value="selective-reading">Selective Reading</option>
                <option value="supplementary">Supplementary</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Brief Description / Scope</label>
            <textarea
              rows={2}
              placeholder="What topics does this material cover?"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full border border-slate-300 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Chapters Checklist definition */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-slate-700">Modules / Chapters to Track</label>
              <button
                type="button"
                onClick={handleAddChapter}
                className="text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center space-x-1"
              >
                <Plus className="w-3 h-3" />
                <span>Add Chapter</span>
              </button>
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {chapterInputs.map((ch, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={ch}
                    onChange={(e) => handleUpdateChapter(idx, e.target.value)}
                    className="flex-1 border border-slate-300 rounded px-2.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  {chapterInputs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveChapter(idx)}
                      className="text-slate-400 hover:text-rose-600 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 rounded text-slate-700 font-medium hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded shadow-xs"
            >
              Save & Track Material
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
