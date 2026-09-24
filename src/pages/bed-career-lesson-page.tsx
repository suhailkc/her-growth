import { BookOpen, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { careerTrackLabels } from '@/features/career/career-labels'
import { getCareerLessonById } from '@/features/career/data/lessons'
import { useCareerStore } from '@/features/career/career-store'

export function BedCareerLessonPage() {
  const { lessonId = '' } = useParams()
  const lesson = getCareerLessonById(lessonId)
  const completedLessonIds = useCareerStore((s) => s.completedLessonIds)
  const markLessonComplete = useCareerStore((s) => s.markLessonComplete)

  if (!lesson) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={BookOpen}
          title="Lesson not found"
          description="This topic is not available yet."
          action={
            <Link
              to="/bed-career"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to B.Ed. & Career
            </Link>
          }
        />
      </PageContainer>
    )
  }

  const complete = completedLessonIds.includes(lesson.id)

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={lesson.title}
        description={`${careerTrackLabels[lesson.trackId]} · ${lesson.readMinutes} min · ${lesson.summary}`}
        action={
          <Link
            to="/bed-career"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All topics
          </Link>
        }
      />

      <article className="space-y-8">
        {lesson.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-xl font-semibold">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-foreground/90">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        {lesson.tryItYourself ? (
          <Card variant="warm">
            <CardHeader>
              <CardTitle className="font-serif text-lg">Try it yourself</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {lesson.tryItYourself}
              </p>
            </CardContent>
          </Card>
        ) : null}
      </article>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        {complete ? (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="size-5 text-primary" aria-hidden />
            You marked this lesson as read on this device.
          </p>
        ) : (
          <Button type="button" size="lg" onClick={() => markLessonComplete(lesson.id)}>
            Mark as read
          </Button>
        )}
        <Link
          to="/bed-career"
          className={buttonVariants({
            variant: 'secondary',
            size: 'lg',
            className: 'rounded-xl',
          })}
        >
          Back to B.Ed. & Career
        </Link>
      </div>
    </PageContainer>
  )
}
