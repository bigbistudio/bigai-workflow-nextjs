"use client"

// External
import { useState, useEffect } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Logo } from "@/bigbistudio/components/logo/logo"
import { HeaderMobile } from "./header-mobile"

import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles"

import { navigationData } from "@/bigbistudio/data/navigation"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen((prev) => !prev)

  // Clear the focused navigation item after route changes.
  useEffect(() => {
    ;(document.activeElement as HTMLElement)?.blur()
  }, [pathname])

  // Scroll to the top instead of navigating when already on the home page.
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault()

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  // Prevent page scrolling while the mobile menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="fixed top-0 lg:top-5 flex justify-center w-full z-40 pointer-events-none">
        <div className="flex justify-between lg:justify-center items-center gap-10 w-full lg:w-fit lg:rounded-2xl bg-[#08090A40] backdrop-blur-md shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] border-b border-white/8 lg:border p-2.5 pointer-events-auto">
          <Link
            href="/"
            onClick={(e) => {
              handleLogoClick(e)
              handleClose()
            }}
            className="px-2 active:scale-[0.97] transition-transform duration-150"
          >
            <Logo />
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="text-ink-tertiary">
              {navigationData.header.links.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3 py-2.5 text-small! font-medium rounded-lg hover:bg-white/5 hover:text-ink-primary transition-all",
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2 w-fit">
            {navigationData.header.cta && (
              <Button
                asChild
                className={cn(bigbiStyles.button.primary, "px-2 py-1")}
              >
                <Link href={navigationData.header.cta.href} onClick={handleClose}>
                  {navigationData.header.cta.label}
                </Link>
              </Button>
            )}
            <HeaderMobile
              header={navigationData.header}
              open={open}
              onToggle={handleToggle}
              onClose={handleClose}
            />
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-20 bg-black/70 backdrop-blur-md transition-opacity duration-400 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      />
    </>
  )
}
