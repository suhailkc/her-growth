export type JourneyMilestone = {
  id: string
  emoji: string
  title: string
  stageId: string
}

export const stageIcons: Record<string, string> = {
  'computer-confidence': '💻',
  'smartphone-essentials': '📱',
  'files-organization': '📁',
  'internet-basics': '🌐',
  'email-communication': '📧',
  'documents-pdfs': '📄',
  'school-family-online': '🏫',
  'everyday-digital-life': '🌍',
  'digital-safety': '🔐',
  'creative-professional': '🎨',
  'ai-basics': '🤖',
  'ai-comfortable': '✨',
  'ai-confident': '🧠',
  'staying-current': '🔄',
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
    id: 'phone-comfort',
    emoji: '📱',
    title: 'Comfortable With My Phone',
    stageId: 'smartphone-essentials',
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
    id: 'school-online',
    emoji: '🏫',
    title: 'School & Family Online',
    stageId: 'school-family-online',
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
  {
    id: 'habits',
    emoji: '🔄',
    title: 'Keeping Devices Healthy',
    stageId: 'staying-current',
  },
]

export function getStageIcon(stageId: string): string {
  return stageIcons[stageId] ?? '🌱'
}
