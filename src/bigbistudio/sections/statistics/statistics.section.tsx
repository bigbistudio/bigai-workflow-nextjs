// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"

type StatisticItem = {
  value: string
  description: string
}

type StatisticProps = {
  bigText?: boolean
  title: string
  numbers: StatisticItem[]
}

export function StatisticsSection({
  bigText = false,
  title,
  numbers,
}: StatisticProps) {
  return (
    <section className="container flex flex-col gap-16 py-20">
      <span
        className={cn(
          "text-ink-tertiary! pb-3 border-b border-line-tertiary w-full",
          bigText ? "text-body-large" : "text-small",
        )}
      >
        {title}
      </span>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 pb-16 border-b border-line-translucent">
        {numbers.map((item) => (
          <div key={item.value} className="flex flex-col gap-2">
            <span
              className={cn(
                "text-[2.6rem] lg:text-[3.5rem] text-ink-primary leading-[1.2em]",
                bigText ? "font-semibold text-center" : "font-medium",
              )}
            >
              {item.value}
            </span>
            <span
              className={cn(
                "text-ink-tertiary! whitespace-pre-line",
                bigText ? "text-body-large text-center" : "text-small",
              )}
            >
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
