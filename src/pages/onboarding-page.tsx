import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'

import { FormField } from '@/components/common/form-field'
import { PageContainer } from '@/components/common/page-container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { appBrand } from '@/config/app'
import { onboardingSchema, type OnboardingFormValues } from '@/features/profile/schemas'
import { useProfileStore } from '@/features/profile/profile-store'

export function OnboardingPage() {
  const navigate = useNavigate()
  const onboardingComplete = useProfileStore((s) => s.profile.onboardingComplete)
  const updateProfile = useProfileStore((s) => s.updateProfile)
  const completeOnboarding = useProfileStore((s) => s.completeOnboarding)
  const profile = useProfileStore((s) => s.profile)

  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: { displayName: profile.displayName },
  })

  if (onboardingComplete) {
    return <Navigate to="/" replace />
  }

  async function onSubmit(values: OnboardingFormValues) {
    updateProfile({ displayName: values.displayName })
    completeOnboarding()
    navigate('/', { replace: true })
  }

  return (
    <PageContainer width="narrow">
      <div className="mx-auto max-w-lg py-8">
        <h1 className="font-serif text-3xl font-semibold">Welcome to {appBrand.name}</h1>
        <p className="mt-2 text-muted-foreground">{appBrand.tagline}</p>

        <Card variant="warm" className="mt-8">
          <CardHeader>
            <CardTitle className="font-serif text-lg">What should we call you?</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                void form.handleSubmit(onSubmit)(event)
              }}
            >
              <FormField
                id="onboard-name"
                label="Your name"
                error={form.formState.errors.displayName?.message}
              >
                <Input
                  {...form.register('displayName')}
                  className="min-h-11 text-base"
                  autoComplete="name"
                />
              </FormField>
              <Button type="submit" size="lg">
                Start my journey
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
