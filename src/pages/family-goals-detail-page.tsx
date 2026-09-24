import { HeartHandshake, Pencil } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { ProgressBar } from '@/components/common/progress-bar'
import { StatusBadge } from '@/components/common/status-badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { GoalFormDialog } from '@/features/family-goals/components/goal-form-dialog'
import {
  familyGoalStatusLabels,
  familyGoalStatusTone,
} from '@/features/family-goals/family-goals-labels'
import { computeGoalProgressPercent } from '@/features/family-goals/goal-progress'
import {
  getGoalById,
  useFamilyGoalsStore,
} from '@/features/family-goals/family-goals-store'

function formatTargetDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00`)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function FamilyGoalsDetailPage() {
  const { goalId = '' } = useParams()
  const navigate = useNavigate()
  const goals = useFamilyGoalsStore((s) => s.goals)
  const updateGoal = useFamilyGoalsStore((s) => s.updateGoal)
  const toggleMilestone = useFamilyGoalsStore((s) => s.toggleMilestone)
  const deleteGoal = useFamilyGoalsStore((s) => s.deleteGoal)
  const goal = getGoalById(goals, goalId)
  const [editOpen, setEditOpen] = useState(false)

  if (!goal) {
    return (
      <PageContainer width="narrow">
        <EmptyState
          icon={HeartHandshake}
          title="Goal not found"
          description="This family goal is not on your board."
          action={
            <Link
              to="/family-goals"
              className={buttonVariants({ size: 'lg', className: 'rounded-xl' })}
            >
              Back to goals
            </Link>
          }
        />
      </PageContainer>
    )
  }

  const progress = computeGoalProgressPercent(goal)
  const pending = goal.milestones.filter((m) => !m.completed)
  const completed = goal.milestones.filter((m) => m.completed)

  return (
    <PageContainer width="narrow">
      <PageHeader
        title={goal.title}
        description={goal.description}
        action={
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() => setEditOpen(true)}
            >
              <Pencil className="size-4" aria-hidden />
              Edit
            </Button>
            <Link
              to="/family-goals"
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
                className: 'rounded-xl',
              })}
            >
              All goals
            </Link>
          </div>
        }
      />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <StatusBadge
          label={familyGoalStatusLabels[goal.status]}
          tone={familyGoalStatusTone(goal.status)}
        />
        <span className="text-sm text-muted-foreground">
          Target date: {formatTargetDate(goal.targetDate)}
        </span>
      </div>

      <ProgressBar value={progress} label="Overall progress" className="mb-8" />

      <div className="grid gap-6">
        <Card variant="learning">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Next steps</CardTitle>
          </CardHeader>
          <CardContent>
            {pending.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                {goal.milestones.length === 0
                  ? 'Add milestones when you edit the goal, or mark the goal complete in edit.'
                  : 'All milestones reached — milestone reached! Keep going on your next family goal if you wish.'}
              </p>
            ) : (
              <ul className="space-y-3">
                {pending.map((milestone) => (
                  <li key={milestone.id} className="flex items-start gap-3">
                    <Checkbox
                      id={milestone.id}
                      checked={milestone.completed}
                      onCheckedChange={() => toggleMilestone(goal.id, milestone.id)}
                      className="mt-1"
                    />
                    <Label
                      htmlFor={milestone.id}
                      className="text-base font-normal leading-relaxed"
                    >
                      {milestone.title}
                    </Label>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        {completed.length > 0 ? (
          <Card variant="warm">
            <CardHeader>
              <CardTitle className="font-serif text-lg">Completed milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {completed.map((milestone) => (
                  <li key={milestone.id} className="flex items-center gap-2">
                    <Checkbox
                      id={`done-${milestone.id}`}
                      checked
                      onCheckedChange={() => toggleMilestone(goal.id, milestone.id)}
                    />
                    <Label
                      htmlFor={`done-${milestone.id}`}
                      className="font-normal line-through"
                    >
                      {milestone.title}
                    </Label>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : null}
      </div>

      <div className="mt-10 border-t border-border/80 pt-6">
        <Button
          type="button"
          variant="ghost"
          className="text-muted-foreground"
          onClick={() => {
            deleteGoal(goal.id)
            navigate('/family-goals')
          }}
        >
          Remove this goal
        </Button>
      </div>

      <GoalFormDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        mode="edit"
        initialGoal={goal}
        onSubmit={(values) => updateGoal(goal.id, values)}
      />
    </PageContainer>
  )
}
