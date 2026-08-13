// Internal
import { PortableText } from "@/bigbistudio/components/ui"
import { BlogDetailNavigation } from "./navigation/blog-detail-navigation"

import { getBlogNavigation } from "@/bigbistudio/lib/blog"

// Types
import type { Blog } from "@/bigbistudio/types/blog.types"

type BlogDetailContentSectionProps = {
  currentBlog: Blog
}

export async function BlogDetailContentSection({
  currentBlog,
}: BlogDetailContentSectionProps) {
  const navigation = await getBlogNavigation(currentBlog.meta.slug)

  return (
    <section id="blog-detail-content">
      <div className="prose prose-invert flex flex-col my-10">
        <PortableText blocks={currentBlog.content} />
      </div>
      <BlogDetailNavigation
        previousBlog={navigation.previousBlog}
        nextBlog={navigation.nextBlog}
      />
    </section>
  )
}
