import { appBrand } from '@/config/app'
import { getFriendlyName } from '@/features/profile/lib/friendly-name'
import { getTimeOfDayGreeting } from '@/features/profile/lib/greeting'
import { useProfileStore } from '@/features/profile/profile-store'

import { ProfileAvatar } from './profile-avatar'

export function AppProfileBar() {
  const avatarInitials = useProfileStore((s) => s.profile.avatarInitials ?? 'NS')
  const friendlyName = getFriendlyName()
  const greeting = getTimeOfDayGreeting()

  return (
    <div className="mx-auto mb-6 flex w-full max-w-xl items-center gap-3 sm:mb-8">
      <ProfileAvatar initials={avatarInitials} />
      <div className="min-w-0 flex-1">
        <p className="truncate font-serif text-lg font-semibold leading-snug sm:text-xl">
          {greeting}, {friendlyName}
        </p>
        <p className="truncate text-sm text-muted-foreground">
          Just for you, {friendlyName} · {appBrand.name}
        </p>
      </div>
    </div>
  )
}
