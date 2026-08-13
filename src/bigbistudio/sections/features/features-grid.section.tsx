// Internal
import { featureData } from "@/bigbistudio/data/features"
import { FeatureGridCard } from "./grid/feature-grid-card"
import { FeatureSectionHeader } from "./header/features-section-header"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function FeaturesGridSection({
  id,
  eyebrow,
  title,
  subtitle,
}: SectionSettings) {
  const cardCount = featureData.cards.length
  const hasOddNumberOfCards = cardCount % 2 !== 0

  return (
    <section
      id={id}
      className="container flex flex-col py-20 gap-16 scroll-mt-12 xl:scroll-mt-24"
    >
      <FeatureSectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
      />
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-px bg-surface-quaternary/80 border-y border-line-translucent">
        {featureData.cards.map((card, index) => {
          const isLastCard = index === cardCount - 1

          return (
            <FeatureGridCard
              key={card.id}
              card={card}
              isLastCard={isLastCard}
              hasOddNumberOfCards={hasOddNumberOfCards}
            />
          )
        })}
      </div>
    </section>
  )
}
