import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ProgressBar } from '@/components/common/progress-bar'
import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ModuleProgressSummary } from '@/features/digital-skills/components/module-progress-summary'
import {
  getDigitalSkillsLessonsForTrack,
  getDigitalSkillsTracks,
} from '@/features/digital-skills/data/catalog'
import { useTrackProgress } from '@/features/digital-skills/hooks/use-track-progress'

function TrackCard({ trackId, title, description }: { trackId: string; title: string; description: string }) {
  const progressPercent = useTrackProgress(trackId)
  const lessonCount = getDigitalSkillsLessonsForTrack(trackId).length

  return (
    <Link to={`/digital-skills/${trackId}`} className="block h-full">
      <Card variant="interactive" className="h-full">
        <CardHeader>
          <CardTitle className="font-serif text-xl">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {lessonCount} gentle {lessonCount === 1 ? 'lesson' : 'lessons'}
          </p>
          <ProgressBar value={progressPercent} label="Category progress" showValue />
        </CardContent>
      </Card>
    </Link>
  )
}

export function DigitalSkillsPage() {
  const tracks = getDigitalSkillsTracks()

  return (
    <PageContainer>
      <PageHeader
        title="Digital Skills"
        description="Practical, step-by-step lessons for computer, internet, email, and staying safe online. Start with Computer Basics if this is all new."
      />
      <div className="mb-8">
        <ModuleProgressSummary />
      </div>
      <SectionHeader
        title="Categories"
        description="Pick one area. Lessons inside each category go from easier to a little more advanced."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {tracks.map((track) => (
          <li key={track.id}>
            <TrackCard trackId={track.id} title={track.title} description={track.description} />
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}
