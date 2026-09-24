import { PencilIcon } from 'lucide-react'

import { StatusBadge } from '@/components/common/status-badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  familyTaskCategoryLabels,
  familyTaskPriorityLabels,
} from '@/features/family/family-labels'
import { formatDueDateLabel } from '@/features/family/planner-utils'
import type { FamilyPlannerTask } from '@/features/family/types'
import { cn } from '@/lib/utils'

type PlannerTaskItemProps = {
  task: FamilyPlannerTask
  onToggleComplete: (id: string) => void
  onEdit: (task: FamilyPlannerTask) => void
}

function priorityTone(
  priority: FamilyPlannerTask['priority'],
): 'neutral' | 'active' | 'paused' {
  if (priority === 'high') {
    return 'paused'
  }
  if (priority === 'medium') {
    return 'active'
  }
  return 'neutral'
}

export function PlannerTaskItem({ task, onToggleComplete, onEdit }: PlannerTaskItemProps) {
  const checkboxId = `family-task-${task.id}`

  return (
    <li
      className={cn(
        'flex gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-[var(--shadow-soft)]',
        task.completed && 'opacity-75',
      )}
    >
      <Checkbox
        id={checkboxId}
        checked={task.completed}
        onCheckedChange={() => onToggleComplete(task.id)}
        aria-label={
          task.completed ? `Mark "${task.title}" as not done` : `Mark "${task.title}" as done`
        }
        className="mt-0.5 size-6 rounded-md"
      />
      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <label
            htmlFor={checkboxId}
            className={cn(
              'cursor-pointer text-base font-medium leading-snug',
              task.completed && 'text-muted-foreground line-through',
            )}
          >
            {task.title}
          </label>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="shrink-0"
            onClick={() => onEdit(task)}
            aria-label={`Edit ${task.title}`}
          >
            <PencilIcon className="size-4" />
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge label={familyTaskCategoryLabels[task.categoryId]} tone="neutral" />
          <StatusBadge
            label={familyTaskPriorityLabels[task.priority]}
            tone={priorityTone(task.priority)}
          />
          <span className="text-sm text-muted-foreground">
            {formatDueDateLabel(task.dueDate)}
          </span>
        </div>
      </div>
    </li>
  )
}
