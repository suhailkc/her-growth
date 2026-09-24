import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function greetingForTime(): string {
  const hour = new Date().getHours()
  if (hour < 12) {
    return 'Good morning'
  }
  if (hour < 17) {
    return 'Good afternoon'
  }
  return 'Good evening'
}

export function AppHeader() {
  const greeting = greetingForTime()

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0 lg:hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Her Growth
          </p>
          <p className="truncate font-serif text-lg font-semibold">Nasreena</p>
        </div>
        <div className="hidden min-w-0 flex-1 lg:block">
          <p className="text-sm text-muted-foreground">{greeting}, Nasreena 🌱</p>
          <p className="font-serif text-xl font-semibold">Welcome back.</p>
        </div>
        <Link
          to="/digital-skills"
          className={cn(
            buttonVariants({
              size: 'lg',
              className: 'rounded-xl shadow-[var(--shadow-soft)]',
            }),
          )}
        >
          My journey
        </Link>
      </div>
    </header>
  )
}
