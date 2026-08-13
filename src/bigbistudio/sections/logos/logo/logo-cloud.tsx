"use client"

// External
import { useEffect, useMemo, useState } from "react"

// Internal
import { LogoWheel } from "./logo-wheel"

// Types
import type { LogoCloudProps } from "../logo.types"

const NUMBER_OF_LOGO_WHEEL_COLUMNS = 4

/*
  Timing relationship

  DELAY_BETWEEN_LOGO_WHEEL_ANIMATIONS < DURATION_OF_LOGO_WHEEL_SPIN
  → Wheels overlap, creating a smooth wave animation. ✅

    <  Wheel 1: [========]
          Wheel 2: [========]     → Overlap (wave effect) ✅

  DELAY_BETWEEN_LOGO_WHEEL_ANIMATIONS = DURATION_OF_LOGO_WHEEL_SPIN
  → Each wheel starts exactly when the previous wheel finishes.

    =  Wheel 1: [========]
                Wheel 2: [========]     → Back-to-back

  DELAY_BETWEEN_LOGO_WHEEL_ANIMATIONS > DURATION_OF_LOGO_WHEEL_SPIN
  → Wheels spin one after another, creating a visible gap.

    >  Wheel 1: [========]
                        Wheel 2: [========]  → Visible gap
*/

const DELAY_BETWEEN_LOGO_WHEEL_ANIMATIONS = 110

/*
DURATION_OF_LOGO_WHEEL_SPIN should be < logoCloudAnimationInterval (4500ms).
For entire logo wheel animation finished:

DURATION_OF_LOGO_WHEEL_SPIN + (WHEEL_COUNT - 1) * DELAY_BETWEEN_LOGO_WHEEL_ANIMATIONS
1800 + (4 - 1) * 110 = 2130ms < 4500ms. So 4500ms - 2130ms = 2370ms is waiting time before the next cycle starts.

*/
const DURATION_OF_LOGO_WHEEL_SPIN = 1800

export function LogoCloud({
  logos,
  logoCloudAnimationInterval = 4500,
}: LogoCloudProps) {
  /** Current animation cycle. */
  const [currentLogoAnimationCycle, setcurrentLogoAnimationCycle] = useState(0)

  /** Split logos evenly across wheels. */
  {
    /*
    logos array

    Index:     0        1        2        3        4        5        6        7
               │        │        │        │        │        │        │        │
    Logo:      A        B        C        D        E        F        G        H  

   Split by index % 4

             Wheel 0        Wheel 1        Wheel 2        Wheel 3
   index % 4    0              1              2              3

                │              │              │              │
                ▼              ▼              ▼              ▼
            ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐
            │ Logo A │    │ Logo B │    │ Logo C │    │ Logo D │
            │ index0 │    │ index1 │    │ index2 │    │ index3 │
            │        │    │        │    │        │    │        │
            │ Logo E │    │ Logo F │    │ Logo G │    │ Logo H │
            │ index4 │    │ index5 │    │ index6 │    │ index7 │
            └────────┘    └────────┘    └────────┘    └────────┘

  wheels[][] = [
                [Logo A, Logo E],  ← Wheel 0
                [Logo B, Logo F],  ← Wheel 1
                [Logo C, Logo G],  ← Wheel 2
                [Logo D, Logo H]   ← Wheel 3
               ] 
  */
  }
  const wheels = useMemo(
    () =>
      // Create each logo wheel column
      Array.from({ length: NUMBER_OF_LOGO_WHEEL_COLUMNS }, (_, wheelIndex) =>
        logos
          // Pick logos that belong to this wheel
          .filter(
            (_, index) => index % NUMBER_OF_LOGO_WHEEL_COLUMNS === wheelIndex,
          )
          // Extract only the logo element
          .map((item) => item.logo),
      ),
    [logos],
  )

  useEffect(() => {
    // Create a timer to trigger the next logo animation cycle.
    const timer = window.setInterval(() => {
      // Update state to notify React and trigger a re-render.
      // The new cycles value is passed to logo wheels to start animation.
      setcurrentLogoAnimationCycle((prev) => prev + 1)
    }, logoCloudAnimationInterval)

    // Cleanup the timer when the component unmounts
    // or when the interval value changes.
    return () => clearInterval(timer)
  }, [logoCloudAnimationInterval])

  return (
    <div className="grid grid-cols-1 mobile:grid-cols-2 gap-1 md:gap-10 lg:grid-cols-4">
      {wheels.map((wheel, index) => (
        <LogoWheel
          key={index}
          logos={wheel}
          currentLogoAnimationCycle={currentLogoAnimationCycle}
          delayBeforeWheelAnimationStarts={
            index * DELAY_BETWEEN_LOGO_WHEEL_ANIMATIONS
          } // 0ms → 110ms → 220ms → 330ms
          wheelSpinAnimationDuration={DURATION_OF_LOGO_WHEEL_SPIN} // 1800ms per wheel spin.
        />
      ))}
      {/*
          Time (ms)

          0        110       220       330                  1800      1910      2020      2130
          │────────│─────────│─────────│────────────────────│─────────│─────────│─────────▶

          Wheel 1  █████████████████████████████████████████
          Wheel 2           █████████████████████████████████████████
          Wheel 3                     █████████████████████████████████████████
          Wheel 4                               █████████████████████████████████████████
        */}
    </div>
  )
}
