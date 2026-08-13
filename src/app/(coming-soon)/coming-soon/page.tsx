import { ComingSoonView } from "@/bigbistudio/pages/coming-soon.view"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("comingSoon")

export default function ComingSoonPage() {
  return <ComingSoonView />
}
