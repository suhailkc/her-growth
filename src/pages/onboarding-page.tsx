import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'

import { FormField } from '@/components/common/form-field'
import { PageContainer } from '@/components/common/page-container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  onboardingStep1Schema,
  onboardingStep2Schema,
  onboardingStep3Schema,
  onboardingStep4Schema,
  onboardingStep5Schema,
  type OnboardingStep5Values,
} from '@/features/profile/schemas'
import { useProfileStore } from '@/features/profile/profile-store'
import type { LearningPreference } from '@/features/profile/profile-store'

const stepTitles = [
  'Welcome — your name',
  'Preferred language',
  'Daily learning time',
  'Learning interests',
  'Learning preferences',
] as const

export function OnboardingPage() {
  const navigate = useNavigate()
  const onboardingComplete = useProfileStore((s) => s.profile.onboardingComplete)
  const updateProfile = useProfileStore((s) => s.updateProfile)
  const setLearningPreference = useProfileStore((s) => s.setLearningPreference)
  const completeOnboarding = useProfileStore((s) => s.completeOnboarding)
  const profile = useProfileStore((s) => s.profile)

  const [step, setStep] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const step1Form = useForm({
    resolver: zodResolver(onboardingStep1Schema),
    defaultValues: { displayName: profile.displayName },
  })
  const step2Form = useForm({
    resolver: zodResolver(onboardingStep2Schema),
    defaultValues: { preferredLocale: profile.preferredLocale },
  })
  const step3Form = useForm({
    resolver: zodResolver(onboardingStep3Schema),
    defaultValues: {
      dailyLearningMinutes: profile.dailyLearningMinutes ?? 15,
    },
  })
  const step4Form = useForm({
    resolver: zodResolver(onboardingStep4Schema),
    defaultValues: {
      interests: profile.interests?.join(', ') ?? '',
    },
  })
  const step5Form = useForm<OnboardingStep5Values>({
    resolver: zodResolver(onboardingStep5Schema),
    defaultValues: { learningPreferences: 'short-daily' },
  })

  if (onboardingComplete) {
    return <Navigate to="/" replace />
  }

  async function goNext() {
    setError(null)
    if (step === 0) {
      const valid = await step1Form.trigger()
      if (!valid) return
      updateProfile({ displayName: step1Form.getValues().displayName })
    }
    if (step === 1) {
      const valid = await step2Form.trigger()
      if (!valid) return
      updateProfile({ preferredLocale: step2Form.getValues().preferredLocale })
    }
    if (step === 2) {
      const valid = await step3Form.trigger()
      if (!valid) return
      updateProfile({
        dailyLearningMinutes: step3Form.getValues().dailyLearningMinutes,
      })
    }
    if (step === 3) {
      const valid = await step4Form.trigger()
      if (!valid) return
      const raw = step4Form.getValues().interests
      updateProfile({
        interests: raw
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),
      })
    }
    if (step === 4) {
      const valid = await step5Form.trigger()
      if (!valid) return
      setLearningPreference(
        step5Form.getValues().learningPreferences as LearningPreference,
      )
      completeOnboarding()
      navigate('/', { replace: true })
      return
    }
    setStep((value) => value + 1)
  }

  return (
    <PageContainer width="narrow">
      <div className="mx-auto max-w-lg py-8">
        <p className="mb-2 text-sm text-muted-foreground">
          Step {step + 1} of {stepTitles.length}
        </p>
        <h1 className="font-serif text-3xl font-semibold">{stepTitles[step]}</h1>
        <p className="mt-2 text-muted-foreground">
          A quick setup so Her Growth feels personal. You can change everything later in
          Profile.
        </p>

        <Card variant="warm" className="mt-8">
          <CardHeader>
            <CardTitle className="font-serif text-lg">{stepTitles[step]}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {step === 0 ? (
              <FormField
                id="onboard-name"
                label="Your name"
                error={step1Form.formState.errors.displayName?.message}
              >
                <Input
                  {...step1Form.register('displayName')}
                  className="min-h-11 text-base"
                  autoComplete="name"
                />
              </FormField>
            ) : null}

            {step === 1 ? (
              <FormField
                id="onboard-locale"
                label="Language"
                error={step2Form.formState.errors.preferredLocale?.message}
              >
                <Select
                  value={step2Form.watch('preferredLocale')}
                  onValueChange={(value) =>
                    step2Form.setValue('preferredLocale', value as 'en' | 'ml', {
                      shouldValidate: true,
                    })
                  }
                >
                  <SelectTrigger size="comfortable">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ml">Malayalam (coming soon)</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
            ) : null}

            {step === 2 ? (
              <FormField
                id="onboard-minutes"
                label="Minutes per day you might learn"
                error={step3Form.formState.errors.dailyLearningMinutes?.message}
              >
                <Input
                  type="number"
                  min={5}
                  max={180}
                  {...step3Form.register('dailyLearningMinutes')}
                  className="min-h-11 text-base"
                />
              </FormField>
            ) : null}

            {step === 3 ? (
              <FormField
                id="onboard-interests"
                label="Interests (comma separated)"
                hint="Example: parenting, digital skills, finance"
                error={step4Form.formState.errors.interests?.message}
              >
                <Textarea
                  {...step4Form.register('interests')}
                  className="min-h-24 text-base"
                />
              </FormField>
            ) : null}

            {step === 4 ? (
              <FormField id="onboard-pref" label="How do you like to learn?">
                <RadioGroup
                  value={step5Form.watch('learningPreferences')}
                  onValueChange={(value) =>
                    step5Form.setValue(
                      'learningPreferences',
                      value as OnboardingStep5Values['learningPreferences'],
                      {
                        shouldValidate: true,
                      },
                    )
                  }
                  className="gap-3"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="short-daily" id="pref-short" />
                    <Label htmlFor="pref-short" className="font-normal">
                      Short daily sessions
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="few-longer" id="pref-long" />
                    <Label htmlFor="pref-long" className="font-normal">
                      Few longer sessions when I have time
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="flexible" id="pref-flex" />
                    <Label htmlFor="pref-flex" className="font-normal">
                      Flexible — mix both
                    </Label>
                  </div>
                </RadioGroup>
              </FormField>
            ) : null}

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <div className="flex flex-wrap gap-3 pt-2">
              {step > 0 ? (
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </Button>
              ) : null}
              <Button type="button" size="lg" onClick={() => void goNext()}>
                {step === stepTitles.length - 1 ? 'Finish' : 'Continue'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
