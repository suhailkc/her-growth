import { PhoneIcon } from 'lucide-react'

import { StatusBadge } from '@/components/common/status-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { familyContactKindLabels } from '@/features/family/family-labels'
import type { FamilyContact } from '@/features/family/types'

type ContactCardProps = {
  contact: FamilyContact
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <Card variant="family" className="h-full">
      <CardHeader className="gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="font-serif text-lg">{contact.name}</CardTitle>
          <StatusBadge label={familyContactKindLabels[contact.kind]} tone="neutral" />
        </div>
        <p className="text-sm text-muted-foreground">{contact.role}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        {contact.phone ? (
          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="inline-flex min-h-11 items-center gap-2 text-base font-medium text-primary underline-offset-4 hover:underline"
          >
            <PhoneIcon className="size-4 shrink-0" aria-hidden />
            {contact.phone}
          </a>
        ) : null}
        {contact.note ? (
          <p className="text-sm text-muted-foreground">{contact.note}</p>
        ) : null}
      </CardContent>
    </Card>
  )
}
