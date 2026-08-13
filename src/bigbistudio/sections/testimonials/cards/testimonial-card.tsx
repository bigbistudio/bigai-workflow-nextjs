// External
import Image from "next/image"

// Types
import type { TestimonialItem } from "@/bigbistudio/types/testimonials.types"

export function TestimonialCard({
  name,
  role,
  quote,
  avatar,
}: Omit<TestimonialItem, "id">) {
  return (
    <div className="break-inside-avoid inline-block w-full mb-4 p-4 bg-surface-tertiary border border-line-translucent rounded-2xl lg:max-w-xs transition-all duration-500 ease-in-out hover:brightness-125 group">
      <div className="flex gap-2.5 mb-4">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-md w-10 h-10 border border-line-secondary grayscale-100 group-hover:grayscale-0"
        />
        <div className="flex flex-col">
          <span className="text-ink-primary text-base">{name}</span>
          <span className="text-ink-quaternary text-small leading-4">
            {role}
          </span>
        </div>
      </div>
      <p className="text-small text-ink-secondary tracking-normal font-light leading-snug">
        {quote}
      </p>
    </div>
  )
}
