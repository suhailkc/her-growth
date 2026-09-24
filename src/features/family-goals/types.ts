export const FAMILY_GOAL_STATUS_IDS = [
  'idea',
  'in_progress',
  'completed',
  'paused',
] as const

export type FamilyGoalStatusId = (typeof FAMILY_GOAL_STATUS_IDS)[number]

export type FamilyGoalMilestone = {
  id: string
  title: string
  completed: boolean
}

export type FamilyGoal = {
  id: string
  title: string
  description: string
  targetDate: string
  status: FamilyGoalStatusId
  milestones: FamilyGoalMilestone[]
}
