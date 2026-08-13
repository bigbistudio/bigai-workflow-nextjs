import { notFound } from "next/navigation"

import { LegalPageView } from "@/bigbistudio/pages/legal.view"
import { getALegalPageBySlug } from "@/bigbistudio/lib/legal"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("privacyPolicy")

export default async function PrivacyPolicyPage() {
  const page = await getALegalPageBySlug("privacy-policy")

  if (!page) {
    notFound()
  }

  return <LegalPageView page={page} />
}
