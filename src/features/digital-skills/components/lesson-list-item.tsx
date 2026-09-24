import { CheckCircle2, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProgressBar } from '@/components/common/progress-bar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { lessonProgressPercent } from '@/features/digital-skills/progress-utils'
import { difficultyDescription, difficultyLabel } from '@/lib/learning-labels'
import type {
  DigitalSkillsLesson,
  DigitalSkillsLessonProgress,
} from '@/types/digital-skills'

type LessonListItemProps = {
  stageId: string
  lesson: DigitalSkillsLesson
  progress: DigitalSkillsLessonProgress
  disabled?: boolean
}

export function LessonListItem({
  stageId,
  lesson,
  progress,
  disabled,
}: LessonListItemProps) {
  const complete = progress.phase === 'complete'
  const percent = lessonProgressPercent(lesson, progress)
  const inProgress = !complete && (progress.phase === 'active' || percent > 0)

  const card = (
    <Card variant={disabled ? 'default' : 'interactive'} className="overflow-hidden">
      <CardHeader className="flex flex-row items-start gap-3 space-y-0 pb-2">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle className="font-serif text-lg leading-snug">
              {lesson.title}
            </CardTitle>
            {complete ? (
              <Badge variant="secondary" className="gap-1 font-normal">
                <CheckCircle2 className="size-3.5" aria-hidden />
                Completed
              </Badge>
            ) : inProgress ? (
              <Badge variant="outline" className="font-normal">
                In progress
              </Badge>
            ) : null}
          </div>
          <p className="text-sm text-muted-foreground">{lesson.summary}</p>
        </div>
        <ChevronRight
          className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <Badge variant="outline" className="font-normal">
            {difficultyLabel(lesson.difficulty)} ·{' '}
            {difficultyDescription(lesson.difficulty)}
          </Badge>
          <span>{lesson.estimatedMinutes} min</span>
        </div>
        <ProgressBar value={percent} label={`Progress on ${lesson.title}`} />
      </CardContent>
    </Card>
  )

  return (
    <li>
      {disabled ? (
        <div className="opacity-60">{card}</div>
      ) : (
        <Link to={`/digital-skills/${stageId}/${lesson.id}`} className="group block">
          {card}
        </Link>
      )}
    </li>
  )
}
