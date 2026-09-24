import { Sparkles } from 'lucide-react'

import { EmptyState } from '@/components/common/empty-state'
import { PageHeader } from '@/components/common/page-header'
import { missionPlaceholder } from '@/config/navigation'

export function TodayPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <PageHeader
        title="Today's Mission"
        description="One practical step. Take your time — there is no rush."
      />
      <EmptyState
        icon={Sparkles}
        title={missionPlaceholder.title}
        description={missionPlaceholder.body}
      />
    </div>
  )
}
