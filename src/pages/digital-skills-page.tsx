import { PageContainer } from '@/components/common/page-container'
import { DigitalSkillsJourneyRoadmap } from '@/features/digital-skills/components/digital-skills-journey-roadmap'
import { DigitalSkillsJourneySummary } from '@/features/digital-skills/components/digital-skills-journey-summary'
import { getFriendlyName } from '@/features/profile/lib/friendly-name'

export function DigitalSkillsPage() {
  const friendlyName = getFriendlyName()

  return (
    <PageContainer>
      <header className="mx-auto mb-6 max-w-xl text-center sm:mb-8">
        <h1 className="text-balance font-serif text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Your digital skills journey
        </h1>
        <p className="mt-2 text-base text-pretty text-muted-foreground">
          {friendlyName}, take it one step at a time — this roadmap is just for you.
        </p>
      </header>
      <DigitalSkillsJourneySummary />
      <DigitalSkillsJourneyRoadmap />
    </PageContainer>
  )
}
