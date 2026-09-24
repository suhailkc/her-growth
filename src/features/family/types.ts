export const FAMILY_TASK_CATEGORY_IDS = [
  'preschool',
  'grocery',
  'laundry',
  'appointments',
  'maintenance',
  'electricity',
  'events',
] as const

export type FamilyTaskCategoryId = (typeof FAMILY_TASK_CATEGORY_IDS)[number]

export type FamilyTaskPriority = 'low' | 'medium' | 'high'

export type FamilyPlannerPeriod = 'today' | 'week' | 'month'

export type FamilyPlannerTask = {
  id: string
  title: string
  categoryId: FamilyTaskCategoryId
  dueDate: string
  priority: FamilyTaskPriority
  completed: boolean
  completedAt?: number
}

export const FAMILY_DOCUMENT_CATEGORY_IDS = [
  'child',
  'education',
  'medical',
  'finance',
  'home',
  'personal',
] as const

export type FamilyDocumentCategoryId = (typeof FAMILY_DOCUMENT_CATEGORY_IDS)[number]

export type FamilyDocument = {
  id: string
  name: string
  categoryId: FamilyDocumentCategoryId
  updatedLabel: string
  kind: 'pdf' | 'image' | 'other'
  isPlaceholder?: boolean
}

export type FamilyContactKind =
  | 'preschool'
  | 'doctor'
  | 'emergency'
  | 'family'
  | 'other'

export type FamilyContact = {
  id: string
  name: string
  role: string
  phone?: string
  note?: string
  kind: FamilyContactKind
}
