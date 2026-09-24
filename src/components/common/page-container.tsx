import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import type { PageContainerWidth } from '@/types/navigation'

const widthClass: Record<PageContainerWidth, string> = {
  narrow: 'max-w-3xl',
  default: 'max-w-5xl',
  wide: 'max-w-6xl',
}

type PageContainerProps = {
  children: ReactNode
  width?: PageContainerWidth
  className?: string
}

export function PageContainer({
  children,
  width = 'wide',
  className,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto flex w-full min-w-0 flex-col gap-6 sm:gap-8',
        widthClass[width],
        className,
      )}
    >
      {children}
    </div>
  )
}
