import type { DailyMission } from '@/types/user'

export type MissionStep = {
  id: string
  instruction: string
  explanation: string
  tip?: string
  imageSrc: string
  imageAlt: string
}

export type MissionSuggestion = {
  id: string
  title: string
  summary: string
  estimatedMinutes: number
}

export type TodayMissionDetail = DailyMission & {
  whyItMatters: string
  steps: MissionStep[]
  skillGained: string
  learnedSummary: string
  nextSuggestion: MissionSuggestion
}

export type MissionPhase = 'overview' | 'active' | 'complete'
