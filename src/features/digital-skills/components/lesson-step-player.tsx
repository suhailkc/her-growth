import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb } from 'lucide-react'

import { ProgressBar } from '@/components/common/progress-bar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { VisualPlaceholder } from '@/features/digital-skills/components/visual-placeholder'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import { lessonProgressPercent } from '@/features/digital-skills/progress-utils'
import type { DigitalSkillsLesson } from '@/types/digital-skills'

type LessonStepPlayerProps = {
  lesson: DigitalSkillsLesson
  onBackToOverview: () => void
  onCompleteLesson: () => void
}

export function LessonStepPlayer({
  lesson,
  onBackToOverview,
  onCompleteLesson,
}: LessonStepPlayerProps) {
  const progress = useDigitalSkillsStore((s) => s.getLessonProgress(lesson.id))
  const toggleStepComplete = useDigitalSkillsStore((s) => s.toggleStepComplete)
  const goToNextStep = useDigitalSkillsStore((s) => s.goToNextStep)
  const goToPreviousStep = useDigitalSkillsStore((s) => s.goToPreviousStep)

  const stepIndex = Math.min(
    Math.max(0, progress.currentStepIndex),
    Math.max(0, lesson.steps.length - 1),
  )
  const step = lesson.steps[stepIndex]
  const totalSteps = lesson.steps.length
  const isStepComplete = step ? progress.completedStepIds.includes(step.id) : false
  const allStepsComplete = lesson.steps.every((s) => progress.completedStepIds.includes(s.id))
  const isFirst = stepIndex === 0
  const isLast = stepIndex === totalSteps - 1
  const progressPercent = lessonProgressPercent(lesson, progress)

  if (!step) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button
          type="button"
          variant="ghost"
          size="lg"
          className="rounded-xl"
          onClick={onBackToOverview}
        >
          <ArrowLeft className="size-4" aria-hidden />
          Lesson overview
        </Button>
        <p className="text-sm font-medium text-muted-foreground" aria-live="polite">
          Step {stepIndex + 1} of {totalSteps}
        </p>
      </div>

      <ProgressBar value={progressPercent} label="Steps completed" className="max-w-xl" />

      <Card variant="warm" className="overflow-hidden">
        <CardHeader className="border-b border-border/60 bg-background/40">
          <CardTitle className="font-serif text-xl sm:text-2xl">{step.instruction}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 pt-6">
          <VisualPlaceholder label={step.visualLabel} />
          <p className="text-base text-muted-foreground">{step.detail}</p>
          {step.tip ? (
            <div className="flex gap-3 rounded-xl border border-border/70 bg-muted/30 p-4">
              <Lightbulb className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Tip</p>
                <p className="text-sm text-muted-foreground">{step.tip}</p>
              </div>
            </div>
          ) : null}

          <div className="flex min-h-11 items-start gap-3 rounded-xl border border-border/70 bg-background/60 p-4">
            <Checkbox
              id={`ds-step-${step.id}`}
              checked={isStepComplete}
              onCheckedChange={() => toggleStepComplete(lesson.id, step.id)}
              className="mt-0.5 size-5"
            />
            <Label
              htmlFor={`ds-step-${step.id}`}
              className="cursor-pointer text-base leading-snug font-normal"
            >
              I completed this step
            </Label>
            {isStepComplete ? (
              <CheckCircle2 className="ml-auto size-5 shrink-0 text-primary" aria-hidden />
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 border-t border-border/60 bg-muted/20 sm:flex-row sm:justify-between">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            className="w-full rounded-xl sm:w-auto"
            disabled={isFirst}
            onClick={() => goToPreviousStep(lesson.id)}
          >
            <ArrowLeft className="size-4" aria-hidden />
            Previous step
          </Button>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {!isLast ? (
              <Button
                type="button"
                size="lg"
                className="w-full rounded-xl sm:w-auto"
                onClick={() => goToNextStep(lesson.id, totalSteps)}
              >
                Next step
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            ) : (
              <Button
                type="button"
                size="lg"
                className="w-full rounded-xl sm:w-auto"
                disabled={!allStepsComplete}
                onClick={onCompleteLesson}
              >
                {lesson.completionAction}
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
