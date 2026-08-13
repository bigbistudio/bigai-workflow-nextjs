// Internal
import { LegalHeroSection, LegalContentSection } from "@/bigbistudio/sections"

// Types
import type { LegalPage } from "@/bigbistudio/types/legal.types"

type LegalPageViewProps = {
  page: LegalPage
}

export function LegalPageView({ page }: LegalPageViewProps) {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center mx-auto w-full lg:max-w-210">
      <LegalHeroSection page={page} />
      <LegalContentSection page={page} />
    </main>
  )
}
