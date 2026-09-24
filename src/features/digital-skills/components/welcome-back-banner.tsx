import { useState } from 'react'
import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'
import {
  useDigitalSkillsStore,
  useCompletedTopicSet,
} from '@/features/digital-skills/digital-skills-store'
import { getCurrentStageByTopics } from '@/features/digital-skills/lib/topic-progress'
import { getFriendlyName } from '@/features/profile/lib/friendly-name'
import { cn } from '@/lib/utils'

export function WelcomeBackBanner() {
  const recordVisit = useDigitalSkillsStore((s) => s.recordVisit)
  const completedTopicIds = useCompletedTopicSet()
  const [visible] = useState(() => recordVisit())
  const friendlyName = getFriendlyName()
  const resumeStage = getCurrentStageByTopics(completedTopicIds)

  if (!visible) {
    return null
  }

  return (
    <div
      className={cn(
        'enter-fade-up mx-auto mb-6 max-w-xl rounded-2xl border border-primary/25 bg-primary/5 px-4 py-4 sm:mb-8',
      )}
      role="status"
    >
      <p className="font-serif text-lg font-semibold leading-snug">
        Welcome back, {friendlyName}
      </p>
      <p className="mt-1 text-sm text-pretty text-muted-foreground">
        {resumeStage
          ? 'Pick up where you left off — your progress is saved.'
          : 'Good to see you — your progress is saved on this device.'}
      </p>
      {resumeStage ? (
        <Link
          to={`/${resumeStage.id}`}
          className={buttonVariants({
            size: 'lg',
            className: 'mt-3 w-full rounded-xl sm:w-auto',
          })}
        >
          Continue {resumeStage.title}
        </Link>
      ) : (
        <Link
          to="/"
          className={buttonVariants({
            variant: 'secondary',
            size: 'lg',
            className: 'mt-3 w-full rounded-xl sm:w-auto',
          })}
        >
          View roadmap
        </Link>
      )}
    </div>
  )
}
