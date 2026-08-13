import type { SVGProps } from "react"

export function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3q-2.5.5-5 2-3 5-3 12 2 2.5 6 4 1-1.5 1.5-3.5M7 17q5 2 10 0m-1.5.5q.5 2 1.5 3.5 4-1.5 6-4 0-7-3-12-2.5-1.5-5-2l-1 2q-2-.5-4 0L9 3"></path>
      <circle cx="8" cy="12" r="1"></circle>
      <circle cx="16" cy="12" r="1"></circle>
    </svg>
  )
}
