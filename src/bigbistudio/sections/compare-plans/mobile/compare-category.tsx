// Internal
import { CompareFeature } from "./compare-feature"

// Types
import type { Category, Plan } from "@/bigbistudio/types/compare-plans.types"

type CompareCategoryProps = {
  category: Category
  selectedPlan: Plan
}

export function CompareCategory({
  category,
  selectedPlan,
}: CompareCategoryProps) {
  return (
    <>
      <h3 className="text-base px-0 py-6 border-b border-line-primary">
        {category.title}
      </h3>
      {category.features.map((feature) => (
        <CompareFeature
          key={feature.id}
          feature={feature}
          selectedPlan={selectedPlan}
        />
      ))}
    </>
  )
}
