import { Checkbox } from '@/components/ui/checkbox'
import { useProfileStore } from '@/features/profile/profile-store'

export function CompletionHapticsToggle() {
  const enabled = useProfileStore((s) => s.settings.completionHaptics)
  const updateSettings = useProfileStore((s) => s.updateSettings)

  return (
    <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border border-border/60 bg-background/80 px-3 py-2.5">
      <Checkbox
        checked={enabled}
        onCheckedChange={(checked) => {
          updateSettings({ completionHaptics: checked === true })
        }}
        className="mt-0.5 size-5 shrink-0"
        aria-describedby="completion-haptics-hint"
      />
      <span className="min-w-0 space-y-0.5">
        <span className="block text-sm font-medium leading-snug">
          Gentle vibration on tick
        </span>
        <span
          id="completion-haptics-hint"
          className="block text-xs leading-snug text-muted-foreground"
        >
          Optional — works on phones that support it. Off by default.
        </span>
      </span>
    </label>
  )
}
