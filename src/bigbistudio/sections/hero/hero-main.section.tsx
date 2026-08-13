// Internal
import { ButtonCtaGroup } from "@/bigbistudio/components/ui"
import { UIDashboard } from "@/bigbistudio/components/graphics"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function HeroMainSection({
  id,
  title,
  subtitle,
  buttons,
}: SectionSettings) {
  return (
    <section
      id={id}
      className="container flex flex-col gap-6 pt-20 pb-0 lg:pb-20 lg:whitespace-pre-line overflow-hidden scroll-mt-12 xl:scroll-mt-24"
    >
      <h1>{title}</h1>
      <span className="flex flex-col text-ink-tertiary text-body-large">
        {subtitle}
      </span>
      <div className="flex gap-2.5 mb-8">
        <ButtonCtaGroup buttons={buttons} />
      </div>
      <UIDashboard />
    </section>
  )
}
