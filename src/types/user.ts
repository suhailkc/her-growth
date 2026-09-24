export type LocaleCode = 'en' | 'ml'

export type UserProfile = {
  id: string
  displayName: string
  preferredLocale: LocaleCode
  studyFocus?: string
  onboardingComplete: boolean
}

export type JourneySnapshot = {
  streakDays: number
  missionsCompleted: number
  skillsInProgress: number
  weeklyGoalPercent: number
}
