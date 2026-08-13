// External
import Link from "next/link"

// Internal
import { Button } from "@/components/ui/button"
import { cn } from "@/bigbistudio/utils/shadcn-utils"
import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles"

import { siteData } from "@/bigbistudio/data/site"

export function NotFoundView() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full h-screen">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1>{siteData.page404.heading}</h1>
        <div className="flex flex-col text-body-large text-ink-tertiary">
          <span>{siteData.page404.title}</span>
          <span>{siteData.page404.subTitle}</span>
        </div>
        <Button asChild className={cn(bigbiStyles.button.primary, "w-fit")}>
          <Link href="/">{siteData.page404.returnHome}</Link>
        </Button>
      </section>
    </main>
  )
}
