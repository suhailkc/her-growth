import { learner } from '@/config/learner'
import { getSupabaseClient } from '@/lib/supabase/client'
import type { ProfileSettingsRow } from '@/types/database'
import type { UserProfile } from '@/types/user'

import type { ProfileSettings, ThemePreference } from './profile-store'

function parseSettings(raw: ProfileSettingsRow | null | undefined): ProfileSettings {
  return {
    theme: raw?.theme ?? 'light',
  }
}

function toSettingsRow(settings: ProfileSettings): ProfileSettingsRow {
  return {
    theme: settings.theme,
  }
}

export type RemoteProfileBundle = {
  profile: UserProfile
  settings: ProfileSettings
}

export async function fetchRemoteProfile(userId: string): Promise<RemoteProfileBundle | null> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    return null
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('display_name, preferred_locale, onboarding_complete, settings')
    .eq('user_id', userId)
    .maybeSingle()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    return null
  }

  const settings = parseSettings(data.settings as ProfileSettingsRow)

  return {
    profile: {
      id: userId,
      displayName: data.display_name || learner.fullName,
      preferredLocale: data.preferred_locale,
      onboardingComplete: data.onboarding_complete,
      avatarInitials: learner.nickname.slice(0, 2).toUpperCase(),
    },
    settings,
  }
}

export async function ensureRemoteProfile(
  userId: string,
  options?: { displayName?: string },
): Promise<RemoteProfileBundle> {
  const existing = await fetchRemoteProfile(userId)
  if (existing) {
    return existing
  }

  const supabase = getSupabaseClient()
  if (!supabase) {
    throw new Error('Supabase is not configured')
  }

  const defaultSettings: ProfileSettingsRow = {
    theme: 'light',
  }

  const row = {
    user_id: userId,
    display_name: options?.displayName ?? learner.fullName,
    preferred_locale: 'en' as const,
    onboarding_complete: false,
    settings: defaultSettings,
  }

  const { error } = await supabase.from('profiles').insert(row)
  if (error) {
    throw new Error(error.message)
  }

  return {
    profile: {
      id: userId,
      displayName: row.display_name,
      preferredLocale: row.preferred_locale,
      onboardingComplete: false,
      avatarInitials: learner.nickname.slice(0, 2).toUpperCase(),
    },
    settings: parseSettings(defaultSettings),
  }
}

export async function upsertRemoteProfile(
  userId: string,
  profile: UserProfile,
  settings: ProfileSettings,
): Promise<void> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    return
  }

  const { error } = await supabase.from('profiles').upsert(
    {
      user_id: userId,
      display_name: profile.displayName,
      preferred_locale: profile.preferredLocale,
      onboarding_complete: profile.onboardingComplete,
      settings: toSettingsRow(settings),
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' },
  )

  if (error) {
    console.error('Failed to save profile', error.message)
  }
}

export function isThemePreference(value: string): value is ThemePreference {
  return value === 'light' || value === 'dark' || value === 'system'
}
