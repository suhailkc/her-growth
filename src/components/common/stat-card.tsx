import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type StatCardProps = {
  label: string
  value: ReactNode
  hint?: string
  icon?: LucideIcon
  className?: string
}

export function StatCard({ label, value, hint, icon: Icon, className }: StatCardProps) {
  return (
    <Card variant="elevated" className={cn('h-full', className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {label}
          </CardTitle>
          {Icon ? (
            <div className="flex size-9 items-center justify-center rounded-lg bg-surface-warm text-primary">
              <Icon className="size-4" aria-hidden />
            </div>
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-serif text-3xl font-semibold tracking-tight">{value}</p>
        {hint ? <p className="mt-1 text-sm text-muted-foreground">{hint}</p> : null}
      </CardContent>
    </Card>
  )
}
