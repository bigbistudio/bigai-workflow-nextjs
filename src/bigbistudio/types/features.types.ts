export type FeatureDrawer = {
  title: string
  description: string
  icons: string[]
}

export type FeatureCard = {
  id: string
  title: string
  image: string
  drawerContent: FeatureDrawer
}

export type Features = {
  cards: FeatureCard[]
}
