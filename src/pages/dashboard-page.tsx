import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { ProgressBar } from '@/components/common/progress-bar'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { homeGreeting } from '@/config/navigation'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import {
  countCompletedTopics,
  getAllJourneyTopicKeys,
  getCurrentStageByTopics,
  topicProgressPercent,
} from '@/features/digital-skills/lib/topic-progress'

export function DashboardPage() {
  const completedTopicIds = useCompletedTopicSet()
  const allKeys = getAllJourneyTopicKeys()
  const overallPercent = topicProgressPercent(allKeys, completedTopicIds)
  const completedCount = countCompletedTopics(completedTopicIds)
  const currentStage = getCurrentStageByTopics(completedTopicIds)

  return (
    <PageContainer width="wide">
      <section className="mx-auto max-w-2xl space-y-8 text-center">
        <div className="space-y-3 pt-4">
          <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            {homeGreeting.title} 👋
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {homeGreeting.subtitle}
          </p>
        </div>

        <Card variant="warm" className="text-left shadow-[var(--shadow-card)]">
          <CardContent className="space-y-5 p-6 sm:p-8">
            <div>
              <p className="text-sm font-medium text-primary">Your Digital Journey</p>
              <p className="mt-2 font-serif text-2xl font-semibold leading-snug">
                One small skill at a time
              </p>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                You can learn useful computer skills step by step — at your pace, with
                no pressure and no grades.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/digital-skills"
                className={buttonVariants({
                  size: 'lg',
                  className: 'rounded-xl flex-1',
                })}
              >
                Continue my journey
              </Link>
              <Link
                to="/digital-skills"
                className={buttonVariants({
                  variant: 'secondary',
                  size: 'lg',
                  className: 'rounded-xl flex-1',
                })}
              >
                Explore skills
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="rounded-2xl border border-border/70 bg-card/80 p-6 text-left shadow-[var(--shadow-soft)]">
          <p className="text-sm text-muted-foreground">
            🌱 You&apos;re making progress.
          </p>
          {completedCount > 0 ? (
            <p className="mt-2 text-base leading-relaxed">
              {completedCount} useful skill{completedCount === 1 ? '' : 's'} learned
              already.
            </p>
          ) : (
            <p className="mt-2 text-base leading-relaxed">
              When you mark a skill as comfortable, it will show up here — a quiet
              reminder of how far you&apos;ve come.
            </p>
          )}

          <div className="mt-5 space-y-3">
            <ProgressBar
              value={overallPercent}
              label="Overall journey progress"
              showValue
            />
            {currentStage ? (
              <p className="text-sm text-muted-foreground">
                Current stage:{' '}
                <span className="font-medium text-foreground">
                  {currentStage.title}
                </span>
              </p>
            ) : null}
            <p className="text-sm text-muted-foreground">
              Skills learned: {completedCount} / {allKeys.length}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Small steps today can make everyday life easier tomorrow.
        </p>
      </section>
    </PageContainer>
  )
}
