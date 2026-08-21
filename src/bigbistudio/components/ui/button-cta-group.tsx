// External
import Link from "next/link"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"
import { lucideIcons } from "@/bigbistudio/utils/lucide-icons.maps"
import { Button } from "@/components/ui/button"

import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"
import type { LucideIconName } from "@/bigbistudio/utils/lucide-icons.maps"

type ButtonType = "primary" | "secondary" | "ghost"

const buttonVariants = {
  primary: "default",
  secondary: "secondary",
  ghost: "ghost",
} as const

export function ButtonCtaGroup({ buttons }: SectionSettings) {
  return (
    <>
      {buttons?.map((item) => {
        const buttonType = item.btnType as ButtonType

        const Icon = item.btnIcon
          ? lucideIcons[item.btnIcon as LucideIconName]
          : null

        return (
          <Button
            asChild
            variant={buttonVariants[buttonType]}
            key={item.btnTitle}
            className={cn(bigbiStyles.button[buttonType])}
          >
            <Link href={item.btnUrl}>
              {item.btnTitle}
              {Icon && <Icon size={16} strokeWidth={2} />}
            </Link>
          </Button>
        )
      })}
    </>
  )
}
