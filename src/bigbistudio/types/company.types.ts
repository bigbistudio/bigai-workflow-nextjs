export type SocialId =
  | "linkedin"
  | "x"
  | "instagram"
  | "facebook"
  | "youtube"
  | "discord"

export type CompanyInfo = {
  name: string
  logo: {
    src: string
    alt: string
  }
  slogan: string
  copyright: string
  contact: {
    id: string
    icon: string
    label: string
    href: string
  }[]
  socials: {
    id: SocialId
    label: string
    href: string
  }[]
}