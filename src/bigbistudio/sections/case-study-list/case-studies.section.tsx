/**
 * Architecture Note:
 * Reusable Case Studies section.
 *
 * Designed for embedding on any page that needs to showcase selected case studies.
 * This is not the Case Studies listing page itself.
 */

// Internal
import { EyebrowIcon } from "@/bigbistudio/components/icons"
import { ButtonCtaGroup } from "@/bigbistudio/components/ui"
import { CaseStudyGrid } from "./grids/case-study-grid"

import { getCaseStudiesBySlugs } from "@/bigbistudio/lib/case-study"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

type CaseStudiesSectionProps = SectionSettings & {
  caseStudySlugs: string[]
}

export async function CaseStudiesSection({
  id,
  eyebrow,
  title,
  subtitle,
  buttons,
  caseStudySlugs,
}: CaseStudiesSectionProps) {
  const selectedCaseStudies = await getCaseStudiesBySlugs(caseStudySlugs)

  return (
    <section
      id={id}
      className="container flex flex-col py-20 gap-16 scroll-mt-12 xl:scroll-mt-24"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2.5">
        <div className="flex flex-col gap-2.5">
          <span className="flex items-center px-1 gap-1.5 text-sm text-ink-tertiary">
            <EyebrowIcon /> {eyebrow}
          </span>
          <h2 className="lg:whitespace-pre-line">{title}</h2>
        </div>
        <div className="flex lg:justify-end lg:items-end flex-1">
          <p className="text-body-large text-ink-tertiary max-w-105">
            {subtitle}
          </p>
        </div>
      </div>
      <CaseStudyGrid caseStudies={selectedCaseStudies} />
      <div className="flex justify-center gap-2.5">
        <ButtonCtaGroup buttons={buttons} />
      </div>
    </section>
  )
}
