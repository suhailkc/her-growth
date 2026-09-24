import type { FamilyGoal } from '@/features/family-goals/types'

export function computeGoalProgressPercent(goal: FamilyGoal): number {
  if (goal.milestones.length === 0) {
    if (goal.status === 'completed') return 100
    if (goal.status === 'idea') return 0
    return 25
  }
  const done = goal.milestones.filter((m) => m.completed).length
  return Math.round((done / goal.milestones.length) * 100)
}
