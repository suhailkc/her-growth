import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

type PageEnterProps = {
  children: ReactNode
  className?: string
}

/** Subtle fade-in when the route changes; respects prefers-reduced-motion via CSS. */
export function PageEnter({ children, className }: PageEnterProps) {
  const { pathname } = useLocation()

  return (
    <div key={pathname} className={cn('enter-fade-up', className)}>
      {children}
    </div>
  )
}
