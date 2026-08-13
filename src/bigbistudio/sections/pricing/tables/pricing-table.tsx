"use client"

// External
import { useState } from "react"

import Link from "next/link"

import { CheckCircle } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

// Internal
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

import { pricingData } from "@/bigbistudio/data/pricing"
import { siteData } from "@/bigbistudio/data/site"
import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles"
import { cn } from "@/bigbistudio/utils/shadcn-utils"

export function PricingTable() {
  const [yearly, setYearly] = useState(true)

  return (
    <div className="flex justify-center">
      <div className="max-w-250 flex-1 flex flex-col lg:flex-row gap-6 lg:gap-4">
        {pricingData.plans.map((plan) => {
          const hasPricingToggle =
            typeof plan.yearlyPrice === "number" &&
            typeof plan.monthlyPrice === "number"

          return (
            <div
              key={plan.title}
              className={cn(
                plan.popular ? "bg-surface-quaternary" : "bg-surface-secondary",
                "flex flex-col flex-1 border border-line-secondary rounded-2xl",
              )}
            >
              <div className="flex flex-col flex-1">
                <div className="flex flex-col gap-2.5 p-6 border-b border-line-secondary">
                  <div className="flex justify-between">
                    <span className="text-lead">{plan.title}</span>
                    {plan.popular && (
                      <div className="flex items-center border border-line-secondary px-2 py-0.5 rounded-4xl bg-accent h-fit">
                        <span className="text-xs leading-4 font-medium">
                          {siteData.labels.popular}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="text-large text-ink-secondary">
                    {plan.currencySign ?? ""}
                    {hasPricingToggle && (
                      <AnimatePresence initial={false} mode="wait">
                        <motion.span
                          key={yearly ? "yearly" : "monthly"}
                          initial={{ opacity: 0.6, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0.6, x: 8 }}
                          transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                          }}
                          className="inline-block"
                        >
                          {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                          <span className="text-body text-ink-tertiary">
                            {siteData.labels.monthly}
                          </span>
                        </motion.span>
                      </AnimatePresence>
                    )}
                    {!hasPricingToggle && (
                      <span
                        className={cn(
                          !plan.currencySign && "text-base text-ink-tertiary",
                        )}
                      >
                        {plan.priceLabel}
                      </span>
                    )}
                  </span>
                </div>
                <div
                  onClick={
                    hasPricingToggle ? () => setYearly((v) => !v) : undefined
                  }
                  className={cn(
                    hasPricingToggle && "cursor-pointer",
                    "flex gap-2.5 p-6 border-b border-line-secondary",
                  )}
                >
                  {hasPricingToggle && (
                    <Switch
                      checked={yearly}
                      className={cn(
                        "border border-[#FFFFFF15] bg-transparent! w-8.25! h-5! rounded-[100px]",
                        "data-checked:bg-[#3B82F6]! **:data-[slot=switch-thumb]:bg-white! **:data-[slot=switch-thumb]:size-3.5",
                        "**:data-[slot=switch-thumb]:data-unchecked:translate-x-0.75 **:data-[slot=switch-thumb]:data-checked:translate-x-full",
                      )}
                    />
                  )}
                  <span className="text-body text-ink-tertiary">
                    {plan.priceNote}
                  </span>
                </div>

                <div className="flex flex-col gap-4 p-6">
                  {plan.benefits.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle size={13} strokeWidth={1.5} />
                      <span className="text-small">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <Button
                  asChild
                  className={cn(
                    plan.popular
                      ? bigbiStyles.button.primary
                      : bigbiStyles.button.secondary,
                    "w-full",
                  )}
                >
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
