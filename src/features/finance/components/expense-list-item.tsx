import { Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { expenseCategoryLabels } from '@/features/finance/finance-labels'
import { formatInr } from '@/features/finance/format-currency'
import type { Expense } from '@/features/finance/types'

type ExpenseListItemProps = {
  expense: Expense
  onRemove: (id: string) => void
}

function formatDisplayDate(isoDate: string): string {
  const parts = isoDate.split('-').map(Number)
  const year = parts[0] ?? 0
  const month = parts[1] ?? 1
  const day = parts[2] ?? 1
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function ExpenseListItem({ expense, onRemove }: ExpenseListItemProps) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-border/80 bg-card px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="font-medium">{formatInr(expense.amount)}</p>
        <p className="text-sm text-muted-foreground">
          {expenseCategoryLabels[expense.categoryId]} · {formatDisplayDate(expense.date)}
        </p>
        {expense.note ? (
          <p className="mt-1 text-sm text-muted-foreground">{expense.note}</p>
        ) : null}
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon-lg"
        className="shrink-0 text-muted-foreground hover:text-destructive"
        onClick={() => onRemove(expense.id)}
        aria-label={`Remove expense ${formatInr(expense.amount)} on ${formatDisplayDate(expense.date)}`}
      >
        <Trash2 className="size-5" aria-hidden />
      </Button>
    </li>
  )
}
