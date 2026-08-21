// External
import Link from "next/link"
import { Lightbulb } from "lucide-react"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"
import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles"
import { Button } from "@/components/ui/button"

// Types
import type {
  Plan,
  ComparePlansLabels,
} from "@/bigbistudio/types/compare-plans.types"

type CompareFooterProps = {
  plans: Plan[]
  labels?: ComparePlansLabels
}

export function CompareFooter({ plans, labels }: CompareFooterProps) {
  return (
    <tfoot>
      <tr className="border-b border-line-primary">
        <td className="px-6 py-4">
          <div className="flex items-center gap-2.5 text-small">
            <Lightbulb size={16} strokeWidth={1.5} />
            {labels?.footer}
          </div>
        </td>
        {plans.map((plan) => {
          const buttonVariants = {
            primary: "default",
            secondary: "secondary",
          } as const

          const buttonType = plan.popular ? "primary" : "secondary"

          return (
            <td key={plan.id} className="px-6 py-4">
              <Button
                asChild
                variant={buttonVariants[buttonType]}
                className={cn(bigbiStyles.button[buttonType], "w-full")}
              >
                <Link href={plan.button ? plan.button.href : "#"}>
                  {plan.button?.label}
                </Link>
              </Button>
            </td>
          )
        })}
      </tr>
    </tfoot>
  )
}
