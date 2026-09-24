import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProgressBar } from '@/components/common/progress-bar'
import { SectionHeader } from '@/components/common/section-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { primaryNavItems } from '@/config/navigation'
import type { JourneyAreaProgress } from '@/types/dashboard'
import type { AppModuleId } from '@/types/navigation'

type JourneyProgressSectionProps = {
  areas: JourneyAreaProgress[]
  id?: string
}

function iconForModule(moduleId: AppModuleId): LucideIcon | undefined {
  return primaryNavItems.find((item) => item.id === moduleId)?.icon
}

function hrefForModule(moduleId: AppModuleId): string {
  return primaryNavItems.find((item) => item.id === moduleId)?.href ?? '/journey'
}

export function JourneyProgressSection({ areas, id = 'my-journey-heading' }: JourneyProgressSectionProps) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <SectionHeader
        id={id}
        title="My Journey"
        description="Every area grows at its own pace — effort counts."
        action={
          <Link
            to="/journey"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        }
      />
      <Card variant="elevated">
        <CardContent className="divide-y divide-border/60 p-0">
          {areas.map((area) => {
            const Icon = iconForModule(area.moduleId)
            const optional = area.moduleId === 'bed-career'

            return (
              <Link
                key={area.moduleId}
                to={hrefForModule(area.moduleId)}
                className="flex flex-col gap-3 px-4 py-4 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center sm:gap-6 sm:px-6"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  {Icon ? (
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </div>
                  ) : null}
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <span className="font-medium">{area.label}</span>
                    {optional ? <Badge variant="optional">Optional</Badge> : null}
                  </div>
                </div>
                <div className="w-full sm:max-w-xs lg:max-w-sm">
                  <ProgressBar
                    value={area.progressPercent}
                    label={`${area.label} progress`}
                    showValue
                  />
                </div>
              </Link>
            )
          })}
        </CardContent>
      </Card>
    </section>
  )
}
