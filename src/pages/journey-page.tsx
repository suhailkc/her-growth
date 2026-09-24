import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { primaryNavItems } from '@/config/navigation'
import {
  mockJourneyAchievements,
  mockJourneyActivity,
  mockJourneyOverview,
  mockJourneySkillAreas,
  mockJourneyWeeklySummary,
} from '@/data/mock-journey'
import { ActivityFeedSection } from '@/features/journey/components/activity-feed-section'
import { JourneyAchievementsSection } from '@/features/journey/components/journey-achievements-section'
import { JourneyOverallProgress } from '@/features/journey/components/journey-overall-progress'
import { SkillAreasSection } from '@/features/journey/components/skill-areas-section'
import { WeeklySummarySection } from '@/features/journey/components/weekly-summary-section'

const journeyMeta = primaryNavItems.find((item) => item.id === 'journey')

export function JourneyPage() {
  return (
    <PageContainer width="wide">
      <PageHeader
        title={journeyMeta?.label ?? 'My Journey'}
        description={
          journeyMeta?.description ??
          'See how far you have come — every step counts, at your pace.'
        }
      />

      <div className="section-stack-lg">
        <JourneyOverallProgress overview={mockJourneyOverview} />

        <SkillAreasSection areas={mockJourneySkillAreas} />

        <JourneyAchievementsSection achievements={mockJourneyAchievements} />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <ActivityFeedSection items={mockJourneyActivity} />
          <WeeklySummarySection summary={mockJourneyWeeklySummary} />
        </div>
      </div>
    </PageContainer>
  )
}
