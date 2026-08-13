// Internal
import { CompareCell } from "./compare-cell"

// Types
import type { Feature, Plan } from "@/bigbistudio/types/compare-plans.types"

type CompareFeatureProps = {
  feature: Feature
  selectedPlan: Plan
}

export function CompareFeature({ feature, selectedPlan }: CompareFeatureProps) {
  const value = feature.planValues[selectedPlan.id]

  return (
    <div className="grid grid-cols-2 border-b border-line-primary">
      <span className="text-small px-0 py-4">{feature.label}</span>
      <CompareCell value={value} selectedPlan={selectedPlan} />
    </div>
  )
}
