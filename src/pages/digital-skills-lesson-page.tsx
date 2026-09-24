import { GraduationCap } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { buttonVariants } from '@/components/ui/button'
import { LessonCompletionView } from '@/features/digital-skills/components/lesson-completion-view'
import { LessonDetailOverview } from '@/features/digital-skills/components/lesson-detail-overview'
import { LessonStepPlayer } from '@/features/digital-skills/components/lesson-step-player'
import {
  getDigitalSkillsLessonById,
  getDigitalSkillsLessonsForStage,
  getDigitalSkillsStageById,
  resolveStageIdFromRouteParam,
} from '@/features/digital-skills/data/catalog'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'

export function DigitalSkillsLessonPage() {
  const { stageId: stageParam = '', lessonId = '' } = useParams()
  const stageId = resolveStageIdFromRouteParam(stageParam)
  const stage = getDigitalSkillsStageById(stageId)
  const lesson = getDigitalSkillsLessonById(stageId, lessonId)
  const progress = useDigitalSkillsStore((s) => s.getLessonProgress(lessonId))
  const startLesson = useDigitalSkillsStore((s) => s.startLesson)
  const completeLesson = useDigitalSkillsStore((s) => s.completeLesson)
  const resetLesson = useDigitalSkillsStore((s) => s.resetLesson)
  const setLessonPhase = useDigitalSkillsStore((s) => s.setLessonPhase)
  const setCurrentStepIndex = useDigitalSkillsStore((s) => s.setCurrentStepIndex)

  if (!stage || !lesson) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={GraduationCap}
          title="Lesson not found"
          description="This lesson is not ready yet. Choose another skill from your journey."
          action={
            <Link
              to={stageId ? `/digital-skills/${stageId}` : '/digital-skills'}
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to stage
            </Link>
          }
        />
      </PageContainer>
    )
  }

  const stageLessons = getDigitalSkillsLessonsForStage(stageId)
  const currentIndex = stageLessons.findIndex((l) => l.id === lessonId)
  const nextLesson = currentIndex >= 0 ? stageLessons[currentIndex + 1] : undefined

  const handleStart = () => {
    startLesson(lesson.id)
  }

  const handleBackToOverview = () => {
    setLessonPhase(lesson.id, 'overview')
  }

  const handleComplete = () => {
    completeLesson(lesson.id)
  }

  const handlePracticeAgain = () => {
    resetLesson(lesson.id)
    startLesson(lesson.id)
    setCurrentStepIndex(lesson.id, 0)
  }

  const phase = progress.phase

  return (
    <PageContainer width="narrow">
      {phase !== 'active' ? (
        <PageHeader
          title={`Stage ${stage.order}: ${stage.title}`}
          description={lesson.title}
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
      ) : null}

      {phase === 'complete' ? (
        <LessonCompletionView
          lesson={lesson}
          stageId={stageId}
          nextLessonHref={
            nextLesson ? `/digital-skills/${stageId}/${nextLesson.id}` : null
          }
          nextLessonTitle={nextLesson?.title ?? null}
          onPracticeAgain={handlePracticeAgain}
        />
      ) : phase === 'active' ? (
        <LessonStepPlayer
          lesson={lesson}
          onBackToOverview={handleBackToOverview}
          onCompleteLesson={handleComplete}
        />
      ) : (
        <LessonDetailOverview
          lesson={lesson}
          trackTitle={stage.title}
          progress={progress}
          onStart={handleStart}
        />
      )}
    </PageContainer>
  )
}
