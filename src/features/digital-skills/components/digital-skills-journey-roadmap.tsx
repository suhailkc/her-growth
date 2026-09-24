import { Check, Circle, Sparkles } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { ProgressBar } from '@/components/common/progress-bar'
import { JourneyTopicTodoItem } from '@/features/digital-skills/components/journey-topic-todo-item'
import { getDigitalSkillsStages } from '@/features/digital-skills/data/catalog'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import {
  getStageTopicKeys,
  isStageTopicsComplete,
  topicProgressPercent,
} from '@/features/digital-skills/lib/topic-progress'
import type { DigitalSkillsStage } from '@/types/digital-skills'

const plannedStageIds = new Set(['everyday-digital-life', 'creative-professional'])

type StageNodeStatus = 'complete' | 'in-progress' | 'planned' | 'not-started'

function getStageNodeStatus(stage: DigitalSkillsStage, completedTopicIds: Set<string>): StageNodeStatus {
  if (plannedStageIds.has(stage.id)) {
    return 'planned'
  }
  if (isStageTopicsComplete(stage, completedTopicIds)) {
    return 'complete'
  }
  const keys = getStageTopicKeys(stage)
  const started = keys.some((key) => completedTopicIds.has(key))
  return started ? 'in-progress' : 'not-started'
}

function StageNodeIcon({ status }: { status: StageNodeStatus }) {
  if (status === 'complete') {
    return (
      <span className="flex size-10 items-center justify-center rounded-full bg-success/15 text-success">
        <Check className="size-5" strokeWidth={2.5} aria-hidden />
      </span>
    )
  }
  if (status === 'planned') {
    return (
      <span className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Sparkles className="size-4" aria-hidden />
      </span>
    )
  }
  if (status === 'in-progress') {
    return (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
        <Circle className="size-4 fill-current" aria-hidden />
      </span>
    )
  }
  return (
    <span className="flex size-10 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary">
      <Circle className="size-4" aria-hidden />
    </span>
  )
}

function JourneyStageCard({
  stage,
  completedTopicIds,
  isCurrent,
}: {
  stage: DigitalSkillsStage
  completedTopicIds: Set<string>
  isCurrent: boolean
}) {
  const topicKeys = getStageTopicKeys(stage)
  const stagePercent = topicProgressPercent(topicKeys, completedTopicIds)
  const completedInStage = topicKeys.filter((key) => completedTopicIds.has(key)).length
  const isPlanned = plannedStageIds.has(stage.id)

  return (
    <article
      className={cn(
        'relative rounded-2xl border border-border/80 bg-card p-4 shadow-[var(--shadow-soft)] sm:p-5',
        isPlanned && 'border-dashed',
        isCurrent && 'ring-2 ring-primary/30',
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={isCurrent ? 'default' : 'secondary'} className="font-normal">
          Stage {stage.order}
        </Badge>
        {isPlanned ? (
          <Badge variant="outline" className="font-normal">
            Extra skills — add when ready
          </Badge>
        ) : null}
      </div>
      <h3 className="mt-3 font-serif text-xl font-semibold leading-snug">{stage.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{stage.subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{stage.whyItMatters}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">You will be able to: </span>
        {stage.outcomeVision}
      </p>

      <div className="mt-4">
        <ProgressBar value={stagePercent} label={`Progress in ${stage.title}`} showValue />
        <p className="mt-2 text-xs text-muted-foreground">
          {completedInStage} of {topicKeys.length} skills marked done
        </p>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-foreground">Your checklist</p>
        <ul className="mt-2 space-y-2">
          {stage.topics.map((topic) => (
            <li key={topic.id}>
              <JourneyTopicTodoItem stageId={stage.id} topic={topic} />
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        Learn each skill your way — videos, asking family, or trying on your computer — then tick
        the box when you have done it.
      </p>
    </article>
  )
}

export function DigitalSkillsJourneyRoadmap() {
  const stages = getDigitalSkillsStages()
  const completedTopicIds = useCompletedTopicSet()
  const currentStage = stages.find((stage) => !isStageTopicsComplete(stage, completedTopicIds))

  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-6 text-center">
        <p className="font-serif text-2xl font-semibold sm:text-3xl">Digital Skills Journey</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Work through the checklist at your pace — no grades, only what feels useful to you.
        </p>
      </div>

      <ol className="relative space-y-0">
        {stages.map((stage, index) => {
          const isLast = index === stages.length - 1
          const nodeStatus = getStageNodeStatus(stage, completedTopicIds)
          return (
            <li key={stage.id} className="relative flex gap-4 pb-8">
              {!isLast ? (
                <span
                  className="absolute left-5 top-10 bottom-0 w-0.5 -translate-x-1/2 bg-border"
                  aria-hidden
                />
              ) : null}
              <div className="relative z-10 shrink-0 pt-1">
                <StageNodeIcon status={nodeStatus} />
              </div>
              <div className="min-w-0 flex-1 pb-1">
                <JourneyStageCard
                  stage={stage}
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
