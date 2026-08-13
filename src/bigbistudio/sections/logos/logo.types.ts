import type { ReactNode } from "react"

export type LogoItem = {
  logo: ReactNode
}

export type LogoCloudProps = {
  logos: LogoItem[]
  logoCloudAnimationInterval?: number   /** @default 4500 */
}

export type LogoWheelProps = {
  logos: ReactNode[]
  currentLogoAnimationCycle: number
  delayBeforeWheelAnimationStarts: number
  wheelSpinAnimationDuration?: number   /** @default 1800 */
  logoCloudAnimationInterval?: number   /** @default 4500 */
}