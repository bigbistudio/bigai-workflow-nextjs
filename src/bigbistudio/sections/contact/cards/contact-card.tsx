// External
import Link from "next/link"

// Internal
import { NetIcon } from "@/bigbistudio/components/icons"
import {
  lucideIcons,
  type LucideIconName,
} from "@/bigbistudio/utils/lucide-icons.maps"
import { cn } from "@/bigbistudio/utils/shadcn-utils"

// Types
import type { ContactInfoCard } from "../contact.types"

export function ContactCard({ title, icon, link }: ContactInfoCard) {
  const Icon = icon ? lucideIcons[icon as LucideIconName] : null

  const cardContent = (
    <>
      <NetIcon className="absolute right-0 top-0" />
      {Icon && (
        <Icon
          stroke="#ffffff15"
          strokeWidth={0.4}
          width={100}
          height={100}
          className="absolute top-2.5 right-6"
        />
      )}
      <div className="flex justify-center items-center w-12 h-12 rounded-md bg-surface-tertiary">
        {Icon && <Icon />}
      </div>
      <div className="flex flex-col gap-4 lg:max-w-[80%]">
        <span className="text-large">{title}</span>
      </div>
    </>
  )

  const cardClassName = cn(
    "relative flex flex-col gap-8 p-6 bg-surface-secondary rounded-xl border border-line-translucent",
    link &&
      "hover:bg-surface-tertiary transition-all duration-300 cursor-pointer",
  )

  if (link) {
    return (
      <Link href={link} target="_blank" className={cardClassName}>
        {cardContent}
      </Link>
    )
  }

  return <div className={cardClassName}>{cardContent}</div>
}
