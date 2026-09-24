import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { mockUserProfile } from '@/data/mock-profile'

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="min-w-0 lg:hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Her Growth
          </p>
          <p className="truncate font-serif text-lg font-semibold">
            Hello, {mockUserProfile.displayName}
          </p>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <div>
            <p className="text-sm text-muted-foreground">Good to see you</p>
            <p className="font-serif text-xl font-semibold">
              {mockUserProfile.displayName}
            </p>
          </div>
          {mockUserProfile.studyFocus ? (
            <Badge variant="secondary">{mockUserProfile.studyFocus}</Badge>
          ) : null}
        </div>
        <Link
          to="/today"
          className={buttonVariants({ size: 'lg', className: 'rounded-xl shadow-sm' })}
        >
          <Sparkles className="size-4" aria-hidden />
          Today&apos;s mission
        </Link>
      </div>
    </header>
  )
}
