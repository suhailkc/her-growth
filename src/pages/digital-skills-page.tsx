import { PageContainer } from '@/components/common/page-container'
import { DigitalSkillsJourneyRoadmap } from '@/features/digital-skills/components/digital-skills-journey-roadmap'
import { DigitalSkillsJourneySummary } from '@/features/digital-skills/components/digital-skills-journey-summary'

export function DigitalSkillsPage() {
  return (
    <PageContainer>
      <header className="mx-auto mb-10 max-w-xl text-center">
        <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
          My Digital Journey
        </h1>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
          A gentle roadmap of stages and skills — open what you need, practice when you
          are ready, and celebrate each step.
        </p>
      </header>
      <DigitalSkillsJourneySummary />
      <DigitalSkillsJourneyRoadmap />
    </PageContainer>
  )
}
