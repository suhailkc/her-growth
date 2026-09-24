import { z } from 'zod'

import { FAMILY_GOAL_STATUS_IDS } from '@/features/family-goals/types'

export const familyGoalFormSchema = z.object({
  title: z.string().trim().min(1, 'Please enter a goal title'),
  description: z.string().trim().min(1, 'Add a short description'),
  targetDate: z.string().min(1, 'Pick a target date'),
  status: z.enum(FAMILY_GOAL_STATUS_IDS),
  milestoneTitles: z.string().trim().optional(),
})

export type FamilyGoalFormValues = z.infer<typeof familyGoalFormSchema>
