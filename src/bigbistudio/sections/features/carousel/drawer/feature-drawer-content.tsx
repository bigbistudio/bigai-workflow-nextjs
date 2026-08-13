// Internal
import { DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import {
  lucideIcons,
  type LucideIconName,
} from "@/bigbistudio/utils/lucide-icons.maps"

// Types
import type { FeatureCard } from "@/bigbistudio/types/features.types"

type FeatureDrawerContentProps = {
  selectedCard: FeatureCard
}

export function FeatureDrawerContent({ selectedCard }: FeatureDrawerContentProps) {
  return (
    <div className="flex flex-col gap-8 max-w-152 mx-auto px-6 pt-10 pb-20">
      <DrawerHeader className="gap-6 md:gap-6">
        <DrawerTitle className="text-lead! text-left">
          {selectedCard.drawerContent.title}
        </DrawerTitle>
        <DrawerDescription className="text-body-large! text-ink-tertiary text-left">
          {selectedCard.drawerContent.description}
        </DrawerDescription>
      </DrawerHeader>

      <div className="flex justify-center gap-10 text-ink-primary">
        {selectedCard.drawerContent.icons.map((item, index) => {
          const Icon = item ? lucideIcons[item as LucideIconName] : null

          return Icon ? (
            <Icon key={index} size={40} strokeWidth={1.75} />
          ) : null
        })}
      </div>
    </div>
  )
}
