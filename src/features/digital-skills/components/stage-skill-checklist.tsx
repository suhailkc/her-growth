import { JourneyTopicTodoItem } from '@/features/digital-skills/components/journey-topic-todo-item'
import type { DigitalSkillsStage } from '@/types/digital-skills'

type StageSkillChecklistProps = {
  stage: DigitalSkillsStage
  stageId: string
  disabled?: boolean
}

export function StageSkillChecklist({
  stage,
  stageId,
  disabled,
}: StageSkillChecklistProps) {
  return (
    <ul className="space-y-2">
      {stage.topics.map((topic) => (
        <li key={topic.id}>
          <JourneyTopicTodoItem stageId={stageId} topic={topic} disabled={disabled} />
        </li>
      ))}
    </ul>
  )
}
