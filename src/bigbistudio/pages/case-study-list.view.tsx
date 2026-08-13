// Internal
import { HeroSimpleSection, StatisticsSection } from "@/bigbistudio/sections"
import { CaseStudyGrid } from "@/bigbistudio/sections/case-study-list/grids/case-study-grid"

import { caseStudiesPageData } from "@/bigbistudio/data/pages"

// Types
import type { CaseStudySummary } from "../types/case-study.types"

const page = caseStudiesPageData

type CaseStudyListViewProps = {
  caseStudies: CaseStudySummary[]
}

export function CaseStudyListView({ caseStudies }: CaseStudyListViewProps) {
  return (
    <main className="relative flex flex-col z-10">
      <HeroSimpleSection {...page.sections.heroSimple} />
      <div className="w-full max-w-265 mx-auto">
        <div className="container flex flex-col justify-center py-20">
          <CaseStudyGrid caseStudies={caseStudies} />
        </div>
        <StatisticsSection {...page.sections.benefits} />
      </div>
    </main>
  )
}
