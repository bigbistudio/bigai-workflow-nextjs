// External
import { CircleCheck, CircleX } from "lucide-react"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"

// Types
import type { Plan } from "@/bigbistudio/types/compare-plans.types"

type CompareCellProps = {
  value: {
    status: string
    text: string
  }
  selectedPlan: Plan
}

export function CompareCell({ value, selectedPlan }: CompareCellProps) {
  let icon = null

  switch (value.status) {
    case "included":
      icon = (
        <CircleCheck
          size={14}
          strokeWidth={1.5}
          className={cn(selectedPlan.highlightedIcon && "text-accent")}
        />
      )
      break
    case "excluded":
      icon = <CircleX size={14} strokeWidth={1.5} />
      break
  }

  return (
    <div
      className={cn(
        value.status === "excluded" && "opacity-50",
        selectedPlan.popular && "bg-surface-secondary",
        "flex items-center gap-2.5 text-small px-4 py-4",
      )}
    >
      {icon}
      {value.text}
    </div>
  )
}
