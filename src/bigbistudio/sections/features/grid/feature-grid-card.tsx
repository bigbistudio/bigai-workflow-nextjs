// External
import Image from "next/image"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"

// Types
import type { FeatureCard } from "@/bigbistudio/types/features.types"

type FeatureGridCardProps = {
  card: FeatureCard
  isLastCard: boolean
  hasOddNumberOfCards: boolean
}

export function FeatureGridCard({
  card,
  isLastCard,
  hasOddNumberOfCards,
}: FeatureGridCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 px-0 lg:px-6 xl:px-10 py-16 bg-surface-primary",
        hasOddNumberOfCards && isLastCard && "col-span-2",
      )}
    >
      <Image
        src={card.image}
        alt={card.title}
        width={300}
        height={240}
        className="mx-auto max-h-60"
      />
      <div
        className={cn(
          "flex flex-col gap-2.5",
          hasOddNumberOfCards && isLastCard && "max-w-lg lg:mx-auto",
        )}
      >
        <h3>{card.drawerContent.title}</h3>
        <p className="text-body text-ink-tertiary">
          {card.drawerContent.description}
        </p>
      </div>
    </div>
  )
}
