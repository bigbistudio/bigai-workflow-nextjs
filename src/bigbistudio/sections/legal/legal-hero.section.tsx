// External
import { FlagTriangleRight, Clock } from "lucide-react"

// Internal
import { formatDate } from "@/bigbistudio/lib/date"
import { siteData } from "@/bigbistudio/data/site"

// Types
import type { LegalPage } from "@/bigbistudio/types/legal.types"

type LegalHeroSectionProps = {
  page: LegalPage
}

export function LegalHeroSection({ page }: LegalHeroSectionProps) {
  return (
    <section className="container flex flex-col items-center text-center gap-2.5 py-20 lg:whitespace-pre-line scroll-mt-12 xl:scroll-mt-24">
      <h1>{page.title}</h1>
      <p className="flex flex-col text-ink-tertiary text-body-large max-w-135">
        {page.description}
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-small text-ink-quaternary border-t border-line-translucent py-4 my-2 w-full">
        <div className="flex items-center gap-1">
          <FlagTriangleRight size={14} strokeWidth={1.5} />
          <span>{siteData.labels.effectiveDate} {formatDate(page.effectiveDate)}</span>
        </div>
        <span className="hidden md:inline-block">·</span>
        <div className="flex items-center gap-1">
          <Clock size={14} strokeWidth={1.5} />
          <span>{siteData.labels.lastUpdated} {formatDate(page.lastUpdated)}</span>
        </div>
      </div>
    </section>
  )
}
