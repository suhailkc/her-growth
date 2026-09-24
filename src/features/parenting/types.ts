export const PARENTING_ACTIVITY_CATEGORY_IDS = [
  'learning',
  'creativity',
  'language',
  'numbers',
  'motor-skills',
  'outdoor',
  'family',
] as const

export type ParentingActivityCategoryId =
  (typeof PARENTING_ACTIVITY_CATEGORY_IDS)[number]

export type ParentingActivityDifficulty = 'easy' | 'moderate' | 'stretch'

export type ParentingActivity = {
  id: string
  title: string
  categoryId: ParentingActivityCategoryId
  ageRange: string
  durationMinutes: number
  difficulty: ParentingActivityDifficulty
  description: string
  materials: string[]
  instructions: string[]
  benefits: string
}

export type ParentingStory = {
  id: string
  title: string
  ageRange: string
  readMinutes: number
  summary: string
  paragraphs: string[]
}

export type ParentingArticle = {
  id: string
  title: string
  readMinutes: number
  summary: string
  sections: { heading: string; paragraphs: string[] }[]
}
