import { Clock, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProgressBar } from '@/components/common/progress-bar'
import { StatusBadge } from '@/components/common/status-badge'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllJourneyTopicKeys, topicProgressPercent } from '@/features/digital-skills/lib/topic-progress'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import { difficultyLabel } from '@/features/mission/mission-labels'
import { cn } from '@/lib/utils'
import type { DailyMission } from '@/types/user'

type TodayGrowthHeroProps = {
  mission: DailyMission
  className?: string
}

export function TodayGrowthHero({ mission, className }: TodayGrowthHeroProps) {
  const completedTopicIds = useCompletedTopicSet()
  const journeyPercent = topicProgressPercent(getAllJourneyTopicKeys(), completedTopicIds)
  const allComplete = mission.id === 'digital-skills-journey-complete'
  const focusDone = mission.status === 'completed' && !allComplete

  const primaryCta = allComplete
    ? 'Review roadmap'
    : focusDone
      ? 'Next focus'
      : "Today's focus"

  const primaryHref = allComplete ? '/digital-skills' : '/today'

  return (
    <Card variant="warm" className={cn('overflow-hidden', className)}>
      <CardHeader className="border-b border-border/60 bg-background/30 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="size-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-muted-foreground">
              Today&apos;s Digital Skills focus
            </p>
            <CardTitle className="mt-0.5 font-serif text-xl sm:text-2xl">
              {mission.title}
            </CardTitle>
          </div>
          {allComplete ? (
            <StatusBadge label="Journey complete" tone="success" />
          ) : focusDone ? (
            <StatusBadge label="Marked done" tone="success" />
          ) : (
            <StatusBadge label="Ready when you are" tone="neutral" />
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-5 pt-6">
        <p className="text-sm text-muted-foreground leading-relaxed">{mission.summary}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="font-normal">
            {mission.skillCategory}
          </Badge>
          {!allComplete ? (
            <>
              <Badge variant="outline" className="font-normal">
                {difficultyLabel(mission.difficulty)} pace
              </Badge>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/70 px-3 py-1 text-sm text-muted-foreground">
                <Clock className="size-4" aria-hidden />
                About {mission.estimatedMinutes} min
              </span>
            </>
          ) : null}
        </div>
        <ProgressBar
          value={journeyPercent}
          label="Digital Skills roadmap progress"
          className="max-w-xl"
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to={primaryHref}
            className={buttonVariants({
              variant: 'default',
              size: 'lg',
              className: 'w-full rounded-xl sm:w-auto',
            })}
          >
            {primaryCta}
          </Link>
          <Link
            to="/digital-skills"
            className={buttonVariants({
              variant: 'ghost',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            Full checklist
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
