import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type PublicPageShellProps = {
  children: ReactNode
  /** Drop page padding for full-bleed layouts (login). */
  bleed?: boolean
}

/** Shared chrome for routes outside AppShell (login, onboarding). */
export function PublicPageShell({ children, bleed = false }: PublicPageShellProps) {
  return (
    <div className="min-h-dvh bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--color-surface-warm)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_100%_100%,var(--color-surface-sage)_0%,transparent_55%)]">
      <main
        id="main-content"
        className={cn(
          'min-h-dvh',
          bleed ? undefined : 'safe-page-x safe-page-bottom py-6 sm:px-6 lg:px-8',
        )}
      >
        {children}
      </main>
    </div>
  )
}
