import type {
  ParentingActivityCategoryId,
  ParentingActivityDifficulty,
} from '@/features/parenting/types'

export const parentingCategoryLabels: Record<ParentingActivityCategoryId, string> = {
  learning: 'Learning',
  creativity: 'Creativity',
  language: 'Language',
  numbers: 'Numbers',
  'motor-skills': 'Motor Skills',
  outdoor: 'Outdoor',
  family: 'Family',
}

export const parentingDifficultyLabels: Record<ParentingActivityDifficulty, string> = {
  easy: 'Easy',
  moderate: 'Moderate',
  stretch: 'A little challenge',
}
