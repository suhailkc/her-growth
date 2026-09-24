import { digitalSkillsLessons } from '@/features/digital-skills/data/lessons'
import { digitalSkillsTracks } from '@/features/digital-skills/data/tracks'
import type { DigitalSkillsLesson, DigitalSkillsTrack } from '@/types/digital-skills'

export function getDigitalSkillsTracks(): DigitalSkillsTrack[] {
  return [...digitalSkillsTracks].sort((a, b) => a.order - b.order)
}

export function getDigitalSkillsTrackById(trackId: string): DigitalSkillsTrack | undefined {
  return digitalSkillsTracks.find((track) => track.id === trackId)
}

export function getDigitalSkillsLessonsForTrack(trackId: string): DigitalSkillsLesson[] {
  return digitalSkillsLessons
    .filter((lesson) => lesson.trackId === trackId)
    .sort((a, b) => a.order - b.order)
}

export function getDigitalSkillsLessonById(
  trackId: string,
  lessonId: string,
): DigitalSkillsLesson | undefined {
  return digitalSkillsLessons.find(
    (lesson) => lesson.trackId === trackId && lesson.id === lessonId,
  )
}

export function getAllDigitalSkillsLessons(): DigitalSkillsLesson[] {
  return digitalSkillsLessons
}

export function getDigitalSkillsLessonCount(): number {
  return digitalSkillsLessons.length
}
