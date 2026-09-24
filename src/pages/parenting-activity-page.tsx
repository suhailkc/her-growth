import { CheckCircle2, Puzzle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getParentingActivityById } from '@/features/parenting/data/activities'
import {
  parentingCategoryLabels,
  parentingDifficultyLabels,
} from '@/features/parenting/parenting-labels'
import { useParentingStore } from '@/features/parenting/parenting-store'

export function ParentingActivityPage() {
  const { activityId = '' } = useParams()
  const activity = getParentingActivityById(activityId)
  const completedActivityIds = useParentingStore((s) => s.completedActivityIds)
  const markActivityComplete = useParentingStore((s) => s.markActivityComplete)

  if (!activity) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={Puzzle}
          title="Activity not found"
          description="This activity is not in the library yet."
          action={
            <Link
              to="/parenting"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to Parenting
            </Link>
          }
        />
      </PageContainer>
    )
  }

  const complete = completedActivityIds.includes(activity.id)

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={activity.title}
        description={activity.description}
        action={
          <Link
            to="/parenting"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            Activity library
          </Link>
        }
      />

      <ul className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
        <li>{parentingCategoryLabels[activity.categoryId]}</li>
        <li>{activity.ageRange}</li>
        <li>{activity.durationMinutes} minutes</li>
        <li>{parentingDifficultyLabels[activity.difficulty]}</li>
      </ul>

      <article className="space-y-6">
        <Card variant="learning">
          <CardHeader>
            <CardTitle className="font-serif text-lg">What you need</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {activity.materials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <section>
          <h2 className="font-serif text-xl font-semibold">Step by step</h2>
          <ol className="mt-3 list-decimal space-y-3 pl-5 text-base leading-relaxed text-foreground/90">
            {activity.instructions.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <Card variant="warm">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Why this helps</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {activity.benefits}
            </p>
          </CardContent>
        </Card>
      </article>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        {complete ? (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="size-5 text-primary" aria-hidden />
            You completed this activity on this device. Well done.
          </p>
        ) : (
          <Button
            type="button"
            size="lg"
            onClick={() => markActivityComplete(activity.id)}
          >
            Mark activity complete
          </Button>
        )}
        <Link
          to="/parenting"
          className={buttonVariants({
            variant: 'secondary',
            size: 'lg',
            className: 'rounded-xl',
          })}
        >
          Back to Parenting
        </Link>
      </div>
    </PageContainer>
  )
}
