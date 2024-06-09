import { create } from "zustand";

export const useDisplayStote = create((set) => ({
  visible: false,
  toggle: () => set((state) => ({ visible: !state.visible })),
  close: () => set({ visible: false }),
}));

export const useModelStore = create((set) => ({
  modelData: null,
  setModelData: (modelData) => set({ modelData }),
}));

export const useLabelsStore = create((set) => ({
  visible: false,
  toggle: () => set((state) => ({ visible: !state.visible })),
}));

export const useSceneLightStore = create((set) => ({
  lightVisibility: false,
  toggleLight: () => set((state) => ({ lightVisibility: !state.lightVisibility })),
}));
