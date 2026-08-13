import { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogDetailView } from "@/bigbistudio/pages/blog-detail.view"

import { getABlogBySlug } from "@/bigbistudio/lib/blog"
import { createMetadata } from "@/bigbistudio/lib/metadata"

type BlogDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params

  const currentBlog = await getABlogBySlug(slug)

  if (!currentBlog) {
    notFound()
  }

  return createMetadata({
    title: currentBlog.meta.title,
    description: currentBlog.meta.subtitle,
  })
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params

  const currentBlog = await getABlogBySlug(slug)

  if (!currentBlog) {
    notFound()
  }

  return <BlogDetailView currentBlog={currentBlog} />
}
