import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { LoadingState } from '@/components/common/loading-state'
import { AppProfileBar } from '@/features/profile/components/app-profile-bar'

export function AppShell() {
  return (
    <div className="min-h-dvh bg-[radial-gradient(ellipse_at_top,_var(--color-surface-warm)_0%,_transparent_55%)]">
      <main
        id="main-content"
        className="safe-page-x safe-page-bottom min-h-dvh py-6 sm:px-6 lg:px-8"
      >
        <AppProfileBar />
        <Suspense fallback={<LoadingState />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
