import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProgressBar } from '@/components/common/progress-bar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { primaryNavItems } from '@/config/navigation'
import type { JourneySkillArea } from '@/types/journey'
import type { AppModuleId } from '@/types/navigation'

type SkillAreaCardProps = {
  area: JourneySkillArea
}

function iconForModule(moduleId: AppModuleId): LucideIcon | undefined {
  return primaryNavItems.find((item) => item.id === moduleId)?.icon
}

function hrefForModule(moduleId: AppModuleId): string {
  return primaryNavItems.find((item) => item.id === moduleId)?.href ?? '/journey'
}

export function SkillAreaCard({ area }: SkillAreaCardProps) {
  const Icon = iconForModule(area.moduleId)
  const optional = area.moduleId === 'bed-career'

  return (
    <Card variant="elevated" className="h-full transition-shadow hover:shadow-[var(--shadow-card)]">
      <CardContent className="flex h-full flex-col gap-4">
        <div className="flex items-start gap-3">
          {Icon ? (
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" aria-hidden />
            </div>
          ) : null}
          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to={hrefForModule(area.moduleId)}
                className="font-medium hover:text-primary hover:underline"
              >
                {area.label}
              </Link>
              {optional ? <Badge variant="optional">Optional</Badge> : null}
            </div>
            <p className="text-sm text-muted-foreground">
              Level {area.currentLevel.level} · {area.currentLevel.title}
            </p>
          </div>
          <p className="font-serif text-2xl font-semibold text-primary tabular-nums">
            {area.progressPercent}%
          </p>
        </div>

        <ProgressBar
          value={area.progressPercent}
          label={`${area.label} progress`}
          showValue={false}
        />

        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground tabular-nums">
            {area.completedLessons}
          </span>{' '}
          of{' '}
          <span className="tabular-nums">{area.totalLessons}</span> lessons completed
        </p>
      </CardContent>
    </Card>
  )
}
