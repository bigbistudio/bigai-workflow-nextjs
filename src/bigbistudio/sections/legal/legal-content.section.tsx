// Internal
import { PortableText } from "@/bigbistudio/components/ui"

// Types
import type { LegalPage } from "@/bigbistudio/types/legal.types"

type LegalContentSectionProps = {
  page: LegalPage
}

export function LegalContentSection({ page }: LegalContentSectionProps) {
  return (
    <section className="container prose prose-invert pb-20 mx-auto">
      <PortableText blocks={page.content} />
    </section>
  )
}
