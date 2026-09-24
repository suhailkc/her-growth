export type UserProfile = {
  id: string
  /** Full name (formal); warm copy uses `learner.nickname`. */
  displayName: string
  preferredLocale: 'en' | 'ml'
  onboardingComplete: boolean
  avatarInitials?: string
}
