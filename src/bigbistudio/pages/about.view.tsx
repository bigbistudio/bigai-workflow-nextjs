// Internal
import {
  HeroSimpleSection,
  TeamSection,
  LogosSection,
  TestimonialsSection,
  BlogSection,
} from "@/bigbistudio/sections"
import { PortableText } from "@/bigbistudio/components/ui"

import { aboutPageData } from "@/bigbistudio/data/pages"

// Types
import type { PortableBlock } from "@/bigbistudio/types/article.types"

const page = aboutPageData
const aboutContent = page.sections.content as PortableBlock[]

export function AboutView() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <HeroSimpleSection {...page.sections.heroSimple} />
      <section className="container prose prose-invert flex flex-col text-left xl:max-w-210">
        <PortableText blocks={aboutContent} />
      </section>
      <TeamSection {...page.sections.team} />
      <LogosSection {...page.sections.clientLogos} />
      <TestimonialsSection {...page.sections.testimonials} />
      <BlogSection {...page.sections.blog} />
    </main>
  )
}
