import { HomeView } from "@/bigbistudio/pages/home.view"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("home")

export default function HomePage() {
  return <HomeView />
}
