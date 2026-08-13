"use client"

// External
import { useRef, type ReactNode } from "react"

// Internal
import { ProcessTimelineProgress } from "./process-timeline-progress"

type ProcessTimelinePhaseProps = {
  index: number
  phase: string
  title: string
  description: string
  children: ReactNode
}

export function ProcessTimelinePhase({
  index,
  phase,
  title,
  description,
  children,
}: ProcessTimelinePhaseProps) {
  const stepRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={stepRef} className="flex gap-1 sm:gap-4 lg:gap-10">
      <div className="flex flex-col items-center gap-2.5 pt-5 pb-16">
        <ProcessTimelineProgress targetRef={stepRef} index={index} />
      </div>

      <div className="flex flex-1 flex-col gap-8 px-0 py-16 lg:px-6 xl:px-8">
        <span className="text-small text-ink-quaternary">{phase}</span>

        {children}

        <div className="flex flex-col gap-2.5">
          <h3>{title}</h3>

          <p className="text-body text-ink-tertiary">{description}</p>
        </div>
      </div>
    </div>
  )
}
