import type {
  FamilyContactKind,
  FamilyDocumentCategoryId,
  FamilyPlannerPeriod,
  FamilyTaskCategoryId,
  FamilyTaskPriority,
} from '@/features/family/types'

export const familyTaskCategoryLabels: Record<FamilyTaskCategoryId, string> = {
  preschool: 'Preschool',
  grocery: 'Grocery shopping',
  laundry: 'Laundry',
  appointments: 'Appointments',
  maintenance: 'Household maintenance',
  electricity: 'Electricity bill',
  events: 'Family events',
}

export const familyTaskPriorityLabels: Record<FamilyTaskPriority, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
}

export const familyPlannerPeriodLabels: Record<FamilyPlannerPeriod, string> = {
  today: 'Today',
  week: 'This Week',
  month: 'This Month',
}

export const familyDocumentCategoryLabels: Record<FamilyDocumentCategoryId, string> = {
  child: 'Child',
  education: 'Education',
  medical: 'Medical',
  finance: 'Finance',
  home: 'Home',
  personal: 'Personal',
}

export const familyContactKindLabels: Record<FamilyContactKind, string> = {
  preschool: 'Preschool',
  doctor: 'Doctor',
  emergency: 'Emergency',
  family: 'Family',
  other: 'Other',
}
