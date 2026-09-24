import { CalendarDaysIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'

import { EmptyState } from '@/components/common/empty-state'
import { SectionHeader } from '@/components/common/section-header'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlannerTaskFormDialog } from '@/features/family/components/planner-task-form-dialog'
import { PlannerTaskItem } from '@/features/family/components/planner-task-item'
import { familyPlannerPeriodLabels } from '@/features/family/family-labels'
import { useFamilyStore } from '@/features/family/family-store'
import {
  sortPlannerTasks,
  taskMatchesPeriod,
} from '@/features/family/planner-utils'
import type { FamilyPlannerPeriod, FamilyPlannerTask } from '@/features/family/types'
import type { FamilyPlannerTaskFormValues } from '@/features/family/schemas'
const PERIODS: FamilyPlannerPeriod[] = ['today', 'week', 'month']

export function FamilyPlannerSection() {
  const tasks = useFamilyStore((s) => s.tasks)
  const addTask = useFamilyStore((s) => s.addTask)
  const updateTask = useFamilyStore((s) => s.updateTask)
  const toggleTaskComplete = useFamilyStore((s) => s.toggleTaskComplete)

  const [period, setPeriod] = useState<FamilyPlannerPeriod>('today')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<FamilyPlannerTask | undefined>()

  const openAdd = () => {
    setEditingTask(undefined)
    setDialogOpen(true)
  }

  const openEdit = (task: FamilyPlannerTask) => {
    setEditingTask(task)
    setDialogOpen(true)
  }

  const handleSave = (values: FamilyPlannerTaskFormValues) => {
    if (editingTask) {
      updateTask(editingTask.id, values)
      return
    }
    addTask(values)
  }

  return (
    <section aria-labelledby="family-planner-heading">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          id="family-planner-heading"
          title="Family Planner"
          description="See what matters today, this week, and this month."
        />
        <Button type="button" variant="family" size="lg" onClick={openAdd}>
          <PlusIcon className="size-5" aria-hidden />
          Add task
        </Button>
      </div>

      <Tabs
        value={period}
        onValueChange={(value) => setPeriod(value as FamilyPlannerPeriod)}
        className="mt-4 gap-4"
      >
        <TabsList className="flex w-full flex-wrap">
          {PERIODS.map((key) => (
            <TabsTrigger key={key} value={key} className="min-h-11 flex-1">
              {familyPlannerPeriodLabels[key]}
            </TabsTrigger>
          ))}
        </TabsList>

        {PERIODS.map((key) => {
          const periodTasks = sortPlannerTasks(
            tasks.filter((task) => taskMatchesPeriod(task, key)),
          )

          return (
            <TabsContent key={key} value={key} className="mt-0">
              {periodTasks.length === 0 ? (
                <EmptyState
                  icon={CalendarDaysIcon}
                  title={`Nothing listed for ${familyPlannerPeriodLabels[key].toLowerCase()}`}
                  description="Add a task when something comes up — preschool runs, bills, or family plans."
                  action={
                    <Button type="button" variant="family" size="lg" onClick={openAdd}>
                      Add your first task
                    </Button>
                  }
                />
              ) : (
                <ul className="flex flex-col gap-3">
                  {periodTasks.map((task) => (
                    <PlannerTaskItem
                      key={task.id}
                      task={task}
                      onToggleComplete={toggleTaskComplete}
                      onEdit={openEdit}
                    />
                  ))}
                </ul>
              )}
            </TabsContent>
          )
        })}
      </Tabs>

      <PlannerTaskFormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        task={editingTask}
        onSave={handleSave}
      />
    </section>
  )
}
