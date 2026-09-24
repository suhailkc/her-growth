import { EmptyState } from '@/components/common/empty-state'
import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import {
  primaryNavItems,
  secondaryNavItems,
  supplementalNavItems,
} from '@/config/navigation'
import type { AppModuleId } from '@/types/navigation'

const allModules = [...primaryNavItems, ...supplementalNavItems, ...secondaryNavItems]

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
    <PageContainer>
      <PageHeader title={moduleMeta.label} description={moduleMeta.description} />
      <EmptyState
        icon={Icon}
        title="This module is planned"
        description="We are setting up gentle, practical content here. Nothing is required right away — explore when you feel ready."
      />
    </PageContainer>
  )
}
