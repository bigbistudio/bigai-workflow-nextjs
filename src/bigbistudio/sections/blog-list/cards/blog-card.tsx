// External
import Image from "next/image"
import Link from "next/link"

// Internal
import { formatDate } from "@/bigbistudio/lib/date"
import { siteData } from "@/bigbistudio/data/site"

// Types
import type { BlogSummary } from "@/bigbistudio/types/blog.types"

type BlogCardProps = {
  blog: BlogSummary
}

export function BlogCard({ blog }: BlogCardProps) {
  const { meta } = blog

  return (
    <Link
      href={`${siteData.urls.blogPage}/${meta.slug}`}
      className="relative flex flex-col gap-4 cursor-pointer"
    >
      <div className="relative aspect-492/280 border border-line-translucent rounded-md overflow-hidden">
        <Image
          src={meta.bannerImage}
          fill
          alt={meta.title}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex gap-2.5 text-small text-ink-quaternary">
          <span>{meta.author}</span>
          <span>·</span>
          <span>{formatDate(meta.publishedAt)}</span>
        </div>
        <h2 className="text-h3 font-normal">{meta.title}</h2>
        <p className="text-body text-ink-tertiary">{meta.subtitle}</p>
      </div>
    </Link>
  )
}
