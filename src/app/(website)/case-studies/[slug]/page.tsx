import { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyDetailView } from "@/bigbistudio/pages/case-study-detail.view"

import { getACaseStudyBySlug } from "@/bigbistudio/lib/case-study"
import { createMetadata } from "@/bigbistudio/lib/metadata"

type CaseStudyDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params

  const currentCaseStudy = await getACaseStudyBySlug(slug)

  if (!currentCaseStudy) {
    notFound()
  }

  return createMetadata({
    title: currentCaseStudy.company.name,
    description: currentCaseStudy.meta.title,
  })
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params

  const currentCaseStudy = await getACaseStudyBySlug(slug)

  if (!currentCaseStudy) {
    notFound()
  }

  return <CaseStudyDetailView currentCaseStudy={currentCaseStudy} />
}
