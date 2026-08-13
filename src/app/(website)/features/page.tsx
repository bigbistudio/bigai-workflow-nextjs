import { FeaturesView } from "@/bigbistudio/pages/features.view"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("features")

export default function FeaturesPage() {
  return <FeaturesView />
}
