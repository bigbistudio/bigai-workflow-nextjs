// Internal
import { CaseStudyCard } from "../cards/case-study-card"

// Types
import type { CaseStudySummary } from "@/bigbistudio/types/case-study.types"

type caseStudyGridProps = {
  numberOfColumns?: number
  caseStudies: CaseStudySummary[]
}

export function CaseStudyGrid({
  numberOfColumns = 2,
  caseStudies,
}: caseStudyGridProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-8 ${
        numberOfColumns === 2
          ? "lg:grid-cols-2"
          : numberOfColumns === 3
            ? "lg:grid-cols-3"
            : "lg:grid-cols-4"
      }`}
    >
      {caseStudies.map((study) => (
        <CaseStudyCard key={study.meta.slug} study={study} />
      ))}
    </div>
  )
}
