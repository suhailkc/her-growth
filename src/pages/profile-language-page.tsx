import { FormField } from '@/components/common/form-field'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useProfileStore } from '@/features/profile/profile-store'
import { useState } from 'react'

export function ProfileLanguagePage() {
  const preferredLocale = useProfileStore((s) => s.profile.preferredLocale)
  const updateProfile = useProfileStore((s) => s.updateProfile)
  const [locale, setLocale] = useState(preferredLocale)
  const [saved, setSaved] = useState(false)

  return (
    <div className="space-y-6 pt-6">
      <FormField
        id="settings-language"
        label="Display language"
        hint="Malayalam translations will appear gradually — English stays complete."
      >
        <Select
          value={locale}
          onValueChange={(value) => setLocale(value as 'en' | 'ml')}
        >
          <SelectTrigger id="settings-language" size="comfortable">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="ml">Malayalam (coming soon)</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      <Button
        type="button"
        size="lg"
        onClick={() => {
          updateProfile({ preferredLocale: locale })
          setSaved(true)
          window.setTimeout(() => setSaved(false), 3000)
        }}
      >
        Save language
      </Button>
      {saved ? (
        <p className="text-sm text-primary" role="status">
          Language preference saved.
        </p>
      ) : null}
    </div>
  )
}
