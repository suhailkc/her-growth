import { Navigate } from 'react-router-dom'

import { ErrorState } from '@/components/common/error-state'
import { GoogleIcon } from '@/components/common/google-icon'
import { LoadingState } from '@/components/common/loading-state'
import { PageContainer } from '@/components/common/page-container'
import { WelcomeDedication } from '@/components/common/welcome-dedication'
import { PublicPageShell } from '@/components/layout/public-page-shell'
import { Button } from '@/components/ui/button'
import { appBrand } from '@/config/app'
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
      <PublicPageShell>
        <PageContainer width="narrow">
          <ErrorState
            title="Sign-in not configured yet"
            description="Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (see .env.example), then restart the dev server."
          />
        </PageContainer>
      </PublicPageShell>
    )
  }

  if (isLoading) {
    return (
      <PublicPageShell>
        <LoadingState label="Checking sign-in…" />
      </PublicPageShell>
    )
  }

  if (session && access === 'allowed' && dataReady) {
    if (onboardingComplete) {
      return <Navigate to="/" replace />
    }
    return <Navigate to="/onboarding" replace />
  }

  return (
    <PublicPageShell bleed>
      <div className="grid min-h-dvh lg:grid-cols-2">
        <div className="relative h-[min(46vh,22rem)] overflow-hidden lg:h-auto lg:min-h-dvh">
          <img
            src={appBrand.welcomePhotoSrc}
            alt={appBrand.welcomePhotoAlt}
            width={800}
            height={1000}
            className="absolute inset-0 size-full object-cover object-[center_18%] scale-105 animate-[enter-fade-up_0.7s_ease-out_both]"
            decoding="async"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent lg:hidden"
            aria-hidden
          />
        </div>

        <div className="flex items-center justify-center px-6 py-8 sm:px-10 lg:px-16">
          <div className="enter-fade-up w-full max-w-sm">
            <WelcomeDedication className="justify-center lg:justify-start" />

            <h1 className="mt-4 text-center font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-left">
              {appBrand.name}
            </h1>
            <p className="mt-2 text-center text-base leading-relaxed text-pretty text-muted-foreground lg:text-left">
              {appBrand.tagline}
            </p>

            <div className="mt-8 space-y-3">
              {gateMessage ? (
                <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2 text-center text-sm text-destructive lg:text-left">
                  {gateMessage}
                </p>
              ) : null}
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="h-12 w-full gap-3 border-border/80 bg-card text-base font-medium text-foreground shadow-(--shadow-soft) hover:bg-card hover:shadow-(--shadow-card)"
                onClick={() => void signInWithGoogle()}
              >
                <GoogleIcon />
                Continue with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PublicPageShell>
  )
}
