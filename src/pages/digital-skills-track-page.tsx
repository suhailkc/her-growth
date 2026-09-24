import { GraduationCap, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ProgressBar } from '@/components/common/progress-bar'
import { SectionHeader } from '@/components/common/section-header'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LessonListItem } from '@/features/digital-skills/components/lesson-list-item'
import { StageSkillTopics } from '@/features/digital-skills/components/stage-skill-topics'
import {
  getDigitalSkillsLessonsForStage,
  getDigitalSkillsStageById,
  resolveStageIdFromRouteParam,
} from '@/features/digital-skills/data/catalog'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import { useStageProgress } from '@/features/digital-skills/hooks/use-track-progress'
import { getStageStatus, getCurrentStageId } from '@/features/digital-skills/lib/stage-status'

export function DigitalSkillsTrackPage() {
  const { stageId: stageParam = '' } = useParams()
  const stageId = resolveStageIdFromRouteParam(stageParam)
  const stage = getDigitalSkillsStageById(stageId)
  const lessons = getDigitalSkillsLessonsForStage(stageId)
  const stageProgress = useStageProgress(stageId)
  const lessonProgress = useDigitalSkillsStore((s) => s.lessons)
  const getLessonProgress = useDigitalSkillsStore((s) => s.getLessonProgress)
  const currentStageId = getCurrentStageId(lessonProgress)
  const status = stage
    ? getStageStatus(stage, lessonProgress, currentStageId)
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

  return (
    <PageContainer>
      <PageHeader
        title={`Stage ${stage.order}: ${stage.title}`}
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
            Full journey
          </Link>
        }
      />

      {locked ? (
        <Card variant="warm" className="mb-8 border-dashed">
          <CardContent className="py-5 text-sm text-muted-foreground leading-relaxed">
            Finish the previous stage to unlock these lessons. You can still read why this stage
            matters and preview the skills below.
          </CardContent>
        </Card>
      ) : null}

      <div className="mb-8 grid gap-4 lg:grid-cols-2">
        <Card variant="warm">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Why this matters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-muted-foreground">{stage.whyItMatters}</p>
          </CardContent>
        </Card>
        <Card variant="sage">
          <CardHeader className="flex flex-row items-start gap-3 space-y-0">
            <Target className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <CardTitle className="font-serif text-lg">What you will be able to do</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-muted-foreground">{stage.outcomeVision}</p>
          </CardContent>
        </Card>
      </div>

      {lessons.length > 0 ? (
        <div className="mb-8 max-w-xl">
          <ProgressBar value={stageProgress} label={`Progress in ${stage.title}`} showValue />
        </div>
      ) : null}

      <SectionHeader
        title="Skills in this stage"
        description="Each item is a real-life ability. Tap a skill when a lesson is ready for you."
      />
      <div className="mb-10 max-w-2xl">
        <StageSkillTopics stage={stage} stageId={stageId} locked={locked} />
      </div>

      {lessons.length > 0 ? (
        <>
          <SectionHeader
            title="Guided practice"
            description="Short, step-by-step lessons you can finish in one sitting — review anytime."
          />
          <ul className="space-y-3">
            {lessons.map((lesson) => (
              <LessonListItem
                key={lesson.id}
                stageId={stageId}
                lesson={lesson}
                progress={getLessonProgress(lesson.id)}
                disabled={locked}
              />
            ))}
          </ul>
        </>
      ) : null}
    </PageContainer>
  )
}
