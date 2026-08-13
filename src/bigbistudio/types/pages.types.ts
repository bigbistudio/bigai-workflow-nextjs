import type { PortableBlock } from "@/bigbistudio/types/article.types"

// Shared

export type PageButton = {
  btnType: "primary" | "secondary" | "ghost"
  btnTitle: string
  btnUrl: string
  btnIcon?: string
}

export type HeroSimpleSection = {
  id?: string
  title: string
  subtitle: string
}

export type HeroMainSection = {
  title: string
  subtitle: string
  buttons: PageButton[]
}

export type BenefitsSection = {
  bigText?: boolean
  title: string
  numbers: {
    value: string
    description: string
  }[]
}

export type CaseStudiesSection = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  caseStudySlugs: string[]
  buttons: PageButton[]
}

export type BlogSection = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  blogSlugs: string[]
  buttons: PageButton[]
}

export type FAQSection = {
  id?: string
  eyebrow: string
  title: string
  isSticky: boolean
}

export type ClientLogosSection = {
  title: string
}

export type TestimonialsSection = {
  title: string
}

export type ProcessSection = {
  id?: string
  eyebrow: string
  title: string
  subtitle: string
}

// Features

export type FeaturesGridSection = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
}

export type FeaturesCarouselSection = {
  eyebrow: string
  title: string
  subtitle: string
  buttons: PageButton[]
}

// Pricing

export type PricingSection = {
  id: string
  eyebrow: string
  title: string
  buttons: PageButton[]
}

export type ComparePlansSection = {
  id: string
  title: string
  buttons: PageButton[]
}

// Contact

export type ContactFormSection = {
  id: string
  eyebrow: string
  title: string
  note: string[]
}

export type ContactInfoItem = {
  title: string
  icon: string
  link: string
}

// About

export type AboutTeamSection = {
  title: string
  subtitle: string
  additionalText: string
}

// Coming Soon

export type ComingSoonSection = {
  title: string
  subtitle: string
}

// Page configs

export type AboutPageConfig = {
  sections: {
    heroSimple: HeroSimpleSection
    content: PortableBlock[]
    team: AboutTeamSection
    clientLogos: ClientLogosSection
    testimonials: TestimonialsSection
    blog: BlogSection
  }
}

export type BlogPageConfig = {
  sections: {
    heroSimple: HeroSimpleSection
    caseStudies: CaseStudiesSection
  }
}

export type CaseStudiesPageConfig = {
  sections: {
    heroSimple: HeroSimpleSection
    benefits: BenefitsSection
  }
}

export type ComingSoonPageConfig = {
  sections: {
    comingSoon: ComingSoonSection
  }
}

export type ContactPageConfig = {
  sections: {
    heroSimple: HeroSimpleSection
    contactForm: ContactFormSection
    info: ContactInfoItem[]
    faqGeneral: FAQSection
  }
}

export type FeaturesPageConfig = {
  sections: {
    heroSimple: HeroSimpleSection
    featuresGrid: FeaturesGridSection
    benefits: BenefitsSection
    process: ProcessSection
    caseStudies: CaseStudiesSection
    faqGeneral: FAQSection
  }
}

export type HomePageConfig = {
  sections: {
    heroMain: HeroMainSection
    clientLogos: ClientLogosSection
    featuresCarousel: FeaturesCarouselSection
    statistics: BenefitsSection
    processGrid: ProcessSection
    pricing: PricingSection
    caseStudies: CaseStudiesSection
    testimonials: TestimonialsSection
    faqGeneral: FAQSection
    blog: BlogSection
  }
}

export type PricingPageConfig = {
  sections: {
    heroSimple: HeroSimpleSection
    pricing: PricingSection
    comparePlans: ComparePlansSection
    clientLogos: ClientLogosSection
    testimonials: TestimonialsSection
    faqPricing: FAQSection
  }
}