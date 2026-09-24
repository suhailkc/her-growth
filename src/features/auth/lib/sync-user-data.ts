import type { User } from '@supabase/supabase-js'

import {
  fetchRemoteProgress,
  type RemoteJourneyState,
} from '@/features/digital-skills/completions-api'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import {
  ensureRemoteProfile,
  fetchRemoteProfile,
  type RemoteProfileBundle,
} from '@/features/profile/profile-api'
import { useProfileStore } from '@/features/profile/profile-store'

function applyRemoteProfile(bundle: RemoteProfileBundle): void {
  useProfileStore.setState({
    profile: bundle.profile,
    settings: bundle.settings,
  })
}

function applyRemoteProgress(progress: RemoteJourneyState): void {
  useDigitalSkillsStore.setState({
    completedTopicIds: progress.completedTopicIds,
    celebratedStageCompleteIds: progress.celebratedStageCompleteIds,
    lastVisitAt: progress.lastVisitAt,
  })
}

/** Server wins: replace local Zustand slices with Supabase data. */
export async function hydrateUserDataFromServer(user: User): Promise<void> {
  const displayNameFromGoogle =
    typeof user.user_metadata.full_name === 'string'
      ? user.user_metadata.full_name
      : typeof user.user_metadata.name === 'string'
        ? user.user_metadata.name
        : undefined

  let profileBundle = await fetchRemoteProfile(user.id)
  if (!profileBundle) {
    profileBundle = await ensureRemoteProfile(user.id, { displayName: displayNameFromGoogle })
  }

  const progress = await fetchRemoteProgress(user.id)

  applyRemoteProfile(profileBundle)
  applyRemoteProgress(progress)
}
