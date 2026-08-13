import type { ReactNode } from "react"

import { MainLayout } from "@/bigbistudio/components/layout/main-layout"

type WebsiteLayoutProps = {
  children: ReactNode
}

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return <MainLayout>{children}</MainLayout>
}
