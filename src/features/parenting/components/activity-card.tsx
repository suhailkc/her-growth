import { CheckCircle2, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  parentingCategoryLabels,
  parentingDifficultyLabels,
} from '@/features/parenting/parenting-labels'
import type { ParentingActivity } from '@/features/parenting/types'

type ActivityCardProps = {
  activity: ParentingActivity
  complete?: boolean
}

export function ActivityCard({ activity, complete = false }: ActivityCardProps) {
  return (
    <Link to={`/parenting/activities/${activity.id}`} className="group block h-full">
      <Card variant="interactive" className="h-full overflow-hidden">
        <CardHeader className="flex flex-row items-start gap-3 space-y-0 pb-2">
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="font-serif text-lg leading-snug">
                {activity.title}
              </CardTitle>
              {complete ? (
                <Badge variant="secondary" className="gap-1 font-normal">
                  <CheckCircle2 className="size-3.5" aria-hidden />
                  Done
                </Badge>
              ) : null}
            </div>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
          </div>
          <ChevronRight
            className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2 pt-0 text-sm text-muted-foreground">
          <Badge variant="outline" className="font-normal">
            {parentingCategoryLabels[activity.categoryId]}
          </Badge>
          <span>{activity.ageRange}</span>
          <span aria-hidden>·</span>
          <span>{activity.durationMinutes} min</span>
          <span aria-hidden>·</span>
          <span>{parentingDifficultyLabels[activity.difficulty]}</span>
        </CardContent>
      </Card>
    </Link>
  )
}
