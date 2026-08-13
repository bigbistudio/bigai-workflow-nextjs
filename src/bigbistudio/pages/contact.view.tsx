// Internal
import {
  HeroSimpleSection,
  ContactFormSection,
  ContactInfoSection,
  FAQSection,
} from "@/bigbistudio/sections"

import { contactPageData } from "@/bigbistudio/data/pages"
import { faqsData } from "@/bigbistudio/data/faqs"

const page = contactPageData

export function ContactView() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <HeroSimpleSection {...page.sections.heroSimple} />
      <ContactFormSection {...page.sections.contactForm} />
      <ContactInfoSection info={page.sections.info} />
      <FAQSection
        {...page.sections.faqGeneral}
        questions={faqsData.faqGeneral}
      />
    </main>
  )
}
