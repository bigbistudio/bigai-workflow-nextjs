// Internal
import { siteData } from "@/bigbistudio/data/site"

// Types
import type { Plan, ComparePlansLabels } from "@/bigbistudio/types/compare-plans.types"

type CompareHeaderProps = {
  plans: Plan[]
  labels?: ComparePlansLabels
}

export function CompareHeader({ plans, labels }: CompareHeaderProps) {
  return (
    <thead className="sticky top-20 z-10 bg-surface-primary/60 backdrop-blur-sm">
      <tr className="text-left shadow-[0_1px_0_var(--color-border)]">
        <th className="text-lead font-normal align-baseline p-6">
          {labels?.header}
        </th>
        {plans.map((plan) => (
          <th key={plan.id} className="font-normal p-6">
            <div className="flex justify-between text-lead">
              {plan.name}
              {plan.popular && (
                <div className="flex items-center border border-line-secondary px-2 py-0.5 rounded-4xl bg-accent h-fit">
                  <span className="text-xs leading-4 font-medium">
                    {siteData.labels.popular}
                  </span>
                </div>
              )}
            </div>
            <div className="text-small text-ink-tertiary mt-1">
              {plan.description}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}
