// Internal
import { LogoCloud } from "./logo/logo-cloud"
import { logos } from "./logos.data"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function LogosSection({ title }: SectionSettings) {
  return (
    <section className="container flex flex-col items-center gap-8 py-20">
      <span className="text-lead text-ink-secondary text-center">{title}</span>
      <LogoCloud logos={logos} logoCloudAnimationInterval={4500} />
    </section>
  )
}
