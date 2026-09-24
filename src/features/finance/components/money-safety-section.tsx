import { ShieldCheck } from 'lucide-react'

import { SectionHeader } from '@/components/common/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { moneySafetyCards } from '@/features/finance/data/money-safety'

export function MoneySafetySection() {
  return (
    <section aria-labelledby="finance-safety-heading">
      <SectionHeader
        id="finance-safety-heading"
        title="Money Safety"
        description="Short reminders you can revisit anytime. When in doubt, pause and verify with your bank’s official number."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {moneySafetyCards.map((card) => (
          <li key={card.id}>
            <Card variant="warm" className="h-full">
              <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                <ShieldCheck className="size-6 shrink-0 text-primary" aria-hidden />
                <div className="min-w-0 space-y-1">
                  <CardTitle className="font-serif text-lg">{card.title}</CardTitle>
                  <p className="text-sm font-medium text-foreground/90">{card.summary}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
