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

const PHOTO_HEARTS = [
  { className: 'heart-float-1 left-[12%] top-[14%] size-5 opacity-70' },
  { className: 'heart-float-2 right-[14%] top-[20%] size-7 opacity-80' },
  { className: 'heart-float-3 left-[18%] top-[42%] size-4 opacity-60' },
  { className: 'heart-float-4 right-[20%] top-[48%] size-6 opacity-75' },
  { className: 'heart-float-5 left-[38%] top-[8%] size-3.5 opacity-55' },
  { className: 'heart-float-6 right-[32%] bottom-[18%] size-5 opacity-70' },
  { className: 'heart-float-2 left-[8%] bottom-[22%] size-4 opacity-65 [animation-delay:1.2s]' },
  { className: 'heart-float-4 right-[8%] bottom-[30%] size-5 opacity-70 [animation-delay:0.6s]' },
  { className: 'heart-float-1 left-[48%] top-[36%] size-3 opacity-50 [animation-delay:0.9s]' },
  { className: 'heart-float-3 right-[42%] top-[58%] size-4 opacity-60 [animation-delay:1.5s]' },
  { className: 'heart-float-5 left-[28%] bottom-[12%] size-6 opacity-75 [animation-delay:0.3s]' },
  { className: 'heart-float-6 right-[18%] top-[8%] size-3.5 opacity-55 [animation-delay:1.8s]' },
] as const

type FloatingHeartsProps = {
  className?: string
  /** Denser, brighter hearts for photo overlays. */
  variant?: 'soft' | 'photo'
}

/** Soft decorative hearts that drift around a welcome surface. */
export function FloatingHearts({ className, variant = 'soft' }: FloatingHeartsProps) {
  const hearts = variant === 'photo' ? PHOTO_HEARTS : HEARTS

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      {hearts.map((heart, index) => (
        <Heart
          key={index}
          className={cn('absolute fill-red-500 text-red-500', heart.className)}
          strokeWidth={0}
        />
      ))}
    </div>
  )
}
