import { useEffect, useRef, useState } from 'react'

import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

type ProgressBarProps = {
  value: number
  label: string
  showValue?: boolean
  className?: string
  animateValue?: boolean
}

export function ProgressBar({
  value,
  label,
  showValue = true,
  className,
  animateValue = false,
}: ProgressBarProps) {
  const target = Math.min(100, Math.max(0, value))
  const [animatedValue, setAnimatedValue] = useState(target)
  const displayRef = useRef(target)

  useEffect(() => {
    displayRef.current = animatedValue
  }, [animatedValue])

  useEffect(() => {
    if (!animateValue) {
      return
    }

    const start = displayRef.current
    const startTime = performance.now()
    const duration = 700
    let frame = 0

    const tick = (now: number): void => {
      const t = Math.min(1, (now - startTime) / duration)
      const eased = 1 - (1 - t) ** 3
      setAnimatedValue(start + (target - start) * eased)
      if (t < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [animateValue, target])

  const displayValue = animateValue ? animatedValue : target
  const shown = Math.round(displayValue)

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="min-w-0 truncate text-muted-foreground">{label}</span>
        {showValue ? (
          <span className="font-medium tabular-nums text-foreground">{shown}%</span>
        ) : null}
      </div>
      <Progress
        value={displayValue}
        size="lg"
        tone="success"
        aria-label={`${label}: ${shown}%`}
      />
    </div>
  )
}
