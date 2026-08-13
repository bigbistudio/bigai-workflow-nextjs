// Internal
import { MemberCard } from "./cards/member-card"

import { teamData } from "@/bigbistudio/data/team"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

type TeamSectionProps = SectionSettings & {
  additionalText: string
}

export function TeamSection({
  id,
  title,
  subtitle,
  additionalText,
}: TeamSectionProps) {
  return (
    <section
      id={id}
      className="container flex flex-col py-20 gap-16 scroll-mt-12 xl:scroll-mt-24"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2.5 pt-20 border-t border-line-primary">
        <h2 className="lg:whitespace-pre-line">{title}</h2>
        <div className="flex flex-col lg:justify-end lg:items-end flex-1 gap-5 max-w-140">
          <p className="text-body-large text-ink-primary">{subtitle}</p>
          <p className="text-body-large text-ink-tertiary">{additionalText}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-16 lg:gap-y-12 lg:mt-16">
        {teamData.team?.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
            link={member.link}
          />
        ))}
      </div>
    </section>
  )
}
