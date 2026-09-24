import { Clock, GraduationCap, Lightbulb, Sparkles } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { StatusBadge } from '@/components/common/status-badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  getDigitalSkillsLessonById,
  getStageTopic,
  resolveStageIdFromRouteParam,
} from '@/features/digital-skills/data/catalog'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import {
  getSkillEstimatedMinutes,
  getSkillRealLifeExample,
  getSkillStatus,
  getSkillWhyItMatters,
  skillStatusLabel,
} from '@/features/digital-skills/lib/skill-status'

export function DigitalSkillsSkillPage() {
  const { stageId: stageParam = '', topicId = '' } = useParams()
  const stageId = resolveStageIdFromRouteParam(stageParam)
  const match = getStageTopic(stageId, topicId)
  const isTopicComplete = useDigitalSkillsStore((s) =>
    s.isTopicComplete(stageId, topicId),
  )
  const toggleTopicComplete = useDigitalSkillsStore((s) => s.toggleTopicComplete)
  const lessonProgress = useDigitalSkillsStore((s) =>
    match?.topic.lessonId ? s.getLessonProgress(match.topic.lessonId) : undefined,
  )

  if (!match) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={GraduationCap}
          title="Skill not found"
          description="This skill is not on your journey yet. Return to the roadmap to choose another."
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

  const { stage, topic } = match
  const lesson = topic.lessonId
    ? getDigitalSkillsLessonById(stageId, topic.lessonId)
    : undefined
  const status = getSkillStatus(stageId, topic, isTopicComplete, lessonProgress?.phase)
  const statusTone =
    status === 'learned' ? 'success' : status === 'practicing' ? 'active' : 'neutral'

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={topic.label}
        description={`Stage ${stage.order}: ${stage.title}`}
        action={
          <Link
            to={`/digital-skills/${stageId}`}
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            Back to stage
          </Link>
        }
      />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <StatusBadge label={skillStatusLabel(status)} tone={statusTone} />
        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="size-4" aria-hidden />
          About {getSkillEstimatedMinutes(topic)} minutes
        </span>
      </div>

      <div className="space-y-4">
        <Card variant="warm">
          <CardHeader className="flex flex-row items-start gap-3 space-y-0">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <CardTitle className="font-serif text-lg">Why this matters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-muted-foreground">
              {getSkillWhyItMatters(topic)}
            </p>
          </CardContent>
        </Card>

        <Card variant="sage">
          <CardHeader className="flex flex-row items-start gap-3 space-y-0">
            <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <CardTitle className="font-serif text-lg">Real-life example</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-muted-foreground">
              {getSkillRealLifeExample(topic)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-lg">What to practice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              {topic.description}
            </p>
            {lesson ? (
              <Link
                to={`/digital-skills/${stageId}/${topic.lessonId}`}
                className={buttonVariants({
                  size: 'lg',
                  className: 'w-full rounded-xl sm:w-auto',
                })}
              >
                Practice this skill
              </Link>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try this on your computer at your own pace — videos, family help, or
                gentle exploration all count.
              </p>
            )}
            <button
              type="button"
              className={buttonVariants({
                variant: isTopicComplete ? 'secondary' : 'outline',
                size: 'lg',
                className: 'w-full rounded-xl sm:w-auto',
              })}
              onClick={() => toggleTopicComplete(stageId, topic.id)}
            >
              {isTopicComplete
                ? 'Mark as still practicing'
                : 'I feel comfortable with this'}
            </button>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
