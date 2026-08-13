// External
import Image from "next/image"

// Types
import type { LogoItem } from "./logo.types"

/**
 * Shared image dimensions for all logo assets.
 */
const imageProps = {
  width: 160,
  height: 60,
}

/**
 * Sample logos displayed in the logo cloud.
 *
 * Logos are distributed evenly across the wheels based on their order:
 * Wheel 1 → 1, 5...
 * Wheel 2 → 2, 6...
 * Wheel 3 → 3, 7...
 * Wheel 4 → 4, 8...
 */
export const logos: LogoItem[] = [
  {
    logo: (
      <Image
        src="/logoipsums/logoipsum8.svg"
        alt="logoipsum8"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/logoipsums/logoipsum79.svg"
        alt="logoipsum79"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/logoipsums/logoipsum78.svg"
        alt="logoipsum78"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/logoipsums/logoipsum51.svg"
        alt="logoipsum51"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/logoipsums/logoipsum49.svg"
        alt="logoipsum49"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/logoipsums/logoipsum6.svg"
        alt="logoipsum6"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/logoipsums/logoipsum40.svg"
        alt="logoipsum40"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/logoipsums/logoipsum55.svg"
        alt="logoipsum55"
        {...imageProps}
      />
    ),
  },
]
