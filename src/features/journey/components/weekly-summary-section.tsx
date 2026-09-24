import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { StatCard } from '@/components/common/stat-card'
import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { journeyChartColors } from '@/features/journey/chart-colors'
import { formatLearningTime } from '@/lib/format-learning-time'
import type { JourneyWeeklySummary } from '@/types/journey'
import { BookOpen, CheckCircle2, Clock, Sparkles } from 'lucide-react'

type WeeklySummarySectionProps = {
  summary: JourneyWeeklySummary
}

export function WeeklySummarySection({ summary }: WeeklySummarySectionProps) {
  return (
    <section aria-labelledby="weekly-summary-heading" className="space-y-4">
      <SectionHeader
        id="weekly-summary-heading"
        title="Weekly summary"
        description="This week in plain numbers — no grades, just growth."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard
          compact
          label="Activities completed"
          value={summary.activitiesCompleted}
          icon={CheckCircle2}
        />
        <StatCard
          compact
          label="Learning time"
          value={formatLearningTime(summary.learningTimeMinutes)}
          icon={Clock}
        />
        <StatCard compact label="New skills" value={summary.newSkills} icon={BookOpen} />
        <StatCard
          compact
          label="Missions completed"
          value={summary.missionsCompleted}
          icon={Sparkles}
        />
      </div>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="font-serif text-lg font-semibold">Daily rhythm</CardTitle>
          <p className="text-sm text-muted-foreground">
            Activities you completed each day this week.
          </p>
        </CardHeader>
        <CardContent>
          <div
            className="h-48 w-full"
            role="img"
            aria-label="Bar chart of activities completed per day this week"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={summary.dailyActivities}
                margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
              >
                <CartesianGrid vertical={false} stroke="oklch(0.91 0.015 85)" strokeDasharray="4 4" />
                <XAxis
                  dataKey="dayLabel"
                  tick={{ fill: 'oklch(0.48 0.02 45)', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fill: 'oklch(0.48 0.02 45)', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={28}
                />
                <Tooltip
                  cursor={{ fill: 'oklch(0.955 0.012 85 / 0.5)' }}
                  formatter={(value) => [value, 'Activities']}
                  contentStyle={{
                    borderRadius: '0.75rem',
                    border: '1px solid oklch(0.91 0.015 85)',
                    fontSize: '0.875rem',
                  }}
                />
                <Bar
                  dataKey="count"
                  fill={journeyChartColors.primary}
                  radius={[8, 8, 0, 0]}
                  maxBarSize={36}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
