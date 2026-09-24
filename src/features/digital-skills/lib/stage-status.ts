import {
  getDigitalSkillsLessonsForStage,
  getDigitalSkillsStages,
} from '@/features/digital-skills/data/catalog'
import type {
  DigitalSkillsLessonProgress,
  DigitalSkillsStage,
  DigitalSkillsStageStatus,
} from '@/types/digital-skills'

export type StageWithStatus = DigitalSkillsStage & {
  status: DigitalSkillsStageStatus
  progressPercent: number
  lessonCount: number
  completedLessonCount: number
}

function stageLessonProgress(
  stageId: string,
  progressByLessonId: Record<string, DigitalSkillsLessonProgress | undefined>,
): { percent: number; completed: number; total: number } {
  const lessons = getDigitalSkillsLessonsForStage(stageId)
  const total = lessons.length
  if (total === 0) {
    return { percent: 0, completed: 0, total: 0 }
  }
  const completed = lessons.filter(
    (l) => progressByLessonId[l.id]?.phase === 'complete',
  ).length
  return {
    percent: Math.round((completed / total) * 100),
    completed,
    total,
  }
}

function isStageComplete(
  stageId: string,
  progressByLessonId: Record<string, DigitalSkillsLessonProgress | undefined>,
): boolean {
  const { total, completed } = stageLessonProgress(stageId, progressByLessonId)
  return total > 0 && completed === total
}

function isPreviousStageComplete(
  stage: DigitalSkillsStage,
  progressByLessonId: Record<string, DigitalSkillsLessonProgress | undefined>,
): boolean {
  if (stage.order <= 1) {
    return true
  }
  const stages = getDigitalSkillsStages()
  const previous = stages
    .filter((s) => s.order < stage.order)
    .sort((a, b) => b.order - a.order)[0]
  if (!previous) {
    return true
  }
  const prevLessons = getDigitalSkillsLessonsForStage(previous.id)
  if (prevLessons.length === 0) {
    return isPreviousStageComplete(previous, progressByLessonId)
  }
  return isStageComplete(previous.id, progressByLessonId)
}

export function getStageStatus(
  stage: DigitalSkillsStage,
  progressByLessonId: Record<string, DigitalSkillsLessonProgress | undefined>,
  currentStageId: string | null,
): DigitalSkillsStageStatus {
  const { total } = stageLessonProgress(stage.id, progressByLessonId)

  if (total === 0) {
    return 'coming-soon'
  }

  if (isStageComplete(stage.id, progressByLessonId)) {
    return 'complete'
  }

  if (!isPreviousStageComplete(stage, progressByLessonId)) {
    return 'locked'
  }

  if (stage.id === currentStageId) {
    return 'current'
  }

  return 'available'
}

export function getCurrentStageId(
  progressByLessonId: Record<string, DigitalSkillsLessonProgress | undefined>,
): string | null {
  const stages = getDigitalSkillsStages()
  for (const stage of stages) {
    const lessons = getDigitalSkillsLessonsForStage(stage.id)
    if (lessons.length === 0) {
      continue
    }
    if (!isPreviousStageComplete(stage, progressByLessonId)) {
      continue
    }
    if (!isStageComplete(stage.id, progressByLessonId)) {
      return stage.id
    }
  }
  return null
}

export function getStagesWithStatus(
  progressByLessonId: Record<string, DigitalSkillsLessonProgress | undefined>,
): StageWithStatus[] {
  const currentStageId = getCurrentStageId(progressByLessonId)
  return getDigitalSkillsStages().map((stage) => {
    const { percent, completed, total } = stageLessonProgress(
      stage.id,
      progressByLessonId,
    )
    return {
      ...stage,
      status: getStageStatus(stage, progressByLessonId, currentStageId),
      progressPercent: percent,
      lessonCount: total,
      completedLessonCount: completed,
    }
  })
}

export function getNextLessonInJourney(
  progressByLessonId: Record<string, DigitalSkillsLessonProgress | undefined>,
): {
  stageId: string
  lessonId: string
  lessonTitle: string
  stageTitle: string
} | null {
  const stages = getDigitalSkillsStages()
  for (const stage of stages) {
    if (!isPreviousStageComplete(stage, progressByLessonId)) {
      break
    }
    const lessons = getDigitalSkillsLessonsForStage(stage.id)
    for (const lesson of lessons) {
      const progress = progressByLessonId[lesson.id]
      if (progress?.phase !== 'complete') {
        return {
          stageId: stage.id,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          stageTitle: stage.title,
        }
      }
    }
  }
  return null
}
