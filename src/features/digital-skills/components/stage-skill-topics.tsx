import { CheckCircle2, ChevronRight, CircleDashed } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import type {
  DigitalSkillsStage,
  DigitalSkillsStageTopic,
} from '@/types/digital-skills'

type StageSkillTopicsProps = {
  stage: DigitalSkillsStage
  stageId: string
  locked: boolean
}

function isTopicLearned(
  stageId: string,
  topic: DigitalSkillsStageTopic,
  isTopicComplete: (stageId: string, topicId: string) => boolean,
  lessonProgress: Record<string, { phase: string } | undefined>,
): boolean {
  if (isTopicComplete(stageId, topic.id)) {
    return true
  }
  if (topic.lessonId) {
    return lessonProgress[topic.lessonId]?.phase === 'complete'
  }
  return false
}

export function StageSkillTopics({ stage, stageId, locked }: StageSkillTopicsProps) {
  const lessonProgress = useDigitalSkillsStore((s) => s.lessons)
  const isTopicComplete = useDigitalSkillsStore((s) => s.isTopicComplete)

  return (
    <ul className="space-y-2">
      {stage.topics.map((topic) => {
        const complete = isTopicLearned(stageId, topic, isTopicComplete, lessonProgress)

        return (
          <li key={topic.id}>
            <Link
              to={`/digital-skills/${stageId}/skill/${topic.id}`}
              className={cn(
                'flex min-h-12 items-center gap-3 rounded-xl border border-border/70 bg-background px-4 py-3',
                'transition-colors hover:border-primary/40 hover:bg-primary/5',
                locked && 'opacity-80',
              )}
            >
              {complete ? (
                <CheckCircle2 className="size-5 shrink-0 text-success" aria-hidden />
              ) : (
                <CircleDashed
                  className="size-5 shrink-0 text-muted-foreground"
                  aria-hidden
                />
              )}
              <span className="min-w-0 flex-1 text-base leading-snug">
                {topic.label}
              </span>
              <ChevronRight
                className="size-4 shrink-0 text-muted-foreground"
                aria-hidden
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
