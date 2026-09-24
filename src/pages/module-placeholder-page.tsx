import { EmptyState } from '@/components/common/empty-state'
import { PageHeader } from '@/components/common/page-header'
import { primaryNavItems, secondaryNavItems } from '@/config/navigation'
import type { AppModuleId } from '@/types/navigation'

const allModules = [...primaryNavItems, ...secondaryNavItems]

type ModulePlaceholderPageProps = {
  moduleId: AppModuleId
}

export function ModulePlaceholderPage({ moduleId }: ModulePlaceholderPageProps) {
  const moduleMeta = allModules.find((item) => item.id === moduleId)

  if (!moduleMeta) {
    return null
  }

  const Icon = moduleMeta.icon

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <PageHeader title={moduleMeta.label} description={moduleMeta.description} />
      <EmptyState
        icon={Icon}
        title="This module is planned"
        description="We are setting up gentle, practical content here. Nothing is required right away — explore when you feel ready."
      />
    </div>
  )
}
