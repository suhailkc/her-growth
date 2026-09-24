import type { DigitalSkillsLesson, DigitalSkillsLessonProgress } from '@/types/digital-skills'

export const EMPTY_LESSON_PROGRESS: DigitalSkillsLessonProgress = {
  phase: 'overview',
  currentStepIndex: 0,
  completedStepIds: [],
  startedAt: null,
  completedAt: null,
}

export function lessonProgressPercent(
  lesson: DigitalSkillsLesson,
  progress: DigitalSkillsLessonProgress,
): number {
  if (progress.phase === 'complete') {
    return 100
  }
  const total = lesson.steps.length
  if (total === 0) {
    return 0
  }
  return Math.round((progress.completedStepIds.length / total) * 100)
}

export function isLessonComplete(progress: DigitalSkillsLessonProgress): boolean {
  return progress.phase === 'complete'
}

export function trackProgressPercent(
  lessonIds: string[],
  progressByLessonId: Record<string, DigitalSkillsLessonProgress | undefined>,
): number {
  if (lessonIds.length === 0) {
    return 0
  }
  const completed = lessonIds.filter(
    (id) => progressByLessonId[id]?.phase === 'complete',
  ).length
  return Math.round((completed / lessonIds.length) * 100)
}

export function moduleProgressPercent(
  allLessonIds: string[],
  progressByLessonId: Record<string, DigitalSkillsLessonProgress | undefined>,
): number {
  return trackProgressPercent(allLessonIds, progressByLessonId)
}
