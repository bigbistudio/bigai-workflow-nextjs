import type { SVGProps } from "react"

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="m3 21 7.5-7.5m3-3L21 3M8 3H3l13 18h5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}
