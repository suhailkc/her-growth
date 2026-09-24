import { MapPin } from 'lucide-react'

import { ProgressBar } from '@/components/common/progress-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { journeyMilestones } from '@/features/digital-skills/data/stage-meta'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import {
  countCompletedTopics,
  getAllJourneyTopicKeys,
  getCurrentStageByTopics,
  isStageTopicsComplete,
  topicProgressPercent,
} from '@/features/digital-skills/lib/topic-progress'
import { getDigitalSkillsStageById } from '@/features/digital-skills/data/catalog'

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
    <Card variant="warm" className="mx-auto mb-10 max-w-xl">
      <CardHeader>
        <CardTitle className="font-serif text-xl">My Digital Journey</CardTitle>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {completedCount > 0
            ? `${completedCount} useful skills learned — keep going at your own pace.`
            : 'Your progress will appear here as you explore each skill.'}
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <ProgressBar value={overallPercent} label="Overall progress" showValue />
        {currentStage ? (
          <div className="flex gap-3 rounded-xl border border-border/70 bg-background/80 p-4">
            <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <div className="min-w-0 space-y-1">
              <p className="text-sm font-medium">Current stage</p>
              <p className="font-serif text-lg leading-snug">{currentStage.title}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed">
            You have walked through every stage on the roadmap — revisit any skill
            whenever you want a refresher.
          </p>
        )}
        {earnedMilestones.length > 0 ? (
          <div>
            <p className="text-sm font-medium">Milestones</p>
            <ul className="mt-2 space-y-2">
              {earnedMilestones.map((milestone) => (
                <li
                  key={milestone.id}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span aria-hidden>{milestone.emoji}</span>
                  {milestone.title}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
