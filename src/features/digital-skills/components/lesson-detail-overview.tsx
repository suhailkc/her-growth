import { Clock, Lightbulb, Sparkles, Target } from 'lucide-react'

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
import { VisualPlaceholder } from '@/features/digital-skills/components/visual-placeholder'
import {
  difficultyDescription,
  difficultyLabel,
} from '@/features/mission/mission-labels'
import type { DigitalSkillsLesson, DigitalSkillsLessonProgress } from '@/types/digital-skills'

type LessonDetailOverviewProps = {
  lesson: DigitalSkillsLesson
  trackTitle: string
  progress: DigitalSkillsLessonProgress
  onStart: () => void
}

function statusFromProgress(progress: DigitalSkillsLessonProgress) {
  if (progress.phase === 'complete') {
    return { label: 'Completed', tone: 'success' as const }
  }
  if (progress.phase === 'active' || progress.completedStepIds.length > 0) {
    return { label: 'In progress', tone: 'active' as const }
  }
  return { label: 'Ready when you are', tone: 'neutral' as const }
}

export function LessonDetailOverview({
  lesson,
  trackTitle,
  progress,
  onStart,
}: LessonDetailOverviewProps) {
  const status = statusFromProgress(progress)
  const resume =
    progress.phase === 'active' || progress.completedStepIds.length > 0

  return (
    <Card variant="warm" className="overflow-hidden">
      <CardHeader className="border-b border-border/60 bg-background/40">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="size-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="font-serif text-2xl sm:text-3xl">{lesson.title}</CardTitle>
              <StatusBadge label={status.label} tone={status.tone} />
            </div>
            <p className="text-base text-muted-foreground">{lesson.summary}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="font-normal">
            {trackTitle}
          </Badge>
          <Badge variant="outline" className="font-normal">
            {difficultyLabel(lesson.difficulty)} · {difficultyDescription(lesson.difficulty)}
          </Badge>
          <Badge variant="outline" className="font-normal">
            <Clock className="mr-1 inline size-3.5" aria-hidden />
            About {lesson.estimatedMinutes} minutes
          </Badge>
        </div>

        <VisualPlaceholder label={`Overview for ${lesson.title}`} title={lesson.title} />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/70 bg-muted/20 p-4">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <Lightbulb className="size-4 text-primary" aria-hidden />
              Why it matters
            </p>
            <p className="mt-2 text-base text-muted-foreground">{lesson.whyItMatters}</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-muted/20 p-4">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <Target className="size-4 text-primary" aria-hidden />
              Learning objective
            </p>
            <p className="mt-2 text-base text-muted-foreground">{lesson.learningObjective}</p>
          </div>
        </div>

        <div className="rounded-xl border border-border/70 bg-background/60 p-4">
          <p className="text-sm font-medium text-foreground">Try it yourself</p>
          <p className="mt-1 text-base text-muted-foreground">{lesson.practicalTask}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {lesson.steps.length} guided steps
          </p>
          <ol className="mt-3 space-y-2">
            {lesson.steps.map((step, index) => (
              <li key={step.id} className="flex gap-3 text-sm text-muted-foreground">
                <span className="font-medium tabular-nums text-foreground">{index + 1}.</span>
                <span>{step.instruction}</span>
              </li>
            ))}
          </ol>
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button type="button" size="lg" className="w-full rounded-xl sm:w-auto" onClick={onStart}>
          {resume ? 'Continue lesson' : 'Start lesson'}
        </Button>
      </CardFooter>
    </Card>
  )
}
