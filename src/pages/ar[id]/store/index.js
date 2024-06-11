import { create } from "zustand";

export const useSettingsStore = create((set) => ({
  // Display Store
  display: {
    visible: false,
    toggle: () =>
      set((state) => ({
        display: { ...state.display, visible: !state.display.visible },
      })),
    close: () =>
      set((state) => ({
        display: { ...state.display, visible: false },
      })),
  },

  // Labels Store
  labels: {
    visible: false,
    toggle: () =>
      set((state) => ({
        labels: { ...state.labels, visible: !state.labels.visible },
      })),
  },

  // Scene Light Store
  sceneLight: {
    visible: false,
    toggle: () =>
      set((state) => ({
        sceneLight: {
          ...state.sceneLight,
          visible: !state.sceneLight.visible,
        },
      })),
  },
}));

export const useModelStore = create((set) => ({
  modelData: null,
  setModelData: (modelData) => set({ modelData }),
}));
