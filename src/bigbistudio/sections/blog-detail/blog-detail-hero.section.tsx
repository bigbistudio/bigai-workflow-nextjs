// External
import Image from "next/image"

// Internal
import { formatDate } from "@/bigbistudio/lib/date"
import { BlogDetailBreadcrumb } from "./navigation/blog-detail-breadcrumb"

// Types
import type { Blog } from "@/bigbistudio/types/blog.types"

type BlogDetailHeroSectionProps = {
  currentBlog: Blog
}

export function BlogDetailHeroSection({
  currentBlog,
}: BlogDetailHeroSectionProps) {
  const { meta } = currentBlog

  return (
    <section className="flex flex-col gap-12" id="blog-detail-hero">
      <BlogDetailBreadcrumb blogTitle={meta.title} />
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-h1-article text-center">{meta.title}</h1>
        <p className="text-body-large text-ink-tertiary">{meta.subtitle}</p>
      </div>
      <Image
        className="rounded-xl"
        src={meta.bannerImage}
        alt={meta.title}
        width={2048}
        height={1004}
        loading="eager"
      />
      <div className="flex justify-center gap-2.5 text-small text-ink-tertiary">
        <span>{meta.author}</span>
        <span>·</span>
        <span>{formatDate(meta.publishedAt)}</span>
      </div>
    </section>
  )
}
