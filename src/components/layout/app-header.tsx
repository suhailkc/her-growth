import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { NotificationArea } from '@/components/layout/notification-area'
import { UserProfileArea } from '@/components/layout/user-profile-area'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { useProfileStore } from '@/features/profile/profile-store'

export function AppHeader() {
  const profile = useProfileStore((s) => s.profile)

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0 lg:hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Her Growth
          </p>
          <p className="truncate font-serif text-lg font-semibold">
            Hello, {profile.displayName}
          </p>
        </div>
        <div className="hidden min-w-0 flex-1 items-center gap-3 lg:flex">
          <div>
            <p className="text-sm text-muted-foreground">Good to see you</p>
            <p className="font-serif text-xl font-semibold">{profile.displayName}</p>
          </div>
          {profile.studyFocus ? (
            <Badge variant="secondary">{profile.studyFocus}</Badge>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <NotificationArea />
          <UserProfileArea compact className="hidden sm:flex" />
          <Link
            to="/today"
            className={buttonVariants({
              size: 'lg',
              className: 'rounded-xl shadow-[var(--shadow-soft)]',
            })}
          >
            <Sparkles className="size-4" aria-hidden />
            <span className="hidden sm:inline">Today&apos;s mission</span>
            <span className="sm:hidden">Today</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
