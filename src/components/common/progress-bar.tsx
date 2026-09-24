import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

type ProgressBarProps = {
  value: number
  label: string
  showValue?: boolean
  className?: string
}

export function ProgressBar({
  value,
  label,
  showValue = true,
  className,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="text-muted-foreground">{label}</span>
        {showValue ? (
          <span className="font-medium tabular-nums text-foreground">{clamped}%</span>
        ) : null}
      </div>
      <Progress
        value={clamped}
        size="lg"
        tone="success"
        aria-label={`${label}: ${clamped}%`}
      />
    </div>
  )
}
