import type { PortableBlock } from "./article.types"

export type CaseStudyMeta = {
    slug: string
    featured: boolean
    status: "draft" | "published" | "archived"
    publishedAt: string // ISO 8601
    title: string
    bannerImage: string
    cardIcon: string
}

export type CaseStudyCompany = {
    name: string
    logo: string
    website: string
    industry: string
    teamSize: string
    useCase: string
}

export type CaseStudyTestimonial = {
    author: string
    role: string
    quote: string
}

export type CaseStudySummary = {
    meta: CaseStudyMeta
    company: CaseStudyCompany
}

export type CaseStudy = CaseStudySummary & {
    testimonial?: CaseStudyTestimonial
    content: PortableBlock[]
}

export type CaseStudyNavigation = {
    previous: CaseStudySummary | null
    next: CaseStudySummary | null
}