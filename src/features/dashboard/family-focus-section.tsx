import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent } from '@/components/ui/card'
import type { FamilyFocusTask } from '@/types/dashboard'

type FamilyFocusSectionProps = {
  tasks: FamilyFocusTask[]
  id?: string
}

export function FamilyFocusSection({
  tasks,
  id = 'family-focus-heading',
}: FamilyFocusSectionProps) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <SectionHeader
        id={id}
        title="Family Focus"
        description="Gentle reminders for home and family — handle them when you can."
      />
      <Card variant="family">
        <CardContent className="divide-y divide-border/60 p-0">
          {tasks.map((task) => (
            <Link
              key={task.id}
              to={task.href}
              className="flex items-center gap-3 px-4 py-4 transition-colors hover:bg-background/50 sm:px-6"
            >
              <div className="min-w-0 flex-1">
                <p className="font-medium">{task.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{task.dueLabel}</p>
              </div>
              <ChevronRight className="size-5 shrink-0 text-muted-foreground" aria-hidden />
            </Link>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
