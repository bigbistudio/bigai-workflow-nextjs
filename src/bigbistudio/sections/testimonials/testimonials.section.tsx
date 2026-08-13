// Internal
import { TestimonialCard } from "./cards/testimonial-card"

import { testimonialsData } from "@/bigbistudio/data/testimonials"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function TestimonialsSection({ title }: SectionSettings) {
  return (
    <section className="container flex flex-col items-center gap-10 py-20">
      <span className="text-center text-ink-secondary text-xl">{title}</span>
      <div className="max-w-205 flex flex-col md:gap-4 md:block md:columns-3">
        {testimonialsData.testimonials?.map((item) => (
          <TestimonialCard
            key={item.id}
            name={item.name}
            role={item.role}
            quote={item.quote}
            avatar={item.avatar}
          />
        ))}
      </div>
    </section>
  )
}
