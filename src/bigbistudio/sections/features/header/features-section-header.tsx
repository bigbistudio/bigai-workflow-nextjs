// Internal
import { EyebrowIcon } from "@/bigbistudio/components/icons"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

type FeatureSectionHeaderProps = Pick<SectionSettings, "eyebrow" | "title" | "subtitle">

export function FeatureSectionHeader({
  eyebrow,
  title,
  subtitle,
}: FeatureSectionHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2.5">
      <div className="flex flex-col gap-2.5">
        <span className="flex items-center px-1 gap-1.5 text-sm text-ink-tertiary">
          <EyebrowIcon /> {eyebrow}
        </span>
        <h2 className="lg:whitespace-pre-line">{title}</h2>
      </div>
      <div className="flex lg:justify-end lg:items-end flex-1">
        <p className="text-body-large text-ink-tertiary max-w-105">{subtitle}</p>
      </div>
    </div>
  )
}
