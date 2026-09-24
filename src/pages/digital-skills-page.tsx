import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ProgressBar } from '@/components/common/progress-bar'
import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockDigitalTracks } from '@/data/mock-modules'

export function DigitalSkillsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Digital Skills"
        description="Practical steps for phones, apps, and everyday computer tasks."
      />
      <SectionHeader
        title="Your tracks"
        description="Pick one track and move at a pace that feels comfortable."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {mockDigitalTracks.map((track) => (
          <li key={track.id}>
            <Link to={`/digital-skills/${track.id}`} className="block h-full">
              <Card variant="interactive" className="h-full">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{track.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{track.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {track.lessonCount} gentle steps
                  </p>
                  <ProgressBar
                    value={track.progressPercent}
                    label="Track progress"
                    showValue
                  />
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}
