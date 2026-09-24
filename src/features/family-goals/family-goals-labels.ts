import type { FamilyGoalStatusId } from '@/features/family-goals/types'

export const familyGoalStatusLabels: Record<FamilyGoalStatusId, string> = {
  idea: 'Idea',
  in_progress: 'In progress',
  completed: 'Completed',
  paused: 'Paused',
}

export function familyGoalStatusTone(
  status: FamilyGoalStatusId,
): 'active' | 'paused' | 'neutral' | 'success' {
  if (status === 'in_progress') return 'active'
  if (status === 'paused') return 'paused'
  if (status === 'completed') return 'success'
  return 'neutral'
}
