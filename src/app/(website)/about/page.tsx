import { AboutView } from "@/bigbistudio/pages/about.view"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("about")

export default function AboutPage() {
  return <AboutView />
}
