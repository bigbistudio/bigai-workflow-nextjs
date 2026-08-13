export type FAQItem = {
  id: string
  title: string
  answer?: string
}

export type FAQCollection = {
  faqGeneral: FAQItem[]
  faqPricing: FAQItem[]
}