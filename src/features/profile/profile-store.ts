import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { UserProfile } from '@/types/user'

export type ThemePreference = 'light' | 'dark' | 'system'

export type LearningPreference = 'short-daily' | 'few-longer' | 'flexible'

type ProfileSettings = {
  notificationsEnabled: boolean
  missionRemindersEnabled: boolean
  theme: ThemePreference
}

type ProfileStoreState = {
  profile: UserProfile
  learningPreference: LearningPreference
  settings: ProfileSettings
  updateProfile: (patch: Partial<UserProfile>) => void
  setLearningPreference: (value: LearningPreference) => void
  updateSettings: (patch: Partial<ProfileSettings>) => void
  completeOnboarding: () => void
}

const defaultProfile: UserProfile = {
  id: 'user-local-1',
  displayName: 'Nasreena',
  preferredLocale: 'en',
  studyFocus: undefined,
  onboardingComplete: true,
  avatarInitials: 'NA',
  learningGoal: 'Feel calm and confident with everyday computer tasks',
  dailyLearningMinutes: 15,
  childProfile: undefined,
  interests: ['Digital skills'],
}

function deriveInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return 'HG'
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase()
  return `${parts[0]![0] ?? ''}${parts[1]![0] ?? ''}`.toUpperCase()
}

export const useProfileStore = create<ProfileStoreState>()(
  persist(
    (set) => ({
      profile: defaultProfile,
      learningPreference: 'short-daily',
      settings: {
        notificationsEnabled: true,
        missionRemindersEnabled: true,
        theme: 'light',
      },
      updateProfile: (patch) => {
        set((state) => {
          const displayName = patch.displayName ?? state.profile.displayName
          return {
            profile: {
              ...state.profile,
              ...patch,
              avatarInitials:
                patch.displayName !== undefined
                  ? deriveInitials(displayName)
                  : (patch.avatarInitials ?? state.profile.avatarInitials),
            },
          }
        })
      },
      setLearningPreference: (value) => set({ learningPreference: value }),
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
      name: 'her-growth-profile',
      partialize: (state) => ({
        profile: state.profile,
        learningPreference: state.learningPreference,
        settings: state.settings,
      }),
    },
  ),
)
