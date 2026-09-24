import { Navigate } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { ErrorState } from '@/components/common/error-state'
import { LoadingState } from '@/components/common/loading-state'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { appBrand } from '@/config/app'
import { learner } from '@/config/learner'
import { useAuth } from '@/features/auth/auth-provider'
import { useProfileStore } from '@/features/profile/profile-store'

export function LoginPage() {
  const {
    configured,
    isLoading,
    session,
    access,
    dataReady,
    gateMessage,
    signInWithGoogle,
  } = useAuth()
  const onboardingComplete = useProfileStore((s) => s.profile.onboardingComplete)

  if (!configured) {
    return (
      <PageContainer width="narrow">
        <ErrorState
          title="Sign-in not configured yet"
          description="Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (see .env.example), then restart the dev server."
        />
      </PageContainer>
    )
  }

  if (isLoading) {
    return <LoadingState label="Checking sign-in…" />
  }

  if (session && access === 'allowed' && dataReady) {
    if (onboardingComplete) {
      return <Navigate to="/" replace />
    }
    return <Navigate to="/onboarding" replace />
  }

  return (
    <PageContainer width="narrow">
      <div className="enter-fade-up mx-auto max-w-lg py-4 sm:py-8">
        <p className="text-sm font-medium text-primary">{appBrand.welcomeLead}</p>
        <h1 className="mt-1 text-balance font-serif text-2xl font-semibold sm:text-3xl">
          Sign in to continue
        </h1>
        <p className="mt-3 text-base leading-relaxed text-pretty text-muted-foreground">
          {learner.nickname}, use your Google account so your checklist progress stays saved on
          every device.
        </p>

        <Card variant="warm" className="mt-8">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Continue with Google</CardTitle>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Only invited email addresses can open this space. If sign-in fails, ask Suhail to add
              your Gmail to the allowlist.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {gateMessage ? (
              <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
                {gateMessage}
              </p>
            ) : null}
            <Button
              type="button"
              size="lg"
              className="w-full rounded-xl sm:w-auto"
              onClick={() => void signInWithGoogle()}
            >
              Continue with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
