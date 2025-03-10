import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// State types
type States = {
  count: number;
};

// Action types
type Actions = {
  increase: () => void;
  decrease: () => void;
};

// useCountStore
export const useCountStore = create(
  persist<States & Actions>(
    set => ({
      // States
      count: 0,

      // Actions
      increase: () => set(state => ({ count: state.count + 1 })),
      decrease: () => set(state => ({ count: state.count - 1 })),
    }),
    {
      name: 'count-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
