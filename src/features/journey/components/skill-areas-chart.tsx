import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skillAreaBarColors } from '@/features/journey/chart-colors'
import type { JourneySkillArea } from '@/types/journey'

type SkillAreasChartProps = {
  areas: JourneySkillArea[]
}

type ChartRow = {
  shortLabel: string
  fullLabel: string
  percent: number
}

function toChartRows(areas: JourneySkillArea[]): ChartRow[] {
  return areas.map((area) => ({
    shortLabel: area.label.replace(' & Career', '').replace('General ', 'Gen. '),
    fullLabel: area.label,
    percent: area.progressPercent,
  }))
}

export function SkillAreasChart({ areas }: SkillAreasChartProps) {
  const data = toChartRows(areas)

  return (
    <Card variant="elevated" className="h-full">
      <CardHeader>
        <CardTitle className="font-serif text-lg font-semibold">Progress at a glance</CardTitle>
        <p className="text-sm text-muted-foreground">
          Each bar shows how far you have come in that area.
        </p>
      </CardHeader>
      <CardContent>
        <div
          className="h-64 w-full"
          role="img"
          aria-label="Bar chart of progress percent by skill area"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 4, right: 8, left: 4, bottom: 4 }}
            >
              <CartesianGrid horizontal={false} stroke="oklch(0.91 0.015 85)" strokeDasharray="4 4" />
              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
                tick={{ fill: 'oklch(0.48 0.02 45)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="shortLabel"
                width={88}
                tick={{ fill: 'oklch(0.48 0.02 45)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: 'oklch(0.955 0.012 85 / 0.5)' }}
                formatter={(value) => [`${value}%`, 'Progress']}
                labelFormatter={(_, payload) => {
                  const row = payload?.[0]?.payload as ChartRow | undefined
                  return row?.fullLabel ?? ''
                }}
                contentStyle={{
                  borderRadius: '0.75rem',
                  border: '1px solid oklch(0.91 0.015 85)',
                  fontSize: '0.875rem',
                }}
              />
              <Bar dataKey="percent" radius={[0, 8, 8, 0]} maxBarSize={20} isAnimationActive={false}>
                {data.map((row, index) => (
                  <Cell
                    key={row.fullLabel}
                    fill={skillAreaBarColors[index % skillAreaBarColors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
