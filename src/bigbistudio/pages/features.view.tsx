// Internal
import {
  HeroSimpleSection,
  FeaturesGridSection,
  StatisticsSection,
  ProcessTimelineSection,
  CaseStudiesSection,
  FAQSection,
} from "@/bigbistudio/sections"

import { featuresPageData } from "@/bigbistudio/data/pages"
import { faqsData } from "@/bigbistudio/data/faqs"

const page = featuresPageData

export function FeaturesView() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <HeroSimpleSection {...page.sections.heroSimple} />
      <FeaturesGridSection {...page.sections.featuresGrid} />
      <StatisticsSection {...page.sections.benefits} />
      <ProcessTimelineSection {...page.sections.process} />
      <CaseStudiesSection {...page.sections.caseStudies} />
      <FAQSection
        {...page.sections.faqGeneral}
        questions={faqsData.faqGeneral}
      />
    </main>
  )
}
