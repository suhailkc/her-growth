import { getDigitalSkillsStages } from '@/features/digital-skills/data/catalog'

import {
  getAllJourneyTopicKeys,
  isStageTopicsComplete,
  topicProgressPercent,
} from '@/features/digital-skills/lib/topic-progress'

export type JourneyAchievementBadge = {
  id: string
  emoji: string
  title: string
  hint: string
}

export const journeyAchievementBadges: JourneyAchievementBadge[] = [
  {
    id: 'first-task',
    emoji: '🌱',
    title: 'First tick',
    hint: 'Mark any skill comfortable',
  },
  {
    id: 'first-stage',
    emoji: '🎯',
    title: 'First stage',
    hint: 'Finish every skill in one stage',
  },
  {
    id: 'halfway',
    emoji: '🌓',
    title: 'Halfway',
    hint: 'Reach 50% of the journey',
  },
]

export function isJourneyBadgeEarned(
  badgeId: string,
  completedTopicIds: Set<string>,
): boolean {
  const allKeys = getAllJourneyTopicKeys()
  const completedCount = allKeys.filter((key) => completedTopicIds.has(key)).length
  const overallPercent = topicProgressPercent(allKeys, completedTopicIds)
  const anyStageComplete = getDigitalSkillsStages().some((stage) =>
    isStageTopicsComplete(stage, completedTopicIds),
  )

  switch (badgeId) {
    case 'first-task':
      return completedCount >= 1
    case 'first-stage':
      return anyStageComplete
    case 'halfway':
      return overallPercent >= 50
    default:
      return false
  }
}

export function earnedJourneyBadgeCount(completedTopicIds: Set<string>): number {
  return journeyAchievementBadges.filter((badge) =>
    isJourneyBadgeEarned(badge.id, completedTopicIds),
  ).length
}
