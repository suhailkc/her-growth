export const KNOWLEDGE_CATEGORY_IDS = [
  'english-communication',
  'internet-literacy',
  'travel',
  'government-services',
  'consumer-awareness',
  'household',
  'science',
  'safety',
  'emergency-preparedness',
  'digital-citizenship',
] as const

export type KnowledgeCategoryId = (typeof KNOWLEDGE_CATEGORY_IDS)[number]

export type KnowledgeQuizQuestion = {
  id: string
  prompt: string
  options: { id: string; label: string }[]
  correctOptionId: string
  explanation: string
}

export type KnowledgeLesson = {
  id: string
  categoryId: KnowledgeCategoryId
  title: string
  whyItMatters: string
  readMinutes: number
  explanation: string[]
  examples: string[]
  practicalTask: string
  quiz?: KnowledgeQuizQuestion[]
}
