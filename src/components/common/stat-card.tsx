import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type StatCardProps = {
  label: string
  value: ReactNode
  hint?: string
  icon?: LucideIcon
  compact?: boolean
  className?: string
}

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  compact = false,
  className,
}: StatCardProps) {
  return (
    <Card
      variant="elevated"
      size={compact ? 'sm' : 'default'}
      className={cn('h-full', className)}
    >
      <CardHeader className={compact ? 'pb-0' : undefined}>
        <div className="flex items-start justify-between gap-3">
          <CardTitle
            className={cn(
              'font-sans font-medium text-muted-foreground',
              compact ? 'text-xs' : 'text-sm',
            )}
          >
            {label}
          </CardTitle>
          {Icon ? (
            <div
              className={cn(
                'flex items-center justify-center rounded-lg bg-surface-warm text-primary',
                compact ? 'size-8' : 'size-9',
              )}
            >
              <Icon className={compact ? 'size-3.5' : 'size-4'} aria-hidden />
            </div>
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <p
          className={cn(
            'font-serif font-semibold tracking-tight',
            compact ? 'text-2xl' : 'text-3xl',
          )}
        >
          {value}
        </p>
        {hint ? <p className="mt-1 text-sm text-muted-foreground">{hint}</p> : null}
      </CardContent>
    </Card>
  )
}
