import {
  journeyAchievementBadges,
  isJourneyBadgeEarned,
} from '@/features/digital-skills/data/journey-achievement-badges'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import { cn } from '@/lib/utils'

export function JourneyAchievementBadges() {
  const completedTopicIds = useCompletedTopicSet()

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-foreground">Milestones</p>
      <ul className="flex flex-wrap gap-2">
        {journeyAchievementBadges.map((badge) => {
          const earned = isJourneyBadgeEarned(badge.id, completedTopicIds)
          return (
            <li key={badge.id}>
              <span
                title={earned ? badge.title : badge.hint}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium',
                  earned
                    ? 'border-success/35 bg-success/10 text-foreground'
                    : 'border-dashed border-muted-foreground/35 bg-muted/30 text-muted-foreground',
                )}
              >
                <span aria-hidden>{badge.emoji}</span>
                {badge.title}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
