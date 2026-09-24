import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { LoadingState } from '@/components/common/loading-state'
import { PageEnter } from '@/components/common/page-enter'
import { CompletionDelightProvider } from '@/features/digital-skills/components/completion-delight-provider'
import { AppProfileBar } from '@/features/profile/components/app-profile-bar'

export function AppShell() {
  return (
    <CompletionDelightProvider>
    <div className="min-h-dvh bg-[radial-gradient(ellipse_at_top,_var(--color-surface-warm)_0%,_transparent_55%)]">
      <main
        id="main-content"
        className="safe-page-x safe-page-bottom min-h-dvh py-6 sm:px-6 lg:px-8"
      >
        <AppProfileBar className="enter-fade-up" />
        <Suspense fallback={<LoadingState />}>
          <PageEnter>
            <Outlet />
          </PageEnter>
        </Suspense>
      </main>
    </div>
    </CompletionDelightProvider>
  )
}
