import { create } from "zustand";

export const useDrawerStore = create((set) => ({
  visible: false,
  toggle: () => set((state) => ({ visible: !state.visible })),
}));
