import type { AppModuleId } from '@/types/navigation'

export type MissionDifficulty = 'gentle' | 'moderate' | 'stretch'

export type DashboardActivityStats = {
  activitiesCompleted: number
  learningTimeMinutes: number
  skillsLearned: number
}

export type JourneyAreaProgress = {
  moduleId: AppModuleId
  label: string
  progressPercent: number
}

export type ContinueLearningModule = {
  id: string
  moduleId: AppModuleId
  title: string
  subtitle: string
  progressPercent: number
  href: string
}

export type FamilyFocusTask = {
  id: string
  title: string
  dueLabel: string
  href: string
}

export type RecentAchievement = {
  id: string
  title: string
  description: string
  earnedLabel: string
  icon: 'sparkles' | 'heart' | 'book' | 'target'
}
