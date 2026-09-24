import { addDays, toIsoDate } from '@/features/family/planner-utils'
import type {
  FamilyContact,
  FamilyDocument,
  FamilyPlannerTask,
} from '@/features/family/types'

function taskId(suffix: string): string {
  return `family-task-${suffix}`
}

export function createInitialFamilyTasks(reference = new Date()): FamilyPlannerTask[] {
  const today = toIsoDate(reference)

  return [
    {
      id: taskId('preschool-dropoff'),
      title: 'Preschool drop-off and pickup',
      categoryId: 'preschool',
      dueDate: today,
      priority: 'high',
      completed: false,
    },
    {
      id: taskId('grocery'),
      title: 'Weekly grocery shopping',
      categoryId: 'grocery',
      dueDate: toIsoDate(addDays(reference, 2)),
      priority: 'medium',
      completed: false,
    },
    {
      id: taskId('laundry'),
      title: 'Wash and fold laundry',
      categoryId: 'laundry',
      dueDate: toIsoDate(addDays(reference, 1)),
      priority: 'low',
      completed: false,
    },
    {
      id: taskId('dentist'),
      title: 'Dentist appointment — confirm time',
      categoryId: 'appointments',
      dueDate: toIsoDate(addDays(reference, 4)),
      priority: 'high',
      completed: false,
    },
    {
      id: taskId('filter'),
      title: 'Replace kitchen water filter',
      categoryId: 'maintenance',
      dueDate: toIsoDate(addDays(reference, 12)),
      priority: 'medium',
      completed: false,
    },
    {
      id: taskId('electricity'),
      title: 'Pay electricity bill',
      categoryId: 'electricity',
      dueDate: toIsoDate(addDays(reference, 6)),
      priority: 'high',
      completed: false,
    },
    {
      id: taskId('cousin-visit'),
      title: 'Family visit — prepare guest room',
      categoryId: 'events',
      dueDate: toIsoDate(addDays(reference, 9)),
      priority: 'medium',
      completed: false,
    },
  ]
}

export const mockFamilyDocuments: FamilyDocument[] = [
  {
    id: 'doc-birth-cert',
    name: 'Birth certificate — Aanya.pdf',
    categoryId: 'child',
    updatedLabel: 'Updated 2 weeks ago',
    kind: 'pdf',
  },
  {
    id: 'doc-vaccination',
    name: 'Vaccination record.png',
    categoryId: 'medical',
    updatedLabel: 'Updated last month',
    kind: 'image',
  },
  {
    id: 'doc-school-form',
    name: 'Preschool admission form.pdf',
    categoryId: 'education',
    updatedLabel: 'Updated 3 days ago',
    kind: 'pdf',
  },
  {
    id: 'doc-bank',
    name: 'Savings account statement.pdf',
    categoryId: 'finance',
    updatedLabel: 'Updated yesterday',
    kind: 'pdf',
  },
  {
    id: 'doc-rent',
    name: 'Rental agreement.pdf',
    categoryId: 'home',
    updatedLabel: 'Updated 6 months ago',
    kind: 'pdf',
  },
  {
    id: 'doc-id',
    name: 'ID copy — personal.pdf',
    categoryId: 'personal',
    updatedLabel: 'Updated 1 year ago',
    kind: 'pdf',
  },
]

export const mockFamilyContacts: FamilyContact[] = [
  {
    id: 'contact-preschool',
    name: 'Little Steps Preschool',
    role: 'Front office',
    phone: '+91 98765 43210',
    note: 'Call before 4 pm for pickup changes.',
    kind: 'preschool',
  },
  {
    id: 'contact-pediatrician',
    name: 'Dr. Meera Nair',
    role: 'Pediatrician',
    phone: '+91 91234 56789',
    note: 'Clinic hours: Mon–Sat, 9 am–1 pm',
    kind: 'doctor',
  },
  {
    id: 'contact-emergency',
    name: 'Emergency services',
    role: 'Ambulance / fire',
    phone: '112',
    note: 'Use for urgent help anywhere in India.',
    kind: 'emergency',
  },
  {
    id: 'contact-mother',
    name: 'Amma',
    role: 'Family',
    phone: '+91 90000 11122',
    kind: 'family',
  },
  {
    id: 'contact-spouse',
    name: 'Home',
    role: 'Family',
    phone: '+91 90000 33344',
    note: 'Save as a quick dial for school updates.',
    kind: 'family',
  },
]
