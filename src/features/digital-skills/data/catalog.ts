import { digitalSkillsStages } from '@/features/digital-skills/data/stages'
import type { DigitalSkillsStage } from '@/types/digital-skills'

export function getDigitalSkillsStages(): DigitalSkillsStage[] {
  return [...digitalSkillsStages].sort((a, b) => a.order - b.order)
}

export function getDigitalSkillsStageById(
  stageId: string,
): DigitalSkillsStage | undefined {
  return digitalSkillsStages.find((stage) => stage.id === stageId)
}

/** @deprecated Use stage routes — maps old category slugs to journey stages */
export const legacyTrackToStageId: Record<string, string> = {
  'computer-basics': 'computer-confidence',
  internet: 'internet-basics',
  email: 'email-communication',
  documents: 'documents-pdfs',
  communication: 'email-communication',
  'digital-safety': 'digital-safety',
}

export function resolveStageIdFromRouteParam(param: string): string {
  return legacyTrackToStageId[param] ?? param
}

export function getStageTopic(
  stageId: string,
  topicId: string,
):
  | { stage: DigitalSkillsStage; topic: DigitalSkillsStage['topics'][number] }
  | undefined {
  const stage = getDigitalSkillsStageById(stageId)
  if (!stage) {
    return undefined
  }
  const topic = stage.topics.find((item) => item.id === topicId)
  if (!topic) {
    return undefined
  }
  return { stage, topic }
}
