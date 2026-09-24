import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useProfileStore } from '@/features/profile/profile-store'

type OnboardingGuardProps = {
  children: ReactNode
}

export function OnboardingGuard({ children }: OnboardingGuardProps) {
  const onboardingComplete = useProfileStore((s) => s.profile.onboardingComplete)
  const location = useLocation()

  if (!onboardingComplete && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />
  }

  return children
}
