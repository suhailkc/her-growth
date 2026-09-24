export type JourneyMilestone = {
  id: string
  emoji: string
  title: string
  stageId: string
}

export const stageIcons: Record<string, string> = {
  'computer-confidence': '💻',
  'files-organization': '📁',
  'internet-basics': '🌐',
  'email-communication': '📧',
  'documents-pdfs': '📄',
  'everyday-digital-life': '🌍',
  'digital-safety': '🔐',
  'creative-professional': '🎨',
  'ai-basics': '🤖',
  'ai-comfortable': '✨',
  'ai-confident': '🧠',
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'started',
    emoji: '🌱',
    title: 'Started My Digital Journey',
    stageId: 'computer-confidence',
  },
  {
    id: 'computer-comfort',
    emoji: '💻',
    title: 'Comfortable With My Computer',
    stageId: 'computer-confidence',
  },
  {
    id: 'confident-online',
    emoji: '🌐',
    title: 'Confident Online',
    stageId: 'internet-basics',
  },
  {
    id: 'digital-organizer',
    emoji: '📁',
    title: 'Digital Organizer',
    stageId: 'files-organization',
  },
  {
    id: 'digitally-safe',
    emoji: '🔐',
    title: 'Digitally Safe',
    stageId: 'digital-safety',
  },
  {
    id: 'creating',
    emoji: '🎨',
    title: 'Creating With Technology',
    stageId: 'creative-professional',
  },
  {
    id: 'ai-starter',
    emoji: '🤖',
    title: 'Started Using AI Safely',
    stageId: 'ai-basics',
  },
  {
    id: 'ai-thoughtful',
    emoji: '🧠',
    title: 'Thoughtful With AI',
    stageId: 'ai-confident',
  },
]

export function getStageIcon(stageId: string): string {
  return stageIcons[stageId] ?? '🌱'
}
