import { BookOpen, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getFinanceLessonById } from '@/features/finance/data/lessons'
import { useFinanceStore } from '@/features/finance/finance-store'

export function FinanceLessonPage() {
  const { lessonId = '' } = useParams()
  const lesson = getFinanceLessonById(lessonId)
  const completedLessonIds = useFinanceStore((s) => s.completedLessonIds)
  const markLessonComplete = useFinanceStore((s) => s.markLessonComplete)

  if (!lesson) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={BookOpen}
          title="Lesson not found"
          description="This topic is not available yet."
          action={
            <Link
              to="/finance"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to Finance
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
        description={`${lesson.readMinutes} min read · ${lesson.summary}`}
        action={
          <Link
            to="/finance"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All lessons
          </Link>
        }
      />

      <p className="mb-6 rounded-xl border border-border/80 bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
        Educational content only — not personal financial, investment, or tax advice. For decisions
        about loans, insurance, or investments, speak with licensed professionals you trust.
      </p>

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

        <Card variant="learning">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Key takeaways</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {lesson.keyTakeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {lesson.tryItYourself ? (
          <Card variant="warm">
            <CardHeader>
              <CardTitle className="font-serif text-lg">Try it yourself</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{lesson.tryItYourself}</p>
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
          to="/finance"
          className={buttonVariants({ variant: 'secondary', size: 'lg', className: 'rounded-xl' })}
        >
          Back to Finance
        </Link>
      </div>
    </PageContainer>
  )
}
