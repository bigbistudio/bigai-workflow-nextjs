// External
import Link from "next/link"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"
import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles"
import { Button } from "@/components/ui/button"

// Types
import type { Plan } from "@/bigbistudio/types/compare-plans.types"

type CompareFooterProps = {
  selectedPlan: Plan
}

export function CompareFooter({ selectedPlan }: CompareFooterProps) {
  return (
    <div className="px-0 py-6">
      <Button
        asChild
        className={cn(
          selectedPlan.popular
            ? bigbiStyles.button.primary
            : bigbiStyles.button.secondary,
          "w-full",
        )}
      >
        <Link href={selectedPlan.button ? selectedPlan.button.href : "#"}>
          {selectedPlan.button?.label}
        </Link>
      </Button>
    </div>
  )
}
