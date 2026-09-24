import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const avatarVariants = cva(
  'inline-flex shrink-0 items-center justify-center rounded-full font-semibold uppercase ring-2 ring-background',
  {
    variants: {
      size: {
        sm: 'size-8 text-xs',
        md: 'size-10 text-sm',
        lg: 'size-12 text-base',
      },
      tone: {
        default: 'bg-primary text-primary-foreground',
        muted: 'bg-muted text-muted-foreground',
        warm: 'bg-surface-blush text-primary',
      },
    },
    defaultVariants: {
      size: 'md',
      tone: 'warm',
    },
  },
)

type AvatarProps = ComponentProps<'span'> &
  VariantProps<typeof avatarVariants> & {
    initials: string
    label: string
  }

export function Avatar({
  initials,
  label,
  size,
  tone,
  className,
  ...props
}: AvatarProps) {
  return (
    <span
      role="img"
      aria-label={label}
      className={cn(avatarVariants({ size, tone }), className)}
      {...props}
    >
      {initials.slice(0, 2)}
    </span>
  )
}

export { avatarVariants }
