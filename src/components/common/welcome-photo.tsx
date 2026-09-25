import { appBrand } from '@/config/app'
import { cn } from '@/lib/utils'

type WelcomePhotoProps = {
  className?: string
}

/** Personal photo for login and onboarding welcome surfaces. */
export function WelcomePhoto({ className }: WelcomePhotoProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl shadow-(--shadow-soft) ring-1 ring-border/60',
        className,
      )}
    >
      <img
        src={appBrand.welcomePhotoSrc}
        alt={appBrand.welcomePhotoAlt}
        width={800}
        height={1000}
        className="aspect-4/5 w-full object-cover object-[center_20%]"
        decoding="async"
      />
    </div>
  )
}
