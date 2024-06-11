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

  scale: {
    value: 0.2,
    step: 0.1,
    setStep: (step) => set((state) => ({ scale: { ...state.scale, step } })),
    setValue: (value) => set((state) => ({ scale: { ...state.scale, value } })),
  },
}));

export const useLightSettingsStore = create((set) => ({
  ambientLightIntensity: 0.5,
  directionalLightIntensity: 1,
  directionalLightPosition: [5, 10, 7.5],
  directionalLightCastShadow: true,
  directionalLightShadowMapSizeWidth: 512,
  directionalLightShadowMapSizeHeight: 512,
  pointLightIntensity: 0.8,
  pointLightPosition: [10, 10, 10],
  spotLightIntensity: 1.5,
  spotLightPosition: [15, 20, 10],
  spotLightAngle: 0.3,
  spotLightPenumbra: 1,
  spotLightCastShadow: true,
  spotLightShadowMapSizeWidth: 512,
  spotLightShadowMapSizeHeight: 512,
  setAmbientLightIntensity: (intensity) => set({ ambientLightIntensity: intensity }),
  setDirectionalLightIntensity: (intensity) => set({ directionalLightIntensity: intensity }),
  setDirectionalLightPosition: (position) => set({ directionalLightPosition: position }),
  setDirectionalLightCastShadow: (castShadow) => set({ directionalLightCastShadow: castShadow }),
  setDirectionalLightShadowMapSizeWidth: (width) => set({ directionalLightShadowMapSizeWidth: width }),
  setDirectionalLightShadowMapSizeHeight: (height) => set({ directionalLightShadowMapSizeHeight: height }),
  setPointLightIntensity: (intensity) => set({ pointLightIntensity: intensity }),
  setPointLightPosition: (position) => set({ pointLightPosition: position }),
  setSpotLightIntensity: (intensity) => set({ spotLightIntensity: intensity }),
  setSpotLightPosition: (position) => set({ spotLightPosition: position }),
  setSpotLightAngle: (angle) => set({ spotLightAngle: angle }),
  setSpotLightPenumbra: (penumbra) => set({ spotLightPenumbra: penumbra }),
  setSpotLightCastShadow: (castShadow) => set({ spotLightCastShadow: castShadow }),
  setSpotLightShadowMapSizeWidth: (width) => set({ spotLightShadowMapSizeWidth: width }),
  setSpotLightShadowMapSizeHeight: (height) => set({ spotLightShadowMapSizeHeight: height }),
}));

export const useModelStore = create((set) => ({
  modelData: null,
  setModelData: (modelData) => set({ modelData }),
}));
