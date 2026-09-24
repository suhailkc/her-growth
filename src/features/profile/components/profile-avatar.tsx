import { cn } from '@/lib/utils'

type ProfileAvatarProps = {
  initials: string
  className?: string
}

export function ProfileAvatar({ initials, className }: ProfileAvatarProps) {
  const label = initials.trim().slice(0, 2).toUpperCase() || 'DS'

  return (
    <span
      className={cn(
        'flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/12 font-sans text-sm font-semibold tracking-wide text-primary',
        className,
      )}
      aria-hidden
    >
      {label}
    </span>
  )
}
