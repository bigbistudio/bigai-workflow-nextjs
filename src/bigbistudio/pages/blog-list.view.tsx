// Internal
import { HeroSimpleSection, CaseStudiesSection } from "@/bigbistudio/sections"
import { BlogGrid } from "@/bigbistudio/sections/blog-list/grids/blog-grid"

import { blogListPageData } from "@/bigbistudio/data/pages"

// Types
import type { BlogSummary } from "@/bigbistudio/types/blog.types"

const page = blogListPageData

type BlogListViewProps = {
  blogs: BlogSummary[]
}

export function BlogListView({ blogs }: BlogListViewProps) {
  return (
    <main className="relative flex flex-col z-10">
      <HeroSimpleSection {...page.sections.heroSimple} />
      <div className="w-full max-w-265 mx-auto">
        <div className="container flex flex-col justify-center py-20">
          <BlogGrid blogs={blogs} />
        </div>
      </div>
      <CaseStudiesSection {...page.sections.caseStudies} />
    </main>
  )
}
