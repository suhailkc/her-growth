import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export type StatusTone = 'neutral' | 'active' | 'success' | 'optional' | 'paused'

const toneClass: Record<StatusTone, string> = {
  neutral: '',
  active: 'border-primary/20 bg-primary/10 text-primary',
  success:
    'border-success/20 bg-success/10 text-[color-mix(in_oklch,var(--success),black_25%)]',
  optional: '',
  paused:
    'border-warning/30 bg-warning/10 text-[color-mix(in_oklch,var(--warning),black_30%)]',
}

type StatusBadgeProps = {
  label: string
  tone?: StatusTone
  className?: string
}

export function StatusBadge({ label, tone = 'neutral', className }: StatusBadgeProps) {
  return (
    <Badge
      variant={tone === 'optional' ? 'secondary' : 'outline'}
      className={cn('font-normal', toneClass[tone], className)}
    >
      {label}
    </Badge>
  )
}
