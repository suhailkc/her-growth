import { Heart } from 'lucide-react'

import { cn } from '@/lib/utils'

const HEARTS = [
  { className: 'heart-float-1 left-[8%] top-[18%] size-3.5 opacity-40' },
  { className: 'heart-float-2 right-[10%] top-[22%] size-5 opacity-50' },
  { className: 'heart-float-3 left-[14%] bottom-[28%] size-4 opacity-35' },
  { className: 'heart-float-4 right-[16%] bottom-[24%] size-3 opacity-45' },
  { className: 'heart-float-5 left-[42%] top-[10%] size-2.5 opacity-30' },
  { className: 'heart-float-6 right-[38%] bottom-[12%] size-3.5 opacity-40' },
  { className: 'heart-float-2 left-[6%] top-[48%] size-2.5 opacity-25 [animation-delay:1.2s]' },
  { className: 'heart-float-4 right-[6%] top-[55%] size-4 opacity-35 [animation-delay:0.6s]' },
] as const

type FloatingHeartsProps = {
  className?: string
}

/** Soft decorative hearts that drift around a welcome surface. */
export function FloatingHearts({ className }: FloatingHeartsProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      {HEARTS.map((heart, index) => (
        <Heart
          key={index}
          className={cn('absolute fill-red-500 text-red-500', heart.className)}
          strokeWidth={0}
        />
      ))}
    </div>
  )
}
