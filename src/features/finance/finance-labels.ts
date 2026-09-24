import type { ExpenseCategoryId } from '@/features/finance/types'

export const expenseCategoryLabels: Record<ExpenseCategoryId, string> = {
  groceries: 'Groceries',
  household: 'Household',
  education: 'Education',
  health: 'Health',
  transport: 'Transport',
  utilities: 'Utilities',
  other: 'Other',
}
