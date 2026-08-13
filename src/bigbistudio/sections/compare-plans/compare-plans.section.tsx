// Internal
import { ButtonCtaGroup } from "@/bigbistudio/components/ui"
import { CompareTable } from "./desktop/compare-table"
import { CompareMobile } from "./mobile/compare-mobile"

import { comparePlansData } from "@/bigbistudio/data/compare-plans"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function ComparePlansSection({ id, title, buttons }: SectionSettings) {
  return (
    <section
      id={id}
      className="container py-20 flex flex-col gap-16 scroll-mt-12 xl:scroll-mt-24"
    >
      {title && <h2 className="text-center">{title}</h2>}
      <div className="hidden lg:block">
        <CompareTable comparePlansData={comparePlansData} />
      </div>
      <div className="lg:hidden">
        <CompareMobile comparePlansData={comparePlansData} />
      </div>
      <div className="flex justify-center gap-2.5">
        <ButtonCtaGroup buttons={buttons} />
      </div>
    </section>
  )
}
