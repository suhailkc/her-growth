import { ProgressBar } from '@/components/common/progress-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CompletionHapticsToggle } from '@/features/digital-skills/components/completion-haptics-toggle'
import { JourneyAchievementBadges } from '@/features/digital-skills/components/journey-achievement-badges'
import { journeyMilestones } from '@/features/digital-skills/data/stage-meta'
import { getDigitalSkillsStageById } from '@/features/digital-skills/data/catalog'
import { useCompletedTopicSet } from '@/features/digital-skills/digital-skills-store'
import {
  countCompletedTopics,
  getAllJourneyTopicKeys,
  isStageTopicsComplete,
  topicProgressPercent,
} from '@/features/digital-skills/lib/topic-progress'
import { getFriendlyName } from '@/features/profile/lib/friendly-name'

export function DigitalSkillsJourneySummary() {
  const friendlyName = getFriendlyName()
  const completedTopicIds = useCompletedTopicSet()
  const allKeys = getAllJourneyTopicKeys()
  const overallPercent = topicProgressPercent(allKeys, completedTopicIds)
  const completedCount = countCompletedTopics(completedTopicIds)
  const earnedMilestones = journeyMilestones.filter((milestone) => {
    const stage = getDigitalSkillsStageById(milestone.stageId)
    return stage ? isStageTopicsComplete(stage, completedTopicIds) : false
  })

  return (
    <Card variant="warm" className="mx-auto mb-8 max-w-xl">
      <CardHeader>
        <CardTitle className="font-serif text-xl">Your progress</CardTitle>
        <p className="text-sm text-muted-foreground">
          {completedCount > 0
            ? `${friendlyName}, ${completedCount} skills ticked — nice work!`
            : `${friendlyName}, tick a skill when it feels easy.`}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ProgressBar value={overallPercent} label="Overall" showValue animateValue />
        <JourneyAchievementBadges />
        {earnedMilestones.length > 0 ? (
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {earnedMilestones.map((milestone) => (
              <li key={milestone.id}>
                {milestone.emoji} {milestone.title}
              </li>
            ))}
          </ul>
        ) : null}
        <CompletionHapticsToggle />
      </CardContent>
    </Card>
  )
}
