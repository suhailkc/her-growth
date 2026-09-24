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
  stageId: string
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

export type DigitalSkillsStageTopic = {
  id: string
  label: string
  /** Plain-language hint for self-study and what to search for */
  description: string
  lessonId?: string
}

export type DigitalSkillsStage = {
  id: string
  order: number
  title: string
  subtitle: string
  whyItMatters: string
  outcomeVision: string
  topics: DigitalSkillsStageTopic[]
}

export type DigitalSkillsStageStatus = 'complete' | 'current' | 'available' | 'locked' | 'coming-soon'

export type DigitalSkillsLessonProgress = {
  phase: DigitalSkillsLessonPhase
  currentStepIndex: number
  completedStepIds: string[]
  startedAt: number | null
  completedAt: number | null
}
