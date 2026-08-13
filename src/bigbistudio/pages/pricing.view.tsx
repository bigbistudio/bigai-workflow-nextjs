// Internal
import {
  HeroSimpleSection,
  PricingSection,
  LogosSection,
  ComparePlansSection,
  TestimonialsSection,
  FAQSection,
} from "@/bigbistudio/sections"

import { pricingPageData } from "@/bigbistudio/data/pages"
import { faqsData } from "@/bigbistudio/data/faqs"

const page = pricingPageData

export function PricingView() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <HeroSimpleSection {...page.sections.heroSimple} />
      <PricingSection {...page.sections.pricing} />
      <LogosSection {...page.sections.clientLogos} />
      <ComparePlansSection {...page.sections.comparePlans} />
      <TestimonialsSection {...page.sections.testimonials} />
      <FAQSection
        {...page.sections.faqPricing}
        questions={faqsData.faqPricing}
      />
    </main>
  )
}
