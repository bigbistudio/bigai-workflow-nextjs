// External
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"
import { siteData } from "@/bigbistudio/data/site"

// Types
import type { BlogSummary } from "@/bigbistudio/types/blog.types"

type BlogDetailNavigationProps = {
  previousBlog: BlogSummary | null
  nextBlog: BlogSummary | null
}

export function BlogDetailNavigation({
  previousBlog,
  nextBlog,
}: BlogDetailNavigationProps) {
  return (
    <nav className="flex flex-col gap-8 lg:flex-row justify-between border-t border-line-translucent py-10">
      <BlogNavigationCard
        blog={previousBlog}
        direction={siteData.labels.previous}
        align="left"
      />
      <BlogNavigationCard
        blog={nextBlog}
        direction={siteData.labels.next}
        align="right"
      />
    </nav>
  )
}

/* Navigation Card */

type BlogNavigationCardProps = {
  blog: BlogSummary | null
  direction: string
  align: "left" | "right"
}

function BlogNavigationCard({
  blog,
  direction,
  align,
}: BlogNavigationCardProps) {
  if (!blog) {
    return <div className="min-h-10 hidden lg:inline-block" />
  }

  return (
    <Link
      href={`${siteData.urls.blogPage}/${blog.meta.slug}`}
      className="flex items-center gap-3"
    >
      {align === "left" && <ArrowLeft size={16} strokeWidth={2} />}

      <div
        className={cn(
          align === "right" ? "ml-auto text-right" : "",
          "flex flex-col gap-1",
        )}
      >
        <span className="text-small text-ink-tertiary">{direction}</span>
        <span className="text-small">{blog.meta.title}</span>
      </div>

      {align === "right" && <ArrowRight size={16} strokeWidth={2} />}
    </Link>
  )
}
