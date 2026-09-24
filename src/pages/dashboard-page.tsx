import { BookOpen, CheckCircle2, Clock } from 'lucide-react'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { StatCard } from '@/components/common/stat-card'
import { homeGreeting } from '@/config/navigation'
import {
  mockContinueLearning,
  mockDashboardActivityStats,
  mockFamilyFocusTasks,
  mockJourneyAreaProgress,
  mockRecentAchievements,
} from '@/data/mock-dashboard'
import { useTodayMissionSummary } from '@/features/mission/use-today-mission'
import { mockUserProfile } from '@/data/mock-profile'
import { ContinueLearningSection } from '@/features/dashboard/continue-learning-section'
import { FamilyFocusSection } from '@/features/dashboard/family-focus-section'
import { JourneyProgressSection } from '@/features/dashboard/journey-progress-section'
import { RecentAchievementsSection } from '@/features/dashboard/recent-achievements-section'
import { TodayGrowthHero } from '@/features/dashboard/today-growth-hero'

function formatLearningTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  if (hours === 0) {
    return `${minutes}m`
  }
  if (minutes === 0) {
    return `${hours}h`
  }
  return `${hours}h ${minutes}m`
}

export function DashboardPage() {
  const todayMission = useTodayMissionSummary()
  const stats = mockDashboardActivityStats

  return (
    <PageContainer width="wide">
      <PageHeader
        title={`${homeGreeting.title}, ${mockUserProfile.displayName} 👋`}
        description={homeGreeting.subtitle}
      />

      <TodayGrowthHero mission={todayMission} />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          compact
          label="Activities completed"
          value={stats.activitiesCompleted}
          icon={CheckCircle2}
        />
        <StatCard
          compact
          label="Learning time"
          value={formatLearningTime(stats.learningTimeMinutes)}
          icon={Clock}
        />
        <StatCard
          compact
          label="Skills learned"
          value={stats.skillsLearned}
          icon={BookOpen}
        />
      </div>

      <JourneyProgressSection areas={mockJourneyAreaProgress} />

      <ContinueLearningSection modules={mockContinueLearning} />

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <FamilyFocusSection tasks={mockFamilyFocusTasks} />
        <RecentAchievementsSection achievements={mockRecentAchievements} />
      </div>
    </PageContainer>
  )
}
