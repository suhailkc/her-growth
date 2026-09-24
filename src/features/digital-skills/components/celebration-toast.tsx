import { useEffect } from 'react'

import { cn } from '@/lib/utils'

type CelebrationToastProps = {
  message: string | null
  subtitle?: string | null
  onDismiss: () => void
}

const TOAST_MS = 4200

export function CelebrationToast({
  message,
  subtitle,
  onDismiss,
}: CelebrationToastProps) {
  useEffect(() => {
    if (!message) {
      return
    }
    const timer = window.setTimeout(onDismiss, TOAST_MS)
    return () => window.clearTimeout(timer)
  }, [message, onDismiss])

  if (!message) {
    return null
  }

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-4',
      )}
      aria-live="polite"
      role="status"
    >
      <div className="enter-fade-up max-w-md rounded-2xl border border-border/80 bg-card px-4 py-3 text-center shadow-[var(--shadow-soft)]">
        <p className="text-sm font-medium text-foreground">{message}</p>
        {subtitle ? (
          <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
    </div>
  )
}
