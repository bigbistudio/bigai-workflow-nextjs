"use client"

// External
import Image from "next/image"
import { Plus } from "lucide-react"

// Internal
import { Card, CardContent } from "@/components/ui/card"

// Types
import type { FeatureCard } from "@/bigbistudio/types/features.types"

type FeatureCarouselCardProps = {
  card: FeatureCard
  onOpen: (card: FeatureCard) => void
}

export function FeatureCarouselCard({ card, onOpen }: FeatureCarouselCardProps) {
  return (
    <div className="p-1">
      <Card
        onClick={() => onOpen(card)}
        className="group cursor-pointer rounded-4xl bg-surface-tertiary py-0 shadow-none ring-0 hover:bg-linear-to-t hover:from-surface-tertiary hover:to-surface-quaternary transition-colors duration-300 ease-in-out"
      >
        <CardContent className="relative flex aspect-square flex-col justify-between px-0">
          <Image
            src={card.image}
            alt={card.title}
            width={300}
            height={240}
            className="w-full"
          />

          <div className="flex items-center justify-between px-6 pb-5">
            <span className="text-large text-ink-primary">{card.title}</span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-line-translucent group-hover:border-transparent group-hover:bg-surface-quaternary transition-colors duration-300 ease-in-out">
              <Plus
                size={18}
                strokeWidth={2.5}
                className="text-ink-tertiary group-hover:text-white"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 to-transparent" />
        </CardContent>
      </Card>
    </div>
  )
}
