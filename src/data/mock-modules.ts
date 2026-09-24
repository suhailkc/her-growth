export type MockTrack = {
  id: string
  title: string
  description: string
  lessonCount: number
  progressPercent: number
}

export type MockLesson = {
  id: string
  trackId: string
  title: string
  summary: string
}

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

export const mockDigitalTracks: MockTrack[] = [
  {
    id: 'phone-safety',
    title: 'Using your phone safely',
    description: 'Privacy, storage, and calm daily habits.',
    lessonCount: 5,
    progressPercent: 20,
  },
  {
    id: 'everyday-apps',
    title: 'Everyday apps with confidence',
    description: 'Messages, maps, and simple settings.',
    lessonCount: 4,
    progressPercent: 0,
  },
]

export const mockDigitalLessons: MockLesson[] = [
  {
    id: 'save-photos',
    trackId: 'phone-safety',
    title: 'Save photos where you can find them',
    summary: 'Create a folder and move one photo into it.',
  },
  {
    id: 'app-permissions',
    trackId: 'phone-safety',
    title: 'Check app permissions',
    summary: 'See which apps can use your camera and location.',
  },
]

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

export function getTrackById(trackId: string): MockTrack | undefined {
  return mockDigitalTracks.find((track) => track.id === trackId)
}

export function getLessonById(
  trackId: string,
  lessonId: string,
): MockLesson | undefined {
  return mockDigitalLessons.find(
    (lesson) => lesson.trackId === trackId && lesson.id === lessonId,
  )
}

export function getKnowledgeTopicById(topicId: string): MockKnowledgeTopic | undefined {
  return mockKnowledgeTopics.find((topic) => topic.id === topicId)
}

export function getFamilyGoalById(goalId: string): MockFamilyGoal | undefined {
  return mockFamilyGoals.find((goal) => goal.id === goalId)
}
