import { ProgressBar } from '@/components/common/progress-bar'
import { cn } from '@/lib/utils'

type ProgressStat = {
  label: string
  value: string | number
}

type ProgressSummaryProps = {
  title: string
  description?: string
  percent: number
  stats: ProgressStat[]
  className?: string
}

export function ProgressSummary({
  title,
  description,
  percent,
  stats,
  className,
}: ProgressSummaryProps) {
  const clamped = Math.min(100, Math.max(0, percent))

  return (
    <section
      className={cn(
        'rounded-2xl border border-border/80 bg-gradient-to-br from-surface-warm to-card p-6 shadow-[var(--shadow-soft)]',
        className,
      )}
      aria-labelledby="progress-summary-title"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h2 id="progress-summary-title" className="font-serif text-xl font-semibold">
            {title}
          </h2>
          {description ? (
            <p className="text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <p className="text-3xl font-serif font-semibold text-primary">{clamped}%</p>
      </div>
      <ProgressBar
        value={clamped}
        label="Weekly progress"
        showValue={false}
        className="mt-5"
      />
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-background/70 px-4 py-3">
            <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="mt-1 text-xl font-semibold">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
