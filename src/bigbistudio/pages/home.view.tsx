// Internal
import {
  HeroMainSection,
  LogosSection,
  FeaturesCarouselSection,
  StatisticsSection,
  ProcessGridSection,
  PricingSection,
  CaseStudiesSection,
  TestimonialsSection,
  FAQSection,
  BlogSection,
} from "@/bigbistudio/sections/index"

import { homePageData } from "@/bigbistudio/data/pages"
import { faqsData } from "@/bigbistudio/data/faqs"

const page = homePageData

export function HomeView() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <HeroMainSection {...page.sections.heroMain} />
      <LogosSection {...page.sections.clientLogos} />
      <FeaturesCarouselSection {...page.sections.featuresCarousel} />
      <StatisticsSection {...page.sections.statistics} />
      <ProcessGridSection {...page.sections.processGrid} />
      <PricingSection {...page.sections.pricing} />
      <CaseStudiesSection {...page.sections.caseStudies} />
      <TestimonialsSection {...page.sections.testimonials} />
      <FAQSection
        {...page.sections.faqGeneral}
        questions={faqsData.faqGeneral}
      />
      <BlogSection {...page.sections.blog} />
    </main>
  )
}
