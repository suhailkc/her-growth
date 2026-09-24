export type DigitalSkillsStageTopic = {
  id: string
  label: string
  /** Short hint — what to try on your computer */
  description: string
}

export type DigitalSkillsStage = {
  id: string
  order: number
  title: string
  subtitle: string
  whyItMatters: string
  outcomeVision: string
  topics: DigitalSkillsStageTopic[]
}

export type DigitalSkillsStageStatus = 'complete' | 'current' | 'available' | 'locked'
