import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { buttonVariants } from '@/components/ui/button'
import { getLessonById, getTrackById } from '@/data/mock-modules'
import { GraduationCap } from 'lucide-react'

export function DigitalSkillsLessonPage() {
  const { trackId = '', lessonId = '' } = useParams()
  const track = getTrackById(trackId)
  const lesson = getLessonById(trackId, lessonId)

  if (!track || !lesson) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={GraduationCap}
          title="Step not found"
          description="This lesson step is not ready yet. You can choose another step from the track."
          action={
            <Link
              to={`/digital-skills/${trackId}`}
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to track
            </Link>
          }
        />
      </PageContainer>
    )
  }

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={lesson.title}
        description={lesson.summary}
        action={
          <Link
            to={`/digital-skills/${trackId}`}
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            Back to track
          </Link>
        }
      />
      <EmptyState
        icon={GraduationCap}
        title="Lesson content coming soon"
        description="This screen will walk you through one step at a time with plain language and no time pressure."
      />
    </PageContainer>
  )
}
