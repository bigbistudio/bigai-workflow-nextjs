import { NotFoundView } from "@/bigbistudio/pages/not-found.view"
import { MainLayout } from "@/bigbistudio/components/layout/main-layout"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("notFound")

export default function NotFoundPage() {
  return (
    <MainLayout>
      <NotFoundView />
    </MainLayout>
  )
}
