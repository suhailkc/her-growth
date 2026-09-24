import { useEffect, useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { useCompletionDelight } from '@/features/digital-skills/components/completion-delight-provider'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import { cn } from '@/lib/utils'
import type { DigitalSkillsStageTopic } from '@/types/digital-skills'

type JourneyTopicTodoItemProps = {
  stageId: string
  topic: DigitalSkillsStageTopic
  disabled?: boolean
}

export function JourneyTopicTodoItem({
  stageId,
  topic,
  disabled,
}: JourneyTopicTodoItemProps) {
  const inputId = `ds-topic-${stageId}-${topic.id}`
  const descriptionId = `${inputId}-description`
  const complete = useDigitalSkillsStore((s) => s.isTopicComplete(stageId, topic.id))
  const toggleTopicComplete = useDigitalSkillsStore((s) => s.toggleTopicComplete)
  const { onTopicMarkedComplete } = useCompletionDelight()
  const [justCompleted, setJustCompleted] = useState(false)

  useEffect(() => {
    if (!justCompleted) {
      return
    }
    const timer = window.setTimeout(() => setJustCompleted(false), 650)
    return () => window.clearTimeout(timer)
  }, [justCompleted])

  return (
    <label
      htmlFor={inputId}
      className={cn(
        'flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border border-border/70 bg-background px-4 py-3.5 transition-[color,background-color,border-color,box-shadow,transform] duration-200 active:bg-muted/40',
        complete && 'border-success/35 bg-success/5 active:bg-success/10',
        justCompleted && 'task-complete-pop',
        disabled && 'pointer-events-none opacity-50',
      )}
    >
      <Checkbox
        id={inputId}
        checked={complete}
        disabled={disabled}
        onCheckedChange={(checked) => {
          if (checked === true) {
            setJustCompleted(true)
            onTopicMarkedComplete(stageId, topic.id)
            return
          }
          toggleTopicComplete(stageId, topic.id)
        }}
        className={cn(
          'mt-0.5 size-6 shrink-0 transition-transform duration-200',
          justCompleted && 'task-check-pop',
        )}
        aria-describedby={descriptionId}
      />
      <div className="min-w-0 flex-1 space-y-0.5">
        <span
          className={cn(
            'block text-base font-medium leading-snug',
            complete && 'text-muted-foreground',
          )}
        >
          {complete ? `${topic.label} ✓` : topic.label}
        </span>
        <p
          id={descriptionId}
          className={cn(
            'text-sm leading-snug text-pretty text-muted-foreground',
            complete && 'text-muted-foreground/80',
          )}
        >
          {topic.description}
        </p>
      </div>
    </label>
  )
}
