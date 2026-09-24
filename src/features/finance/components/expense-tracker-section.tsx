import { zodResolver } from '@hookform/resolvers/zod'
import { PlusIcon, Wallet } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

import { EmptyState } from '@/components/common/empty-state'
import { SectionHeader } from '@/components/common/section-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ExpenseCategoryChart } from '@/features/finance/components/expense-category-chart'
import { ExpenseFormDialog } from '@/features/finance/components/expense-form-dialog'
import { ExpenseListItem } from '@/features/finance/components/expense-list-item'
import {
  categoryBreakdown,
  expenseInYearMonth,
  sortExpensesByDateDesc,
  sumExpenses,
  toYearMonth,
} from '@/features/finance/expense-utils'
import { formatInr } from '@/features/finance/format-currency'
import { useFinanceStore } from '@/features/finance/finance-store'
import { monthlyIncomeSchema, type ExpenseFormValues } from '@/features/finance/schemas'

export function ExpenseTrackerSection() {
  const expenses = useFinanceStore((s) => s.expenses)
  const monthlyIncome = useFinanceStore((s) => s.monthlyIncome)
  const setMonthlyIncome = useFinanceStore((s) => s.setMonthlyIncome)
  const addExpense = useFinanceStore((s) => s.addExpense)
  const removeExpense = useFinanceStore((s) => s.removeExpense)

  const [dialogOpen, setDialogOpen] = useState(false)
  const yearMonth = toYearMonth(new Date())
  const monthLabel = new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })

  const monthExpenses = useMemo(
    () => expenses.filter((expense) => expenseInYearMonth(expense, yearMonth)),
    [expenses, yearMonth],
  )
  const totalSpent = sumExpenses(monthExpenses)
  const remaining = monthlyIncome - totalSpent
  const breakdown = categoryBreakdown(monthExpenses)
  const sorted = sortExpensesByDateDesc(monthExpenses)

  const incomeForm = useForm<{ amount: number }>({
    resolver: zodResolver(monthlyIncomeSchema),
    defaultValues: { amount: monthlyIncome },
  })

  useEffect(() => {
    incomeForm.reset({ amount: monthlyIncome })
  }, [monthlyIncome, incomeForm])

  const saveIncome = incomeForm.handleSubmit((values) => {
    setMonthlyIncome(values.amount)
  })

  const handleAddExpense = (values: ExpenseFormValues) => {
    addExpense(values)
  }

  return (
    <section aria-labelledby="finance-expense-heading">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          id="finance-expense-heading"
          title="Expense Tracker"
          description="A simple household log for this month. Nothing connects to your bank."
        />
        <Button type="button" variant="default" size="lg" onClick={() => setDialogOpen(true)}>
          <PlusIcon className="size-5" aria-hidden />
          Add expense
        </Button>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card variant="sage">
          <CardHeader>
            <CardTitle className="font-serif text-lg">This month at a glance</CardTitle>
            <p className="text-sm text-muted-foreground">{monthLabel}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-2" onSubmit={saveIncome} noValidate>
              <Label htmlFor="monthly-income">Monthly income (placeholder)</Label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  id="monthly-income"
                  type="number"
                  min={0}
                  step={1}
                  inputMode="numeric"
                  className="min-h-11"
                  {...incomeForm.register('amount', { valueAsNumber: true })}
                />
                <Button type="submit" variant="secondary" size="lg" className="shrink-0">
                  Update
                </Button>
              </div>
              {incomeForm.formState.errors.amount ? (
                <p className="text-sm text-destructive" role="alert">
                  {incomeForm.formState.errors.amount.message}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Enter what you expect this month — salary, support, or other regular inflow.
                </p>
              )}
            </form>

            <dl className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-background/60 px-3 py-2">
                <dt className="text-xs text-muted-foreground">Income</dt>
                <dd className="text-lg font-semibold tabular-nums">{formatInr(monthlyIncome)}</dd>
              </div>
              <div className="rounded-xl bg-background/60 px-3 py-2">
                <dt className="text-xs text-muted-foreground">Expenses</dt>
                <dd className="text-lg font-semibold tabular-nums">{formatInr(totalSpent)}</dd>
              </div>
              <div className="rounded-xl bg-background/60 px-3 py-2">
                <dt className="text-xs text-muted-foreground">Remaining</dt>
                <dd
                  className={`text-lg font-semibold tabular-nums ${remaining < 0 ? 'text-destructive' : ''}`}
                >
                  {formatInr(remaining)}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <ExpenseCategoryChart rows={breakdown} monthLabel={monthLabel} />
      </div>

      <div className="mt-6">
        <h3 className="font-serif text-lg font-semibold">Expenses this month</h3>
        {sorted.length === 0 ? (
          <div className="mt-4">
            <EmptyState
              icon={Wallet}
              title="No expenses yet"
              description="Tap Add expense when you buy groceries, pay a bill, or spend on transport."
              action={
                <Button type="button" size="lg" onClick={() => setDialogOpen(true)}>
                  Add expense
                </Button>
              }
            />
          </div>
        ) : (
          <ul className="mt-4 flex flex-col gap-2">
            {sorted.map((expense) => (
              <ExpenseListItem key={expense.id} expense={expense} onRemove={removeExpense} />
            ))}
          </ul>
        )}
      </div>

      <ExpenseFormDialog open={dialogOpen} onOpenChange={setDialogOpen} onSave={handleAddExpense} />
    </section>
  )
}
