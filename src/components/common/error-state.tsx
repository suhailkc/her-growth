import { AlertCircle } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ErrorStateProps = {
  title?: string
  description?: string
  action?: ReactNode
  className?: string
}

export function ErrorState({
  title = 'Something did not load',
  description = 'Please try again in a moment. Your progress is safe.',
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        'flex min-h-[40vh] flex-col items-center justify-center gap-4 rounded-2xl border border-border/80 bg-card px-6 py-12 text-center shadow-[var(--shadow-soft)]',
        className,
      )}
    >
      <div className="flex size-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
        <AlertCircle className="size-7" aria-hidden />
      </div>
      <div className="space-y-2">
        <h2 className="font-serif text-xl font-semibold">{title}</h2>
        <p className="max-w-md text-muted-foreground">{description}</p>
      </div>
      {action ?? (
        <Link
          to="/"
          className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
        >
          Back to home
        </Link>
      )}
    </div>
  )
}
