import { GraduationCap } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ProgressBar } from '@/components/common/progress-bar'
import { SectionHeader } from '@/components/common/section-header'
import { buttonVariants } from '@/components/ui/button'
import { LessonListItem } from '@/features/digital-skills/components/lesson-list-item'
import {
  getDigitalSkillsLessonsForTrack,
  getDigitalSkillsTrackById,
} from '@/features/digital-skills/data/catalog'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import { useTrackProgress } from '@/features/digital-skills/hooks/use-track-progress'

export function DigitalSkillsTrackPage() {
  const { trackId = '' } = useParams()
  const track = getDigitalSkillsTrackById(trackId)
  const lessons = getDigitalSkillsLessonsForTrack(trackId)
  const trackProgress = useTrackProgress(trackId)
  const getLessonProgress = useDigitalSkillsStore((s) => s.getLessonProgress)

  if (!track) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={GraduationCap}
          title="Category not found"
          description="This learning path is not available yet. You can browse other categories from Digital Skills."
          action={
            <Link
              to="/digital-skills"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to Digital Skills
            </Link>
          }
        />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PageHeader
        title={track.title}
        description={track.description}
        action={
          <Link
            to="/digital-skills"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All categories
          </Link>
        }
      />
      <div className="mb-6 max-w-xl">
        <ProgressBar value={trackProgress} label={`Progress in ${track.title}`} showValue />
      </div>
      <SectionHeader title="Lessons" description="Open one lesson at a time. Completed lessons stay available to review." />
      <ul className="space-y-3">
        {lessons.map((lesson) => (
          <LessonListItem
            key={lesson.id}
            trackId={trackId}
            lesson={lesson}
            progress={getLessonProgress(lesson.id)}
          />
        ))}
      </ul>
    </PageContainer>
  )
}
