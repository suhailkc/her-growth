import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { LoadingState } from '@/components/common/loading-state'
import { AppHeader } from '@/components/layout/app-header'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Sidebar } from '@/components/layout/sidebar'

export function AppShell() {
  return (
    <div className="min-h-dvh bg-[radial-gradient(ellipse_at_top,_var(--color-surface-warm)_0%,_transparent_55%)]">
      <div className="flex min-h-dvh">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col pb-24 lg:pb-0">
          <AppHeader />
          <main id="main-content" className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <Suspense fallback={<LoadingState />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
      <MobileNav />
    </div>
  )
}
