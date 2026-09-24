import { Clock, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

import { MissionCard } from '@/components/common/mission-card'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { formatMinutesSpent } from '@/features/mission/mission-labels'
import { useMissionStore } from '@/features/mission/mission-store'
import type { TodayMissionDetail } from '@/types/mission'
import type { DailyMission } from '@/types/user'

type MissionCompletionProps = {
  mission: TodayMissionDetail
  onPracticeAgain: () => void
}

function suggestionAsMission(mission: TodayMissionDetail): DailyMission {
  return {
    id: mission.nextSuggestion.id,
    title: mission.nextSuggestion.title,
    summary: mission.nextSuggestion.summary,
    estimatedMinutes: mission.nextSuggestion.estimatedMinutes,
    status: 'not_started',
    moduleId: mission.moduleId,
    skillCategory: mission.skillCategory,
    difficulty: mission.difficulty,
    progressPercent: 0,
  }
}

export function MissionCompletion({
  mission,
  onPracticeAgain,
}: MissionCompletionProps) {
  const startedAt = useMissionStore((s) => s.startedAt)
  const completedAt = useMissionStore((s) => s.completedAt)

  const elapsedSeconds =
    startedAt && completedAt
      ? Math.max(0, Math.floor((completedAt - startedAt) / 1000))
      : mission.estimatedMinutes * 60 * 0.5

  const nextMission = suggestionAsMission(mission)

  return (
    <div className="space-y-8">
      <Card variant="sage" className="overflow-hidden text-center">
        <CardHeader className="border-b border-border/60 pb-6">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Sparkles className="size-7" aria-hidden />
          </div>
          <CardTitle className="font-serif text-3xl sm:text-4xl">
            Great job! 🎉
          </CardTitle>
          <p className="text-base text-muted-foreground">
            You finished &ldquo;{mission.title}&rdquo;. That is real progress you can
            use at home.
          </p>
        </CardHeader>
        <CardContent className="space-y-4 pt-6 text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/70 bg-background/60 p-4">
              <p className="text-sm font-medium text-muted-foreground">
                What you learned
              </p>
              <p className="mt-1 text-base">{mission.learnedSummary}</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/60 p-4">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Target className="size-4" aria-hidden />
                Skill gained
              </p>
              <p className="mt-1 text-base font-medium">{mission.skillGained}</p>
            </div>
          </div>
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4" aria-hidden />
            Time spent: {formatMinutesSpent(elapsedSeconds)}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 border-t border-border/60 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className={buttonVariants({
              size: 'lg',
              className: 'w-full rounded-xl sm:w-auto',
            })}
          >
            Back to dashboard
          </Link>
          <Button
            type="button"
            variant="secondary"
            size="lg"
            className="rounded-xl"
            onClick={onPracticeAgain}
          >
            Review steps again
          </Button>
        </CardFooter>
      </Card>

      <section className="space-y-3" aria-labelledby="next-mission-heading">
        <h2 id="next-mission-heading" className="font-serif text-xl text-foreground">
          Next suggested mission
        </h2>
        <p className="text-sm text-muted-foreground">
          When you are ready — no pressure to start today.
        </p>
        <MissionCard mission={nextMission} compact />
      </section>
    </div>
  )
}
