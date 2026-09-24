import { z } from 'zod'

import { EXPENSE_CATEGORY_IDS } from '@/features/finance/types'

export const expenseFormSchema = z.object({
  amount: z.coerce
    .number({ invalid_type_error: 'Enter an amount' })
    .positive('Amount must be greater than zero')
    .max(99_999_999, 'Amount looks too large — double-check it'),
  categoryId: z.enum(EXPENSE_CATEGORY_IDS),
  date: z.string().min(1, 'Pick a date'),
  note: z.string().trim().max(200, 'Keep the note short').optional(),
})

export type ExpenseFormValues = z.infer<typeof expenseFormSchema>

export const monthlyIncomeSchema = z.object({
  amount: z.coerce
    .number({ invalid_type_error: 'Enter an amount' })
    .min(0, 'Income cannot be negative')
    .max(99_999_999, 'Amount looks too large — double-check it'),
})

export type MonthlyIncomeFormValues = z.infer<typeof monthlyIncomeSchema>
