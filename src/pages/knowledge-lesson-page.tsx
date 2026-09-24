import { BookOpen, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { KnowledgeQuiz } from '@/features/knowledge/components/knowledge-quiz'
import { getKnowledgeLessonById } from '@/features/knowledge/data/lessons'
import { knowledgeCategoryLabels } from '@/features/knowledge/knowledge-labels'
import { useKnowledgeStore } from '@/features/knowledge/knowledge-store'

export function KnowledgeLessonPage() {
  const { lessonId = '' } = useParams()
  const lesson = getKnowledgeLessonById(lessonId)
  const completedLessonIds = useKnowledgeStore((s) => s.completedLessonIds)
  const markLessonComplete = useKnowledgeStore((s) => s.markLessonComplete)

  if (!lesson) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={BookOpen}
          title="Lesson not found"
          description="This lesson is not available yet."
          action={
            <Link
              to="/knowledge"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Browse categories
            </Link>
          }
        />
      </PageContainer>
    )
  }

  const complete = completedLessonIds.includes(lesson.id)
  const categoryHref = `/knowledge/categories/${lesson.categoryId}`

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={lesson.title}
        description={`${knowledgeCategoryLabels[lesson.categoryId]} · ${lesson.readMinutes} min`}
        action={
          <Link
            to={categoryHref}
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            Back to category
          </Link>
        }
      />

      <article className="space-y-6">
        <Card variant="warm">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Why it matters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {lesson.whyItMatters}
            </p>
          </CardContent>
        </Card>

        <section>
          <h2 className="font-serif text-xl font-semibold">Simple explanation</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
            {lesson.explanation.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold">Examples</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-foreground/90">
            {lesson.examples.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <Card variant="learning">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Practical task</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {lesson.practicalTask}
            </p>
          </CardContent>
        </Card>

        {lesson.quiz && lesson.quiz.length > 0 ? (
          <section aria-labelledby="knowledge-quiz-heading">
            <h2
              id="knowledge-quiz-heading"
              className="font-serif text-xl font-semibold"
            >
              Mini quiz
            </h2>
            <p className="mt-1 mb-4 text-sm text-muted-foreground">
              Optional — check your understanding. No score is saved.
            </p>
            <KnowledgeQuiz questions={lesson.quiz} />
          </section>
        ) : null}
      </article>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        {complete ? (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="size-5 text-primary" aria-hidden />
            Lesson marked complete on this device.
          </p>
        ) : (
          <Button type="button" size="lg" onClick={() => markLessonComplete(lesson.id)}>
            Mark lesson complete
          </Button>
        )}
        <Link
          to={categoryHref}
          className={buttonVariants({
            variant: 'secondary',
            size: 'lg',
            className: 'rounded-xl',
          })}
        >
          Back to category
        </Link>
      </div>
    </PageContainer>
  )
}
