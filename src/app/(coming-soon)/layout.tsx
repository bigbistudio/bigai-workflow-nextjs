import type { ReactNode } from "react"

type ComingSoonLayoutProps = {
  children: ReactNode
}

export default function ComingSoonLayout({ children }: ComingSoonLayoutProps) {
  return <main className="min-h-screen">{children}</main>
}
