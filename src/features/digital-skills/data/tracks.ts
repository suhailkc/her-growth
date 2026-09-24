import type { DigitalSkillsTrack } from '@/types/digital-skills'

export const digitalSkillsTracks: DigitalSkillsTrack[] = [
  {
    id: 'computer-basics',
    order: 1,
    title: 'Computer Basics',
    description:
      'Start from the very beginning — power, mouse, keyboard, and finding your way on the screen.',
  },
  {
    id: 'internet',
    order: 2,
    title: 'Internet',
    description: 'Browse safely, search clearly, and manage tabs, downloads, and uploads.',
  },
  {
    id: 'email',
    order: 3,
    title: 'Email',
    description: 'Use Gmail with confidence — write, send, and handle attachments.',
  },
  {
    id: 'documents',
    order: 4,
    title: 'Documents',
    description: 'Work with Google Docs, PDFs, printing, and tidy file organization.',
  },
  {
    id: 'communication',
    order: 5,
    title: 'Communication',
    description: 'WhatsApp Web, video calls, and sharing files with family and friends.',
  },
  {
    id: 'digital-safety',
    order: 6,
    title: 'Digital Safety',
    description: 'Passwords, OTPs, scams, and privacy — protect yourself online.',
  },
]
