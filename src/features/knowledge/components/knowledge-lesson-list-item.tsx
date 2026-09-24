import { CheckCircle2, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { KnowledgeLesson } from '@/features/knowledge/types'

type KnowledgeLessonListItemProps = {
  lesson: KnowledgeLesson
  complete: boolean
}

export function KnowledgeLessonListItem({
  lesson,
  complete,
}: KnowledgeLessonListItemProps) {
  return (
    <li>
      <Link to={`/knowledge/lessons/${lesson.id}`} className="group block">
        <Card variant="interactive" className="overflow-hidden">
          <CardHeader className="flex flex-row items-start gap-3 space-y-0 pb-2">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="font-serif text-lg leading-snug">
                  {lesson.title}
                </CardTitle>
                {complete ? (
                  <Badge variant="secondary" className="gap-1 font-normal">
                    <CheckCircle2 className="size-3.5" aria-hidden />
                    Done
                  </Badge>
                ) : null}
              </div>
              <p className="text-sm text-muted-foreground">{lesson.whyItMatters}</p>
            </div>
            <ChevronRight
              className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">
            {lesson.readMinutes} min ·{' '}
            {lesson.quiz?.length ? 'Includes mini quiz' : 'Practical task'}
          </CardContent>
        </Card>
      </Link>
    </li>
  )
}
