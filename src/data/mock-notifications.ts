import type { AppNotification } from '@/types/user'

export const mockNotifications: AppNotification[] = [
  {
    id: 'n1',
    title: 'A gentle reminder',
    body: 'When you have a quiet moment, your today mission is ready.',
    createdAt: '2026-09-24T09:00:00.000Z',
    read: false,
  },
  {
    id: 'n2',
    title: 'Digital Skills',
    body: 'Computer Basics has a gentle first lesson when you are ready.',
    createdAt: '2026-09-23T14:30:00.000Z',
    read: true,
  },
]
