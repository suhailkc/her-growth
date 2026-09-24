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

function statusLabel(status: TopicStageStatus): string {
  switch (status) {
    case 'complete':
      return 'Done'
    case 'current':
      return 'Now'
    case 'locked':
      return 'Soon'
    default:
      return 'Open'
  }
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
      <span className="flex size-11 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Lock className="size-4" aria-hidden />
      </span>
    )
  }
  if (status === 'current') {
    return (
      <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
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

function JourneyStageCard({
  stage,
  status,
  completedTopicIds,
  isCurrent,
}: {
  stage: DigitalSkillsStage
  status: TopicStageStatus
  completedTopicIds: Set<string>
  isCurrent: boolean
}) {
  const topicKeys = getStageTopicKeys(stage)
  const stagePercent = topicProgressPercent(topicKeys, completedTopicIds)
  const completedInStage = topicKeys.filter((key) => completedTopicIds.has(key)).length
  const icon = getStageIcon(stage.id)
  const locked = status === 'locked'

  return (
    <article
      className={cn(
        'relative rounded-2xl border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)]',
        isCurrent && 'ring-2 ring-primary/35',
        locked && 'border-dashed bg-muted/20',
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
          <h3 className="font-serif text-xl font-semibold leading-snug">
            {stage.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{stage.subtitle}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span className="rounded-full bg-muted px-2.5 py-1">{statusLabel(status)}</span>
        <span>
          {completedInStage}/{topicKeys.length} ticked
        </span>
      </div>

      {!locked ? (
        <div className="mt-3">
          <ProgressBar
            value={stagePercent}
            label={`${stage.title} progress`}
            showValue
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
        <div className="mt-4">
          <Link
            to={`/${stage.id}`}
            className={buttonVariants({
              variant: locked ? 'secondary' : 'outline',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            {locked ? 'Peek inside' : 'Open checklist'}
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
            <li key={stage.id} className="relative flex gap-4 pb-10">
              {!isLast ? (
                <span
                  className="absolute left-[1.375rem] top-12 bottom-0 w-0.5 -translate-x-1/2 bg-border"
                  aria-hidden
                />
              ) : null}
              <div className="relative z-10 shrink-0 pt-1">
                <StageNodeIcon status={status} />
              </div>
              <div className="min-w-0 flex-1">
                <JourneyStageCard
                  stage={stage}
                  status={status}
                  completedTopicIds={completedTopicIds}
                  isCurrent={currentStage?.id === stage.id}
                />
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
