import { ContactView } from "@/bigbistudio/pages/contact.view"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("contact")

export default function ContactPage() {
  return <ContactView />
}
