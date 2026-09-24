import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { ThemePreference } from '@/features/profile/profile-store'
import { useProfileStore } from '@/features/profile/profile-store'

export function ProfileThemePage() {
  const theme = useProfileStore((s) => s.settings.theme)
  const updateSettings = useProfileStore((s) => s.updateSettings)

  return (
    <div className="space-y-6 pt-6">
      <p className="text-muted-foreground">
        Choose a look that feels comfortable for your eyes.
      </p>
      <RadioGroup
        value={theme}
        onValueChange={(value) => updateSettings({ theme: value as ThemePreference })}
        className="gap-3"
      >
        <div className="flex items-center gap-3 rounded-xl border border-border/80 p-4">
          <RadioGroupItem value="light" id="theme-light" />
          <Label htmlFor="theme-light" className="font-normal">
            Light — warm and bright
          </Label>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border/80 p-4">
          <RadioGroupItem value="dark" id="theme-dark" />
          <Label htmlFor="theme-dark" className="font-normal">
            Dark — softer in low light
          </Label>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border/80 p-4">
          <RadioGroupItem value="system" id="theme-system" />
          <Label htmlFor="theme-system" className="font-normal">
            Match my device setting
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
