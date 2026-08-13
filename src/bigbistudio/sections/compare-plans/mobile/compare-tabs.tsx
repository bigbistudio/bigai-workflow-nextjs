// External
import { CrownIcon } from "lucide-react"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"

// Types
import type { Plan } from "@/bigbistudio/types/compare-plans.types"

type CompareTabsProps = {
  plans: Plan[]
  selectedPlanId: string
  onChange: (id: string) => void
}

export function CompareTabs({
  plans,
  selectedPlanId,
  onChange,
}: CompareTabsProps) {
  return (
    <div
      className="sticky top-12 bg-surface-primary grid border-b border-line-primary py-4 z-10"
      style={{ gridTemplateColumns: `repeat(${plans.length}, minmax(0, 1fr))` }}
    >
      {plans.map((plan) => (
        <button
          key={plan.id}
          className={cn(
            "flex justify-center items-center gap-2.5 text-body-medium! p-2.5 rounded-lg",
            plan.id === selectedPlanId
              ? "bg-action-secondary-ink text-action-primary-ink"
              : "bg-transparent",
          )}
          onClick={() => onChange(plan.id)}
        >
          {plan.name}
          {plan.popular && (
            <div className="bg-accent text-accent-foreground px-1 py-0.5 rounded-4xl w-fit">
              <CrownIcon size={14} strokeWidth={1.5} />
            </div>
          )}
        </button>
      ))}
    </div>
  )
}
