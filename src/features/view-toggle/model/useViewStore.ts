import { create } from 'zustand';

export type ViewMode = 'grid' | 'list';

interface ViewState {
  view: ViewMode;
  setView: (view: ViewMode) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  view: 'grid',
  setView: (view) => set({ view }),
}));