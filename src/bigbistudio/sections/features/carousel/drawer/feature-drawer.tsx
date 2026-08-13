"use client"

// External
import type { ReactNode } from "react"

// Internal
import { Drawer, DrawerContent } from "@/components/ui/drawer"

type FeatureDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
}

export function FeatureDrawer({
  open,
  onOpenChange,
  children,
}: FeatureDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="mx-auto w-full bg-surface-secondary">
        {children}
      </DrawerContent>
    </Drawer>
  )
}
