import {
  BookOpen,
  CheckCircle2,
  Flag,
  Sparkles,
  Trophy,
} from 'lucide-react'

import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { JourneyActivityItem, JourneyActivityKind } from '@/types/journey'

type ActivityFeedSectionProps = {
  items: JourneyActivityItem[]
}

const kindMeta: Record<
  JourneyActivityKind,
  { icon: typeof Sparkles; iconClass: string; label: string }
> = {
  mission: {
    icon: Sparkles,
    iconClass: 'bg-primary/10 text-primary',
    label: 'Mission',
  },
  lesson: {
    icon: CheckCircle2,
    iconClass: 'bg-success/10 text-success',
    label: 'Lesson',
  },
  achievement: {
    icon: Trophy,
    iconClass: 'bg-warning/15 text-warning-foreground',
    label: 'Achievement',
  },
  goal: {
    icon: Flag,
    iconClass: 'bg-family/10 text-family',
    label: 'Family',
  },
  read: {
    icon: BookOpen,
    iconClass: 'bg-learning/10 text-learning',
    label: 'Reading',
  },
}

function formatActivityWhen(iso: string): string {
  const date = new Date(iso)
  const now = new Date()
  const sameDay =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()

  if (sameDay) {
    return `Today · ${date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}`
  }

  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function ActivityFeedSection({ items }: ActivityFeedSectionProps) {
  const sorted = [...items].sort(
    (a, b) => new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime(),
  )

  return (
    <section aria-labelledby="activity-feed-heading" className="space-y-4">
      <SectionHeader
        id="activity-feed-heading"
        title="Activity"
        description="A simple timeline of what you have done recently."
      />
      <Card variant="elevated">
        <CardContent className="p-0">
          <ol className="divide-y divide-border/60">
            {sorted.map((item, index) => {
              const meta = kindMeta[item.kind]
              const Icon = meta.icon

              return (
                <li key={item.id} className="relative flex gap-4 px-4 py-4 sm:px-6">
                  {index < sorted.length - 1 ? (
                    <span
                      className="absolute left-[2.125rem] top-14 bottom-0 w-px bg-border/70 sm:left-[2.625rem]"
                      aria-hidden
                    />
                  ) : null}
                  <div
                    className={cn(
                      'relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl',
                      meta.iconClass,
                    )}
                  >
                    <Icon className="size-4" aria-hidden />
                    <span className="sr-only">{meta.label}</span>
                  </div>
                  <div className="min-w-0 flex-1 space-y-1 pb-1">
                    <p className="font-medium leading-snug">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <time
                      className="text-xs text-muted-foreground"
                      dateTime={item.occurredAt}
                    >
                      {formatActivityWhen(item.occurredAt)}
                    </time>
                  </div>
                </li>
              )
            })}
          </ol>
        </CardContent>
      </Card>
    </section>
  )
}
