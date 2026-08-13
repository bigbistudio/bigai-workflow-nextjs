// Internal
import { ContactCard } from "./cards/contact-card"

// Types
import type { ContactInfoCard } from "./contact.types"

type ContactInfoProps = {
    info: ContactInfoCard[]
}

export function ContactInfoSection({ info }: ContactInfoProps) {
  return (
    <div className="container py-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {info.map((item, index) => (
        <ContactCard
          key={index}
          title={item.title}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </div>
  )
}
