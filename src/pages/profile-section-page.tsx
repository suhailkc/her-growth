import { EmptyState } from '@/components/common/empty-state'
import { Settings } from 'lucide-react'

type ProfileSectionPageProps = {
  title: string
  description: string
}

export function ProfileSectionPage({ title, description }: ProfileSectionPageProps) {
  return <EmptyState icon={Settings} title={title} description={description} />
}
