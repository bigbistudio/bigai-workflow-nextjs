// External
import Link from "next/link"
import Image from "next/image"

// Types
import type { Member } from "@/bigbistudio/types/team.types"

export function MemberCard({ name, role, avatar, link }: Omit<Member, "id">) {
  return (
    <Link href={link} className="flex flex-col gap-4 lg:max-w-xs group">
      <div className="relative aspect-12/13 overflow-hidden rounded-md border border-line-secondary">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover grayscale-60 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-body-large">{name}</span>
        <span className="text-small text-ink-tertiary">{role}</span>
      </div>
    </Link>
  )
}
