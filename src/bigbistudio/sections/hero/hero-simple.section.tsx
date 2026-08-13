// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function HeroSimpleSection({ id, title, subtitle }: SectionSettings) {
  return (
    <section
      id={id}
      className="container flex flex-col items-center text-center gap-2.5 py-20 lg:whitespace-pre-line scroll-mt-12 xl:scroll-mt-24"
    >
      <h1>{title}</h1>
      <p className="flex flex-col text-ink-tertiary text-body-large max-w-135">
        {subtitle}
      </p>
    </section>
  )
}
