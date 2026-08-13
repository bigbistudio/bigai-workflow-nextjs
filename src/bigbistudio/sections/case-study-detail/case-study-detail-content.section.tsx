// Internal
import { PortableText } from "@/bigbistudio/components/ui"
import { CaseStudyDetailNavigation } from "./navigation/case-study-detail-navigation"

import { getCaseStudyNavigation } from "@/bigbistudio/lib/case-study"

// Types
import type { CaseStudy } from "@/bigbistudio/types/case-study.types"

type CaseStudyDetailContentSectionProps = {
  currentCaseStudy: CaseStudy
}

export async function CaseStudyDetailContentSection({
  currentCaseStudy,
}: CaseStudyDetailContentSectionProps) {
  const navigation = await getCaseStudyNavigation(currentCaseStudy.meta.slug)

  return (
    <section id="case-study-detail-content">
      <div className="prose prose-invert flex flex-col mb-10">
        <PortableText blocks={currentCaseStudy.content} />
      </div>
      <CaseStudyDetailNavigation
        previousCaseStudy={navigation.previous}
        nextCaseStudy={navigation.next}
      />
    </section>
  )
}
