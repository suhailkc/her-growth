import type { DailyMission } from '@/types/user'

export function difficultyLabel(difficulty: DailyMission['difficulty']): string {
  switch (difficulty) {
    case 'moderate':
      return 'Moderate'
    case 'stretch':
      return 'A little stretch'
    default:
      return 'Gentle'
  }
}

export function difficultyDescription(difficulty: DailyMission['difficulty']): string {
  switch (difficulty) {
    case 'moderate':
      return 'A steady pace with a few new ideas.'
    case 'stretch':
      return 'You may pause anytime — take it step by step.'
    default:
      return 'Calm and beginner-friendly.'
  }
}

export function formatMinutesSpent(totalSeconds: number): string {
  const minutes = Math.max(1, Math.round(totalSeconds / 60))
  if (minutes === 1) {
    return 'About 1 minute'
  }
  return `About ${minutes} minutes`
}
