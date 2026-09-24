import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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

const defaultProfile: UserProfile = {
  id: 'user-local-1',
  displayName: 'Nasreena',
  preferredLocale: 'en',
  onboardingComplete: false,
  avatarInitials: 'NA',
}

function deriveInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return 'DS'
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase()
  return `${parts[0]![0] ?? ''}${parts[1]![0] ?? ''}`.toUpperCase()
}

export const useProfileStore = create<ProfileStoreState>()(
  persist(
    (set) => ({
      profile: defaultProfile,
      settings: {
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
      partialize: (state) => ({
        profile: state.profile,
        settings: state.settings,
      }),
    },
  ),
)
