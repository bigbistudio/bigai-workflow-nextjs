// Internal
import { EyebrowIcon } from "@/bigbistudio/components/icons"
import { uiGraphicMap } from "@/bigbistudio/utils/component.maps"

import { processData } from "@/bigbistudio/data/process"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function ProcessGridSection({
  id,
  eyebrow,
  title,
  subtitle,
}: SectionSettings) {
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
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-px bg-surface-quaternary/80 border-y border-line-translucent">
        {processData.phases.map((item) => {
          const UI = item.ui ? uiGraphicMap[item.ui] : null

          return (
            <div
              key={item.id}
              className="flex flex-col gap-8 px-0 lg:px-6 xl:px-10 py-16 bg-surface-primary"
            >
              <span className="text-small text-ink-quaternary">
                {item.phase}
              </span>
              {UI ? (
                <UI />
              ) : (
                <div className="w-full h-90 bg-surface-tertiary rounded-lg" />
              )}
              <div className="flex flex-col gap-2.5">
                <h3>{item.title}</h3>
                <p className="text-body text-ink-tertiary">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
