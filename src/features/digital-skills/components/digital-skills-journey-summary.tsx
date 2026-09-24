import { MapPin } from 'lucide-react'

import { ProgressBar } from '@/components/common/progress-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { journeyMilestones } from '@/features/digital-skills/data/stage-meta'
import { getDigitalSkillsStageById } from '@/features/digital-skills/data/catalog'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import {
  countCompletedTopics,
  getAllJourneyTopicKeys,
  getCurrentStageByTopics,
  isStageTopicsComplete,
  topicProgressPercent,
} from '@/features/digital-skills/lib/topic-progress'

export function DigitalSkillsJourneySummary() {
  const completedTopicIds = useCompletedTopicSet()
  const allKeys = getAllJourneyTopicKeys()
  const overallPercent = topicProgressPercent(allKeys, completedTopicIds)
  const completedCount = countCompletedTopics(completedTopicIds)
  const currentStage = getCurrentStageByTopics(completedTopicIds)

  const earnedMilestones = journeyMilestones.filter((milestone) => {
    const stage = getDigitalSkillsStageById(milestone.stageId)
    return stage ? isStageTopicsComplete(stage, completedTopicIds) : false
  })

  return (
    <Card variant="warm" className="mx-auto mb-8 max-w-xl">
      <CardHeader>
        <CardTitle className="font-serif text-xl">My progress</CardTitle>
        <p className="text-sm text-muted-foreground">
          {completedCount > 0
            ? `${completedCount} skills ticked — nice work!`
            : 'Tick a skill when it feels easy.'}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ProgressBar value={overallPercent} label="Overall" showValue />
        {currentStage ? (
          <div className="flex gap-3 rounded-xl border border-border/70 bg-background/80 p-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <div className="min-w-0">
              <p className="text-xs font-medium text-muted-foreground">Current stage</p>
              <p className="font-serif text-lg leading-snug">{currentStage.title}</p>
            </div>
          </div>
        ) : null}
        {earnedMilestones.length > 0 ? (
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {earnedMilestones.map((milestone) => (
              <li key={milestone.id}>
                {milestone.emoji} {milestone.title}
              </li>
            ))}
          </ul>
        ) : null}
      </CardContent>
    </Card>
  )
}
