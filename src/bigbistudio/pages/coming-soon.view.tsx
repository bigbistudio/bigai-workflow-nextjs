// Internal
import { Logo } from "@/bigbistudio/components/logo"

import { comingSoonPageData } from "@/bigbistudio/data/pages"

const page = comingSoonPageData

export function ComingSoonView() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col gap-6 items-center max-w-xs md:max-w-lg">
        <Logo width={88} height={30} />
        <h1>{page.sections.comingSoon.title}</h1>
        <p className="text-body-large text-ink-tertiary whitespace-pre-line">
          {page.sections.comingSoon.subtitle}
        </p>
      </div>
    </section>
  )
}
