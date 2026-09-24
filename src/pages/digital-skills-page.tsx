import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { DigitalSkillsJourneyRoadmap } from '@/features/digital-skills/components/digital-skills-journey-roadmap'
import { DigitalSkillsJourneySummary } from '@/features/digital-skills/components/digital-skills-journey-summary'

export function DigitalSkillsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Digital Skills"
        description="Your learning roadmap and checklist — explore each skill on your own, then mark it done when you are comfortable."
      />
      <DigitalSkillsJourneySummary />
      <DigitalSkillsJourneyRoadmap />
    </PageContainer>
  )
}
