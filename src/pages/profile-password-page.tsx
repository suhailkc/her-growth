import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { FormField } from '@/components/common/form-field'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  passwordChangeSchema,
  type PasswordChangeFormValues,
} from '@/features/profile/schemas'

export function ProfilePasswordPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const form = useForm<PasswordChangeFormValues>({
    resolver: zodResolver(passwordChangeSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  function onSubmit(_values: PasswordChangeFormValues) {
    setStatus('success')
    form.reset()
    window.setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <div className="space-y-6 pt-6">
      <p className="text-muted-foreground">
        Password changes will connect to your account provider later. For now, this form
        validates your entries and confirms the flow works.
      </p>
      <form className="max-w-md space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          id="current-password"
          label="Current password"
          error={form.formState.errors.currentPassword?.message}
        >
          <Input
            type="password"
            {...form.register('currentPassword')}
            className="min-h-11"
          />
        </FormField>
        <FormField
          id="new-password"
          label="New password"
          error={form.formState.errors.newPassword?.message}
        >
          <Input
            type="password"
            {...form.register('newPassword')}
            className="min-h-11"
          />
        </FormField>
        <FormField
          id="confirm-password"
          label="Confirm new password"
          error={form.formState.errors.confirmPassword?.message}
        >
          <Input
            type="password"
            {...form.register('confirmPassword')}
            className="min-h-11"
          />
        </FormField>
        <Button type="submit" size="lg">
          Update password
        </Button>
        {status === 'success' ? (
          <p className="text-sm text-primary" role="status">
            Password update recorded locally — no server connected yet.
          </p>
        ) : null}
      </form>
    </div>
  )
}
