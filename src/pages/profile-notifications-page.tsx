import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useProfileStore } from '@/features/profile/profile-store'

export function ProfileNotificationsPage() {
  const settings = useProfileStore((s) => s.settings)
  const updateSettings = useProfileStore((s) => s.updateSettings)

  return (
    <div className="space-y-6 pt-6">
      <p className="text-muted-foreground">
        Gentle reminders only — you can turn these off anytime.
      </p>
      <div className="flex items-start gap-3 rounded-xl border border-border/80 p-4">
        <Checkbox
          id="notif-enabled"
          checked={settings.notificationsEnabled}
          onCheckedChange={(checked) =>
            updateSettings({ notificationsEnabled: checked === true })
          }
        />
        <Label htmlFor="notif-enabled" className="font-normal leading-relaxed">
          Allow in-app notifications when we add them (stored on this device for now).
        </Label>
      </div>
      <div className="flex items-start gap-3 rounded-xl border border-border/80 p-4">
        <Checkbox
          id="mission-reminders"
          checked={settings.missionRemindersEnabled}
          onCheckedChange={(checked) =>
            updateSettings({ missionRemindersEnabled: checked === true })
          }
        />
        <Label htmlFor="mission-reminders" className="font-normal leading-relaxed">
          Remind me about Today&apos;s Mission if I have not opened it yet.
        </Label>
      </div>
    </div>
  )
}
