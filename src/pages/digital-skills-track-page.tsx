import { GraduationCap } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ProgressBar } from '@/components/common/progress-bar'
import { buttonVariants } from '@/components/ui/button'
import { StageSkillChecklist } from '@/features/digital-skills/components/stage-skill-checklist'
import { getStageIcon } from '@/features/digital-skills/data/stage-meta'
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
  const checklistDisabled = status === 'locked'

  if (!stage) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={GraduationCap}
          title="Stage not found"
          description="Head back to the roadmap and pick a stage."
          action={
            <Link
              to="/"
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
    <PageContainer width="narrow">
      <PageHeader
        title={`${getStageIcon(stage.id)} ${stage.title}`}
        description={stage.subtitle}
        action={
          <Link
            to="/"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            Roadmap
          </Link>
        }
      />

      <div className="mb-6 max-w-xl">
        <ProgressBar value={stagePercent} label={`${stage.title} progress`} showValue />
      </div>

      <p className="mb-3 text-sm text-muted-foreground">
        Try each skill your way — then tick when it feels easy. 🌱
      </p>

      <StageSkillChecklist
        stage={stage}
        stageId={stageId}
        disabled={checklistDisabled}
      />
    </PageContainer>
  )
}
