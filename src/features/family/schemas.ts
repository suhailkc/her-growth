import { z } from 'zod'

import { FAMILY_TASK_CATEGORY_IDS } from '@/features/family/types'

export const familyPlannerTaskSchema = z.object({
  title: z.string().trim().min(1, 'Please enter a short task name'),
  categoryId: z.enum(FAMILY_TASK_CATEGORY_IDS),
  dueDate: z.string().min(1, 'Pick a date'),
  priority: z.enum(['low', 'medium', 'high']),
})

export type FamilyPlannerTaskFormValues = z.infer<typeof familyPlannerTaskSchema>
