// External
import Image from "next/image"

// Internal
import { companyData } from "@/bigbistudio/data/company"

type LogoProps = {
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function Logo({
  width = 70,
  height = 25,
  className,
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={companyData.logo.src}
      alt={companyData.logo.alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{
        width,
        height,
      }}
    />
  )
}
