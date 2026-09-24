import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { FamilyGoal, FamilyGoalMilestone } from '@/features/family-goals/types'
import type { FamilyGoalFormValues } from '@/features/family-goals/schemas'

const seedGoals: FamilyGoal[] = [
  {
    id: 'organize-documents',
    title: 'Organize all family documents',
    description: 'Gather IDs, insurance papers, and school records in labeled folders.',
    targetDate: '2026-12-15',
    status: 'in_progress',
    milestones: [
      { id: 'm1', title: 'List document types we need', completed: true },
      { id: 'm2', title: 'Buy or label two folders', completed: true },
      { id: 'm3', title: 'Scan or photocopy key papers', completed: false },
      { id: 'm4', title: 'Store copies in one safe place', completed: false },
    ],
  },
  {
    id: 'household-budget',
    title: 'Maintain monthly household budget',
    description: 'Track income and spending calmly using the Finance module.',
    targetDate: '2026-06-30',
    status: 'in_progress',
    milestones: [
      { id: 'm1', title: 'Note monthly income together', completed: true },
      { id: 'm2', title: 'Log expenses for one month', completed: false },
    ],
  },
  {
    id: 'family-vacation',
    title: 'Plan a family vacation',
    description: 'Choose dates, budget, and one activity everyone will enjoy.',
    targetDate: '2026-08-01',
    status: 'idea',
    milestones: [
      { id: 'm1', title: 'Shortlist two destinations', completed: false },
      { id: 'm2', title: 'Estimate travel cost', completed: false },
    ],
  },
  {
    id: 'complete-bed',
    title: 'Complete B.Ed.',
    description: 'Finish coursework and practice teaching at a comfortable pace.',
    targetDate: '2027-03-01',
    status: 'in_progress',
    milestones: [
      { id: 'm1', title: 'Map assignment deadlines', completed: true },
      { id: 'm2', title: 'Complete one practice lesson plan', completed: false },
    ],
  },
  {
    id: 'child-learning-routine',
    title: "Plan a child's learning routine",
    description: 'Gentle reading and play time that fits school and home life.',
    targetDate: '2026-05-01',
    status: 'in_progress',
    milestones: [
      { id: 'm1', title: 'Pick a daily reading slot', completed: true },
      { id: 'm2', title: 'Try two parenting activities', completed: false },
    ],
  },
]

function newGoalId(): string {
  return `goal-${crypto.randomUUID()}`
}

function newMilestoneId(): string {
  return `ms-${crypto.randomUUID()}`
}

function parseMilestones(raw: string | undefined): FamilyGoalMilestone[] {
  if (!raw?.trim()) return []
  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((title) => ({ id: newMilestoneId(), title, completed: false }))
}

type FamilyGoalsStoreState = {
  goals: FamilyGoal[]
  addGoal: (values: FamilyGoalFormValues) => string
  updateGoal: (goalId: string, values: FamilyGoalFormValues) => void
  toggleMilestone: (goalId: string, milestoneId: string) => void
  deleteGoal: (goalId: string) => void
}

export const useFamilyGoalsStore = create<FamilyGoalsStoreState>()(
  persist(
    (set) => ({
      goals: seedGoals,
      addGoal: (values) => {
        const id = newGoalId()
        set((state) => ({
          goals: [
            {
              id,
              title: values.title.trim(),
              description: values.description.trim(),
              targetDate: values.targetDate,
              status: values.status,
              milestones: parseMilestones(values.milestoneTitles),
            },
            ...state.goals,
          ],
        }))
        return id
      },
      updateGoal: (goalId, values) => {
        set((state) => ({
          goals: state.goals.map((goal) => {
            if (goal.id !== goalId) return goal
            const newMilestones = values.milestoneTitles
              ? parseMilestones(values.milestoneTitles)
              : goal.milestones
            return {
              ...goal,
              title: values.title.trim(),
              description: values.description.trim(),
              targetDate: values.targetDate,
              status: values.status,
              milestones: newMilestones.length > 0 ? newMilestones : goal.milestones,
            }
          }),
        }))
      },
      toggleMilestone: (goalId, milestoneId) => {
        set((state) => ({
          goals: state.goals.map((goal) => {
            if (goal.id !== goalId) return goal
            const milestones = goal.milestones.map((m) =>
              m.id === milestoneId ? { ...m, completed: !m.completed } : m,
            )
            const allDone =
              milestones.length > 0 && milestones.every((m) => m.completed)
            return {
              ...goal,
              milestones,
              status: allDone
                ? 'completed'
                : goal.status === 'completed'
                  ? 'in_progress'
                  : goal.status,
            }
          }),
        }))
      },
      deleteGoal: (goalId) => {
        set((state) => ({
          goals: state.goals.filter((goal) => goal.id !== goalId),
        }))
      },
    }),
    {
      name: 'her-growth-family-goals',
      partialize: (state) => ({ goals: state.goals }),
    },
  ),
)

export function getGoalById(
  goals: FamilyGoal[],
  goalId: string,
): FamilyGoal | undefined {
  return goals.find((goal) => goal.id === goalId)
}
