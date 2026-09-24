import {
  BookOpen,
  Compass,
  Flame,
  Heart,
  Laptop,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { JourneyAchievement } from '@/types/journey'

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  book: BookOpen,
  target: Target,
  flame: Flame,
  laptop: Laptop,
  compass: Compass,
  users: Users,
} as const

type JourneyAchievementCardProps = {
  achievement: JourneyAchievement
  className?: string
}

export function JourneyAchievementCard({ achievement, className }: JourneyAchievementCardProps) {
  const Icon = iconMap[achievement.icon]
  const earned = achievement.status === 'earned'

  return (
    <Card
      variant="elevated"
      size="sm"
      className={cn(
        earned
          ? 'bg-gradient-to-br from-surface-sage/80 to-card'
          : 'border-dashed bg-muted/30',
        className,
      )}
    >
      <CardContent className="flex gap-3 pt-(--card-spacing)">
        <div
          className={cn(
            'flex size-10 shrink-0 items-center justify-center rounded-xl',
            earned ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground',
          )}
        >
          <Icon className="size-4" aria-hidden />
        </div>
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-medium leading-snug">{achievement.title}</p>
            {earned ? (
              <Badge variant="success" className="text-xs">
                Earned
              </Badge>
            ) : (
              <Badge variant="secondary" className="text-xs">
                In progress
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{achievement.description}</p>
          <p className="text-xs text-muted-foreground">{achievement.earnedLabel}</p>
        </div>
      </CardContent>
    </Card>
  )
}
