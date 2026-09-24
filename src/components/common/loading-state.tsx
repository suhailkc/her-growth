import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

type LoadingStateProps = {
  label?: string
  className?: string
}

export function LoadingState({
  label = 'Loading your space…',
  className,
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center',
        className,
      )}
    >
      <Loader2 className="size-8 animate-spin text-primary" aria-hidden />
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}
