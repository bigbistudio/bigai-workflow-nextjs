"use client"

// External
import Link from "next/link"
import { Menu, X } from "lucide-react"

// Internal
import { Button } from "@/components/ui/button"
import { cn } from "@/bigbistudio/utils/shadcn-utils"

// Types
import type { Navigation } from "@/bigbistudio/types/navigation.types"

type HeaderMobileProps = {
  header: Navigation["header"]
  open: boolean
  onToggle: () => void
  onClose: () => void
}

export function HeaderMobile({
  header,
  open,
  onToggle,
  onClose,
}: HeaderMobileProps) {
  const Icon = open ? X : Menu

  return (
    <div className="relative lg:hidden flex items-center pl-1 pr-2">
      <Button
        size="icon"
        variant="ghost"
        className="text-ink-primary hover:bg-white/5"
        onClick={onToggle}
      >
        <Icon className="size-xs" />
      </Button>
      <div
        className={cn(
          "absolute -right-2 top-full w-screen h-screen transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav className="flex-1 px-4 py-16">
          <ul className="flex flex-col gap-2.5">
            {header.links.map((link) => (
              <li key={link.href} className="flex mb-0">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="w-full text-center text-body-large font-medium text-ink-secondary x-3 py-2.5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
