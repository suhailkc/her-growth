import type {
  DigitalSkillStatus,
  DigitalSkillsStageTopic,
} from '@/types/digital-skills'

export function getSkillEstimatedMinutes(topic: DigitalSkillsStageTopic): number {
  return topic.estimatedMinutes ?? 10
}

export function getSkillWhyItMatters(topic: DigitalSkillsStageTopic): string {
  return topic.whyItMatters ?? topic.description
}

export function getSkillRealLifeExample(topic: DigitalSkillsStageTopic): string {
  if (topic.realLifeExample) {
    return topic.realLifeExample
  }
  return `When you are comfortable with “${topic.label.toLowerCase()}”, everyday tasks on the computer feel a little easier.`
}

export function getSkillStatus(
  _stageId: string,
  _topic: DigitalSkillsStageTopic,
  isTopicComplete: boolean,
  lessonPhase: string | undefined,
): DigitalSkillStatus {
  if (isTopicComplete || lessonPhase === 'complete') {
    return 'learned'
  }
  if (lessonPhase === 'active' || lessonPhase === 'overview') {
    return 'practicing'
  }
  return 'not-started'
}

export function skillStatusLabel(status: DigitalSkillStatus): string {
  switch (status) {
    case 'learned':
      return 'Learned'
    case 'practicing':
      return 'Practicing'
    default:
      return 'Not started'
  }
}
