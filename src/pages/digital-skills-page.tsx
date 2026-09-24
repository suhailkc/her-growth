import { PageContainer } from '@/components/common/page-container'
import { DigitalSkillsJourneyRoadmap } from '@/features/digital-skills/components/digital-skills-journey-roadmap'
import { DigitalSkillsJourneySummary } from '@/features/digital-skills/components/digital-skills-journey-summary'

export function DigitalSkillsPage() {
  return (
    <PageContainer>
      <header className="mx-auto mb-6 max-w-xl text-center sm:mb-8">
        <h1 className="text-balance font-serif text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Digital Skills Journey
        </h1>
        <p className="mt-2 text-base text-pretty text-muted-foreground">
          Stages, skills, tick when ready.
        </p>
      </header>
      <DigitalSkillsJourneySummary />
      <DigitalSkillsJourneyRoadmap />
    </PageContainer>
  )
}
