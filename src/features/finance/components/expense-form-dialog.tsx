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
import { Textarea } from '@/components/ui/textarea'
import { expenseCategoryLabels } from '@/features/finance/finance-labels'
import { expenseFormSchema, type ExpenseFormValues } from '@/features/finance/schemas'
import { toIsoDate } from '@/features/finance/expense-utils'
import { EXPENSE_CATEGORY_IDS } from '@/features/finance/types'

type ExpenseFormDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (values: ExpenseFormValues) => void
}

function defaultValues(reference = new Date()): ExpenseFormValues {
  return {
    amount: '' as unknown as number,
    categoryId: 'groceries',
    date: toIsoDate(reference),
    note: '',
  }
}

export function ExpenseFormDialog({ open, onOpenChange, onSave }: ExpenseFormDialogProps) {
  const form = useForm<ExpenseFormValues>({
    resolver: zodResolver(expenseFormSchema),
    defaultValues: defaultValues(),
  })

  useEffect(() => {
    if (open) {
      form.reset(defaultValues())
    }
  }, [open, form])

  const submit = form.handleSubmit((values) => {
    onSave(values)
    onOpenChange(false)
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add an expense</DialogTitle>
          <DialogDescription>
            Record what you spent — amounts stay on this device only.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4" onSubmit={submit} noValidate>
          <div className="flex flex-col gap-2">
            <Label htmlFor="expense-amount">Amount (₹)</Label>
            <Input
              id="expense-amount"
              type="number"
              min={1}
              step={1}
              inputMode="numeric"
              className="min-h-11"
              {...form.register('amount', { valueAsNumber: true })}
            />
            {form.formState.errors.amount ? (
              <p className="text-sm text-destructive" role="alert">
                {form.formState.errors.amount.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="expense-category">Category</Label>
            <Controller
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="expense-category" className="min-h-11 w-full">
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                  <SelectContent>
                    {EXPENSE_CATEGORY_IDS.map((id) => (
                      <SelectItem key={id} value={id}>
                        {expenseCategoryLabels[id]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="expense-date">Date</Label>
            <Input
              id="expense-date"
              type="date"
              className="min-h-11"
              {...form.register('date')}
            />
            {form.formState.errors.date ? (
              <p className="text-sm text-destructive" role="alert">
                {form.formState.errors.date.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="expense-note">Note (optional)</Label>
            <Textarea
              id="expense-note"
              rows={2}
              placeholder="Example: weekly vegetables"
              {...form.register('note')}
            />
            {form.formState.errors.note ? (
              <p className="text-sm text-destructive" role="alert">
                {form.formState.errors.note.message}
              </p>
            ) : null}
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button type="button" variant="secondary" size="lg" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" size="lg">
              Save expense
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
