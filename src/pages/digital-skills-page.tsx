import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { buttonVariants } from '@/components/ui/button'
import { DigitalSkillsJourneyRoadmap } from '@/features/digital-skills/components/digital-skills-journey-roadmap'
import { DigitalSkillsJourneySummary } from '@/features/digital-skills/components/digital-skills-journey-summary'
import { WelcomeBackBanner } from '@/features/digital-skills/components/welcome-back-banner'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import {
  getJourneyHeadlineStats,
  getNextIncompleteSkill,
} from '@/features/digital-skills/lib/journey-insights'
import { getFriendlyName } from '@/features/profile/lib/friendly-name'

export function DigitalSkillsPage() {
  const friendlyName = getFriendlyName()
  const completedTopicIds = useCompletedTopicSet()
  const { completedCount, totalCount } = getJourneyHeadlineStats(completedTopicIds)
  const nextSkill = getNextIncompleteSkill(completedTopicIds)

  return (
    <PageContainer>
      <WelcomeBackBanner />
      <header className="mx-auto mb-6 max-w-xl text-center sm:mb-8">
        <h1 className="text-balance font-serif text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Your digital skills journey
        </h1>
        <p className="mt-2 text-base text-pretty text-muted-foreground">
          {friendlyName},{' '}
          {completedCount === 0
            ? 'take it one step at a time — this roadmap is just for you.'
            : `${completedCount} of ${totalCount} skills comfortable — nice and steady.`}
        </p>
        {nextSkill ? (
          <div className="mt-4 rounded-2xl border border-border/70 bg-card/80 px-4 py-3 text-left shadow-[var(--shadow-soft)]">
            <p className="text-xs font-medium uppercase tracking-wide text-primary">
              Up next
            </p>
            <p className="mt-1 text-sm font-medium leading-snug">{nextSkill.topic.label}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {nextSkill.stage.title}
            </p>
            <Link
              to={`/${nextSkill.stage.id}`}
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
                className: 'mt-3 w-full rounded-xl sm:w-auto',
              })}
            >
              Open checklist
            </Link>
          </div>
        ) : completedCount > 0 ? (
          <p className="mt-3 text-sm font-medium text-success">
            You&apos;ve ticked every skill on the roadmap — amazing. 🌱
          </p>
        ) : null}
      </header>
      <DigitalSkillsJourneySummary />
      <DigitalSkillsJourneyRoadmap />
    </PageContainer>
  )
}
