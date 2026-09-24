import { BookOpen, Heart, Sparkles, Target } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { RecentAchievement } from '@/types/dashboard'

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  book: BookOpen,
  target: Target,
} as const

type AchievementCardProps = {
  achievement: RecentAchievement
  className?: string
}

export function AchievementCard({ achievement, className }: AchievementCardProps) {
  const Icon = iconMap[achievement.icon]

  return (
    <Card
      variant="elevated"
      size="sm"
      className={cn('bg-gradient-to-br from-surface-sage/80 to-card', className)}
    >
      <CardContent className="flex gap-3 pt-(--card-spacing)">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-success/10 text-success">
          <Icon className="size-4" aria-hidden />
        </div>
        <div className="min-w-0 space-y-1">
          <p className="font-medium leading-snug">{achievement.title}</p>
          <p className="text-sm text-muted-foreground">{achievement.description}</p>
          <p className="text-xs text-muted-foreground">{achievement.earnedLabel}</p>
        </div>
      </CardContent>
    </Card>
  )
}
