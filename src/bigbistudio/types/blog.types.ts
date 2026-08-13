import type { PortableBlock } from "./article.types"

export type BlogMeta = {
    slug: string
    featured: boolean
    status: "draft" | "published" | "archived"
    publishedAt: string // ISO 8601
    author: string
    title: string
    subtitle: string
    bannerImage: string
}

export type BlogSummary = {
    meta: BlogMeta
}

export type Blog = BlogSummary & {
    content: PortableBlock[]
}

export type BlogNavigation = {
    previousBlog: BlogSummary | null
    nextBlog: BlogSummary | null
}