"use client"

// External
import { motion } from "motion/react"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"

type FeatureCarouselPaginationProps = {
  count: number
  current: number
  onChange: (index: number) => void
}

export function FeatureCarouselPagination({
  count,
  current,
  onChange,
}: FeatureCarouselPaginationProps) {
  return (
    <div className="flex justify-center pb-8">
      <div className="flex gap-2.5 rounded-3xl bg-white/2 p-2.5">
        {Array.from({ length: count }).map((_, index) => (
          <motion.button
            key={index}
            type="button"
            layout
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => onChange(index)}
            className={cn(
              "h-2.5 cursor-pointer rounded-full",
              current === index ? "w-5 bg-primary" : "w-2.5 bg-white/30",
            )}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />
        ))}
      </div>
    </div>
  )
}
