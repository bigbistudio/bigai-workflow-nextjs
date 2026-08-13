"use client"

// External
import { useEffect, useState } from "react"

// Internal
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import { featureData } from "@/bigbistudio/data/features"
import { cn } from "@/bigbistudio/utils/shadcn-utils"
import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles"

import { FeatureDrawer } from "./drawer/feature-drawer"
import { FeatureCarouselCard } from "./feature-carousel-card"
import { FeatureCarouselPagination } from "./feature-carousel-pagination"
import { FeatureDrawerContent } from "./drawer/feature-drawer-content"

// Types
import type { FeatureCard } from "@/bigbistudio/types/features.types"

export function CardsCarousel() {
  // Track the current carousel navigation state.
  const [api, setApi] = useState<CarouselApi>()
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // Currently selected card displayed in the drawer.
  const [selectedCard, setSelectedCard] = useState<FeatureCard | null>(null)

  useEffect(() => {
    if (!api) return

    // Synchronize the UI state whenever the carousel position changes.
    const syncCarouselState = () => {
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
      setCurrent(api.selectedScrollSnap())
      setCount(api.scrollSnapList().length)
    }

    syncCarouselState()

    api.on("select", syncCarouselState)
    api.on("reInit", syncCarouselState)

    return () => {
      api.off("select", syncCarouselState)
      api.off("reInit", syncCarouselState)
    }
  }, [api])

  // Apply edge fade based on the current scroll position.
  let fadeClass = ""

  if (canPrev && canNext) {
    fadeClass = "carousel-fade-both"
  } else if (canPrev) {
    fadeClass = "carousel-fade-left"
  } else if (canNext) {
    fadeClass = "carousel-fade-right"
  }

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          containScroll: "trimSnaps",
          slidesToScroll: 1,
          breakpoints: {
            "(min-width: 768px)": {
              slidesToScroll: 2,
            },
            "(min-width: 1024px)": {
              slidesToScroll: 3,
            },
          },
        }}
        className={cn(fadeClass, "carousel-fade w-full pt-16 pb-8")}
      >
        <CarouselContent className="-ml-4 pr-20">
          {featureData.cards.map((card) => (
            <CarouselItem
              key={card.id}
              className="pl-4 basis-[110%] sm:basis-[68%] md:basis-[48%] lg:basis-79"
            >
              <FeatureCarouselCard card={card} onOpen={setSelectedCard} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className={cn(bigbiStyles.button.carousel, "left-0 z-20")} />
        <CarouselNext className={cn(bigbiStyles.button.carousel, "right-0 z-20")} />
      </Carousel>

      <FeatureCarouselPagination
        count={count}
        current={current}
        onChange={(index) => api?.scrollTo(index)}
      />

      {/* Feature detail drawer */}
      <FeatureDrawer
        open={!!selectedCard}
        onOpenChange={(open) => {
          if (!open) setSelectedCard(null)
        }}
      >
        {selectedCard && <FeatureDrawerContent selectedCard={selectedCard} />}
      </FeatureDrawer>
    </>
  )
}
