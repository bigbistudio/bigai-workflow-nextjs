"use client"

// Internal
import { EyebrowIcon } from "@/bigbistudio/components/icons"
import { uiGraphicMap } from "@/bigbistudio/utils/component.maps"
import { ProcessTimelinePhase } from "./timeline/process-timeline-phase"

import { processData } from "@/bigbistudio/data/process"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function ProcessTimelineSection({
  id,
  eyebrow,
  title,
  subtitle,
}: SectionSettings) {
  return (
    <section
      id={id}
      className="container flex flex-col gap-16 py-20 scroll-mt-12 xl:scroll-mt-24"
    >
      {title && (
        <div className="flex flex-col gap-8 lg:gap-2.5 lg:text-center lg:items-center">
          <div className="flex flex-col lg:items-center gap-2.5">
            <span className="flex items-center gap-1.5 px-1 text-sm text-ink-tertiary">
              <EyebrowIcon />
              {eyebrow}
            </span>
            <h2 className="lg:whitespace-pre-line">{title}</h2>
          </div>
          <div className="flex lg:justify-end lg:items-end flex-1">
            <p className="max-w-105 text-body-large text-ink-tertiary">
              {subtitle}
            </p>
          </div>
        </div>
      )}

      <div className="mx-auto flex w-full max-w-160 flex-col py-16">
        {processData.phases.map((item, index) => {
          const UI = item.ui ? uiGraphicMap[item.ui] : null

          return (
            <ProcessTimelinePhase
              key={item.id}
              index={index}
              phase={item.phase}
              title={item.title}
              description={item.description}
            >
              {UI ? (
                <UI />
              ) : (
                <div className="h-90 w-full rounded-lg bg-surface-tertiary" />
              )}
            </ProcessTimelinePhase>
          )
        })}
      </div>
    </section>
  )
}
