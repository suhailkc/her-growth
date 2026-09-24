import { Check, Circle, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProgressBar } from '@/components/common/progress-bar'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { StageSkillChecklist } from '@/features/digital-skills/components/stage-skill-checklist'
import { getStageIcon } from '@/features/digital-skills/data/stage-meta'
import { getDigitalSkillsStages } from '@/features/digital-skills/data/catalog'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import {
  getCurrentStageByTopics,
  getStageTopicKeys,
  getTopicStageStatus,
  topicProgressPercent,
  type TopicStageStatus,
} from '@/features/digital-skills/lib/topic-progress'
import type { DigitalSkillsStage } from '@/types/digital-skills'

function lockedStageLabel(isUpNext: boolean): string {
  return isUpNext ? 'Up next' : 'Later'
}

function statusLabel(
  status: TopicStageStatus,
  lockedOptions?: { isUpNext: boolean },
): string {
  switch (status) {
    case 'complete':
      return 'Done'
    case 'current':
      return 'Now'
    case 'locked':
      return lockedStageLabel(lockedOptions?.isUpNext ?? false)
    default:
      return 'Open'
  }
}

function stageAriaLabel(
  stage: DigitalSkillsStage,
  status: TopicStageStatus,
  isUpNextLocked: boolean,
): string {
  const statusText = statusLabel(status, { isUpNext: isUpNextLocked })
  if (status === 'locked') {
    return `Stage ${stage.order}: ${stage.title}. ${statusText}. Finish the previous stage first.`
  }
  return `Stage ${stage.order}: ${stage.title}. ${statusText}.`
}

function StageNodeIcon({ status }: { status: TopicStageStatus }) {
  if (status === 'complete') {
    return (
      <span className="flex size-11 items-center justify-center rounded-full bg-success/15 text-success">
        <Check className="size-5" strokeWidth={2.5} aria-hidden />
      </span>
    )
  }
  if (status === 'locked') {
    return (
      <span className="flex size-11 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground">
        <Lock className="size-4" aria-hidden />
      </span>
    )
  }
  if (status === 'current') {
    return (
      <span className="stage-node-pulse flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
        <Circle className="size-4 fill-current" aria-hidden />
      </span>
    )
  }
  return (
    <span className="flex size-11 items-center justify-center rounded-full border-2 border-primary/25 bg-primary/10 text-primary">
      <Circle className="size-4" aria-hidden />
    </span>
  )
}

function LaterLockedStageCard({ stage }: { stage: DigitalSkillsStage }) {
  const topicCount = stage.topics.length
  const icon = getStageIcon(stage.id)
  const previewLabel = `Preview ${stage.title} (locked)`

  return (
    <article
      aria-label={stageAriaLabel(stage, 'locked', false)}
      className="rounded-2xl border border-dashed border-muted-foreground/30 bg-secondary/60 p-3 shadow-none sm:p-4"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl leading-none" aria-hidden>
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-muted-foreground">
            Stage {stage.order}
          </p>
          <h3 className="font-serif text-base font-semibold leading-snug">
            {stage.title}
          </h3>
        </div>
        <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
          Later
        </span>
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">
          {topicCount} {topicCount === 1 ? 'skill' : 'skills'} · unlocks after earlier stages
        </p>
        <Link
          to={`/${stage.id}`}
          className={buttonVariants({
            variant: 'link',
            size: 'sm',
            className: 'h-auto min-h-0 px-0 text-muted-foreground',
          })}
          aria-label={previewLabel}
        >
          Preview
        </Link>
      </div>
    </article>
  )
}

function JourneyStageCard({
  stage,
  status,
  completedTopicIds,
  isCurrent,
  currentStage,
}: {
  stage: DigitalSkillsStage
  status: TopicStageStatus
  completedTopicIds: Set<string>
  isCurrent: boolean
  currentStage: DigitalSkillsStage | null
}) {
  const topicKeys = getStageTopicKeys(stage)
  const stagePercent = topicProgressPercent(topicKeys, completedTopicIds)
  const completedInStage = topicKeys.filter((key) => completedTopicIds.has(key)).length
  const icon = getStageIcon(stage.id)
  const locked = status === 'locked'
  const isUpNextLocked =
    locked && currentStage != null && stage.order === currentStage.order + 1
  const isLaterLocked =
    locked && currentStage != null && stage.order > currentStage.order + 1

  if (isLaterLocked) {
    return <LaterLockedStageCard stage={stage} />
  }

  const skillCountLabel = `${topicKeys.length} ${topicKeys.length === 1 ? 'skill' : 'skills'}`
  const previewLabel = `Preview ${stage.title} (locked)`

  return (
    <article
      aria-label={stageAriaLabel(stage, status, isUpNextLocked)}
      className={cn(
        'relative rounded-2xl border bg-card p-4 transition-shadow duration-300 sm:p-5',
        locked
          ? 'border-dashed border-muted-foreground/35 bg-secondary/50 shadow-none'
          : 'border-border/80 shadow-[var(--shadow-soft)]',
        isCurrent && 'current-stage-glow ring-2 ring-primary/35',
      )}
    >
      {isCurrent ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
          You&apos;re here ✨
        </p>
      ) : null}

      <div className="flex items-start gap-3">
        <span className="text-3xl leading-none" aria-hidden>
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-muted-foreground">
            Stage {stage.order}
          </p>
          <h3 className="font-serif text-lg font-semibold leading-snug sm:text-xl">
            {stage.title}
          </h3>
          <p className="mt-1 text-sm text-pretty text-muted-foreground">{stage.subtitle}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span className="rounded-full bg-muted px-2.5 py-1">
          {statusLabel(status, { isUpNext: isUpNextLocked })}
        </span>
        {locked ? (
          <span>{skillCountLabel}</span>
        ) : (
          <span>
            {completedInStage}/{topicKeys.length} ticked
          </span>
        )}
      </div>

      {!locked ? (
        <div className="mt-3">
          <ProgressBar
            value={stagePercent}
            label={`${stage.title} progress`}
            showValue
            animateValue
          />
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">
          Finish the stage before this one first.
        </p>
      )}

      {isCurrent && !locked ? (
        <div className="mt-4">
          <StageSkillChecklist stage={stage} stageId={stage.id} />
        </div>
      ) : null}

      {!isCurrent ? (
        <div className={cn('mt-4', locked && 'mt-3')}>
          <Link
            to={`/${stage.id}`}
            className={buttonVariants({
              variant: locked ? 'link' : 'outline',
              size: locked ? 'default' : 'lg',
              className: cn(
                'rounded-xl',
                locked
                  ? 'h-auto min-h-0 justify-start px-0 text-muted-foreground'
                  : 'w-full sm:w-auto',
              ),
            })}
            aria-label={locked ? previewLabel : undefined}
          >
            {locked ? 'Preview stage' : 'Open checklist'}
          </Link>
        </div>
      ) : null}
    </article>
  )
}

export function DigitalSkillsJourneyRoadmap() {
  const stages = getDigitalSkillsStages()
  const completedTopicIds = useCompletedTopicSet()
  const currentStage = getCurrentStageByTopics(completedTopicIds)

  return (
    <div className="mx-auto max-w-xl">
      <ol className="relative space-y-0">
        {stages.map((stage, index) => {
          const isLast = index === stages.length - 1
          const status = getTopicStageStatus(stage, completedTopicIds, currentStage)
          return (
            <li key={stage.id} className="relative flex gap-3 pb-8 sm:gap-4 sm:pb-10">
              {!isLast ? (
                <span
                  className="absolute left-[1.375rem] top-12 bottom-0 w-0.5 -translate-x-1/2 bg-border"
                  aria-hidden
                />
              ) : null}
              <div className="relative z-10 shrink-0 pt-4 sm:pt-5">
                <StageNodeIcon status={status} />
              </div>
              <div className="min-w-0 flex-1">
                <JourneyStageCard
                  stage={stage}
                  status={status}
                  completedTopicIds={completedTopicIds}
                  isCurrent={currentStage?.id === stage.id}
                  currentStage={currentStage}
                />
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
