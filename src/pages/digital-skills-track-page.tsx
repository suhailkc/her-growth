import { GraduationCap } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { SectionHeader } from '@/components/common/section-header'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTrackById, mockDigitalLessons } from '@/data/mock-modules'

export function DigitalSkillsTrackPage() {
  const { trackId = '' } = useParams()
  const track = getTrackById(trackId)
  const lessons = mockDigitalLessons.filter((lesson) => lesson.trackId === trackId)

  if (!track) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={GraduationCap}
          title="Track not found"
          description="This learning path is not available yet. You can browse other tracks from Digital Skills."
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
            All tracks
          </Link>
        }
      />
      <SectionHeader title="Steps in this track" />
      <ul className="space-y-3">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link to={`/digital-skills/${trackId}/${lesson.id}`}>
              <Card variant="interactive">
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{lesson.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{lesson.summary}</p>
                </CardHeader>
                <CardContent>
                  <span className="text-sm font-medium text-primary">Open step</span>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}
