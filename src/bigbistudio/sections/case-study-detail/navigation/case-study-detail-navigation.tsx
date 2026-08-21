// External
import Link from "next/link"
import Image from "next/image"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"
import { siteData } from "@/bigbistudio/data/site"

// Types
import type { CaseStudySummary } from "@/bigbistudio/types/case-study.types"

type CaseStudyDetailNavigationProps = {
  previousCaseStudy: CaseStudySummary | null
  nextCaseStudy: CaseStudySummary | null
}

export function CaseStudyDetailNavigation({
  previousCaseStudy,
  nextCaseStudy,
}: CaseStudyDetailNavigationProps) {
  return (
    <nav className="lg:sticky lg:bottom-2.5 flex flex-col gap-6 lg:flex-row justify-between bg-[#0F101197] backdrop-blur-xs border border-line-translucent p-4 rounded-2xl">
      <CaseStudyNavigationCard
        caseStudy={previousCaseStudy}
        direction={siteData.labels.previous}
        align="left"
      />
      <CaseStudyNavigationCard
        caseStudy={nextCaseStudy}
        direction={siteData.labels.next}
        align="right"
      />
    </nav>
  )
}

/* Navigation Card */

type CaseStudyNavigationCardProps = {
  caseStudy: CaseStudySummary | null
  direction: string
  align: "left" | "right"
}

function CaseStudyNavigationCard({
  caseStudy,
  direction,
  align,
}: CaseStudyNavigationCardProps) {
  if (!caseStudy) {
    return <div className="min-h-10 hidden lg:inline-block" />
  }

  return (
    <Link
      href={`${siteData.urls.caseStudiesPage}/${caseStudy.meta.slug}`}
      className="flex items-center gap-3"
    >
      {align === "left" && (
        <Image
          src={caseStudy.company.logo}
          width={40}
          height={40}
          alt={caseStudy.company.name}
          className="bg-surface-tertiary rounded-md"
        />
      )}

      <div
        className={cn(
          align === "right" ? "ml-auto text-right" : "",
          "flex flex-col",
        )}
      >
        <span className="text-small text-ink-tertiary">{direction}</span>
        <span className="text-body-medium">{caseStudy.company.name}</span>
      </div>

      {align === "right" && (
        <Image
          src={caseStudy.company.logo}
          width={40}
          height={40}
          alt={caseStudy.company.name}
          className="bg-surface-tertiary rounded-md"
        />
      )}
    </Link>
  )
}
