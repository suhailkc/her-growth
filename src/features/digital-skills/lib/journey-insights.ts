import { getDigitalSkillsStages } from '@/features/digital-skills/data/catalog'
import type { DigitalSkillsStage, DigitalSkillsStageTopic } from '@/types/digital-skills'

import { getAllJourneyTopicKeys, topicKey, topicProgressPercent } from './topic-progress'

export type NextSkillFocus = {
  stage: DigitalSkillsStage
  topic: DigitalSkillsStageTopic
}

export function getNextIncompleteSkill(
  completedTopicIds: Set<string>,
): NextSkillFocus | null {
  for (const stage of getDigitalSkillsStages()) {
    for (const topic of stage.topics) {
      if (!completedTopicIds.has(topicKey(stage.id, topic.id))) {
        return { stage, topic }
      }
    }
  }
  return null
}

export function getJourneyHeadlineStats(completedTopicIds: Set<string>): {
  completedCount: number
  totalCount: number
  overallPercent: number
} {
  const allKeys = getAllJourneyTopicKeys()
  return {
    completedCount: allKeys.filter((key) => completedTopicIds.has(key)).length,
    totalCount: allKeys.length,
    overallPercent: topicProgressPercent(allKeys, completedTopicIds),
  }
}

const WELCOME_BACK_DAYS = 3

export function shouldShowWelcomeBack(lastVisitAt: string | null): boolean {
  if (!lastVisitAt) {
    return false
  }
  const elapsedMs = Date.now() - new Date(lastVisitAt).getTime()
  const days = elapsedMs / (1000 * 60 * 60 * 24)
  return days >= WELCOME_BACK_DAYS
}
