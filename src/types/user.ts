export type UserProfile = {
  id: string
  displayName: string
  preferredLocale: 'en' | 'ml'
  onboardingComplete: boolean
  avatarInitials?: string
}
