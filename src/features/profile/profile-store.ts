import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { learner } from '@/config/learner'
import type { UserProfile } from '@/types/user'

export type ThemePreference = 'light' | 'dark' | 'system'

type ProfileSettings = {
  theme: ThemePreference
}

type ProfileStoreState = {
  profile: UserProfile
  settings: ProfileSettings
  updateProfile: (patch: Partial<UserProfile>) => void
  updateSettings: (patch: Partial<ProfileSettings>) => void
  completeOnboarding: () => void
}

const nicknameInitials = learner.nickname.slice(0, 2).toUpperCase()

const defaultProfile: UserProfile = {
  id: 'user-local-1',
  displayName: learner.fullName,
  preferredLocale: 'en',
  onboardingComplete: false,
  avatarInitials: nicknameInitials,
}

type PersistedProfileSlice = {
  profile?: UserProfile
  settings?: ProfileSettings
}

export const useProfileStore = create<ProfileStoreState>()(
  persist(
    (set) => ({
      profile: defaultProfile,
      settings: {
        theme: 'light',
      },
      updateProfile: (patch) => {
        set((state) => ({
          profile: {
            ...state.profile,
            ...patch,
            avatarInitials: nicknameInitials,
          },
        }))
      },
      updateSettings: (patch) => {
        set((state) => ({
          settings: { ...state.settings, ...patch },
        }))
      },
      completeOnboarding: () => {
        set((state) => ({
          profile: { ...state.profile, onboardingComplete: true },
        }))
      },
    }),
    {
      name: 'digital-skills-profile',
      version: 1,
      partialize: (state) => ({
        profile: state.profile,
        settings: state.settings,
      }),
      merge: (persisted, current) => {
        const slice = persisted as PersistedProfileSlice | undefined
        return {
          ...current,
          settings: { ...current.settings, ...slice?.settings },
          profile: {
            ...current.profile,
            ...slice?.profile,
            displayName: learner.fullName,
            avatarInitials: nicknameInitials,
          },
        }
      },
    },
  ),
)
