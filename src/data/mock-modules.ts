export type MockFamilyGoal = {
  id: string
  title: string
  summary: string
  status: 'idea' | 'in_progress' | 'paused'
}

export const mockFamilyGoals: MockFamilyGoal[] = [
  {
    id: 'weekend-routine',
    title: 'Calmer weekend mornings',
    summary: 'A shared checklist everyone can see.',
    status: 'in_progress',
  },
  {
    id: 'savings-jar',
    title: 'Family savings jar',
    summary: 'Track small contributions without pressure.',
    status: 'idea',
  },
]

export function getFamilyGoalById(goalId: string): MockFamilyGoal | undefined {
  return mockFamilyGoals.find((goal) => goal.id === goalId)
}
