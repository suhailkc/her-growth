import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { SectionHeader } from '@/components/common/section-header'
import { StatusBadge } from '@/components/common/status-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockFamilyGoals } from '@/data/mock-modules'

function goalStatusTone(status: (typeof mockFamilyGoals)[number]['status']) {
  if (status === 'in_progress') return 'active' as const
  if (status === 'paused') return 'paused' as const
  return 'neutral' as const
}

function goalStatusLabel(status: (typeof mockFamilyGoals)[number]['status']) {
  switch (status) {
    case 'in_progress':
      return 'In progress'
    case 'paused':
      return 'Paused'
    default:
      return 'Idea'
  }
}

export function FamilyGoalsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Family Goals"
        description="Shared intentions without pressure — adjust or pause anytime."
      />
      <SectionHeader title="Your family board" />
      <ul className="grid gap-4 sm:grid-cols-2">
        {mockFamilyGoals.map((goal) => (
          <li key={goal.id}>
            <Link to={`/family-goals/${goal.id}`} className="block h-full">
              <Card variant="interactive" className="h-full">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="font-serif text-lg">{goal.title}</CardTitle>
                    <StatusBadge
                      label={goalStatusLabel(goal.status)}
                      tone={goalStatusTone(goal.status)}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{goal.summary}</p>
                </CardHeader>
                <CardContent>
                  <span className="text-sm font-medium text-primary">View goal</span>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}
