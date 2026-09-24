import { useMemo } from 'react'

import {
  getAllDigitalSkillsLessons,
  getDigitalSkillsLessonsForStage,
} from '@/features/digital-skills/data/catalog'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import {
  moduleProgressPercent,
  trackProgressPercent,
} from '@/features/digital-skills/progress-utils'

export function useStageProgress(stageId: string): number {
  const lessons = useMemo(() => getDigitalSkillsLessonsForStage(stageId), [stageId])
  const lessonProgress = useDigitalSkillsStore((s) => s.lessons)

  return useMemo(
    () => trackProgressPercent(lessons.map((l) => l.id), lessonProgress),
    [lessons, lessonProgress],
  )
}

/** @deprecated Use useStageProgress */
export function useTrackProgress(stageId: string): number {
  return useStageProgress(stageId)
}

export function useModuleProgress(): number {
  const allLessons = useMemo(() => getAllDigitalSkillsLessons(), [])
  const lessonProgress = useDigitalSkillsStore((s) => s.lessons)

  return useMemo(
    () => moduleProgressPercent(allLessons.map((l) => l.id), lessonProgress),
    [allLessons, lessonProgress],
  )
}
