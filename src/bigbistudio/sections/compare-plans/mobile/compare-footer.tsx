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
  const buttonVariants = {
    primary: "default",
    secondary: "secondary",
  } as const

  const buttonType = selectedPlan.popular ? "primary" : "secondary"

  return (
    <div className="px-0 py-6">
      <Button
        asChild
        variant={buttonVariants[buttonType]}
        className={cn(bigbiStyles.button[buttonType], "w-full")}
      >
        <Link href={selectedPlan.button ? selectedPlan.button.href : "#"}>
          {selectedPlan.button?.label}
        </Link>
      </Button>
    </div>
  )
}
