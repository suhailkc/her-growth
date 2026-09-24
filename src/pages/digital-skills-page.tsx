import { PageContainer } from '@/components/common/page-container'
import { DigitalSkillsJourneyRoadmap } from '@/features/digital-skills/components/digital-skills-journey-roadmap'
import { DigitalSkillsJourneySummary } from '@/features/digital-skills/components/digital-skills-journey-summary'

export function DigitalSkillsPage() {
  return (
    <PageContainer>
      <header className="mx-auto mb-8 max-w-xl text-center">
        <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
          Digital Skills Journey
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Stages, skills, tick when ready.
        </p>
      </header>
      <DigitalSkillsJourneySummary />
      <DigitalSkillsJourneyRoadmap />
    </PageContainer>
  )
}
