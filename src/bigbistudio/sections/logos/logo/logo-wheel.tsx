"use client"

// External
import { useEffect, useRef } from "react"

// Types
import type { LogoWheelProps } from "../logo.types"

/** Height of a single logo item (px). */
const LOGO_WHEEL_ITEM_HEIGHT = 64

export function LogoWheel({
  logos,
  currentLogoAnimationCycle,
  delayBeforeWheelAnimationStarts,
  wheelSpinAnimationDuration = 1200,
}: LogoWheelProps) {
  /** Logo wheel container. */
  const wheelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wheel = wheelRef.current

    if (!wheel) return

    /** Spin the wheel upward by one logo item. */
    const spin = () => {
      wheel.style.transition = `transform ${wheelSpinAnimationDuration}ms cubic-bezier(0.19, 1, 0.22, 1)`
      wheel.style.transform = `translateY(-${LOGO_WHEEL_ITEM_HEIGHT}px)` // translateY(-64px)

      /*
        Initial                 Spin Up                    appendChild()                  Reset
      
        [Front] ← Visible       Entire wheel ↑             DOM order becomes              translateY(0)
        [Back ]                 translateY(-64px)          [Back ] ← Still visible        Ready for next spin
                                                           [Front]
        Result:
        • Front slides out through the top.
        • Back slides into view.
        • Front is moved to the end of the DOM.
        • The wheel instantly resets to translateY(0).
        • Since Front has already been moved to the bottom of the DOM,
          the reset looks seamless to the user.
      */
      const onTransitionEnd = () => {
        const firstLogo = wheel.firstElementChild

        if (firstLogo) {
          /*
            Create an infinite loop by moving the first logo
            to the bottom after each completed spin.
          
            Current setup (2 logos)
          
            Before:             After:
            ┌───────┐           ┌───────┐
            │ Front │           │ Back  │
            ├───────┤   ───▶    ├───────┤
            │ Back  │           │ Front │
            └───────┘           └───────┘
          
            The wheel supports any number of logos.

            Before:              After:
            ┌───┐                ┌───┐
            │ A │                │ B │
            ├───┤                ├───┤
            │ B │     ─────▶     │ C │
            ├───┤                ├───┤
            │ C │                │ D │
            ├───┤                ├───┤
            │ D │                │ A │
            └───┘                └───┘
          */
          wheel.appendChild(firstLogo)
        }

        /*
          Because the first logo has already been moved to the
          bottom, resetting back to translateY(0) is invisible
          to the user and the animation appears continuous.
        */
        wheel.style.transition = "none"
        wheel.style.transform = "translateY(0)"

        // Force the browser to apply the reset immediately.
        wheel.getBoundingClientRect()

        // Restore transitions for the next animation cycle.
        wheel.style.transition = ""
      }

      // Run once after the current spin finishes, then
      // automatically remove the event listener.
      wheel.addEventListener("transitionend", onTransitionEnd, {
        once: true,
      })
    }

    /*
      Each LogoCloud animation cycle triggers every wheel.
      ──────────────────────────────────────────────────────────────
      Delay between wheels : 110ms
      Spin duration        : 1800ms

      Time →
      0ms      110ms     220ms     330ms
      │────────│─────────│─────────│────────▶

      Wheel 1  ├──────────────── 1800ms ────────────────┤
      Wheel 2            ├──────────────── 1800ms ────────────────┤
      Wheel 3                      ├──────────────── 1800ms ────────────────┤
      Wheel 4                                ├──────────────── 1800ms ────────────────┤

      • Every wheel spins for the same duration.
      • Each wheel starts 110ms after the previous wheel.
      • The staggered start creates the wave animation.
    */
    const timer = window.setTimeout(spin, delayBeforeWheelAnimationStarts)

    return () => clearTimeout(timer)
  }, [
    currentLogoAnimationCycle,
    delayBeforeWheelAnimationStarts,
    wheelSpinAnimationDuration,
  ])

  return (
    <div className="relative h-16 w-40 overflow-hidden">
      {/* Fade the entering logo. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-5 bg-linear-to-b from-background to-transparent" />

      {/* Fade the exiting logo. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-5 bg-linear-to-t from-background to-transparent" />

      <div ref={wheelRef} className="will-change-transform">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex h-16 items-center justify-center p-3"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
