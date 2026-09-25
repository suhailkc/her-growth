import { Heart } from 'lucide-react'

import { appBrand } from '@/config/app'
import { cn } from '@/lib/utils'

type WelcomeDedicationProps = {
  className?: string
}

export function WelcomeDedication({ className }: WelcomeDedicationProps) {
  return (
    <p
      className={cn(
        'flex items-center gap-1.5 font-serif text-base italic text-primary/90',
        className,
      )}
    >
      <span>{appBrand.welcomeDedication}</span>
      <Heart className="size-4 fill-red-500 text-red-500" aria-hidden strokeWidth={0} />
    </p>
  )
}
