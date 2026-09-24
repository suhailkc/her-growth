import {
  Calculator,
  Calendar,
  FileText,
  LayoutTemplate,
  Mail,
  MessageCircle,
  Sheet,
  Timer,
  Video,
  ListTodo,
  StickyNote,
} from 'lucide-react'

import type { ToolDefinition } from '@/features/tools/types'

/** Central list of external URLs — do not duplicate in components. */
export const externalToolUrls = {
  gmail: 'https://mail.google.com/',
  googleDrive: 'https://drive.google.com/',
  googleDocs: 'https://docs.google.com/document/u/0/',
  googleSheets: 'https://docs.google.com/spreadsheets/u/0/',
  googleCalendar: 'https://calendar.google.com/',
  canva: 'https://www.canva.com/',
  whatsAppWeb: 'https://web.whatsapp.com/',
  googleMeet: 'https://meet.google.com/',
} as const

export const toolsCatalog: ToolDefinition[] = [
  {
    id: 'calculator',
    categoryId: 'everyday',
    name: 'Calculator',
    description: 'Add, subtract, multiply, and divide.',
    beginnerExplanation:
      'Use this when you need a quick sum — for shopping, recipes, or homework checks.',
    icon: Calculator,
    internalPath: '/tools/calculator',
  },
  {
    id: 'notes',
    categoryId: 'everyday',
    name: 'Notes',
    description: 'Jot down reminders on this device.',
    beginnerExplanation:
      'Write short notes you can edit anytime. They stay private on this phone or computer.',
    icon: StickyNote,
    internalPath: '/tools/notes',
  },
  {
    id: 'todo',
    categoryId: 'everyday',
    name: 'To-do list',
    description: 'A gentle checklist for today.',
    beginnerExplanation:
      'Add tasks one at a time and tick them off when done — no pressure to finish all.',
    icon: ListTodo,
    internalPath: '/tools/todo',
  },
  {
    id: 'timer',
    categoryId: 'everyday',
    name: 'Timer',
    description: 'Count down minutes for cooking or breaks.',
    beginnerExplanation:
      'Pick how many minutes you need. The timer will beep when time is up.',
    icon: Timer,
    internalPath: '/tools/timer',
  },
  {
    id: 'gmail',
    categoryId: 'google',
    name: 'Gmail',
    description: 'Read and send email in your browser.',
    beginnerExplanation:
      'Opens Google’s mail website. Sign in with your Google account if you use one.',
    icon: Mail,
    externalUrl: externalToolUrls.gmail,
  },
  {
    id: 'google-drive',
    categoryId: 'google',
    name: 'Google Drive',
    description: 'Store files online safely.',
    beginnerExplanation:
      'Save photos, PDFs, and documents so you can open them from another device.',
    icon: FileText,
    externalUrl: externalToolUrls.googleDrive,
  },
  {
    id: 'google-docs',
    categoryId: 'google',
    name: 'Google Docs',
    description: 'Write letters, notes, and assignments.',
    beginnerExplanation:
      'Like a notebook on the internet — your typing saves automatically.',
    icon: FileText,
    externalUrl: externalToolUrls.googleDocs,
  },
  {
    id: 'google-sheets',
    categoryId: 'google',
    name: 'Google Sheets',
    description: 'Simple tables for lists and budgets.',
    beginnerExplanation:
      'Rows and columns for names, amounts, or dates — helpful for household lists.',
    icon: Sheet,
    externalUrl: externalToolUrls.googleSheets,
  },
  {
    id: 'google-calendar',
    categoryId: 'google',
    name: 'Google Calendar',
    description: 'See appointments on a calendar.',
    beginnerExplanation:
      'Add reminders for classes, bills, or family events in one place.',
    icon: Calendar,
    externalUrl: externalToolUrls.googleCalendar,
  },
  {
    id: 'canva',
    categoryId: 'design',
    name: 'Canva',
    description: 'Design posters, invites, and teaching slides.',
    beginnerExplanation:
      'Pick a template, change words and pictures, then download or print.',
    icon: LayoutTemplate,
    externalUrl: externalToolUrls.canva,
  },
  {
    id: 'whatsapp-web',
    categoryId: 'communication',
    name: 'WhatsApp Web',
    description: 'Send messages from your computer.',
    beginnerExplanation:
      'Scan the code with your phone’s WhatsApp to link — then type on a bigger keyboard.',
    icon: MessageCircle,
    externalUrl: externalToolUrls.whatsAppWeb,
  },
  {
    id: 'google-meet',
    categoryId: 'communication',
    name: 'Google Meet',
    description: 'Join video calls for class or family.',
    beginnerExplanation:
      'Someone sends a link; you click it and allow camera/microphone if you choose.',
    icon: Video,
    externalUrl: externalToolUrls.googleMeet,
  },
]

export function getToolsByCategory(
  categoryId: ToolDefinition['categoryId'],
): ToolDefinition[] {
  return toolsCatalog.filter((tool) => tool.categoryId === categoryId)
}

export function getToolById(toolId: string): ToolDefinition | undefined {
  return toolsCatalog.find((tool) => tool.id === toolId)
}
