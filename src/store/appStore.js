import { create } from 'zustand'

export const useAppStore = create((set) => ({
  isReducedMotion: false, // Could be synced with user prefers-reduced-motion
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  toggleReducedMotion: () => set((state) => ({ isReducedMotion: !state.isReducedMotion }))
}))
