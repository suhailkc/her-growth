import { Clock, Lightbulb, Sparkles } from 'lucide-react'

import { ProgressBar } from '@/components/common/progress-bar'
import { StatusBadge } from '@/components/common/status-badge'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  difficultyDescription,
  difficultyLabel,
} from '@/features/mission/mission-labels'
import type { TodayMissionDetail } from '@/types/mission'

type MissionOverviewProps = {
  mission: TodayMissionDetail
  onStart: () => void
  resumeLabel?: string
}

function missionStatusLabel(status: TodayMissionDetail['status']): string {
  switch (status) {
    case 'completed':
      return 'Completed'
    case 'in_progress':
      return 'In progress'
    default:
      return 'Ready when you are'
  }
}

function missionStatusTone(status: TodayMissionDetail['status']) {
  switch (status) {
    case 'completed':
      return 'success' as const
    case 'in_progress':
      return 'active' as const
    default:
      return 'neutral' as const
  }
}

export function MissionOverview({
  mission,
  onStart,
  resumeLabel = 'Start mission',
}: MissionOverviewProps) {
  const inProgress = mission.status === 'in_progress'

  return (
    <Card variant="warm" className="overflow-hidden">
      <CardHeader className="border-b border-border/60 bg-background/40">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="size-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="font-serif text-2xl sm:text-3xl">
                {mission.title}
              </CardTitle>
              <StatusBadge
                label={missionStatusLabel(mission.status)}
                tone={missionStatusTone(mission.status)}
              />
            </div>
            <p className="text-base text-muted-foreground">{mission.summary}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="font-normal">
            {mission.skillCategory}
          </Badge>
          <Badge variant="outline" className="font-normal">
            {difficultyLabel(mission.difficulty)} ·{' '}
            {difficultyDescription(mission.difficulty)}
          </Badge>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/70 px-3 py-1 text-sm text-muted-foreground">
            <Clock className="size-4" aria-hidden />
            About {mission.estimatedMinutes} minutes
          </span>
        </div>

        <div className="rounded-xl border border-border/70 bg-muted/30 p-4 sm:p-5">
          <div className="flex gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <div className="space-y-1">
              <p className="font-medium text-foreground">Why this helps</p>
              <p className="text-muted-foreground">{mission.whyItMatters}</p>
            </div>
          </div>
        </div>

        {inProgress ? (
          <ProgressBar
            value={mission.progressPercent}
            label="Your progress on this mission"
            className="max-w-xl"
          />
        ) : null}

        <p className="text-sm text-muted-foreground">
          {mission.steps.length} clear steps · you can pause and return anytime
        </p>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button
          type="button"
          size="lg"
          className="w-full rounded-xl sm:w-auto"
          onClick={onStart}
        >
          {inProgress ? 'Continue mission' : resumeLabel}
        </Button>
      </CardFooter>
    </Card>
  )
}
