import { SectionHeader } from '@/components/common/section-header'
import { CareerLessonListItem } from '@/features/career/components/career-lesson-list-item'
import { getCareerLessonsByTrack } from '@/features/career/data/lessons'
import { useCareerStore } from '@/features/career/career-store'

export function BedSkillsSection() {
  const lessons = getCareerLessonsByTrack('bed-skills')
  const completedLessonIds = useCareerStore((s) => s.completedLessonIds)

  return (
    <section aria-labelledby="career-bed-skills-heading">
      <SectionHeader
        id="career-bed-skills-heading"
        title="B.Ed. skills"
        description="Study-friendly topics you can use in class practice or at home with children."
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
