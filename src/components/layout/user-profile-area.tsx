import { Link } from 'react-router-dom'

import { Avatar } from '@/components/ui/avatar'
import { useProfileStore } from '@/features/profile/profile-store'
import { cn } from '@/lib/utils'

type UserProfileAreaProps = {
  compact?: boolean
  className?: string
}

export function UserProfileArea({ compact = false, className }: UserProfileAreaProps) {
  const profile = useProfileStore((s) => s.profile)
  const initials =
    profile.avatarInitials ?? profile.displayName.slice(0, 2).toUpperCase()

  return (
    <Link
      to="/profile"
      className={cn(
        'flex min-w-0 items-center gap-3 rounded-xl border border-transparent px-2 py-1.5 transition-colors hover:border-border/80 hover:bg-accent/50',
        className,
      )}
    >
      <Avatar initials={initials} label={`${profile.displayName} profile`} size="sm" />
      {!compact ? (
        <span className="min-w-0 hidden text-left sm:block">
          <span className="block truncate text-sm font-medium">
            {profile.displayName}
          </span>
          <span className="block truncate text-xs text-muted-foreground">
            Profile & settings
          </span>
        </span>
      ) : null}
    </Link>
  )
}
