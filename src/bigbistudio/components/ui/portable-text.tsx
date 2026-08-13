// External
import Image from "next/image"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"
import { EyebrowIcon } from "@/bigbistudio/components/icons"

// Types
import type { PortableBlock } from "@/bigbistudio/types/article.types"

type PortableTextProps = {
  blocks: PortableBlock[]
}

export function PortableText({ blocks }: PortableTextProps) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block._type) {
          case "eyebrow":
            return (
              <span
                key={index}
                className="flex items-center px-1 gap-1.5 text-sm text-ink-tertiary"
                style={{ marginTop: block.marginTop ?? 16 + `px` }}
              >
                <EyebrowIcon /> {block.text}
              </span>
            )

          case "heading":
            switch (block.level) {
              case 1:
                return (
                  <h1
                    key={index}
                    className="text-h1-article lg:whitespace-pre-line"
                    style={{ marginTop: block.marginTop ?? 40 + `px` }}
                  >
                    {block.text}
                  </h1>
                )
              case 2:
                return (
                  <h2
                    key={index}
                    className="text-h2-article lg:whitespace-pre-line"
                    style={{ marginTop: block.marginTop ?? 40 + `px` }}
                  >
                    {block.text}
                  </h2>
                )
              case 3:
                return (
                  <h3
                    key={index}
                    className="lg:whitespace-pre-line"
                    style={{ marginTop: block.marginTop ?? 40 + `px` }}
                  >
                    {block.text}
                  </h3>
                )
            }

          case "paragraph":
            return (
              <p
                key={index}
                className="text-body-article text-ink-secondary whitespace-pre-line"
                style={{ marginTop: block.marginTop ?? 16 + `px` }}
              >
                {block.text}
              </p>
            )

          case "image":
            return (
              <div key={index} className="flex flex-col gap-4 my-6">
                <Image
                  src={block.src}
                  alt={block.alt ?? ""}
                  width={block.width ?? 600}
                  height={block.height ?? 360}
                  style={{ borderRadius: block.rounded ?? 0 + `px` }}
                />
                {block.alt && (
                  <figcaption className="text-small text-ink-tertiary text-center italic">
                    {block.alt}
                  </figcaption>
                )}
              </div>
            )

          case "list":
            return block.style === "bullet" ? (
              <ul
                key={index}
                className="list-outside list-disc text-ink-secondary ml-4"
                style={{ marginTop: block.marginTop ?? 16 + `px` }}
              >
                {block.items.map((item, _index) => (
                  <li key={_index} className="mt-1">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <ol
                key={index}
                className="list-outside list-decimal text-ink-secondary ml-4 mt-4"
              >
                {block.items.map((item, _index) => (
                  <li key={_index} className="mt-1">
                    {item}
                  </li>
                ))}
              </ol>
            )

          case "card":
            return (
              <div
                key={index}
                className="flex flex-col lg:grid gap-4 mb-2"
                style={{
                  gridTemplateColumns: `repeat(${block.numberOfCols ?? 2}, minmax(0, 1fr))`,
                  marginTop: block.marginTop ?? 40 + `px`,
                }}
              >
                {block.items.map((block, _index) => (
                  <div
                    key={_index}
                    className={cn(
                      "flex flex-col gap-4 rounded-xl border border-line-translucent bg-surface-secondary",
                      block.style === "medium"
                        ? "p-4"
                        : "items-center text-center px-4 py-6",
                    )}
                  >
                    <span
                      className={cn(
                        block.style === "medium"
                          ? "text-body-large"
                          : "text-[2rem] leading-8 font-semibold text-ink-primary",
                      )}
                    >
                      {block.aboveText}
                    </span>
                    <span className="text-body text-ink-tertiary">
                      {block.belowText}
                    </span>
                  </div>
                ))}
              </div>
            )

          case "spacer":
            return (
              <div
                key={index}
                style={{
                  height: block.size ?? 32,
                }}
              />
            )
        }
      })}
    </>
  )
}
