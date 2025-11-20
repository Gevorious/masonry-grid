import { create } from 'zustand';
import { useEffect } from 'react';

export type RecentItem = {
  id: number;
  photographer: string;
  thumbnail: string;
};

interface RecentState {
  recent: RecentItem[];
  addItem: (item: RecentItem) => void;
  setRecent: (items: RecentItem[]) => void;
}

export const useRecentStore = create<RecentState>((set) => ({
  recent: [],
  addItem: (item) =>
    set((state) => {
      const updated = [
        item,
        ...state.recent.filter((u) => u.id !== item.id),
      ].slice(0, 10);
      if (typeof window !== 'undefined')
        localStorage.setItem('recentItems', JSON.stringify(updated));
      return { recent: updated };
    }),
  setRecent: (items) => set({ recent: items }),
}));

export const useLoadRecentFromStorage = () => {
  const setRecent = useRecentStore((state) => state.setRecent);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('recentItems');
      if (stored) setRecent(JSON.parse(stored));
    }
  }, [setRecent]);
};
