import { getDigitalSkillsStages } from '@/features/digital-skills/data/catalog'
import {
  getAllJourneyTopicKeys,
  topicKey,
  topicProgressPercent,
} from '@/features/digital-skills/lib/topic-progress'
import type { DigitalSkillsStageTopic } from '@/types/digital-skills'
import type { DailyMission } from '@/types/user'

export type TodaySkillFocus = {
  stageId: string
  topicId: string
  stageOrder: number
  stageTitle: string
  whyItMatters: string
  topic: DigitalSkillsStageTopic
}

export function getTodaySkillFocus(completedTopicIds: Set<string>): TodaySkillFocus | null {
  const stages = getDigitalSkillsStages()
  for (const stage of stages) {
    for (const topic of stage.topics) {
      const key = topicKey(stage.id, topic.id)
      if (!completedTopicIds.has(key)) {
        return {
          stageId: stage.id,
          topicId: topic.id,
          stageOrder: stage.order,
          stageTitle: stage.title,
          whyItMatters: stage.whyItMatters,
          topic,
        }
      }
    }
  }
  return null
}

export function todayFocusAsDailyMission(
  focus: TodaySkillFocus,
  completedTopicIds: Set<string>,
): DailyMission {
  const key = topicKey(focus.stageId, focus.topicId)
  const done = completedTopicIds.has(key)
  const overall = topicProgressPercent(getAllJourneyTopicKeys(), completedTopicIds)

  return {
    id: key,
    title: focus.topic.label,
    summary: focus.topic.description,
    estimatedMinutes: 15,
    status: done ? 'completed' : 'not_started',
    moduleId: 'digital-skills',
    skillCategory: `Stage ${focus.stageOrder}: ${focus.stageTitle}`,
    difficulty: 'gentle',
    progressPercent: done ? 100 : overall,
  }
}

export function allJourneyTopicsComplete(completedTopicIds: Set<string>): boolean {
  return getTodaySkillFocus(completedTopicIds) === null
}
