// External
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

// Internal
import { CaseStudyDetailBreadcrumb } from "./navigation/case-study-detail-breadcrumb"
import { siteData } from "@/bigbistudio/data/site"

// Types
import type { CaseStudy } from "@/bigbistudio/types/case-study.types"

type CaseStudyDetailHeroSectionProps = {
  currentCaseStudy: CaseStudy
}

export function CaseStudyDetailHeroSection({
  currentCaseStudy,
}: CaseStudyDetailHeroSectionProps) {
  const { meta, company, testimonial } = currentCaseStudy

  return (
    <section className="flex flex-col gap-12" id="case-study-detail-hero" >
      <CaseStudyDetailBreadcrumb companyName={company.name} />
      <h1 className="text-h1-article text-center">{meta.title}</h1>
      <Image
        className="rounded-xl"
        src={meta.bannerImage}
        alt={meta.title}
        width={2048}
        height={1004}
        loading="eager"
      />
      <div className="flex flex-col">
        <p className="text-base italic border-l-2 border-primary pl-4">{`"${testimonial?.quote}"`}</p>
        <div className="flex flex-col gap-0.5 mt-5">
          <span className="font-bold">{testimonial?.author}</span>
          <span className="text-ink-tertiary text-sm">{testimonial?.role}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:flex gap-5 lg:gap-x-12 py-10 border-y border-line-primary">
        {company.website && (
          <div className="flex flex-col gap-2">
            <span className="text-body-medium">{siteData.companyInfo.website}</span>
            <Link
              href={`https://${company.website}`}
              target="_blank"
              className="flex gap-1 items-center text-body text-ink-tertiary"
            >
              {company.website}
              <ExternalLink size={12} className="text-ink-quaternary" />
            </Link>
          </div>
        )}
        {company.industry && (
          <div className="flex flex-col gap-2">
            <span className="text-body-medium">{siteData.companyInfo.industry}</span>
            <span className="text-body text-ink-tertiary">
              {company.industry}
            </span>
          </div>
        )}
        {company.teamSize && (
          <div className="flex flex-col gap-2">
            <span className="text-body-medium">{siteData.companyInfo.teamSize}</span>
            <span className="text-body text-ink-tertiary">
              {company.teamSize}
            </span>
          </div>
        )}
        {company.useCase && (
          <div className="flex flex-col gap-2">
            <span className="text-body-medium">{siteData.companyInfo.useCase}</span>
            <span className="text-body text-ink-tertiary">
              {company.useCase}
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
