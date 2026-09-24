import { getDigitalSkillsStages } from '@/features/digital-skills/data/catalog'
import type { DigitalSkillsStage } from '@/types/digital-skills'

export function topicKey(stageId: string, topicId: string): string {
  return `${stageId}:${topicId}`
}

export function parseTopicKey(
  key: string,
): { stageId: string; topicId: string } | null {
  const separator = key.indexOf(':')
  if (separator <= 0) {
    return null
  }
  return {
    stageId: key.slice(0, separator),
    topicId: key.slice(separator + 1),
  }
}

export function getAllJourneyTopicKeys(): string[] {
  return getDigitalSkillsStages().flatMap((stage) =>
    stage.topics.map((topic) => topicKey(stage.id, topic.id)),
  )
}

export function getStageTopicKeys(stage: DigitalSkillsStage): string[] {
  return stage.topics.map((topic) => topicKey(stage.id, topic.id))
}

export function topicProgressPercent(
  topicKeys: string[],
  completedTopicIds: Set<string>,
): number {
  if (topicKeys.length === 0) {
    return 0
  }
  const completed = topicKeys.filter((key) => completedTopicIds.has(key)).length
  return Math.round((completed / topicKeys.length) * 100)
}

export function isStageTopicsComplete(
  stage: DigitalSkillsStage,
  completedTopicIds: Set<string>,
): boolean {
  const keys = getStageTopicKeys(stage)
  return keys.length > 0 && keys.every((key) => completedTopicIds.has(key))
}

export function getCurrentStageByTopics(
  completedTopicIds: Set<string>,
): DigitalSkillsStage | null {
  const stages = getDigitalSkillsStages()
  for (const stage of stages) {
    if (!isStageTopicsComplete(stage, completedTopicIds)) {
      return stage
    }
  }
  return null
}

export type TopicStageStatus = 'complete' | 'current' | 'available' | 'locked'

function isPreviousStageTopicsComplete(
  stage: DigitalSkillsStage,
  completedTopicIds: Set<string>,
): boolean {
  if (stage.order <= 1) {
    return true
  }
  const stages = getDigitalSkillsStages()
  const previous = stages
    .filter((item) => item.order < stage.order)
    .sort((a, b) => b.order - a.order)[0]
  if (!previous) {
    return true
  }
  return isStageTopicsComplete(previous, completedTopicIds)
}

export function getTopicStageStatus(
  stage: DigitalSkillsStage,
  completedTopicIds: Set<string>,
  currentStage: DigitalSkillsStage | null,
): TopicStageStatus {
  if (isStageTopicsComplete(stage, completedTopicIds)) {
    return 'complete'
  }
  if (!isPreviousStageTopicsComplete(stage, completedTopicIds)) {
    return 'locked'
  }
  if (currentStage?.id === stage.id) {
    return 'current'
  }
  return 'available'
}

export function countCompletedTopics(completedTopicIds: Set<string>): number {
  return getAllJourneyTopicKeys().filter((key) => completedTopicIds.has(key)).length
}
