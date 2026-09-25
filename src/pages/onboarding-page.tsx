import { Navigate, useNavigate } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { WelcomeDedication } from '@/components/common/welcome-dedication'
import { WelcomePhoto } from '@/components/common/welcome-photo'
import { PublicPageShell } from '@/components/layout/public-page-shell'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { appBrand } from '@/config/app'
import { learner } from '@/config/learner'
import { useProfileStore } from '@/features/profile/profile-store'

export function OnboardingPage() {
  const navigate = useNavigate()
  const onboardingComplete = useProfileStore((s) => s.profile.onboardingComplete)
  const updateProfile = useProfileStore((s) => s.updateProfile)
  const completeOnboarding = useProfileStore((s) => s.completeOnboarding)

  if (onboardingComplete) {
    return <Navigate to="/" replace />
  }

  function startJourney() {
    updateProfile({ displayName: learner.fullName })
    completeOnboarding()
    navigate('/', { replace: true })
  }

  return (
    <PublicPageShell>
      <PageContainer width="narrow">
        <div className="enter-fade-up mx-auto w-full min-w-0 max-w-lg py-4 sm:py-8">
          <WelcomePhoto className="mx-auto max-w-xs sm:max-w-sm" />
          <WelcomeDedication className="mt-3 justify-center" />
          <p className="mt-6 text-sm font-medium text-primary">{appBrand.welcomeLead}</p>
          <h1 className="mt-1 text-balance font-serif text-2xl font-semibold sm:text-3xl">
            Welcome to your space
          </h1>
          <p className="mt-3 text-base leading-relaxed text-pretty text-muted-foreground">
            {appBrand.welcomeBody}
          </p>

          <Card variant="warm" className="mt-8">
            <CardHeader>
              <CardTitle className="font-serif text-lg">
                {learner.nickname}, ready when you are
              </CardTitle>
              <p className="text-sm leading-relaxed text-muted-foreground">
                No rush, no grades — tick a skill when it feels easy. You can close the app anytime
                and pick up where you left off.
              </p>
            </CardHeader>
            <CardContent>
              <Button
                type="button"
                size="lg"
                className="w-full rounded-xl sm:w-auto"
                onClick={startJourney}
              >
                Open my journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageContainer>
    </PublicPageShell>
  )
}
