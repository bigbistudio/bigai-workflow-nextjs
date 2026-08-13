/**
 * Architecture Note:
 * Reusable Blog section.
 *
 * Designed for embedding on any page that needs to showcase selected blogs.
 * This is not the Blog listing page itself.
 */

// Internal
import { EyebrowIcon } from "@/bigbistudio/components/icons"
import { ButtonCtaGroup } from "@/bigbistudio/components/ui"
import { BlogGrid } from "./grids/blog-grid"

import { getBlogsBySlugs } from "@/bigbistudio/lib/blog"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

type BlogSectionProps = SectionSettings & {
  blogSlugs: string[]
}

export async function BlogSection({
  id,
  eyebrow,
  title,
  subtitle,
  buttons,
  blogSlugs,
}: BlogSectionProps) {
  const selectedBlogs = await getBlogsBySlugs(blogSlugs)

  return (
    <section
      id={id}
      className="container flex flex-col py-20 gap-16 scroll-mt-12 xl:scroll-mt-24"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2.5">
        <div className="flex flex-col gap-2.5">
          <span className="flex items-center px-1 gap-1.5 text-sm text-ink-tertiary">
            <EyebrowIcon /> {eyebrow}
          </span>
          <h2 className="lg:whitespace-pre-line">{title}</h2>
        </div>
        <div className="flex lg:justify-end lg:items-end flex-1">
          <p className="text-body-large text-ink-tertiary max-w-105">
            {subtitle}
          </p>
        </div>
      </div>
      <BlogGrid numberOfColumns={3} blogs={selectedBlogs} />
      <div className="flex justify-center gap-2.5">
        <ButtonCtaGroup buttons={buttons} />
      </div>
    </section>
  )
}
