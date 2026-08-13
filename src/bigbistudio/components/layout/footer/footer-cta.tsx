// External
import Link from "next/link"

// Internal
import { Button } from "@/components/ui/button"
import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles"

import { siteData } from "@/bigbistudio/data/site"

export function FooterCTA() {
  return (
    <div className="container py-20 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-24">
      <h2 className="text-xl mobile:text-2xl md:text-[40px] font-medium text-center">
        {siteData.footerCta.title}
      </h2>
      <Button asChild className={bigbiStyles.button.primary}>
        <Link href={siteData.footerCta.url} target="_blank">{siteData.footerCta.button}</Link>
      </Button>
    </div>
  )
}
