import { MapPin } from 'lucide-react'

import { ProgressBar } from '@/components/common/progress-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import {
  getAllJourneyTopicKeys,
  getCurrentStageByTopics,
  topicProgressPercent,
} from '@/features/digital-skills/lib/topic-progress'

export function DigitalSkillsJourneySummary() {
  const completedTopicIds = useCompletedTopicSet()
  const allKeys = getAllJourneyTopicKeys()
  const overallPercent = topicProgressPercent(allKeys, completedTopicIds)
  const completedCount = allKeys.filter((key) => completedTopicIds.has(key)).length
  const currentStage = getCurrentStageByTopics(completedTopicIds)

  return (
    <Card variant="warm" className="mb-10">
      <CardHeader>
        <CardTitle className="font-serif text-xl">Your progress</CardTitle>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {completedCount} of {allKeys.length} skills marked done — tick each item only when you
          feel comfortable doing it yourself.
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <ProgressBar value={overallPercent} label="Overall journey progress" showValue />
        {currentStage ? (
          <div className="flex gap-3 rounded-xl border border-border/70 bg-background/80 p-4">
            <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <div className="min-w-0 space-y-1">
              <p className="text-sm font-medium">Focus stage</p>
              <p className="font-serif text-lg leading-snug">
                Stage {currentStage.order}: {currentStage.title}
              </p>
              <p className="text-sm text-muted-foreground">{currentStage.subtitle}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed">
            You have marked every skill on the roadmap — celebrate that, and revisit any stage
            whenever you want a refresher.
          </p>
        )}
      </CardContent>
    </Card>
  )
}
