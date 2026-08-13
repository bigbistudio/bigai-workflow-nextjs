// Internal
import {
    cookiePolicy,
    privacyPolicy,
    termsOfService,
} from "@/bigbistudio/data/legal-pages"

// Types
import type { LegalPage } from "@/bigbistudio/types/legal.types"

/** Temporary data source → Sanity (future) */
const legalPages = [
    cookiePolicy,
    privacyPolicy,
    termsOfService,
] as LegalPage[]

// Local JSON is synchronous, but we intentionally keep the async
// Promise.all() flow to match the future Sanity implementation.

/** Get a legal page by slug */
export async function getALegalPageBySlug(
    slug: string,
): Promise<LegalPage | null> {
    return legalPages.find((page) => page.slug === slug) ?? null
}