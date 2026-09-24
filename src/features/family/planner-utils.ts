import type { FamilyPlannerPeriod, FamilyPlannerTask } from '@/features/family/types'

function parseLocalDate(isoDate: string): Date {
  const parts = isoDate.split('-').map(Number)
  const year = parts[0] ?? 0
  const month = parts[1] ?? 1
  const day = parts[2] ?? 1
  return new Date(year, month - 1, day)
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function startOfWeek(date: Date): Date {
  const day = date.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const monday = new Date(date)
  monday.setDate(date.getDate() + diff)
  return startOfDay(monday)
}

function endOfWeek(weekStart: Date): Date {
  const end = new Date(weekStart)
  end.setDate(weekStart.getDate() + 6)
  return startOfDay(end)
}

export function toIsoDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function formatDueDateLabel(isoDate: string, reference = new Date()): string {
  const due = parseLocalDate(isoDate)
  const today = startOfDay(reference)

  if (isSameDay(due, today)) {
    return 'Today'
  }

  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)
  if (isSameDay(due, tomorrow)) {
    return 'Tomorrow'
  }

  return due.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

export function taskMatchesPeriod(
  task: FamilyPlannerTask,
  period: FamilyPlannerPeriod,
  reference = new Date(),
): boolean {
  const due = parseLocalDate(task.dueDate)
  const today = startOfDay(reference)

  if (period === 'today') {
    return isSameDay(due, today) || (due < today && !task.completed)
  }

  if (period === 'week') {
    const weekStart = startOfWeek(today)
    const weekEnd = endOfWeek(weekStart)
    const dueDay = startOfDay(due)
    return dueDay >= weekStart && dueDay <= weekEnd
  }

  return (
    due.getFullYear() === today.getFullYear() && due.getMonth() === today.getMonth()
  )
}

export function sortPlannerTasks(tasks: FamilyPlannerTask[]): FamilyPlannerTask[] {
  const priorityRank: Record<FamilyPlannerTask['priority'], number> = {
    high: 0,
    medium: 1,
    low: 2,
  }

  return [...tasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1
    }
    const dateCompare = a.dueDate.localeCompare(b.dueDate)
    if (dateCompare !== 0) {
      return dateCompare
    }
    return priorityRank[a.priority] - priorityRank[b.priority]
  })
}

export function addDays(reference: Date, days: number): Date {
  const next = new Date(reference)
  next.setDate(reference.getDate() + days)
  return next
}
