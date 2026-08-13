"use client"

// External
import type { RefObject } from "react"
import { motion, useScroll, useSpring, useTransform } from "motion/react"

type ProcessTimelineProgressProps = {
  targetRef: RefObject<HTMLDivElement | null>
  index: number
}

export function ProcessTimelineProgress({
  targetRef,
  index,
}: ProcessTimelineProgressProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 60,
  })

  const opacity = useTransform(progress, [0, 0.1, 1], [0.2, 1, 1])

  return (
    <>
      <motion.span
        className="text-[24px] lg:text-[64px] font-medium text-ink-secondary"
        style={{ opacity }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>
      <div className="relative h-full w-0.5 rounded-full bg-white/15">
        <motion.div
          className="absolute inset-x-0 top-0 origin-top rounded-full bg-white"
          style={{
            height: "100%",
            scaleY: progress,
          }}
        />
      </div>
    </>
  )
}
