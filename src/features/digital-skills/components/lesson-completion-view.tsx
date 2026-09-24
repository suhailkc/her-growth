import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import type { DigitalSkillsLesson } from '@/types/digital-skills'

type LessonCompletionViewProps = {
  lesson: DigitalSkillsLesson
  stageId: string
  nextLessonHref: string | null
  nextLessonTitle: string | null
  onPracticeAgain: () => void
}

export function LessonCompletionView({
  lesson,
  stageId,
  nextLessonHref,
  nextLessonTitle,
  onPracticeAgain,
}: LessonCompletionViewProps) {
  const progress = useDigitalSkillsStore((s) => s.getLessonProgress(lesson.id))

  return (
    <Card variant="sage" className="overflow-hidden text-center">
      <CardHeader className="border-b border-border/60 pb-6">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Sparkles className="size-7" aria-hidden />
        </div>
        <CardTitle className="font-serif text-3xl sm:text-4xl">Well done!</CardTitle>
        <p className="text-base text-muted-foreground">
          You finished &ldquo;{lesson.title}&rdquo;. {lesson.learningObjective}
        </p>
      </CardHeader>
      <CardContent className="space-y-4 pt-6 text-left">
        <div className="rounded-xl border border-border/70 bg-background/60 p-4">
          <p className="text-sm font-medium text-muted-foreground">What you practiced</p>
          <p className="mt-1 text-base">{lesson.practicalTask}</p>
        </div>
        {progress.completedAt ? (
          <p className="text-sm text-muted-foreground">
            Marked complete on{' '}
            {new Date(progress.completedAt).toLocaleDateString(undefined, {
              dateStyle: 'medium',
            })}
          </p>
        ) : null}
        {nextLessonTitle && nextLessonHref ? (
          <div className="rounded-xl border border-border/70 bg-background/60 p-4">
            <p className="text-sm font-medium text-muted-foreground">Up next (when you are ready)</p>
            <p className="mt-1 text-base font-medium">{nextLessonTitle}</p>
            <Link
              to={nextLessonHref}
              className={buttonVariants({
                size: 'lg',
                className: 'mt-3 rounded-xl',
              })}
            >
              Open next lesson
            </Link>
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="flex flex-col gap-3 border-t border-border/60 sm:flex-row sm:justify-center">
        <Link
          to={`/digital-skills/${stageId}`}
          className={buttonVariants({
            size: 'lg',
            className: 'w-full rounded-xl sm:w-auto',
          })}
        >
          Back to stage
        </Link>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="rounded-xl"
          onClick={onPracticeAgain}
        >
          Review steps again
        </Button>
      </CardFooter>
    </Card>
  )
}
