import { Button } from '@/components/ui/button'
import { appBrand } from '@/config/app'
import { useAuth } from '@/features/auth/auth-provider'
import { getFriendlyName } from '@/features/profile/lib/friendly-name'
import { getTimeOfDayGreeting } from '@/features/profile/lib/greeting'
import { useProfileStore } from '@/features/profile/profile-store'

import { cn } from '@/lib/utils'

import { ProfileAvatar } from './profile-avatar'

type AppProfileBarProps = {
  className?: string
}

export function AppProfileBar({ className }: AppProfileBarProps) {
  const { signOut } = useAuth()
  const avatarInitials = useProfileStore((s) => s.profile.avatarInitials ?? 'NS')
  const friendlyName = getFriendlyName()
  const greeting = getTimeOfDayGreeting()

  return (
    <div className={cn('mx-auto mb-6 w-full max-w-xl sm:mb-8', className)}>
      <div className="enter-fade-up flex items-center gap-3">
        <ProfileAvatar initials={avatarInitials} />
        <div className="min-w-0 flex-1">
          <p className="truncate font-serif text-lg font-semibold leading-snug sm:text-xl">
            {greeting}, {friendlyName}
          </p>
          <p className="truncate text-sm text-muted-foreground">
            Just for you, {friendlyName} · {appBrand.name}
          </p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="shrink-0 text-muted-foreground"
          onClick={() => void signOut()}
        >
          Sign out
        </Button>
      </div>
    </div>
  )
}
