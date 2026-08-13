// Internal
import {
  BlogDetailHeroSection,
  BlogDetailContentSection,
} from "@/bigbistudio/sections"

// Types
import type { Blog } from "@/bigbistudio/types/blog.types"

type BlogViewProps = {
  currentBlog: Blog
}

export function BlogDetailView({ currentBlog }: BlogViewProps) {
  return (
    <main className="container relative flex flex-col lg:max-w-180 px-4 py-20 z-10">
      <BlogDetailHeroSection currentBlog={currentBlog} />
      <BlogDetailContentSection currentBlog={currentBlog} />
    </main>
  )
}
