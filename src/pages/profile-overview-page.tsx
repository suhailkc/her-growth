import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { FormField } from '@/components/common/form-field'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  profileOverviewSchema,
  type ProfileOverviewFormValues,
} from '@/features/profile/schemas'
import { useProfileStore } from '@/features/profile/profile-store'

export function ProfileOverviewPage() {
  const profile = useProfileStore((s) => s.profile)
  const updateProfile = useProfileStore((s) => s.updateProfile)
  const [saved, setSaved] = useState(false)

  const form = useForm<ProfileOverviewFormValues>({
    resolver: zodResolver(profileOverviewSchema),
    defaultValues: {
      displayName: profile.displayName,
      preferredLocale: profile.preferredLocale,
      learningGoal: profile.learningGoal ?? '',
      dailyLearningMinutes: profile.dailyLearningMinutes ?? 15,
      childName: profile.childProfile?.name ?? '',
      childAgeRange: profile.childProfile?.ageRange ?? '',
      interests: profile.interests?.join(', ') ?? '',
    },
  })

  const initials =
    profile.avatarInitials ?? profile.displayName.slice(0, 2).toUpperCase()

  function onSubmit(values: ProfileOverviewFormValues) {
    updateProfile({
      displayName: values.displayName,
      preferredLocale: values.preferredLocale,
      learningGoal: values.learningGoal?.trim() || undefined,
      dailyLearningMinutes: values.dailyLearningMinutes,
      childProfile: {
        name: values.childName?.trim() || undefined,
        ageRange: values.childAgeRange?.trim() || undefined,
      },
      interests: values.interests
        ? values.interests
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
        : [],
    })
    setSaved(true)
    window.setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-8 pt-6">
      <div className="flex items-center gap-4">
        <Avatar initials={initials} label="Your avatar" size="lg" />
        <p className="text-sm text-muted-foreground">
          Your initials appear here. Photo upload can be added later — for now, enjoy a
          calm placeholder.
        </p>
      </div>

      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          id="profile-name"
          label="Name"
          error={form.formState.errors.displayName?.message}
        >
          <Input {...form.register('displayName')} className="min-h-11 text-base" />
        </FormField>

        <FormField id="profile-locale" label="Preferred language">
          <Select
            value={form.watch('preferredLocale')}
            onValueChange={(value) =>
              form.setValue('preferredLocale', value as 'en' | 'ml', {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger id="profile-locale" size="comfortable">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ml">Malayalam (coming soon)</SelectItem>
            </SelectContent>
          </Select>
        </FormField>

        <FormField
          id="profile-goal"
          label="Learning goal"
          hint="Optional — what would you like to feel more confident about?"
        >
          <Textarea {...form.register('learningGoal')} className="min-h-20 text-base" />
        </FormField>

        <FormField
          id="profile-daily-minutes"
          label="Daily learning target (minutes)"
          error={form.formState.errors.dailyLearningMinutes?.message}
        >
          <Input
            type="number"
            min={5}
            max={180}
            {...form.register('dailyLearningMinutes')}
            className="min-h-11 text-base"
          />
        </FormField>

        <fieldset className="space-y-4 rounded-xl border border-border/80 p-4">
          <legend className="px-1 font-serif text-lg font-semibold">
            Child profile (optional)
          </legend>
          <FormField id="child-name" label="Child's first name">
            <Input {...form.register('childName')} className="min-h-11 text-base" />
          </FormField>
          <FormField id="child-age" label="Age range">
            <Input
              {...form.register('childAgeRange')}
              placeholder="Example: 5–6 years"
              className="min-h-11 text-base"
            />
          </FormField>
        </fieldset>

        <FormField
          id="profile-interests"
          label="Interests"
          hint="Comma separated — used to suggest modules, never to pressure you."
        >
          <Textarea {...form.register('interests')} className="min-h-20 text-base" />
        </FormField>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
            Save profile
          </Button>
          {saved ? (
            <p className="text-sm text-primary" role="status">
              Saved on this device.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  )
}
