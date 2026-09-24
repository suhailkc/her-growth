import { useMemo } from 'react'

import {
  getAllDigitalSkillsLessons,
  getDigitalSkillsLessonsForTrack,
} from '@/features/digital-skills/data/catalog'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import {
  moduleProgressPercent,
  trackProgressPercent,
} from '@/features/digital-skills/progress-utils'

export function useTrackProgress(trackId: string): number {
  const lessons = useMemo(() => getDigitalSkillsLessonsForTrack(trackId), [trackId])
  const lessonProgress = useDigitalSkillsStore((s) => s.lessons)

  return useMemo(
    () => trackProgressPercent(lessons.map((l) => l.id), lessonProgress),
    [lessons, lessonProgress],
  )
}

export function useModuleProgress(): number {
  const allLessons = useMemo(() => getAllDigitalSkillsLessons(), [])
  const lessonProgress = useDigitalSkillsStore((s) => s.lessons)

  return useMemo(
    () => moduleProgressPercent(allLessons.map((l) => l.id), lessonProgress),
    [allLessons, lessonProgress],
  )
}
