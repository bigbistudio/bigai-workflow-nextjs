// External
import { CircleCheck } from "lucide-react"

// Internal
import { EyebrowIcon } from "@/bigbistudio/components/icons"
import { ContactForm } from "./contact-form/contact-form"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

type ContactFormSectionProps = SectionSettings & {
  note: string[]
}

export function ContactFormSection({
  id,
  eyebrow,
  title,
  note,
}: ContactFormSectionProps) {
  return (
    <section
      id={id}
      className="container flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-2.5 py-20 scroll-mt-12 xl:scroll-mt-24"
    >
      <div className="lg:w-[40%]">
        <div className="flex flex-col gap-2.5">
          <span className="flex items-center px-1 gap-1.5 text-sm text-ink-tertiary">
            <EyebrowIcon /> {eyebrow}
          </span>
          <h2 className="whitespace-pre-line">{title}</h2>
          <ul className="flex flex-col gap-3 mt-2.5">
            {note.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-small text-ink-tertiary"
              >
                <CircleCheck size={14} strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center flex-1">
        <ContactForm className="flex flex-col gap-6 p-6 border border-line-translucent rounded-lg w-full lg:w-120" />
      </div>
    </section>
  )
}
