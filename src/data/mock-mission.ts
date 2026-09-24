import type { DailyMission } from '@/types/user'

export const mockTodayMission: DailyMission = {
  id: 'mission-1',
  title: 'Save a photo to a folder you choose',
  summary:
    'Practice finding your gallery and saving one photo to a folder with a name you remember.',
  estimatedMinutes: 8,
  status: 'not_started',
  moduleId: 'digital-skills',
}
