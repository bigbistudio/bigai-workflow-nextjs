// Internal
import {
  CaseStudyDetailHeroSection,
  CaseStudyDetailContentSection,
} from "@/bigbistudio/sections"

// Types
import type { CaseStudy } from "@/bigbistudio/types/case-study.types"

type CaseStudyDetailViewProps = {
  currentCaseStudy: CaseStudy
}

export function CaseStudyDetailView({
  currentCaseStudy,
}: CaseStudyDetailViewProps) {
  return (
    <main className="container relative flex flex-col lg:max-w-180 px-4 py-20 z-10">
      <CaseStudyDetailHeroSection currentCaseStudy={currentCaseStudy} />
      <CaseStudyDetailContentSection currentCaseStudy={currentCaseStudy} />
    </main>
  )
}
