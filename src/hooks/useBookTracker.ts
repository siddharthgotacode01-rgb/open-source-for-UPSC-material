import { useState, useEffect } from 'react';
import { UserBookProgress, BookItem } from '../types/book';
import { UPSC_BOOKS } from '../data/upscBooks';

const STORAGE_KEY_PROGRESS = 'upsc_user_book_progress_v1';
const STORAGE_KEY_CUSTOM_BOOKS = 'upsc_custom_books_v1';

export function useBookTracker() {
  const [progressMap, setProgressMap] = useState<Record<string, UserBookProgress>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
    }
    // Default initial progress for a few books to give immediate good experience
    return {
      'laxmikanth-polity': {
        bookId: 'laxmikanth-polity',
        status: 'reading',
        revisionCount: 1,
        checkedChapterIds: ['ch-1', 'ch-2', 'ch-3'],
        notes: 'Pay special attention to Article 21 privacy judgments (Puttaswamy case) and basic structure timeline.',
        targetDate: '2026-11-15',
        isBookmarked: true,
        updatedAt: new Date().toISOString()
      },
      'spectrum-modern-history': {
        bookId: 'spectrum-modern-history',
        status: 'reading',
        revisionCount: 0,
        checkedChapterIds: ['spec-2', 'spec-3', 'spec-4'],
        notes: 'Make timeline chart for peasant and tribal revolts.',
        targetDate: '2026-11-30',
        isBookmarked: true,
        updatedAt: new Date().toISOString()
      },
      'ncert-physical-geography-class-11': {
        bookId: 'ncert-physical-geography-class-11',
        status: 'completed',
        revisionCount: 2,
        checkedChapterIds: ['npg-1', 'npg-2', 'npg-3', 'npg-4', 'npg-5', 'npg-6'],
        notes: 'Core concepts finished. Geomorphic processes and heat budget revised twice.',
        isBookmarked: true,
        updatedAt: new Date().toISOString()
      }
    };
  });

  const [customBooks, setCustomBooks] = useState<BookItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CUSTOM_BOOKS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load custom books', e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progressMap));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [progressMap]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM_BOOKS, JSON.stringify(customBooks));
    } catch (e) {
      console.error('Failed to save custom books', e);
    }
  }, [customBooks]);

  const allBooks: BookItem[] = [...UPSC_BOOKS, ...customBooks];

  const getProgress = (bookId: string): UserBookProgress => {
    return (
      progressMap[bookId] || {
        bookId,
        status: 'not-started',
        revisionCount: 0,
        checkedChapterIds: [],
        notes: '',
        isBookmarked: false,
        updatedAt: new Date().toISOString()
      }
    );
  };

  const updateProgress = (bookId: string, partial: Partial<UserBookProgress>) => {
    setProgressMap((prev) => {
      const current = prev[bookId] || {
        bookId,
        status: 'not-started',
        revisionCount: 0,
        checkedChapterIds: [],
        notes: '',
        isBookmarked: false,
        updatedAt: new Date().toISOString()
      };
      return {
        ...prev,
        [bookId]: {
          ...current,
          ...partial,
          updatedAt: new Date().toISOString()
        }
      };
    });
  };

  const toggleChapter = (bookId: string, chapterId: string) => {
    setProgressMap((prev) => {
      const current = prev[bookId] || {
        bookId,
        status: 'reading',
        revisionCount: 0,
        checkedChapterIds: [],
        notes: '',
        isBookmarked: false,
        updatedAt: new Date().toISOString()
      };

      const hasChapter = current.checkedChapterIds.includes(chapterId);
      const newChecked = hasChapter
        ? current.checkedChapterIds.filter((id) => id !== chapterId)
        : [...current.checkedChapterIds, chapterId];

      const book = allBooks.find((b) => b.id === bookId);
      let newStatus = current.status;
      if (newChecked.length > 0 && current.status === 'not-started') {
        newStatus = 'reading';
      }
      if (book && book.chapters.length > 0 && newChecked.length === book.chapters.length) {
        newStatus = 'completed';
      }

      return {
        ...prev,
        [bookId]: {
          ...current,
          status: newStatus,
          checkedChapterIds: newChecked,
          updatedAt: new Date().toISOString()
        }
      };
    });
  };

  const toggleBookmark = (bookId: string) => {
    const cur = getProgress(bookId);
    updateProgress(bookId, { isBookmarked: !cur.isBookmarked });
  };

  const addCustomBook = (book: BookItem) => {
    setCustomBooks((prev) => [book, ...prev]);
    updateProgress(book.id, {
      status: 'reading',
      isBookmarked: true
    });
  };

  const deleteCustomBook = (bookId: string) => {
    setCustomBooks((prev) => prev.filter((b) => b.id !== bookId));
    setProgressMap((prev) => {
      const next = { ...prev };
      delete next[bookId];
      return next;
    });
  };

  const applyTopperKit = (bookIds: string[]) => {
    setProgressMap((prev) => {
      const next = { ...prev };
      bookIds.forEach((id) => {
        if (!next[id]) {
          next[id] = {
            bookId: id,
            status: 'reading',
            revisionCount: 0,
            checkedChapterIds: [],
            notes: 'Added from Topper Recommended Kit',
            isBookmarked: true,
            updatedAt: new Date().toISOString()
          };
        } else {
          next[id] = {
            ...next[id],
            isBookmarked: true
          };
        }
      });
      return next;
    });
  };

  return {
    allBooks,
    progressMap,
    getProgress,
    updateProgress,
    toggleChapter,
    toggleBookmark,
    addCustomBook,
    deleteCustomBook,
    applyTopperKit
  };
}
