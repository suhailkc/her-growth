import type { DailyMission } from '@/types/user'

export type DigitalSkillsDifficulty = DailyMission['difficulty']

export type DigitalSkillsLessonPhase = 'overview' | 'active' | 'complete'

export type DigitalSkillsLessonStep = {
  id: string
  instruction: string
  detail: string
  tip?: string
  visualLabel: string
}

export type DigitalSkillsLesson = {
  id: string
  trackId: string
  order: number
  title: string
  summary: string
  whyItMatters: string
  difficulty: DigitalSkillsDifficulty
  estimatedMinutes: number
  learningObjective: string
  steps: DigitalSkillsLessonStep[]
  practicalTask: string
  completionAction: string
}

export type DigitalSkillsTrack = {
  id: string
  title: string
  description: string
  order: number
}

export type DigitalSkillsLessonProgress = {
  phase: DigitalSkillsLessonPhase
  currentStepIndex: number
  completedStepIds: string[]
  startedAt: number | null
  completedAt: number | null
}
