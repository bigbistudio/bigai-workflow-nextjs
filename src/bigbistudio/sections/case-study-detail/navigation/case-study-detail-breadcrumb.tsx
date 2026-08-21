// Internal
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { cn } from "@/bigbistudio/utils/shadcn-utils"

import { siteData } from "@/bigbistudio/data/site"

type CaseStudyDetailBreadcrumbProps = {
  companyName: string
}

export function CaseStudyDetailBreadcrumb({
  companyName,
}: CaseStudyDetailBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList className={cn("justify-center text-[13px]! text-ink-tertiary!")}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{siteData.labels.homePage}</BreadcrumbLink>
        </BreadcrumbItem>
        <span className="mx-1">/</span>
        <BreadcrumbItem>
          <BreadcrumbLink href={siteData.urls.caseStudiesPage}>
            {siteData.labels.caseStudies}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <span className="mx-1">/</span>
        <BreadcrumbItem>
          <BreadcrumbPage className={cn("text-ink-primary!")}>{companyName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
