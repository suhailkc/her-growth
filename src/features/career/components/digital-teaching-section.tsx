import { SectionHeader } from '@/components/common/section-header'
import { CareerLessonListItem } from '@/features/career/components/career-lesson-list-item'
import { getCareerLessonsByTrack } from '@/features/career/data/lessons'
import { useCareerStore } from '@/features/career/career-store'

export function DigitalTeachingSection() {
  const lessons = getCareerLessonsByTrack('digital-teaching')
  const completedLessonIds = useCareerStore((s) => s.completedLessonIds)

  return (
    <section aria-labelledby="career-digital-heading">
      <SectionHeader
        id="career-digital-heading"
        title="Digital teaching"
        description="Tools many teachers use — helpful for B.Ed. assignments and optional tutoring."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {lessons.map((lesson) => (
          <CareerLessonListItem
            key={lesson.id}
            lesson={lesson}
            complete={completedLessonIds.includes(lesson.id)}
          />
        ))}
      </ul>
    </section>
  )
}
