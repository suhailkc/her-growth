import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { expenseCategoryChartColors } from '@/features/finance/chart-colors'
import { formatInr } from '@/features/finance/format-currency'
import type { CategoryBreakdownRow } from '@/features/finance/expense-utils'

type ExpenseCategoryChartProps = {
  rows: CategoryBreakdownRow[]
  monthLabel: string
}

export function ExpenseCategoryChart({ rows, monthLabel }: ExpenseCategoryChartProps) {
  if (rows.length === 0) {
    return (
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="font-serif text-lg">Spending by category</CardTitle>
          <p className="text-sm text-muted-foreground">{monthLabel}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Add a few expenses to see a simple chart here.
          </p>
        </CardContent>
      </Card>
    )
  }

  const chartLabel = rows.map((row) => `${row.label}: ${formatInr(row.amount)}`).join('; ')

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle className="font-serif text-lg">Spending by category</CardTitle>
        <p className="text-sm text-muted-foreground">{monthLabel}</p>
      </CardHeader>
      <CardContent>
        <div
          className="mx-auto h-56 w-full max-w-xs"
          role="img"
          aria-label={`Pie chart of expenses for ${monthLabel}: ${chartLabel}`}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={rows}
                dataKey="amount"
                nameKey="label"
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={80}
                paddingAngle={2}
                isAnimationActive={false}
              >
                {rows.map((row, index) => (
                  <Cell
                    key={row.categoryId}
                    fill={expenseCategoryChartColors[index % expenseCategoryChartColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => formatInr(Number(value))}
                contentStyle={{
                  borderRadius: '0.75rem',
                  border: '1px solid oklch(0.91 0.015 85)',
                  fontSize: '0.875rem',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          {rows.map((row, index) => (
            <li key={row.categoryId} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor:
                      expenseCategoryChartColors[index % expenseCategoryChartColors.length],
                  }}
                  aria-hidden
                />
                {row.label}
              </span>
              <span className="font-medium tabular-nums">{formatInr(row.amount)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
