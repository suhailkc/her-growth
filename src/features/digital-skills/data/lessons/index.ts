import { computerBasicsLessons } from '@/features/digital-skills/data/lessons/computer-basics'
import { communicationLessons } from '@/features/digital-skills/data/lessons/communication'
import { digitalSafetyLessons } from '@/features/digital-skills/data/lessons/digital-safety'
import { documentsLessons } from '@/features/digital-skills/data/lessons/documents'
import { emailLessons } from '@/features/digital-skills/data/lessons/email'
import { internetLessons } from '@/features/digital-skills/data/lessons/internet'
import { digitalSkillsStages } from '@/features/digital-skills/data/stages'
import type { DigitalSkillsLesson } from '@/types/digital-skills'

const stageOrder = new Map(digitalSkillsStages.map((stage) => [stage.id, stage.order]))

export const digitalSkillsLessons: DigitalSkillsLesson[] = [
  ...computerBasicsLessons,
  ...internetLessons,
  ...emailLessons,
  ...documentsLessons,
  ...communicationLessons,
  ...digitalSafetyLessons,
].sort((a, b) => {
  const stageDiff = (stageOrder.get(a.stageId) ?? 0) - (stageOrder.get(b.stageId) ?? 0)
  if (stageDiff !== 0) {
    return stageDiff
  }
  return a.order - b.order
})
