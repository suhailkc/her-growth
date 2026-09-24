export type UserProfile = {
  id: string
  displayName: string
  preferredLocale: 'en' | 'ml'
  studyFocus?: string
  onboardingComplete: boolean
  avatarInitials?: string
  learningGoal?: string
  dailyLearningMinutes?: number
  childProfile?: {
    name?: string
    ageRange?: string
  }
  interests?: string[]
}

export type JourneySnapshot = {
  streakDays: number
  missionsCompleted: number
  skillsInProgress: number
  weeklyGoalPercent: number
}

export type AppNotification = {
  id: string
  title: string
  body: string
  createdAt: string
  read: boolean
}

export type DailyMission = {
  id: string
  title: string
  summary: string
  estimatedMinutes: number
  status: 'not_started' | 'in_progress' | 'completed'
  moduleId: string
  skillCategory: string
  difficulty: 'gentle' | 'moderate' | 'stretch'
  progressPercent: number
}
