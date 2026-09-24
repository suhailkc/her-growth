import { Button } from '@/components/ui/button'
import { useProfileStore } from '@/features/profile/profile-store'

export function ProfileAccountPage() {
  const profile = useProfileStore((s) => s.profile)

  return (
    <div className="space-y-6 pt-6">
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="text-muted-foreground">Account ID</dt>
          <dd className="font-medium">{profile.id}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Onboarding</dt>
          <dd className="font-medium">
            {profile.onboardingComplete ? 'Completed' : 'Not finished'}
          </dd>
        </div>
      </dl>
      <p className="text-muted-foreground">
        Sign-in with email or phone will be added when backend accounts are ready. Your
        local data remains until you clear browser storage.
      </p>
      <Button type="button" variant="secondary" size="lg" disabled>
        Sign out (coming soon)
      </Button>
    </div>
  )
}
