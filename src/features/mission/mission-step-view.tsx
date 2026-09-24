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
import { useMissionStore } from '@/features/mission/mission-store'
import type { MissionStep, TodayMissionDetail } from '@/types/mission'

type MissionStepViewProps = {
  mission: TodayMissionDetail
  step: MissionStep
  stepIndex: number
  onBackToOverview: () => void
  onCompleteMission: () => void
}

export function MissionStepView({
  mission,
  step,
  stepIndex,
  onBackToOverview,
  onCompleteMission,
}: MissionStepViewProps) {
  const totalSteps = mission.steps.length
  const completedStepIds = useMissionStore((s) => s.completedStepIds)
  const toggleStepComplete = useMissionStore((s) => s.toggleStepComplete)
  const goToNextStep = useMissionStore((s) => s.goToNextStep)
  const goToPreviousStep = useMissionStore((s) => s.goToPreviousStep)

  const isStepComplete = completedStepIds.includes(step.id)
  const allStepsComplete = mission.steps.every((s) => completedStepIds.includes(s.id))
  const isFirst = stepIndex === 0
  const isLast = stepIndex === totalSteps - 1

  const progressPercent = Math.round((completedStepIds.length / totalSteps) * 100)

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
          Mission overview
        </Button>
        <p className="text-sm font-medium text-muted-foreground" aria-live="polite">
          Step {stepIndex + 1} of {totalSteps}
        </p>
      </div>

      <ProgressBar
        value={progressPercent}
        label="Steps completed"
        className="max-w-xl"
      />

      <Card variant="warm" className="overflow-hidden">
        <CardHeader className="border-b border-border/60 bg-background/40">
          <CardTitle className="font-serif text-xl sm:text-2xl">
            {step.instruction}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 pt-6">
          <figure className="overflow-hidden rounded-xl border border-border/70 bg-background">
            <img
              src={step.imageSrc}
              alt={step.imageAlt}
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
          </figure>
          <p className="text-base text-muted-foreground">{step.explanation}</p>
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
              id={`step-${step.id}`}
              checked={isStepComplete}
              onCheckedChange={() => toggleStepComplete(step.id)}
              className="mt-0.5 size-5"
            />
            <Label
              htmlFor={`step-${step.id}`}
              className="cursor-pointer text-base leading-snug font-normal"
            >
              I completed this step
            </Label>
            {isStepComplete ? (
              <CheckCircle2
                className="ml-auto size-5 shrink-0 text-primary"
                aria-hidden
              />
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
            onClick={goToPreviousStep}
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
                onClick={() => goToNextStep(totalSteps)}
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
                onClick={onCompleteMission}
              >
                Complete mission
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
