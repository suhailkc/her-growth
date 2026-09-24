import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { FormField } from '@/components/common/form-field'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { familyGoalStatusLabels } from '@/features/family-goals/family-goals-labels'
import {
  familyGoalFormSchema,
  type FamilyGoalFormValues,
} from '@/features/family-goals/schemas'
import { FAMILY_GOAL_STATUS_IDS, type FamilyGoal } from '@/features/family-goals/types'

type GoalFormDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: 'create' | 'edit'
  initialGoal?: FamilyGoal
  onSubmit: (values: FamilyGoalFormValues) => void
}

export function GoalFormDialog({
  open,
  onOpenChange,
  mode,
  initialGoal,
  onSubmit,
}: GoalFormDialogProps) {
  const form = useForm<FamilyGoalFormValues>({
    resolver: zodResolver(familyGoalFormSchema),
    defaultValues: {
      title: '',
      description: '',
      targetDate: '',
      status: 'idea',
      milestoneTitles: '',
    },
  })

  useEffect(() => {
    if (!open) return
    if (mode === 'edit' && initialGoal) {
      form.reset({
        title: initialGoal.title,
        description: initialGoal.description,
        targetDate: initialGoal.targetDate,
        status: initialGoal.status,
        milestoneTitles: '',
      })
    } else if (mode === 'create') {
      form.reset({
        title: '',
        description: '',
        targetDate: '',
        status: 'in_progress',
        milestoneTitles: '',
      })
    }
  }, [open, mode, initialGoal, form])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif">
            {mode === 'create' ? 'Create a family goal' : 'Edit goal'}
          </DialogTitle>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit((values) => {
            onSubmit(values)
            onOpenChange(false)
          })}
        >
          <FormField
            id="goal-title"
            label="Title"
            error={form.formState.errors.title?.message}
          >
            <Input {...form.register('title')} className="min-h-11 text-base" />
          </FormField>
          <FormField
            id="goal-description"
            label="Description"
            error={form.formState.errors.description?.message}
          >
            <Textarea
              {...form.register('description')}
              className="min-h-24 text-base"
            />
          </FormField>
          <FormField
            id="goal-date"
            label="Target date"
            error={form.formState.errors.targetDate?.message}
          >
            <Input
              type="date"
              {...form.register('targetDate')}
              className="min-h-11 text-base"
            />
          </FormField>
          <FormField id="goal-status" label="Status">
            <Select
              value={form.watch('status')}
              onValueChange={(value) =>
                form.setValue('status', value as FamilyGoalFormValues['status'], {
                  shouldValidate: true,
                })
              }
            >
              <SelectTrigger id="goal-status" size="comfortable">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FAMILY_GOAL_STATUS_IDS.map((statusId) => (
                  <SelectItem key={statusId} value={statusId}>
                    {familyGoalStatusLabels[statusId]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>
          {mode === 'create' ? (
            <FormField
              id="goal-milestones"
              label="Initial milestones (optional)"
              hint="One step per line — small, clear actions."
            >
              <Textarea
                {...form.register('milestoneTitles')}
                placeholder={'Example:\nBuy folders\nSort school papers'}
                className="min-h-28 text-base"
              />
            </FormField>
          ) : null}
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" size="lg">
              {mode === 'create' ? 'Create goal' : 'Save changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
