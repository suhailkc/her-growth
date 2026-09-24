import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type PageGridProps = {
  children: ReactNode
  className?: string
}

/** Responsive 12-column grid with consistent section gaps (24px / 32px). */
export function PageGrid({ children, className }: PageGridProps) {
  return <div className={cn('page-grid', className)}>{children}</div>
}

type PageGridItemProps = {
  children: ReactNode
  className?: string
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const spanClass: Record<NonNullable<PageGridItemProps['span']>, string> = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  8: 'lg:col-span-8',
  9: 'lg:col-span-9',
  10: 'lg:col-span-10',
  11: 'lg:col-span-11',
  12: 'lg:col-span-12',
}

export function PageGridItem({ children, className, span = 12 }: PageGridItemProps) {
  return <div className={cn('min-w-0', spanClass[span], className)}>{children}</div>
}
