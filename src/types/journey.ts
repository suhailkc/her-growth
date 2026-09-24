import type { AppModuleId } from '@/types/navigation'

export type JourneySkillLevel = {
  level: number
  title: string
}

export type JourneySkillArea = {
  moduleId: AppModuleId
  label: string
  progressPercent: number
  completedLessons: number
  totalLessons: number
  currentLevel: JourneySkillLevel
}

export type JourneyAchievementIcon =
  | 'sparkles'
  | 'heart'
  | 'book'
  | 'target'
  | 'flame'
  | 'laptop'
  | 'compass'
  | 'users'

export type JourneyAchievement = {
  id: string
  title: string
  description: string
  earnedLabel: string
  status: 'earned' | 'in_progress'
  icon: JourneyAchievementIcon
}

export type JourneyActivityKind = 'lesson' | 'mission' | 'achievement' | 'goal' | 'read'

export type JourneyActivityItem = {
  id: string
  occurredAt: string
  title: string
  description: string
  moduleId?: AppModuleId
  kind: JourneyActivityKind
}

export type JourneyDailyActivity = {
  dayLabel: string
  count: number
}

export type JourneyWeeklySummary = {
  activitiesCompleted: number
  learningTimeMinutes: number
  newSkills: number
  missionsCompleted: number
  dailyActivities: JourneyDailyActivity[]
}

export type JourneyOverview = {
  overallProgressPercent: number
  totalLessonsCompleted: number
  totalLessons: number
  currentStreakDays: number
  encouragement: string
}
