import { useMemo, useState } from 'react'

import { SectionHeader } from '@/components/common/section-header'
import { ActivityCard } from '@/features/parenting/components/activity-card'
import { parentingActivities } from '@/features/parenting/data/activities'
import { parentingCategoryLabels } from '@/features/parenting/parenting-labels'
import { useParentingStore } from '@/features/parenting/parenting-store'
import {
  PARENTING_ACTIVITY_CATEGORY_IDS,
  type ParentingActivityCategoryId,
} from '@/features/parenting/types'
import { cn } from '@/lib/utils'

export function ActivityLibrarySection() {
  const [category, setCategory] = useState<ParentingActivityCategoryId | 'all'>('all')
  const completedActivityIds = useParentingStore((s) => s.completedActivityIds)

  const filtered = useMemo(() => {
    if (category === 'all') return parentingActivities
    return parentingActivities.filter((activity) => activity.categoryId === category)
  }, [category])

  return (
    <section aria-labelledby="parenting-library-heading">
      <SectionHeader
        id="parenting-library-heading"
        title="Activity library"
        description="Browse by category. Tap any card for materials and step-by-step instructions."
      />

      <div
        className="mb-6 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Activity categories"
      >
        <CategoryChip
          active={category === 'all'}
          label="All"
          onClick={() => setCategory('all')}
        />
        {PARENTING_ACTIVITY_CATEGORY_IDS.map((id) => (
          <CategoryChip
            key={id}
            active={category === id}
            label={parentingCategoryLabels[id]}
            onClick={() => setCategory(id)}
          />
        ))}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {filtered.map((activity) => (
          <li key={activity.id}>
            <ActivityCard
              activity={activity}
              complete={completedActivityIds.includes(activity.id)}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

type CategoryChipProps = {
  label: string
  active: boolean
  onClick: () => void
}

function CategoryChip({ label, active, onClick }: CategoryChipProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        'inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-medium transition-colors',
        active
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted/60 text-muted-foreground hover:bg-accent hover:text-accent-foreground',
      )}
    >
      {label}
    </button>
  )
}
