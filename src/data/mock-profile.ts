import type { JourneySnapshot, UserProfile } from '@/types/user'

export const mockUserProfile: UserProfile = {
  id: 'user-local-1',
  displayName: 'Priya',
  preferredLocale: 'en',
  studyFocus: 'B.Ed.',
  onboardingComplete: false,
}

export const mockJourneySnapshot: JourneySnapshot = {
  streakDays: 3,
  missionsCompleted: 7,
  skillsInProgress: 2,
  weeklyGoalPercent: 40,
}
