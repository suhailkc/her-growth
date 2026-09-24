import { SectionHeader } from '@/components/common/section-header'
import { SkillAreaCard } from '@/features/journey/components/skill-area-card'
import { SkillAreasChart } from '@/features/journey/components/skill-areas-chart'
import type { JourneySkillArea } from '@/types/journey'

type SkillAreasSectionProps = {
  areas: JourneySkillArea[]
}

export function SkillAreasSection({ areas }: SkillAreasSectionProps) {
  return (
    <section aria-labelledby="skill-areas-heading" className="space-y-6">
      <SectionHeader
        id="skill-areas-heading"
        title="Skill areas"
        description="Six gentle paths — grow where life needs you most."
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="grid gap-4 sm:grid-cols-2">
          {areas.map((area) => (
            <SkillAreaCard key={area.moduleId} area={area} />
          ))}
        </div>
        <SkillAreasChart areas={areas} />
      </div>
    </section>
  )
}
