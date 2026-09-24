import { CheckCircle2, CircleDashed } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import type { DigitalSkillsStage, DigitalSkillsStageTopic } from '@/types/digital-skills'

type StageSkillTopicsProps = {
  stage: DigitalSkillsStage
  stageId: string
  locked: boolean
}

function topicLessonComplete(
  topic: DigitalSkillsStageTopic,
  progressByLessonId: Record<string, { phase: string } | undefined>,
): boolean {
  if (!topic.lessonId) {
    return false
  }
  return progressByLessonId[topic.lessonId]?.phase === 'complete'
}

export function StageSkillTopics({ stage, stageId, locked }: StageSkillTopicsProps) {
  const lessonProgress = useDigitalSkillsStore((s) => s.lessons)

  const seenLessonLinks = new Set<string>()

  return (
    <ul className="space-y-2">
      {stage.topics.map((topic) => {
        const complete = topicLessonComplete(topic, lessonProgress)
        const canLink = !locked && topic.lessonId && !seenLessonLinks.has(topic.lessonId)
        if (topic.lessonId) {
          seenLessonLinks.add(topic.lessonId)
        }

        const content = (
          <>
            {complete ? (
              <CheckCircle2 className="size-5 shrink-0 text-success" aria-hidden />
            ) : (
              <CircleDashed className="size-5 shrink-0 text-muted-foreground" aria-hidden />
            )}
            <span className="min-w-0 flex-1 text-base leading-snug">{topic.label}</span>
            {!topic.lessonId ? (
              <Badge variant="outline" className="shrink-0 font-normal text-xs">
                Soon
              </Badge>
            ) : null}
          </>
        )

        return (
          <li key={topic.id}>
            {canLink ? (
              <Link
                to={`/digital-skills/${stageId}/${topic.lessonId}`}
                className={cn(
                  'flex min-h-11 items-center gap-3 rounded-xl border border-border/70 bg-background px-4 py-3',
                  'transition-colors hover:border-primary/40 hover:bg-primary/5',
                )}
              >
                {content}
              </Link>
            ) : (
              <div
                className={cn(
                  'flex min-h-11 items-center gap-3 rounded-xl border border-border/60 px-4 py-3',
                  locked || !topic.lessonId ? 'bg-muted/30 text-muted-foreground' : 'bg-background',
                )}
              >
                {content}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
