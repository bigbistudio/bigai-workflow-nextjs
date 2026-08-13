// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"

import { CompareHeader } from "./compare-header"
import { CompareCategory } from "./compare-category"
import { CompareFooter } from "./compare-footer"

// Types
import type { ComparePlans } from "@/bigbistudio/types/compare-plans.types"

type CompareTableProps = {
  comparePlansData: ComparePlans
}

export function CompareTable({ comparePlansData }: CompareTableProps) {
  return (
    <table className="w-full table-fixed border-collapse">
      <colgroup>
        <col />
        {comparePlansData.plans.map((plan) => (
          <col
            key={plan.id}
            className={cn(plan.popular && "bg-surface-secondary")}
          />
        ))}
      </colgroup>
      <CompareHeader
        plans={comparePlansData.plans}
        labels={comparePlansData.labels}
      />
      <tbody>
        {comparePlansData.categories.map((category) => (
          <CompareCategory
            key={category.id}
            category={category}
            plans={comparePlansData.plans}
          />
        ))}
      </tbody>
      <CompareFooter
        plans={comparePlansData.plans}
        labels={comparePlansData.labels}
      />
    </table>
  )
}
