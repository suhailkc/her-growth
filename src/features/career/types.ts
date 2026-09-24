export const CAREER_LESSON_TRACK_IDS = ['bed-skills', 'digital-teaching'] as const

export type CareerLessonTrackId = (typeof CAREER_LESSON_TRACK_IDS)[number]

export type CareerLesson = {
  id: string
  trackId: CareerLessonTrackId
  title: string
  summary: string
  readMinutes: number
  order: number
  sections: { heading: string; paragraphs: string[] }[]
  tryItYourself?: string
}

export type CareerOption = {
  id: string
  title: string
  summary: string
  whatItInvolves: string[]
  skillsRequired: string[]
  exampleTasks: string[]
  optionalLearningPath: string[]
}

export type CareerProject = {
  id: string
  title: string
  description: string
  skillsInvolved: string[]
  estimatedMinutes: number
  steps: string[]
}
