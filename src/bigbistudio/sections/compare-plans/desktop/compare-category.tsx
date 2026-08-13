// Internal
import { CompareRow } from "./compare-row"

// Types
import type { Category, Plan } from "@/bigbistudio/types/compare-plans.types"

type CompareCategoryProps = {
  category: Category
  plans: Plan[]
}

export function CompareCategory({ category, plans }: CompareCategoryProps) {
  return (
    <>
      <tr className="border-b border-line-primary">
        <td colSpan={plans.length + 1} className="text-body-large p-6">
          {category.title}
        </td>
      </tr>
      {category.features.map((feature) => (
        <CompareRow key={feature.id} feature={feature} plans={plans} />
      ))}
    </>
  )
}
