// Internal
import { CompareCell } from "./compare-cell"

// Types
import type { Feature, Plan } from "@/bigbistudio/types/compare-plans.types"

type CompareRowProps = {
  feature: Feature
  plans: Plan[]
}

export function CompareRow({ feature, plans }: CompareRowProps) {
  return (
    <>
      <tr className="border-b border-line-primary">
        <td className="text-small px-6 py-4">{feature.label}</td>
        {plans.map((plan) => (
          <CompareCell
            key={plan.id}
            value={feature.planValues[plan.id]}
            plan={plan}
          />
        ))}
      </tr>
    </>
  )
}
