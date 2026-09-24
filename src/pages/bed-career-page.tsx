import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { Badge } from '@/components/ui/badge'
import { BedSkillsSection } from '@/features/career/components/bed-skills-section'
import { CareerExplorationSection } from '@/features/career/components/career-exploration-section'
import { DigitalTeachingSection } from '@/features/career/components/digital-teaching-section'
import { PracticalProjectsSection } from '@/features/career/components/practical-projects-section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function BedCareerPage() {
  return (
    <PageContainer>
      <PageHeader
        title="B.Ed. & Career Exploration"
        description="Study support, digital teaching tips, and optional career ideas — useful even if you never seek employment."
        action={
          <Badge variant="secondary" className="min-h-11 px-4 text-sm font-normal">
            Optional module
          </Badge>
        }
      />

      <Tabs defaultValue="bed-skills" className="gap-6">
        <TabsList className="flex h-auto w-full flex-wrap">
          <TabsTrigger value="bed-skills" className="min-h-11 flex-1">
            B.Ed. skills
          </TabsTrigger>
          <TabsTrigger value="digital" className="min-h-11 flex-1">
            Digital teaching
          </TabsTrigger>
          <TabsTrigger value="careers" className="min-h-11 flex-1">
            Explore careers
          </TabsTrigger>
          <TabsTrigger value="projects" className="min-h-11 flex-1">
            Projects
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bed-skills" className="mt-0">
          <BedSkillsSection />
        </TabsContent>
        <TabsContent value="digital" className="mt-0">
          <DigitalTeachingSection />
        </TabsContent>
        <TabsContent value="careers" className="mt-0">
          <CareerExplorationSection />
        </TabsContent>
        <TabsContent value="projects" className="mt-0">
          <PracticalProjectsSection />
        </TabsContent>
      </Tabs>
    </PageContainer>
  )
}
