// Internal
import { BlogCard } from "../cards/blog-card"

// Types
import type { BlogSummary } from "@/bigbistudio/types/blog.types"

type BlogGridProps = {
  numberOfColumns?: number
  blogs: BlogSummary[]
}

export function BlogGrid({ numberOfColumns = 2, blogs }: BlogGridProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-10 ${
        numberOfColumns === 2
          ? "lg:grid-cols-2"
          : numberOfColumns === 3
            ? "lg:grid-cols-3"
            : "lg:grid-cols-4"
      }`}
    >
      {blogs.map((blog) => (
        <BlogCard key={blog.meta.slug} blog={blog} />
      ))}
    </div>
  )
}
