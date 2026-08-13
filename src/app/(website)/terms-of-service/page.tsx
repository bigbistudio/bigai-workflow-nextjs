import { notFound } from "next/navigation"

import { LegalPageView } from "@/bigbistudio/pages/legal.view"
import { getALegalPageBySlug } from "@/bigbistudio/lib/legal"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("termsOfService")

export default async function TermsOfServicePage() {
  const page = await getALegalPageBySlug("terms-of-service")

  if (!page) {
    notFound()
  }

  return <LegalPageView page={page} />
}
