import { PricingView } from "@/bigbistudio/pages/pricing.view"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("pricing")

export default function PricingPage() {
  return <PricingView />
}
