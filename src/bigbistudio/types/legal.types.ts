import type { PortableBlock } from "./article.types"

export type LegalPage = {
    slug: string
    title: string
    description?: string
    effectiveDate: string
    lastUpdated: string
    content: PortableBlock[]
}