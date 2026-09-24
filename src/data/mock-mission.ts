import type { DailyMission } from '@/types/user'

export const mockTodayMission: DailyMission = {
  id: 'mission-1',
  title: 'Organize three photos into a new album',
  summary:
    'Practice finding your gallery, creating an album, and saving photos with names you will remember.',
  estimatedMinutes: 15,
  status: 'in_progress',
  moduleId: 'digital-skills',
  skillCategory: 'Digital Skills',
  difficulty: 'gentle',
  progressPercent: 35,
}
