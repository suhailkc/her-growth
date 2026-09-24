import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { MissionCard } from '@/components/common/mission-card'
import { mockTodayMission } from '@/data/mock-mission'

export function TodayPage() {
  return (
    <PageContainer width="narrow">
      <PageHeader
        title="Today's Mission"
        description="One practical step. Take your time — there is no rush."
      />
      <MissionCard mission={mockTodayMission} />
    </PageContainer>
  )
}
