import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  title: string
  description?: string
  action?: ReactNode
  className?: string
  headingLevel?: 'h2' | 'h3'
  id?: string
}

export function SectionHeader({
  title,
  description,
  action,
  className,
  headingLevel = 'h2',
  id,
}: SectionHeaderProps) {
  const Heading = headingLevel

  return (
    <div
      className={cn(
        'flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between',
        className,
      )}
    >
      <div className="space-y-1">
        <Heading id={id} className="font-serif text-2xl font-semibold tracking-tight">
          {title}
        </Heading>
        {description ? (
          <p className="max-w-2xl text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
