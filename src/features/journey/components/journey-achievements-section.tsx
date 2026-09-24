import { SectionHeader } from '@/components/common/section-header'
import { JourneyAchievementCard } from '@/features/journey/components/journey-achievement-card'
import type { JourneyAchievement } from '@/types/journey'

type JourneyAchievementsSectionProps = {
  achievements: JourneyAchievement[]
}

export function JourneyAchievementsSection({ achievements }: JourneyAchievementsSectionProps) {
  return (
    <section aria-labelledby="journey-achievements-heading" className="space-y-4">
      <SectionHeader
        id="journey-achievements-heading"
        title="Achievements"
        description="Celebrate milestones — no pressure to collect them all."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <JourneyAchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  )
}
