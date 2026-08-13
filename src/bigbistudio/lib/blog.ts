// Internal
import {
    _buildingSystem,
    _speedSystem,
    _hiddenCost,
    _toolsToSystems,
    _autoIntelligence,
    _repetitiveWork
} from "@/bigbistudio/data/blogs"

// Types
import type { Blog, BlogNavigation, BlogSummary } from "@/bigbistudio/types/blog.types"

/** Temporary data source → Sanity (future) */
const blogs = [
    _buildingSystem,
    _speedSystem,
    _hiddenCost,
    _toolsToSystems,
    _autoIntelligence,
    _repetitiveWork
] as Blog[]

// Local JSON is synchronous, but we intentionally keep the async
// Promise.all() flow to match the future Sanity implementation.

/** Published & sorting newest → oldest & summary only */
export async function getAllBlogs(): Promise<BlogSummary[]> {
    return blogs
        // Published only.
        .filter((blog) => blog.meta.status === "published")

        // Date newest → oldest
        .sort(
            (a, b) =>
                new Date(b.meta.publishedAt).getTime() -
                new Date(a.meta.publishedAt).getTime(),
        )

        // Exclude article content.
        .map(({ meta }) => ({ meta }))
}

/** Find by slug & published only */
export async function getABlogBySlug(
    slug: string,
): Promise<Blog | null> {
    return (
        blogs.find(
            (blog) =>
                blog.meta.slug === slug &&
                blog.meta.status === "published",
        ) ?? null
    )
}

/** Find by slugs & published only */
export async function getBlogsBySlugs(
    slugs: string[] = [],
): Promise<BlogSummary[]> {
    return (
        await Promise.all(slugs.map(getABlogBySlug))
    ).filter(
        (blog): blog is Blog => blog !== null,
    ).map(({ meta }) => ({ meta }))
}

/** @returns previous & next blogs */
export async function getBlogNavigation(currentSlug: string): Promise<BlogNavigation> {
    // Date newest → oldest.
    const blogs = await getAllBlogs()

    const currentBlogIndex = blogs.findIndex(
        (blog) => blog.meta.slug === currentSlug,
    )

    return {
        previousBlog: currentBlogIndex < blogs.length - 1 ? blogs[currentBlogIndex + 1] : null,
        nextBlog: currentBlogIndex > 0 ? blogs[currentBlogIndex - 1] : null,
    }
}