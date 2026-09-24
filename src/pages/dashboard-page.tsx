import { Flame, Sparkles, Target, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

import { MissionCard } from '@/components/common/mission-card'
import { ModuleCard } from '@/components/common/module-card'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ProgressSummary } from '@/components/common/progress-summary'
import { SectionHeader } from '@/components/common/section-header'
import { StatCard } from '@/components/common/stat-card'
import { buttonVariants } from '@/components/ui/button'
import { homeGreeting, moduleQuickLinks } from '@/config/navigation'
import { mockTodayMission } from '@/data/mock-mission'
import { mockJourneySnapshot, mockUserProfile } from '@/data/mock-profile'

export function DashboardPage() {
  return (
    <PageContainer width="wide">
      <PageHeader
        title={`${homeGreeting.title}, ${mockUserProfile.displayName}`}
        description={homeGreeting.subtitle}
        action={
          <Link
            to="/journey"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            View my journey
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Day streak"
          value={mockJourneySnapshot.streakDays}
          hint="Showing up counts"
          icon={Flame}
        />
        <StatCard
          label="Missions done"
          value={mockJourneySnapshot.missionsCompleted}
          icon={Target}
        />
        <StatCard
          label="Skills in progress"
          value={mockJourneySnapshot.skillsInProgress}
          icon={TrendingUp}
        />
        <StatCard
          label="Weekly pace"
          value={`${mockJourneySnapshot.weeklyGoalPercent}%`}
          hint="Effort, not perfection"
          icon={Sparkles}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <MissionCard mission={mockTodayMission} compact />
        <ProgressSummary
          title="This week's gentle pace"
          description="Progress celebrates effort, not perfection."
          percent={mockJourneySnapshot.weeklyGoalPercent}
          stats={[
            { label: 'Day streak', value: mockJourneySnapshot.streakDays },
            { label: 'Missions done', value: mockJourneySnapshot.missionsCompleted },
            {
              label: 'Skills in progress',
              value: mockJourneySnapshot.skillsInProgress,
            },
          ]}
        />
      </div>

      <section aria-labelledby="explore-modules-heading" className="space-y-4">
        <SectionHeader
          id="explore-modules-heading"
          title="Explore at your pace"
          description="Choose one area that feels useful today. You can always come back later."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {moduleQuickLinks.map((item) => (
            <ModuleCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </PageContainer>
  )
}
