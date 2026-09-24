import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  familyTaskCategoryLabels,
  familyTaskPriorityLabels,
} from '@/features/family/family-labels'
import {
  familyPlannerTaskSchema,
  type FamilyPlannerTaskFormValues,
} from '@/features/family/schemas'
import { toIsoDate } from '@/features/family/planner-utils'
import {
  FAMILY_TASK_CATEGORY_IDS,
  type FamilyPlannerTask,
} from '@/features/family/types'

type PlannerTaskFormDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  task?: FamilyPlannerTask
  onSave: (values: FamilyPlannerTaskFormValues) => void
}

function defaultValues(reference = new Date()): FamilyPlannerTaskFormValues {
  return {
    title: '',
    categoryId: 'grocery',
    dueDate: toIsoDate(reference),
    priority: 'medium',
  }
}

export function PlannerTaskFormDialog({
  open,
  onOpenChange,
  task,
  onSave,
}: PlannerTaskFormDialogProps) {
  const isEdit = Boolean(task)

  const form = useForm<FamilyPlannerTaskFormValues>({
    resolver: zodResolver(familyPlannerTaskSchema),
    defaultValues: defaultValues(),
  })

  useEffect(() => {
    if (!open) {
      return
    }
    if (task) {
      form.reset({
        title: task.title,
        categoryId: task.categoryId,
        dueDate: task.dueDate,
        priority: task.priority,
      })
      return
    }
    form.reset(defaultValues())
  }, [open, task, form])

  const submit = form.handleSubmit((values) => {
    onSave(values)
    onOpenChange(false)
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Edit task' : 'Add a task'}</DialogTitle>
          <DialogDescription>
            Keep it short — you can change the date or priority anytime.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4" onSubmit={submit} noValidate>
          <div className="flex flex-col gap-2">
            <Label htmlFor="family-task-title">Task</Label>
            <Input
              id="family-task-title"
              fieldSize="comfortable"
              placeholder="e.g. Buy fruit for the week"
              aria-invalid={Boolean(form.formState.errors.title)}
              {...form.register('title')}
            />
            {form.formState.errors.title ? (
              <p className="text-sm text-destructive" role="alert">
                {form.formState.errors.title.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="family-task-category">Category</Label>
            <Controller
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="family-task-category"
                    size="comfortable"
                    className="w-full"
                  >
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                  <SelectContent>
                    {FAMILY_TASK_CATEGORY_IDS.map((id) => (
                      <SelectItem key={id} value={id}>
                        {familyTaskCategoryLabels[id]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="family-task-date">Date</Label>
            <Input
              id="family-task-date"
              type="date"
              fieldSize="comfortable"
              aria-invalid={Boolean(form.formState.errors.dueDate)}
              {...form.register('dueDate')}
            />
            {form.formState.errors.dueDate ? (
              <p className="text-sm text-destructive" role="alert">
                {form.formState.errors.dueDate.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="family-task-priority">Priority</Label>
            <Controller
              control={form.control}
              name="priority"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="family-task-priority"
                    size="comfortable"
                    className="w-full"
                  >
                    <SelectValue placeholder="Choose priority" />
                  </SelectTrigger>
                  <SelectContent>
                    {(['low', 'medium', 'high'] as const).map((id) => (
                      <SelectItem key={id} value={id}>
                        {familyTaskPriorityLabels[id]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <DialogFooter className="border-0 bg-transparent p-0 sm:justify-stretch">
            <Button type="submit" variant="family" size="lg" className="w-full sm:w-auto">
              {isEdit ? 'Save changes' : 'Add task'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
