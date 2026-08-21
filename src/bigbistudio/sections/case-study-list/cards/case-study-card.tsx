// External
import Image from "next/image"
import Link from "next/link"

// Internal
import { NetIcon } from "@/bigbistudio/components/icons"
import { lucideIcons } from "@/bigbistudio/utils/lucide-icons.maps"

import { siteData } from "@/bigbistudio/data/site"

// Types
import type { LucideIconName } from "@/bigbistudio/utils/lucide-icons.maps"
import type { CaseStudySummary } from "@/bigbistudio/types/case-study.types"

type CaseStudyCardProps = {
  study: CaseStudySummary
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const { meta, company } = study
  const Icon = meta.cardIcon
    ? lucideIcons[meta.cardIcon as LucideIconName]
    : null

  return (
    <Link
      href={`${siteData.urls.caseStudiesPage}/${meta.slug}`}
      className="relative flex flex-col gap-12 p-6 bg-surface-secondary hover:bg-surface-tertiary transition-all duration-300 rounded-xl border border-line-translucent cursor-pointer"
    >
      <NetIcon className="absolute right-0 top-0" />
      {Icon && (
        <Icon
          stroke="#ffffff15"
          strokeWidth={0.4}
          width={100}
          height={100}
          className="absolute top-2.5 right-6"
        />
      )}
      <div className="w-12 h-12 rounded-md bg-surface-tertiary">
        <Image src={company.logo} width={48} height={48} alt={company.name} />
      </div>
      <div className="flex flex-col gap-4 lg:max-w-[80%]">
        <h2 className="text-extra-large font-normal">{meta.title}</h2>
        <span className="text-small text-ink-quaternary">
          {siteData.labels.readMore}
        </span>
      </div>
    </Link>
  )
}
