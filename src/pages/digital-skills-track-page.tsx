import { GraduationCap, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ProgressBar } from '@/components/common/progress-bar'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getStageIcon } from '@/features/digital-skills/data/stage-meta'
import { StageSkillTopics } from '@/features/digital-skills/components/stage-skill-topics'
import {
  getDigitalSkillsStageById,
  resolveStageIdFromRouteParam,
} from '@/features/digital-skills/data/catalog'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import {
  getCurrentStageByTopics,
  getStageTopicKeys,
  getTopicStageStatus,
  topicProgressPercent,
} from '@/features/digital-skills/lib/topic-progress'

export function DigitalSkillsTrackPage() {
  const { stageId: stageParam = '' } = useParams()
  const stageId = resolveStageIdFromRouteParam(stageParam)
  const stage = getDigitalSkillsStageById(stageId)
  const completedTopicIds = useCompletedTopicSet()
  const currentStage = getCurrentStageByTopics(completedTopicIds)
  const status = stage
    ? getTopicStageStatus(stage, completedTopicIds, currentStage)
    : 'locked'
  const locked = status === 'locked'

  if (!stage) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={GraduationCap}
          title="Stage not found"
          description="This part of the journey is not available yet. Return to the roadmap to pick a stage."
          action={
            <Link
              to="/digital-skills"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to journey
            </Link>
          }
        />
      </PageContainer>
    )
  }

  const topicKeys = getStageTopicKeys(stage)
  const stagePercent = topicProgressPercent(topicKeys, completedTopicIds)

  return (
    <PageContainer>
      <PageHeader
        title={`${getStageIcon(stage.id)} Stage ${stage.order}: ${stage.title}`}
        description={stage.subtitle}
        action={
          <Link
            to="/digital-skills"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            Full roadmap
          </Link>
        }
      />

      {locked ? (
        <Card variant="warm" className="mb-8 border-dashed">
          <CardContent className="py-5 text-sm text-muted-foreground leading-relaxed">
            You can read ahead here — when the previous stage feels comfortable, these
            skills will be ready for you to practice.
          </CardContent>
        </Card>
      ) : null}

      <div className="mb-8 grid gap-4 lg:grid-cols-2">
        <Card variant="warm">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Why this matters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-muted-foreground">
              {stage.whyItMatters}
            </p>
          </CardContent>
        </Card>
        <Card variant="sage">
          <CardHeader className="flex flex-row items-start gap-3 space-y-0">
            <Target className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <CardTitle className="font-serif text-lg">
              What you will be able to do
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-muted-foreground">
              {stage.outcomeVision}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 max-w-xl">
        <ProgressBar
          value={stagePercent}
          label={`Progress in ${stage.title}`}
          showValue
        />
      </div>

      <div className="mb-4">
        <h2 className="font-serif text-xl font-semibold">Skills in this stage</h2>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          Tap a skill to see why it helps in real life and what to practice.
        </p>
      </div>
      <div className="max-w-2xl">
        <StageSkillTopics stage={stage} stageId={stageId} locked={false} />
      </div>
    </PageContainer>
  )
}
