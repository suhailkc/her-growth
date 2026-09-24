import { computerBasicsLessons } from '@/features/digital-skills/data/lessons/computer-basics'
import { communicationLessons } from '@/features/digital-skills/data/lessons/communication'
import { digitalSafetyLessons } from '@/features/digital-skills/data/lessons/digital-safety'
import { documentsLessons } from '@/features/digital-skills/data/lessons/documents'
import { emailLessons } from '@/features/digital-skills/data/lessons/email'
import { internetLessons } from '@/features/digital-skills/data/lessons/internet'
import { digitalSkillsTracks } from '@/features/digital-skills/data/tracks'
import type { DigitalSkillsLesson } from '@/types/digital-skills'

const trackOrder = new Map(digitalSkillsTracks.map((track) => [track.id, track.order]))

export const digitalSkillsLessons: DigitalSkillsLesson[] = [
  ...computerBasicsLessons,
  ...internetLessons,
  ...emailLessons,
  ...documentsLessons,
  ...communicationLessons,
  ...digitalSafetyLessons,
].sort((a, b) => {
  const trackDiff = (trackOrder.get(a.trackId) ?? 0) - (trackOrder.get(b.trackId) ?? 0)
  if (trackDiff !== 0) {
    return trackDiff
  }
  return a.order - b.order
})
