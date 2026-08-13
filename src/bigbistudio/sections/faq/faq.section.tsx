// Internal
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/bigbistudio/utils/shadcn-utils"
import { EyebrowIcon } from "@/bigbistudio/components/icons"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"
import type { FAQItem } from "@/bigbistudio/types/faq.types"

type FAQSectionProps = SectionSettings & {
  questions: FAQItem[]
  isSticky?: boolean
}

export function FAQSection({
  id,
  eyebrow,
  title,
  questions,
  isSticky = false,
}: FAQSectionProps) {
  return (
    <section
      id={id}
      className="container flex flex-col lg:flex-row lg:justify-between gap-2.5 py-20 scroll-mt-12 xl:scroll-mt-24"
    >
      <div className="lg:w-[40%]">
        <div
          className={cn(
            isSticky && "lg:sticky top-32",
            "flex flex-col gap-2.5",
          )}
        >
          <span className="flex items-center px-1 gap-1.5 text-sm text-ink-tertiary">
            <EyebrowIcon /> {eyebrow}
          </span>
          <h2 className="whitespace-pre-line">{title}</h2>
        </div>
      </div>
      <div className="flex-1 mt-8">
        <Accordion
          type="multiple"
          className="max-w-2xl"
          defaultValue={["notifications"]}
        >
          {questions.map((item, index) => {
            if (!item.answer) {
              return (
                <span
                  key={item.id}
                  className={cn(
                    index > 0 && "mt-10",
                    "text-body text-ink-quaternary pb-4 border-b border-line-translucent",
                  )}
                >
                  {item.title}
                </span>
              )
            }

            return (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="py-4 text-base font-normal cursor-pointer hover:no-underline lg:tracking-normal">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-base font-normal text-ink-secondary whitespace-pre-line bg-surface-secondary border border-line-translucent rounded-lg p-4 mb-4 h-fit">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}
