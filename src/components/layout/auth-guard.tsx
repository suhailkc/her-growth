import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { ErrorState } from '@/components/common/error-state'
import { LoadingState } from '@/components/common/loading-state'
import { useAuth } from '@/features/auth/auth-provider'

type AuthGuardProps = {
  children: ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { configured, isLoading, session, access, dataReady } = useAuth()
  const location = useLocation()

  if (!configured) {
    return (
      <ErrorState
        title="Sign-in not configured yet"
        description="Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (see .env.example), then restart the dev server."
      />
    )
  }

  if (isLoading || (session && access === 'allowed' && !dataReady)) {
    return <LoadingState label="Loading your space…" />
  }

  if (!session || access !== 'allowed') {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}
