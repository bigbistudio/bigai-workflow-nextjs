import type { SVGProps } from "react"

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M2 9h4v12H2Zm20 12h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 12 0Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}
