import { SectionHeader } from '@/components/common/section-header'
import { AchievementCard } from '@/features/dashboard/achievement-card'
import type { RecentAchievement } from '@/types/dashboard'

type RecentAchievementsSectionProps = {
  achievements: RecentAchievement[]
  id?: string
}

export function RecentAchievementsSection({
  achievements,
  id = 'recent-achievements-heading',
}: RecentAchievementsSectionProps) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <SectionHeader
        id={id}
        title="Recent Achievements"
        description="Small wins worth noticing."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  )
}
