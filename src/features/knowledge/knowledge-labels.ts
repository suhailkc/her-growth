import type { KnowledgeCategoryId } from '@/features/knowledge/types'

export const knowledgeCategoryLabels: Record<KnowledgeCategoryId, string> = {
  'english-communication': 'Basic English communication',
  'internet-literacy': 'Internet literacy',
  travel: 'Travel',
  'government-services': 'Government services',
  'consumer-awareness': 'Consumer awareness',
  household: 'Household knowledge',
  science: 'Science',
  safety: 'Safety',
  'emergency-preparedness': 'Emergency preparedness',
  'digital-citizenship': 'Digital citizenship',
}

export const knowledgeCategorySummaries: Record<KnowledgeCategoryId, string> = {
  'english-communication':
    'Everyday phrases and polite wording for phone and in person.',
  'internet-literacy': 'Browse, search, and stay safer online.',
  travel: 'Tickets, stations, and calm travel habits.',
  'government-services': 'Common documents and where to start.',
  'consumer-awareness': 'Receipts, returns, and fair treatment.',
  household: 'Home tasks, appliances, and daily upkeep.',
  science: 'Simple ideas about health, food, and the world around you.',
  safety: 'Everyday precautions at home and outside.',
  'emergency-preparedness': 'Contacts and plans before urgency hits.',
  'digital-citizenship': 'Kind, responsible behavior online.',
}
