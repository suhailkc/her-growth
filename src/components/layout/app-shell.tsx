import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { LoadingState } from '@/components/common/loading-state'

export function AppShell() {
  return (
    <div className="min-h-dvh bg-[radial-gradient(ellipse_at_top,_var(--color-surface-warm)_0%,_transparent_55%)]">
      <main id="main-content" className="min-h-dvh px-4 py-6 sm:px-6 lg:px-8">
        <Suspense fallback={<LoadingState />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
