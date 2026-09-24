import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

import { ProgressBar } from '@/components/common/progress-bar'
import { cn } from '@/lib/utils'
import { journeyChartColors } from '@/features/journey/chart-colors'
import type { JourneyOverview } from '@/types/journey'

type JourneyOverallProgressProps = {
  overview: JourneyOverview
  className?: string
}

export function JourneyOverallProgress({ overview, className }: JourneyOverallProgressProps) {
  const percent = Math.min(100, Math.max(0, overview.overallProgressPercent))
  const donutData = [
    { name: 'Completed', value: percent },
    { name: 'Remaining', value: 100 - percent },
  ]

  return (
    <section
      className={cn(
        'rounded-2xl border border-border/80 bg-gradient-to-br from-surface-warm via-card to-surface-sage/40 p-6 shadow-[var(--shadow-soft)]',
        className,
      )}
      aria-labelledby="journey-overall-heading"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 id="journey-overall-heading" className="font-serif text-2xl font-semibold">
              Overall progress
            </h2>
            <p className="text-muted-foreground">{overview.encouragement}</p>
          </div>
          <ProgressBar
            value={percent}
            label="All skill areas combined"
            showValue
            className="max-w-xl"
          />
          <dl className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-background/70 px-4 py-3">
              <dt className="text-sm text-muted-foreground">Lessons done</dt>
              <dd className="mt-1 text-xl font-semibold tabular-nums">
                {overview.totalLessonsCompleted}
                <span className="text-base font-normal text-muted-foreground">
                  {' '}
                  / {overview.totalLessons}
                </span>
              </dd>
            </div>
            <div className="rounded-xl bg-background/70 px-4 py-3">
              <dt className="text-sm text-muted-foreground">Learning streak</dt>
              <dd className="mt-1 text-xl font-semibold tabular-nums">
                {overview.currentStreakDays} days
              </dd>
            </div>
            <div className="rounded-xl bg-background/70 px-4 py-3">
              <dt className="text-sm text-muted-foreground">Pace</dt>
              <dd className="mt-1 text-xl font-semibold">Steady</dd>
            </div>
          </dl>
        </div>

        <div
          className="relative mx-auto h-44 w-44 shrink-0"
          role="img"
          aria-label={`Overall progress: ${percent} percent`}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={78}
                startAngle={90}
                endAngle={-270}
                paddingAngle={percent > 0 && percent < 100 ? 2 : 0}
                stroke="none"
                isAnimationActive={false}
              >
                <Cell fill={journeyChartColors.success} />
                <Cell fill={journeyChartColors.muted} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-serif text-4xl font-semibold text-primary tabular-nums">
              {percent}%
            </span>
            <span className="text-sm text-muted-foreground">overall</span>
          </div>
        </div>
      </div>
    </section>
  )
}
