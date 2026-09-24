import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
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

  return (
    <label
      htmlFor={inputId}
      className={cn(
        'flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border border-border/70 bg-background px-4 py-3.5 transition-colors active:bg-muted/40',
        complete && 'border-success/35 bg-success/5 active:bg-success/10',
        disabled && 'pointer-events-none opacity-50',
      )}
    >
      <Checkbox
        id={inputId}
        checked={complete}
        disabled={disabled}
        onCheckedChange={() => toggleTopicComplete(stageId, topic.id)}
        className="mt-0.5 size-6 shrink-0"
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
