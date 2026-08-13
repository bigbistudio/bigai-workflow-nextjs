"use client"

// External
import { useState } from "react"

// Internal
import { CompareTabs } from "./compare-tabs"
import { CompareCategory } from "./compare-category"
import { CompareFooter } from "./compare-footer"

// Types
import type {
  ComparePlans,
  Plan,
} from "@/bigbistudio/types/compare-plans.types"

type CompareMobileProps = {
  comparePlansData: ComparePlans
}

export function CompareMobile({ comparePlansData }: CompareMobileProps) {
  const getDefaultPlan = (plans: Plan[]) =>
    plans.find((plan) => plan.popular) ?? plans[0]

  const [selectedPlanId, setSelectedPlanId] = useState(
    getDefaultPlan(comparePlansData.plans).id,
  )

  const selectedPlan =
    comparePlansData.plans.find((plan) => plan.id === selectedPlanId) ??
    getDefaultPlan(comparePlansData.plans)

  return (
    <div className="flex flex-col">
      <CompareTabs
        plans={comparePlansData.plans}
        selectedPlanId={selectedPlanId}
        onChange={setSelectedPlanId}
      />
      {comparePlansData.categories.map((category) => (
        <CompareCategory
          key={category.id}
          category={category}
          selectedPlan={selectedPlan}
        />
      ))}

      <CompareFooter selectedPlan={selectedPlan} />
    </div>
  )
}
