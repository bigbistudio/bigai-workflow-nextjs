// External
import { ReactNode } from "react"

// Internal
import { Header, FooterCTA, Footer } from "./index"

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen pt-20">
      <Header />
      {children}
      <FooterCTA />
      <Footer />
    </div>
  )
}
