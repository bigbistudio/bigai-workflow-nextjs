// External
import Link from "next/link"

// Internal
import {
  lucideIcons,
  type LucideIconName,
} from "@/bigbistudio/utils/lucide-icons.maps"

import { Logo } from "@/bigbistudio/components/logo"
import { socialIconMap } from "@/bigbistudio/utils/component.maps"

import { companyData } from "@/bigbistudio/data/company"
import { navigationData } from "@/bigbistudio/data/navigation"

export function Footer() {
  return (
    <footer className="border-t">
      {/* Footer Main Area */}
      <div className="container flex flex-col lg:flex-row gap-10 justify-between py-16">
        {/* Company Info */}
        <div className="flex flex-col gap-5 lg:gap-8 text-sm">
          <div className="flex flex-col gap-2">
            <Logo width={88} height={30} />
            <span className="text-ink-secondary leading-relaxed">
              {companyData.slogan}
            </span>
          </div>
          <ul className="flex flex-col gap-4">
            {companyData.contact.map((item) => {
              const Icon = item.icon
                ? lucideIcons[item.icon as LucideIconName]
                : null
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-2 text-ink-tertiary hover:text-ink-primary duration-200"
                >
                  {Icon && <Icon size={16} />}
                  <Link
                    href={item.href}
                    target={item.id === "address" ? "_blank" : undefined}
                    rel={
                      item.id === "address" ? "noopener noreferrer" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Footer Quick Links */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pt-3 text-sm">
          {navigationData.footer.groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <span className="font-medium">{group.title}</span>
              <div
                className="grid gap-16"
                style={{
                  gridTemplateColumns: `repeat(${group.columns?.length ?? 1}, minmax(0, 1fr))`,
                }}
              >
                {group.columns.map((column, index) => (
                  <ul key={index} className="flex flex-col gap-6">
                    {column.map((link) => (
                      <li key={link.href}>
                        <Link
                          className="text-ink-tertiary hover:text-ink-primary transition-all duration-200"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="flex flex-col items-center gap-10 pb-20 lg:pb-5">
        <ul className="flex flex-wrap gap-6 mobile:gap-8 lg:gap-10">
          {companyData.socials.map(({ id, href, label }) => {
            const Icon = socialIconMap[id]
            return (
              <li key={id}>
                <Link
                  className="text-ink-quaternary hover:text-ink-primary transition-all duration-200"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Icon ? (
                    <Icon className="w-6 h-6 hover:scale-105 duration-200" />
                  ) : (
                    <span className="sr-only">{label}</span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Footer Bottom Area */}
        <div className="flex flex-col items-center gap-2 text-small">
          <span className="font-semibold text-ink-tertiary">
            {companyData.copyright}
          </span>
          <Link
            className="text-ink-quaternary hover:text-ink-primary tracking-wide transition-all duration-200"
            href="https://www.bigbistudio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js template by bigbistudio.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
