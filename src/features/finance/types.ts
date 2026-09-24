export const EXPENSE_CATEGORY_IDS = [
  'groceries',
  'household',
  'education',
  'health',
  'transport',
  'utilities',
  'other',
] as const

export type ExpenseCategoryId = (typeof EXPENSE_CATEGORY_IDS)[number]

export type Expense = {
  id: string
  amount: number
  categoryId: ExpenseCategoryId
  date: string
  note?: string
}

export type FinanceLessonSection = {
  heading: string
  paragraphs: string[]
}

export type FinanceLesson = {
  id: string
  order: number
  title: string
  summary: string
  readMinutes: number
  sections: FinanceLessonSection[]
  keyTakeaways: string[]
  tryItYourself?: string
}

export type MoneySafetyCard = {
  id: string
  title: string
  summary: string
  body: string
}
