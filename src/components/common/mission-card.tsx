import { Clock, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { StatusBadge } from '@/components/common/status-badge'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { DailyMission } from '@/types/user'

type MissionCardProps = {
  mission: DailyMission
  className?: string
  compact?: boolean
}

function missionStatusLabel(status: DailyMission['status']): string {
  switch (status) {
    case 'completed':
      return 'Done for today'
    case 'in_progress':
      return 'In progress'
    default:
      return 'Ready when you are'
  }
}

function missionStatusTone(status: DailyMission['status']) {
  switch (status) {
    case 'completed':
      return 'success' as const
    case 'in_progress':
      return 'active' as const
    default:
      return 'neutral' as const
  }
}

export function MissionCard({ mission, className, compact = false }: MissionCardProps) {
  return (
    <Card variant="warm" className={cn('overflow-hidden', className)}>
      <CardHeader className="border-b border-border/60 bg-background/40">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="size-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="font-serif text-xl sm:text-2xl">
              {mission.title}
            </CardTitle>
            {!compact ? (
              <p className="mt-1 text-sm text-muted-foreground">{mission.summary}</p>
            ) : null}
          </div>
          <StatusBadge
            label={missionStatusLabel(mission.status)}
            tone={missionStatusTone(mission.status)}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        {compact ? <p className="text-muted-foreground">{mission.summary}</p> : null}
        <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="size-4" aria-hidden />
          About {mission.estimatedMinutes} minutes · at your pace
        </p>
      </CardContent>
      <CardFooter className="justify-between gap-3 border-t border-border/60 bg-muted/30">
        <Button variant="secondary" size="lg" className="rounded-xl" disabled>
          Mark done
        </Button>
        <Link
          to="/today"
          className={buttonVariants({
            variant: 'ghost',
            size: 'lg',
            className: 'rounded-xl',
          })}
        >
          View steps
        </Link>
      </CardFooter>
    </Card>
  )
}
