import { expenseCategoryLabels } from '@/features/finance/finance-labels'
import type { Expense, ExpenseCategoryId } from '@/features/finance/types'
import { EXPENSE_CATEGORY_IDS } from '@/features/finance/types'

export function toYearMonth(reference: Date): string {
  const year = reference.getFullYear()
  const month = String(reference.getMonth() + 1).padStart(2, '0')
  return `${year}-${month}`
}

export function expenseInYearMonth(expense: Expense, yearMonth: string): boolean {
  return expense.date.startsWith(yearMonth)
}

export function sumExpenses(expenses: Expense[]): number {
  return expenses.reduce((total, expense) => total + expense.amount, 0)
}

export type CategoryBreakdownRow = {
  categoryId: ExpenseCategoryId
  label: string
  amount: number
}

export function categoryBreakdown(expenses: Expense[]): CategoryBreakdownRow[] {
  const totals = new Map<ExpenseCategoryId, number>()
  for (const id of EXPENSE_CATEGORY_IDS) {
    totals.set(id, 0)
  }
  for (const expense of expenses) {
    totals.set(expense.categoryId, (totals.get(expense.categoryId) ?? 0) + expense.amount)
  }
  return EXPENSE_CATEGORY_IDS.map((categoryId) => ({
    categoryId,
    label: expenseCategoryLabels[categoryId],
    amount: totals.get(categoryId) ?? 0,
  })).filter((row) => row.amount > 0)
}

export function sortExpensesByDateDesc(expenses: Expense[]): Expense[] {
  return [...expenses].sort((a, b) => b.date.localeCompare(a.date))
}

export function toIsoDate(reference: Date): string {
  const year = reference.getFullYear()
  const month = String(reference.getMonth() + 1).padStart(2, '0')
  const day = String(reference.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
