import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ProgressBar } from '@/components/common/progress-bar'
import { SectionHeader } from '@/components/common/section-header'
import { StatusBadge } from '@/components/common/status-badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GoalFormDialog } from '@/features/family-goals/components/goal-form-dialog'
import {
  familyGoalStatusLabels,
  familyGoalStatusTone,
} from '@/features/family-goals/family-goals-labels'
import { computeGoalProgressPercent } from '@/features/family-goals/goal-progress'
import { useFamilyGoalsStore } from '@/features/family-goals/family-goals-store'

function formatTargetDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00`)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function FamilyGoalsPage() {
  const goals = useFamilyGoalsStore((s) => s.goals)
  const addGoal = useFamilyGoalsStore((s) => s.addGoal)
  const [createOpen, setCreateOpen] = useState(false)

  return (
    <PageContainer>
      <PageHeader
        title="Family Goals"
        description="Shared intentions you choose together — adjust, pause, or celebrate milestones at your pace."
        action={
          <Button
            type="button"
            size="lg"
            className="rounded-xl"
            onClick={() => setCreateOpen(true)}
          >
            <Plus className="size-4" aria-hidden />
            New goal
          </Button>
        }
      />
      <SectionHeader
        title="Your family board"
        description="Tap a goal to see milestones and progress."
      />

      {goals.length === 0 ? (
        <p className="text-muted-foreground">
          No goals yet — create one when your family is ready.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {goals.map((goal) => {
            const progress = computeGoalProgressPercent(goal)
            return (
              <li key={goal.id}>
                <Link to={`/family-goals/${goal.id}`} className="block h-full">
                  <Card variant="interactive" className="h-full">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2">
                        <CardTitle className="font-serif text-lg">
                          {goal.title}
                        </CardTitle>
                        <StatusBadge
                          label={familyGoalStatusLabels[goal.status]}
                          tone={familyGoalStatusTone(goal.status)}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {goal.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <ProgressBar
                        value={progress}
                        label={`Progress for ${goal.title}`}
                      />
                      <p className="text-sm text-muted-foreground">
                        Target: {formatTargetDate(goal.targetDate)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            )
          })}
        </ul>
      )}

      <GoalFormDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        mode="create"
        onSubmit={(values) => {
          addGoal(values)
        }}
      />
    </PageContainer>
  )
}
