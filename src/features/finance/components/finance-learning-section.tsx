import { SectionHeader } from '@/components/common/section-header'
import { FinanceLessonListItem } from '@/features/finance/components/finance-lesson-list-item'
import { getFinanceLessonsSorted } from '@/features/finance/data/lessons'
import { useFinanceStore } from '@/features/finance/finance-store'

export function FinanceLearningSection() {
  const completedLessonIds = useFinanceStore((s) => s.completedLessonIds)
  const lessons = getFinanceLessonsSorted()
  const completedCount = lessons.filter((lesson) =>
    completedLessonIds.includes(lesson.id),
  ).length

  return (
    <section aria-labelledby="finance-learning-heading">
      <SectionHeader
        id="finance-learning-heading"
        title="Learning"
        description="Plain-language money topics for home life. This is education only — not investment or tax advice."
      />
      <p className="mb-4 text-sm text-muted-foreground">
        {completedCount} of {lessons.length} lessons marked as read on this device.
      </p>
      <ul className="flex flex-col gap-4">
        {lessons.map((lesson) => (
          <FinanceLessonListItem
            key={lesson.id}
            lesson={lesson}
            complete={completedLessonIds.includes(lesson.id)}
          />
        ))}
      </ul>
    </section>
  )
}
