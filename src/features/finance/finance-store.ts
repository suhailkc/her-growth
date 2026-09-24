import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { Expense } from '@/features/finance/types'
import type { ExpenseFormValues } from '@/features/finance/schemas'

type FinanceStoreState = {
  /** Sample placeholder — user can edit for their household. Not linked to any bank. */
  monthlyIncome: number
  setMonthlyIncome: (amount: number) => void
  expenses: Expense[]
  addExpense: (values: ExpenseFormValues) => void
  removeExpense: (id: string) => void
  completedLessonIds: string[]
  markLessonComplete: (lessonId: string) => void
}

function newExpenseId(): string {
  return `expense-${crypto.randomUUID()}`
}

export const useFinanceStore = create<FinanceStoreState>()(
  persist(
    (set) => ({
      monthlyIncome: 0,
      setMonthlyIncome: (amount) => set({ monthlyIncome: amount }),
      expenses: [],
      addExpense: (values) => {
        set((state) => ({
          expenses: [
            {
              id: newExpenseId(),
              amount: values.amount,
              categoryId: values.categoryId,
              date: values.date,
              note: values.note?.trim() ? values.note.trim() : undefined,
            },
            ...state.expenses,
          ],
        }))
      },
      removeExpense: (id) => {
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        }))
      },
      completedLessonIds: [],
      markLessonComplete: (lessonId) => {
        set((state) => {
          if (state.completedLessonIds.includes(lessonId)) {
            return state
          }
          return {
            completedLessonIds: [...state.completedLessonIds, lessonId],
          }
        })
      },
    }),
    {
      name: 'her-growth-finance',
      partialize: (state) => ({
        monthlyIncome: state.monthlyIncome,
        expenses: state.expenses,
        completedLessonIds: state.completedLessonIds,
      }),
    },
  ),
)
