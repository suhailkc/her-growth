import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeader } from '@/components/common/section-header'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTodaysRecommendedActivity } from '@/features/parenting/data/activities'
import {
  parentingCategoryLabels,
  parentingDifficultyLabels,
} from '@/features/parenting/parenting-labels'
import { useParentingStore } from '@/features/parenting/parenting-store'

export function TodaysActivitySection() {
  const activity = getTodaysRecommendedActivity()
  const completedActivityIds = useParentingStore((s) => s.completedActivityIds)
  const complete = completedActivityIds.includes(activity.id)

  return (
    <section aria-labelledby="parenting-today-heading">
      <SectionHeader
        id="parenting-today-heading"
        title="Today's activity"
        description="One gentle idea you can try when you have a few free minutes."
      />
      <Card variant="warm" className="overflow-hidden">
        <CardHeader className="flex flex-row items-start gap-3">
          <Sparkles className="mt-1 size-6 shrink-0 text-primary" aria-hidden />
          <div className="min-w-0 flex-1 space-y-2">
            <CardTitle className="font-serif text-xl">{activity.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <li>{parentingCategoryLabels[activity.categoryId]}</li>
              <li>{activity.ageRange}</li>
              <li>{activity.durationMinutes} min</li>
              <li>{parentingDifficultyLabels[activity.difficulty]}</li>
            </ul>
            {complete ? (
              <p className="text-sm font-medium text-primary">
                You marked this activity complete.
              </p>
            ) : null}
          </div>
        </CardHeader>
        <CardContent>
          <Link
            to={`/parenting/activities/${activity.id}`}
            className={buttonVariants({
              size: 'lg',
              className: 'w-full rounded-xl sm:w-auto',
            })}
          >
            {complete ? 'View activity again' : 'See steps and materials'}
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}
