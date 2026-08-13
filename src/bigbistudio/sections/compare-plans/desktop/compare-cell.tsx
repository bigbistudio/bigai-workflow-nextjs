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
  plan: Plan
}

export function CompareCell({ value, plan }: CompareCellProps) {
  let icon = null

  switch (value.status) {
    case "included":
      icon = (
        <CircleCheck
          size={14}
          strokeWidth={1.5}
          className={cn(plan.highlightedIcon && "text-accent")}
        />
      )
      break
    case "excluded":
      icon = <CircleX size={14} strokeWidth={1.5} />
      break
  }

  return (
    <td className="px-6 py-4">
      <div
        className={cn(
          value.status === "excluded" && "opacity-50",
          "flex items-center gap-2.5 text-small",
        )}
      >
        {icon}
        {value.text}
      </div>
    </td>
  )
}
