import type { AppNotification } from '@/types/user'

export const mockNotifications: AppNotification[] = [
  {
    id: 'n1',
    title: 'A gentle reminder',
    body: 'Your next Digital Skills focus is ready — learn your way, then tick it off.',
    createdAt: '2026-09-24T09:00:00.000Z',
    read: false,
  },
  {
    id: 'n2',
    title: 'Digital Skills',
    body: 'Your Digital Skills checklist is ready — tick skills as you practice them on your own.',
    createdAt: '2026-09-23T14:30:00.000Z',
    read: true,
  },
]
