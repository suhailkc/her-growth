import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ModuleCard } from '@/components/common/module-card'
import { PageHeader } from '@/components/common/page-header'
import { ProgressSummary } from '@/components/common/progress-summary'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { homeGreeting, missionPlaceholder, moduleQuickLinks } from '@/config/navigation'
import { mockJourneySnapshot, mockUserProfile } from '@/data/mock-profile'

export function DashboardPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
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

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-border/80 shadow-[var(--shadow-soft)]">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Today&apos;s focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{missionPlaceholder.body}</p>
            <Link
              to="/today"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              <Sparkles className="size-4" aria-hidden />
              Go to today&apos;s mission
            </Link>
          </CardContent>
        </Card>

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
        <div>
          <h2
            id="explore-modules-heading"
            className="font-serif text-2xl font-semibold"
          >
            Explore at your pace
          </h2>
          <p className="mt-1 text-muted-foreground">
            Choose one area that feels useful today. You can always come back later.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {moduleQuickLinks.map((item) => (
            <ModuleCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
