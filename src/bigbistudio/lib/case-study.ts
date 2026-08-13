// Internal
import {
    _novastream,
    _cloudscale,
    _futurelogix,
    _irongateSolutions,
    _vectorFlow,
    _luminatech,
} from "@/bigbistudio/data/case-studies"

// Types
import type { CaseStudy, CaseStudySummary, CaseStudyNavigation } from "@/bigbistudio/types/case-study.types"

/** Temporary data source → Sanity (future) */
const caseStudies = [
    _novastream,
    _cloudscale,
    _futurelogix,
    _irongateSolutions,
    _vectorFlow,
    _luminatech,
] as CaseStudy[]

// Local JSON is synchronous, but we intentionally keep the async
// Promise.all() flow to match the future Sanity implementation.

/** Published & sorting newest → oldest & summary only */
export async function getAllCaseStudies(): Promise<CaseStudySummary[]> {
    return caseStudies
        // Published only.
        .filter((study) => study.meta.status === "published")

        // Date newest → oldest.
        .sort(
            (a, b) =>
                new Date(b.meta.publishedAt).getTime() -
                new Date(a.meta.publishedAt).getTime(),
        )

        // Exclude article content.
        .map(({ meta, company }) => ({
            meta,
            company,
        }))
}

/** Find by slug & published only */
export async function getACaseStudyBySlug(
    slug: string,
): Promise<CaseStudy | null> {
    return (
        caseStudies.find(
            (study) =>
                study.meta.slug === slug &&
                study.meta.status === "published",
        ) ?? null
    )
}

/** Find by slugs & published only */
export async function getCaseStudiesBySlugs(
    slugs: string[] = [],
): Promise<CaseStudySummary[]> {
    return (
        await Promise.all(slugs.map(getACaseStudyBySlug))
    ).filter(
        (study): study is CaseStudy => study !== null,
    ).map(({ meta, company }) => ({
        meta,
        company,
    }))
}

/** @returns previous & next case studies */
export async function getCaseStudyNavigation(currentSlug: string): Promise<CaseStudyNavigation> {
    // Date newest → oldest.
    const studies = await getAllCaseStudies()

    const currentCaseStudyIndex = studies.findIndex(
        (study) => study.meta.slug === currentSlug,
    )

    return {
        previous: currentCaseStudyIndex < studies.length - 1 ? studies[currentCaseStudyIndex + 1] : null,
        next: currentCaseStudyIndex > 0 ? studies[currentCaseStudyIndex - 1] : null,
    }
}