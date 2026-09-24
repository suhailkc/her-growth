import { ProgressBar } from '@/components/common/progress-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllDigitalSkillsLessons } from '@/features/digital-skills/data/catalog'
import { useDigitalSkillsStore } from '@/features/digital-skills/digital-skills-store'
import { useModuleProgress } from '@/features/digital-skills/hooks/use-track-progress'

export function ModuleProgressSummary() {
  const modulePercent = useModuleProgress()
  const lessonProgress = useDigitalSkillsStore((s) => s.lessons)
  const totalLessons = getAllDigitalSkillsLessons().length
  const completedCount = Object.values(lessonProgress).filter(
    (p) => p.phase === 'complete',
  ).length

  return (
    <Card variant="warm">
      <CardHeader>
        <CardTitle className="font-serif text-xl">Your progress</CardTitle>
        <p className="text-sm text-muted-foreground">
          {completedCount} of {totalLessons} lessons complete — move at your own pace.
        </p>
      </CardHeader>
      <CardContent>
        <ProgressBar
          value={modulePercent}
          label="Overall Digital Skills progress"
          showValue
        />
      </CardContent>
    </Card>
  )
}
