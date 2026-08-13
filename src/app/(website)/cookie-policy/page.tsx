import { notFound } from "next/navigation"

import { LegalPageView } from "@/bigbistudio/pages/legal.view"
import { getALegalPageBySlug } from "@/bigbistudio/lib/legal"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("cookiePolicy")

export default async function CookiePolicyPage() {
  const page = await getALegalPageBySlug("cookie-policy")

  if (!page) {
    notFound()
  }

  return <LegalPageView page={page} />
}
