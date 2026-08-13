export type NavigationLink = {
  label: string
  href: string
}

export type NavigationColumn = NavigationLink[]

export type HeaderNavigation = {
  links: NavigationLink[]
  cta?: NavigationLink
}

export type FooterNavigationGroup = {
  title: string
  columns: NavigationColumn[]
}

export type FooterNavigation = {
  groups: FooterNavigationGroup[]
}

export type Navigation = {
  header: HeaderNavigation
  footer: FooterNavigation
}