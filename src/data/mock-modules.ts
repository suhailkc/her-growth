export type MockKnowledgeTopic = {
  id: string
  title: string
  summary: string
  readMinutes: number
}

export type MockFamilyGoal = {
  id: string
  title: string
  summary: string
  status: 'idea' | 'in_progress' | 'paused'
}

export const mockKnowledgeTopics: MockKnowledgeTopic[] = [
  {
    id: 'household-budget-basics',
    title: 'Household budget basics',
    summary: 'Simple ideas for tracking money in and out.',
    readMinutes: 6,
  },
  {
    id: 'healthy-routines',
    title: 'Healthy routines for busy days',
    summary: 'Small habits that fit family life.',
    readMinutes: 5,
  },
]

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

export function getKnowledgeTopicById(topicId: string): MockKnowledgeTopic | undefined {
  return mockKnowledgeTopics.find((topic) => topic.id === topicId)
}

export function getFamilyGoalById(goalId: string): MockFamilyGoal | undefined {
  return mockFamilyGoals.find((goal) => goal.id === goalId)
}
